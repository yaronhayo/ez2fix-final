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

// Embedded Location Data to avoid TS parsing issues
const locations = [
    {
        city: 'Newark',
        heroImage: '/images/cities/newark.jpg',
        localContent: 'historic Victorian homes in Forest Hill to modern apartments in the Ironbound',
        landmarks: ['Prudential Center', 'Branch Brook Park']
    },
    {
        city: 'Jersey City',
        heroImage: '/images/cities/jersey-city.jpg',
        localContent: 'high-rise parking structures downtown to traditional homes in The Heights',
        landmarks: ['Liberty State Park', 'Journal Square']
    },
    {
        city: 'Paterson',
        heroImage: '/images/cities/paterson.jpg',
        localContent: 'historic mill buildings and residential neighborhoods',
        landmarks: ['Great Falls', 'Paterson Museum']
    },
    {
        city: 'Elizabeth',
        heroImage: '/images/cities/elizabeth.jpg',
        localContent: 'mix of residential and commercial properties',
        landmarks: ['Jersey Gardens Mall', 'Warinanco Park']
    },
    {
        city: 'Clifton',
        heroImage: '/images/cities/clifton.jpg',
        localContent: 'suburban homes, ranch homes, colonials, and split-levels',
        landmarks: ['Main Avenue', 'Clifton Commons']
    },
    {
        city: 'Hackensack',
        heroImage: '/images/cities/hackensack.jpg',
        localContent: 'historic and modern properties, custom wood doors',
        landmarks: ['Bergen County Courthouse', 'The Shops at Riverside']
    },
    {
        city: 'Passaic',
        heroImage: '/images/cities/passaic.jpg',
        localContent: 'residential neighborhoods, single and multi-family homes',
        landmarks: ['Passaic General Hospital', 'Third Ward Park']
    },
    {
        city: 'Bayonne',
        heroImage: '/images/cities/bayonne.jpg',
        localContent: 'peninsula location, coastal properties',
        landmarks: ['Bayonne Bridge', 'Harbor']
    },
    {
        city: 'Union City',
        heroImage: '/images/cities/union-city.jpg',
        localContent: 'dense urban environment, multi-family properties',
        landmarks: ['Bergenline Avenue', 'Transfer Station']
    },
    {
        city: 'East Orange',
        heroImage: '/images/cities/east-orange.jpg',
        localContent: 'established neighborhoods, single-family homes and multi-unit properties',
        landmarks: ['Brick Church', 'Upsala College Campus']
    },
    {
        city: 'Montclair',
        heroImage: '/images/cities/montclair.jpg',
        localContent: 'upscale homes, custom garage doors, carriage house styles',
        landmarks: ['Montclair Art Museum', 'Watchung Plaza']
    },
    {
        city: 'Fair Lawn',
        heroImage: '/images/cities/fair-lawn.jpg',
        localContent: 'suburban character, attached garages',
        landmarks: ['Radburn', 'Memorial Park']
    },
    {
        city: 'Cedar Grove',
        heroImage: '/images/cities/cedar-grove.jpg',
        localContent: 'attached two-car garages, suburban homes',
        landmarks: ['Pompton Avenue', 'Cedar Grove Park']
    },
    {
        city: 'Little Falls',
        heroImage: '/images/cities/little-falls.jpg',
        localContent: 'residential neighborhoods, dependable garage door service',
        landmarks: ['Great Notch', 'Peckman River']
    },
    {
        city: 'West Caldwell',
        heroImage: '/images/cities/west-caldwell.jpg',
        localContent: 'traditional garage configurations, standard sectional doors',
        landmarks: ['Westville', 'Francisco Avenue']
    },
    {
        city: 'North Caldwell',
        heroImage: '/images/cities/north-caldwell.jpg',
        localContent: 'upscale properties, custom wood doors, decorative hardware',
        landmarks: ['Gould Avenue', 'Old Bloomfield Avenue']
    }
];

const IMAGES_TO_GENERATE = locations.map(loc => {
    const landmark = loc.landmarks && loc.landmarks.length > 0 ? loc.landmarks[0] : `downtown ${loc.city}`;

    return {
        path: `public${loc.heroImage}`,
        prompt: `High-end commercial photography of ${landmark} in ${loc.city}, New Jersey. The image captures the iconic local atmosphere of the area. Shot on a Canon EOS R5 with a 24-70mm f/2.8L II USM lens for sharp, professional quality. 8k resolution, incredibly detailed. Optimal daylight conditions, clear blue sky, soft natural lighting. Photorealistic, cinematic composition, no text, no AI artifacts.`
    };
});

async function generateImage(item) {
    const fullPath = path.join(process.cwd(), item.path);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Always regenerate to ensure high quality as requested
    console.log(`🎨 Generating ${item.path}...`);

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
    console.log("🚀 Starting City Image Generation Script...");
    console.log(`Generating ${IMAGES_TO_GENERATE.length} images...`);

    for (const item of IMAGES_TO_GENERATE) {
        await generateImage(item);
    }
    console.log("✨ Done!");
}

main();
