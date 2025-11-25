import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

// Manually read .env files
const envLocalPath = path.join(process.cwd(), ".env.local");
const envPath = path.join(process.cwd(), ".env");

function getApiKeys(filePath) {
    if (fs.existsSync(filePath)) {
        const envContent = fs.readFileSync(filePath, "utf-8");
        const matches = [...envContent.matchAll(/NANOBANANA_API_KEY=(.*)/g)];
        return matches.map((m) => m[1].trim());
    }
    return [];
}

const apiKeys = [...getApiKeys(envLocalPath), ...getApiKeys(envPath)];

if (apiKeys.length === 0) {
    console.error("❌ NANOBANANA_API_KEY not found in .env or .env.local");
    process.exit(1);
}

console.log(`Found ${apiKeys.length} API keys. Trying them sequentially...`);

const IMAGES_TO_GENERATE = [
    {
        path: "public/images/blog/welcome-hero.jpg",
        prompt: "A friendly garage door technician in a professional black polo shirt standing next to a clean white service van. He is smiling and holding a tablet. The van is plain white with no text or logos. Background is a nice suburban driveway. Professional and trustworthy. High quality photography, photorealistic.",
    },
];

async function generateImage(item) {
    const fullPath = path.join(process.cwd(), item.path);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Force regenerate if it exists (since user asked for "most realistic")
    if (fs.existsSync(fullPath)) {
        console.log(`♻️  Regenerating ${item.path}...`);
    } else {
        console.log(`🎨 Generating ${item.path}...`);
    }

    let success = false;
    for (const apiKey of apiKeys) {
        try {
            const ai = new GoogleGenAI({ apiKey });
            const config = {
                responseModalities: ["IMAGE", "TEXT"],
                imageConfig: {
                    imageSize: "1K",
                },
            };
            const model = "gemini-3-pro-image-preview";
            const contents = [
                {
                    role: "user",
                    parts: [{ text: item.prompt }],
                },
            ];

            const response = await ai.models.generateContentStream({
                model,
                config,
                contents,
            });

            for await (const chunk of response) {
                if (
                    !chunk.candidates ||
                    !chunk.candidates[0].content ||
                    !chunk.candidates[0].content.parts
                ) {
                    continue;
                }
                if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
                    const inlineData = chunk.candidates[0].content.parts[0].inlineData;
                    const buffer = Buffer.from(inlineData.data || "", "base64");
                    fs.writeFileSync(fullPath, buffer);
                    console.log(`✅ Saved ${item.path}`);
                    success = true;
                    break; // Break inner loop (chunks)
                }
            }

            if (success) break; // Break key loop
        } catch (error) {
            console.warn(
                `⚠️ Key ending in ...${apiKey.slice(-4)} failed:`,
                error.message
            );
        }
    }

    if (!success) {
        console.error(`❌ Failed to generate ${item.path} with any available key.`);
    }
}

async function main() {
    console.log("🚀 Starting Image Generation Script (Full Batch)...");
    for (const item of IMAGES_TO_GENERATE) {
        await generateImage(item);
    }
    console.log("✨ Done!");
}

main();
