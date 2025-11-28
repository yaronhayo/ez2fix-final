const PROMOTIONS = [
  {
    id: "free-estimates",
    title: "Free On-Site Estimates",
    description: "We come to you to diagnose the issue and provide a transparent quote before any work begins.",
    badgeText: "Free Estimates",
    variant: "gold",
    active: true,
    locations: ["hero", "service-page", "location-page", "footer", "booking"],
    priority: 100
  },
  {
    id: "senior-discount",
    title: "10% Senior Citizen Discount",
    description: "Valid for customers 65+ with ID. Cannot be combined with other offers.",
    badgeText: "10% Senior Discount",
    variant: "white",
    active: true,
    locations: ["hero", "service-page", "location-page", "footer", "booking"],
    priority: 90
  },
  {
    id: "door-installation-off",
    title: "$200 Off New Garage Door Installation",
    description: "Valid on new garage door installations over $1,000. Cannot be combined with other offers.",
    badgeText: "$200 Off Installation",
    variant: "gold",
    active: true,
    locations: ["hero", "service-page", "location-page", "booking"],
    services: ["door-installation"],
    priority: 95
  },
  {
    id: "same-day-service",
    title: "Same Day Service Available",
    description: "Subject to availability. Call early to secure same-day appointment.",
    badgeText: "Same Day Service",
    variant: "white",
    active: true,
    locations: ["hero", "service-page", "location-page", "booking"],
    priority: 80
  }
];
function getPromotionsForLocation(location, serviceSlug) {
  return PROMOTIONS.filter((promo) => {
    if (!promo.active) return false;
    if (!promo.locations.includes(location)) return false;
    if (serviceSlug && promo.services && !promo.services.includes(serviceSlug)) {
      return false;
    }
    if (promo.services && !serviceSlug && location !== "hero" && location !== "footer") {
      return false;
    }
    return true;
  }).sort((a, b) => b.priority - a.priority);
}
export {
  getPromotionsForLocation as g
};
