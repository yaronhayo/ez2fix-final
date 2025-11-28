const reviews = [
  {
    id: "1",
    author: "Michael R.",
    city: "Newark",
    rating: 5,
    date: "2024-01-15",
    relativeTime: "2 months ago",
    text: "Outstanding service! My garage door spring broke at 7pm and they responded promptly to my emergency. The technician was professional, explained everything clearly, and had my door working smoothly. The 10-year warranty gives me peace of mind. Highly recommend Ez2Fix!",
    service: "Spring Repair"
  },
  {
    id: "2",
    author: "Sarah M.",
    city: "Jersey City",
    rating: 5,
    date: "2024-01-10",
    relativeTime: "2 months ago",
    text: "I needed a new garage door opener and Ez2Fix made the process so easy. They helped me choose the right LiftMaster model with Wi-Fi, installed it the same day, and showed me how to use all the features. The technician was courteous, clean, and efficient. The price was fair and transparent. Very satisfied!",
    service: "Opener Installation"
  },
  {
    id: "3",
    author: "James P.",
    city: "Paterson",
    rating: 5,
    date: "2024-01-05",
    relativeTime: "2 months ago",
    text: "Ez2Fix replaced all the panels on my garage door after an accident. They matched the color precisely and you can't even tell which panels are new. The work was done promptly and professionally. Their pricing was very competitive compared to other quotes I received. Will definitely use them again!",
    service: "Panel Replacement"
  },
  {
    id: "4",
    author: "Linda K.",
    city: "Clifton",
    rating: 5,
    date: "2023-12-28",
    relativeTime: "3 months ago",
    text: "My garage door was making terrible grinding noises. The technician from Ez2Fix diagnosed misaligned tracks and worn rollers. He fixed both issues, lubricated everything, and now my door operates whisper-quiet. The service was thorough and reasonably priced. I'm very impressed with their professionalism.",
    service: "Track Repair"
  },
  {
    id: "5",
    author: "Robert T.",
    city: "Elizabeth",
    rating: 5,
    date: "2023-12-20",
    relativeTime: "3 months ago",
    text: "We had a complete garage door installation done by Ez2Fix. From helping us choose the ideal style to match our home, to the professional installation, everything was excellent. The new insulated door has already reduced our energy bills and looks amazing. Worth every penny!",
    service: "Door Installation"
  },
  {
    id: "6",
    author: "David L.",
    city: "Passaic",
    rating: 5,
    date: "2023-12-15",
    relativeTime: "3 months ago",
    text: "Called Ez2Fix when my garage door cable snapped. They came out the same day, replaced both cables, and adjusted the springs. The technician was knowledgeable and took time to explain the issue. Excellent work at a fair price. I will definitely call them again if I need any garage door work.",
    service: "Cable Repair"
  },
  {
    id: "7",
    author: "Jennifer S.",
    city: "Bloomfield",
    rating: 5,
    date: "2023-12-10",
    relativeTime: "3 months ago",
    text: "Ez2Fix installed a new garage door for us and we are thrilled with the results. The door is beautiful, well-insulated, and operates smoothly. The installation crew was prompt, professional, and left everything clean. Great experience from start to finish!",
    service: "Door Installation"
  },
  {
    id: "8",
    author: "Mark W.",
    city: "Union City",
    rating: 5,
    date: "2023-12-05",
    relativeTime: "3 months ago",
    text: "Had an emergency late at night when my garage door got stuck halfway. Ez2Fix answered promptly and sent a technician within an hour. He fixed the broken spring and tested everything thoroughly. Impressed by their prompt response and quality work. Highly recommended!",
    service: "Emergency Repair"
  },
  {
    id: "9",
    author: "Patricia H.",
    city: "Montclair",
    rating: 5,
    date: "2023-11-28",
    relativeTime: "4 months ago",
    text: "Excellent service! My garage door opener stopped working and Ez2Fix came out the next day. The technician diagnosed the issue promptly, replaced the circuit board, and had everything working in under an hour. Very professional and reasonably priced. I would definitely use them again.",
    service: "Opener Repair"
  },
  {
    id: "10",
    author: "Thomas B.",
    city: "Hackensack",
    rating: 5,
    date: "2023-11-20",
    relativeTime: "4 months ago",
    text: "Ez2Fix replaced two damaged panels on my garage door. The color match was precise and you can't tell which panels are new. The technician was professional, efficient, and cleaned up everything when done. Great service at a fair price. Highly recommend!",
    service: "Panel Replacement"
  },
  {
    id: "11",
    author: "Karen M.",
    city: "East Orange",
    rating: 5,
    date: "2023-11-15",
    relativeTime: "4 months ago",
    text: "Outstanding experience with Ez2Fix! They installed a smart garage door opener with WiFi connectivity. The technician explained all the features, set up my phone app, and made sure everything worked correctly before leaving. Love being able to control my garage door from anywhere!",
    service: "Opener Installation"
  },
  {
    id: "12",
    author: "Steven R.",
    city: "Bayonne",
    rating: 5,
    date: "2023-11-10",
    relativeTime: "4 months ago",
    text: "My garage door spring broke and I called Ez2Fix. They came out the same day, replaced both springs with high-cycle ones, and adjusted the door balance. The technician was friendly, professional, and the price was very fair. My door operates smoothly now!",
    service: "Spring Repair"
  },
  {
    id: "13",
    author: "Michelle D.",
    city: "Hoboken",
    rating: 5,
    date: "2023-11-05",
    relativeTime: "4 months ago",
    text: "Ez2Fix repaired my garage door tracks that were bent from an accident. They straightened the tracks, replaced the damaged rollers, and adjusted everything. The door now opens smoothly and quietly. Very satisfied with their work and professionalism!",
    service: "Track Repair"
  },
  {
    id: "14",
    author: "Christopher J.",
    city: "Nutley",
    rating: 5,
    date: "2023-10-28",
    relativeTime: "5 months ago",
    text: "Had Ez2Fix install a brand new garage door and opener. They helped me pick the ideal style and color to match my house. The installation was seamless and the crew cleaned up everything. The price was competitive and the quality is outstanding. Highly recommend!",
    service: "Door Installation"
  },
  {
    id: "15",
    author: "Angela T.",
    city: "Kearny",
    rating: 5,
    date: "2023-10-20",
    relativeTime: "5 months ago",
    text: "Called Ez2Fix for emergency repair when my garage door wouldn't close. They came out promptly, diagnosed a sensor issue, and fixed it on the spot. The technician was professional and explained everything clearly. Great service and reasonable pricing!",
    service: "Emergency Repair"
  },
  {
    id: "16",
    author: "Daniel K.",
    city: "West Orange",
    rating: 5,
    date: "2023-10-15",
    relativeTime: "5 months ago",
    text: "Ez2Fix replaced my old noisy garage door opener with a new quiet belt-drive model. What a difference! The installation was professional, they programmed all my remotes, and showed me how to use the new features. Very happy with the service!",
    service: "Opener Installation"
  },
  {
    id: "17",
    author: "Barbara S.",
    city: "Belleville",
    rating: 5,
    date: "2023-10-10",
    relativeTime: "5 months ago",
    text: "My garage door cable broke and Ez2Fix responded promptly. They replaced both cables, checked the springs, and lubricated all moving parts. The technician was courteous and professional. The door works great now and the price was fair!",
    service: "Cable Repair"
  },
  {
    id: "18",
    author: "Richard P.",
    city: "Secaucus",
    rating: 5,
    date: "2023-10-05",
    relativeTime: "5 months ago",
    text: "Had several damaged panels on my garage door from a storm. Ez2Fix replaced them all with precise color matching. The work was done efficiently and professionally. You can't tell which panels are new. Very impressed with their quality and service!",
    service: "Panel Replacement"
  },
  {
    id: "19",
    author: "Susan L.",
    city: "Irvington",
    rating: 5,
    date: "2023-09-28",
    relativeTime: "6 months ago",
    text: "Ez2Fix repaired my garage door tracks and rollers. The door was binding badly but now it operates smoothly and quietly. The technician was professional, cleaned up everything, and the price was very reasonable. Excellent service!",
    service: "Track Repair"
  },
  {
    id: "20",
    author: "William H.",
    city: "Lyndhurst",
    rating: 5,
    date: "2023-09-20",
    relativeTime: "6 months ago",
    text: "Outstanding work by Ez2Fix! They installed a beautiful new insulated garage door with windows. The installation crew was professional, efficient, and cleaned up thoroughly. The door looks amazing and has improved our home's curb appeal significantly!",
    service: "Door Installation"
  },
  {
    id: "21",
    author: "Jessica M.",
    city: "Garfield",
    rating: 5,
    date: "2023-09-15",
    relativeTime: "6 months ago",
    text: "Called Ez2Fix for a broken spring emergency. They came out the same day, replaced both springs with high-quality ones, and adjusted the door precisely. The technician was professional and the warranty is excellent. Very satisfied with their service!",
    service: "Spring Repair"
  },
  {
    id: "22",
    author: "Kevin R.",
    city: "Lodi",
    rating: 5,
    date: "2023-09-10",
    relativeTime: "6 months ago",
    text: "Ez2Fix installed a new LiftMaster opener with battery backup. The technician was knowledgeable, showed me all the features, and set up the MyQ app on my phone. Installation was clean and professional. Love the new opener!",
    service: "Opener Installation"
  },
  {
    id: "23",
    author: "Nancy W.",
    city: "Rutherford",
    rating: 5,
    date: "2023-09-05",
    relativeTime: "6 months ago",
    text: "Had an emergency late evening when my garage door got stuck. Ez2Fix sent a technician promptly who fixed the broken cable and inspected everything else. Very professional service and fair pricing. I highly recommend Ez2Fix!",
    service: "Emergency Repair"
  },
  {
    id: "24",
    author: "Joseph C.",
    city: "Caldwell",
    rating: 5,
    date: "2023-08-28",
    relativeTime: "7 months ago",
    text: "Ez2Fix repaired my garage door opener that stopped working. The technician diagnosed a bad gear assembly, replaced it, and adjusted the door opener. Everything works great now. Professional service at a reasonable price. Very happy!",
    service: "Opener Repair"
  }
];
function getAggregateRating() {
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const avgRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : "5.0";
  return {
    "@type": "AggregateRating",
    ratingValue: avgRating,
    reviewCount: reviews.length,
    bestRating: "5",
    worstRating: "1"
  };
}
export {
  getAggregateRating as g,
  reviews as r
};
