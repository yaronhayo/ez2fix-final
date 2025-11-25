import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

// Manually read .env files
const envLocalPath = path.join(process.cwd(), ".env.local");
const envPath = path.join(process.cwd(), ".env");

function getApiKeys(filePath) {
    if (fs.existsSync(filePath)) {
        const envContent = fs.readFileSync(filePath, "utf-8");
        const matches = [...envContent.matchAll(/GEMINI_API_KEY=(.*)/g)];
        const matches2 = [...envContent.matchAll(/GOOGLE_API_KEY=(.*)/g)];
        const matches3 = [...envContent.matchAll(/NANOBANANA_API_KEY=(.*)/g)];
        return [...matches, ...matches2, ...matches3].map((m) => m[1].trim());
    }
    return [];
}

const apiKeys = [...getApiKeys(envLocalPath), ...getApiKeys(envPath)];

if (apiKeys.length === 0) {
    console.error("❌ GEMINI_API_KEY or GOOGLE_API_KEY not found in .env or .env.local");
    process.exit(1);
}

console.log(`Found ${apiKeys.length} API keys. Using the first one...`);

// Reference Images Directory
const REF_IMAGES_DIR = '/Users/yaronhayo/.gemini/antigravity/brain/d574fbcf-8c45-4ec7-95dc-3b4397330319';

// Map specific uploaded images to variables for clarity
const TRUCK_IMAGE = path.join(REF_IMAGES_DIR, 'uploaded_image_1_1764071132907.jpg'); // Grey truck side view
const TECH_ON_LADDER = path.join(REF_IMAGES_DIR, 'uploaded_image_0_1764071578222.jpg'); // Tech on ladder
const TOOLS_IMAGE = path.join(REF_IMAGES_DIR, 'uploaded_image_4_1764071578222.jpg'); // Springs in truck

function fileToPart(filePath, mimeType = "image/jpeg") {
    if (!fs.existsSync(filePath)) {
        console.warn(`⚠️ Reference image not found: ${filePath}`);
        return null;
    }
    return {
        inlineData: {
            data: fs.readFileSync(filePath).toString("base64"),
            mimeType
        },
    };
}

const SERVICES_TO_GENERATE = [
    {
        name: 'spring-repair-banner',
        path: 'public/images/services/spring-repair-banner.png',
        prompt: `A ultra-wide panoramic cinematic shot of a residential garage door spring repair, designed for a website hero banner.
Scene: Inside a spacious 2-car garage, looking out towards the bright driveway.
Composition: Wide angle shot. The technicians are in the middle distance, not too close to the camera. There is plenty of space on the left and right.
Action: Two professional technicians (wearing black Ez2Fix shirts) are working on the header above the door.
- Tech 1: On a ladder, winding the spring.
- Tech 2: Assisting from below.
Context: The grey Ez2Fix truck is visible in the background.
Details: Realistic tools.
Style: Commercial photography, 16:9 aspect ratio (but composed for 21:9 cropping), 8k, high resolution, perfect for a header background.`,
        refImages: [TRUCK_IMAGE, TECH_ON_LADDER]
    }
];

async function generateImage(item) {
    const fullPath = path.join(process.cwd(), item.path);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    console.log(`🎨 Generating ${item.path}...`);

    let success = false;
    for (const apiKey of apiKeys) {
        try {
            const ai = new GoogleGenAI({ apiKey });
            const config = {
                responseModalities: ["IMAGE"], // Only asking for image
                imageConfig: {
                    imageSize: "1K", // Or "2K" if supported
                    aspectRatio: "16:9",
                },
            };
            const model = "gemini-3-pro-image-preview"; // Trying the model from the other script

            // Construct parts: Prompt + Reference Images
            const parts = [{ text: item.prompt }];

            // Add reference images if they exist
            if (item.refImages) {
                item.refImages.forEach(img => {
                    const part = fileToPart(img);
                    if (part) parts.push(part);
                });
            }

            const contents = [
                {
                    role: "user",
                    parts: parts,
                },
            ];

            const response = await ai.models.generateContentStream({
                model,
                config,
                contents,
            });

            for await (const chunk of response) {
                if (chunk.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
                    const inlineData = chunk.candidates[0].content.parts[0].inlineData;
                    const buffer = Buffer.from(inlineData.data || "", "base64");
                    fs.writeFileSync(fullPath, buffer);
                    console.log(`✅ Saved ${item.path}`);
                    success = true;
                    break;
                }
            }

            if (success) break;
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
    console.log("🚀 Starting Service Image Generation Script...");
    console.log(`Generating ${SERVICES_TO_GENERATE.length} images...`);

    for (const item of SERVICES_TO_GENERATE) {
        await generateImage(item);
    }
    console.log("✨ Done!");
}

main();
