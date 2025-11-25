export interface CategoryData {
    id: string;
    title: string;
    description: string;
    image: string;
}

export const categories: Record<string, CategoryData> = {
    "repair-guides": {
        id: "repair-guides",
        title: "Repair Guides",
        description: "Step-by-step guides for diagnosing and fixing common garage door issues.",
        image: "/images/blog/categories/repair-guides.webp"
    },
    "maintenance-tips": {
        id: "maintenance-tips",
        title: "Maintenance Tips",
        description: "Expert advice on how to keep your garage door running smoothly and extend its lifespan.",
        image: "/images/blog/categories/maintenance-tips.webp"
    },
    "installation-guides": {
        id: "installation-guides",
        title: "Installation Guides",
        description: "Everything you need to know about buying and installing new garage doors and openers.",
        image: "/images/blog/categories/installation-guides.webp"
    },
    "company-news": {
        id: "company-news",
        title: "Company News",
        description: "Updates, announcements, and stories from the Ez2Fix team.",
        image: "/images/blog/categories/company-news.webp"
    }
};
