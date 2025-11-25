import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as addAttribute, a as renderTemplate } from './astro/server_Dtj6r08Z.mjs';
import 'kleur/colors';
import { s as siteConfig } from './site.config_B-PzYkwI.mjs';
import { b as $$Icon, a as $$Button } from './Footer_CgO5adBe.mjs';

const locations = [
  // Critical Priority Cities
  {
    id: "newark",
    slug: "newark-nj",
    city: "Newark",
    county: "Essex County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07101", "07102", "07103", "07104", "07105", "07106", "07107", "07108", "07112", "07114"],
    population: 311549,
    priority: "critical",
    neighborhoods: ["Downtown Newark", "Ironbound", "Forest Hill", "North Ward", "West Ward", "South Ward"],
    customersServed: 2100,
    nearbyCities: ["elizabeth", "jersey-city", "east-orange", "irvington", "harrison", "kearny"],
    metaTitle: "Garage Door Repair Newark NJ | 24/7 Service | Ez2Fix",
    metaDescription: "Garage Door repair & installation in Newark, NJ. Serving all Newark ZIP codes. Same-day service. Licensed in Essex County. Call (201) 554-6769.",
    heroImage: "/images/cities/newark.jpg",
    localContent: "Newark's diverse architectural landscape ranges from the historic Victorian mansions of Forest Hill to the dense, multi-family row homes of the Ironbound. We understand the specific security and durability needs of urban garage doors in Newark. Our technicians are experts in retrofitting modern openers into older garages, repairing heavy-duty steel doors for commercial properties near the airport and seaport, and providing space-saving roll-up solutions for tight driveways in the North and West Wards.",
    coordinates: { lat: 40.7357, lng: -74.1724 },
    heroTitle: "Expert Garage Door Service in Newark, NJ",
    heroSubtitle: "Trusted by 2,100+ Newark homeowners. Same-day service across all 10 ZIP codes.",
    commonServices: ["Spring Replacement", "Opener Repair", "Emergency Repairs", "Commercial Doors", "Multi-Unit Installation"],
    landmarks: ["Prudential Center", "Newark Penn Station", "Branch Brook Park", "NJPAC", "Newark Liberty International Airport"]
  },
  {
    id: "jersey-city",
    slug: "jersey-city-nj",
    city: "Jersey City",
    county: "Hudson County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07302", "07304", "07305", "07306", "07307", "07310"],
    population: 292449,
    priority: "critical",
    neighborhoods: ["Downtown", "The Heights", "Journal Square", "Greenville", "Bergen-Lafayette", "The Waterfront"],
    customersServed: 1850,
    nearbyCities: ["hoboken", "bayonne", "union-city", "newark", "kearny", "north-bergen"],
    metaTitle: "Garage Door Repair Jersey City NJ | Same-Day Service",
    metaDescription: "Garage door repair in Jersey City, NJ. Serving all neighborhoods & ZIP codes. Licensed in Hudson County. 24/7 service. Call (201) 554-6769.",
    heroImage: "/images/cities/jersey-city.jpg",
    localContent: "Jersey City presents a unique mix of high-rise luxury living and traditional residential neighborhoods. In The Heights and Journal Square, we frequently service detached garages with carriage-style doors that match the historic charm. Downtown and along the Waterfront, our team specializes in high-cycle commercial doors for parking structures and secure entry gates for condo associations. We are well-versed in the specific fire codes and safety regulations required for multi-tenant buildings in Hudson County.",
    coordinates: { lat: 40.7178, lng: -74.0431 },
    heroTitle: "Jersey City's Trusted Garage Door Experts",
    heroSubtitle: "Serving Downtown, The Heights, and all Jersey City neighborhoods with prompt, reliable service.",
    commonServices: ["Parking Structure Doors", "High-Rise Service", "Opener Installation", "Spring Repair", "Rolling Doors"],
    landmarks: ["Liberty State Park", "Grove Street PATH", "Journal Square", "Newport Centre", "Liberty Science Center"]
  },
  {
    id: "paterson",
    slug: "paterson-nj",
    city: "Paterson",
    county: "Passaic County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07501", "07502", "07503", "07504", "07505", "07514", "07522", "07524"],
    population: 159732,
    priority: "critical",
    neighborhoods: ["Downtown", "Eastside", "Northside", "Southside", "Wrigley Park", "Peoples Park"],
    customersServed: 1420,
    nearbyCities: ["clifton", "passaic", "fair-lawn", "totowa", "haledon", "prospect-park"],
    metaTitle: "Garage Door Repair Paterson NJ | Licensed & Insured",
    metaDescription: "Expert garage door repair in Paterson, NJ. All 8 ZIP codes served. Same-day service available. Passaic County licensed. Call (201) 554-6769.",
    heroImage: "/images/cities/paterson.jpg",
    localContent: `Paterson, the "Silk City," features a robust mix of industrial heritage and residential growth. We provide specialized service for the heavy industrial rolling steel doors found in the historic mill district and commercial warehouses. For homeowners in the Eastside Park historic district, we offer custom wood carriage doors that comply with preservation guidelines while offering modern insulation and security. Our team is equipped to handle the heavy-duty requirements of Paterson's diverse building stock.`,
    coordinates: { lat: 40.9168, lng: -74.1718 },
    heroTitle: "Paterson Garage Door Repair & Installation",
    heroSubtitle: "Serving all 8 Paterson ZIP codes with expert residential and commercial door service.",
    commonServices: ["Commercial Overhead Doors", "Spring Replacement", "Historic Home Service", "Opener Installation", "Custom Doors"],
    landmarks: ["Great Falls National Historical Park", "Paterson Museum", "Eastside Park", "Hinchliffe Stadium", "Lambert Castle"]
  },
  {
    id: "elizabeth",
    slug: "elizabeth-nj",
    city: "Elizabeth",
    county: "Union County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07201", "07202", "07206", "07208"],
    population: 137298,
    priority: "critical",
    neighborhoods: ["Midtown", "Elmora", "Westminster", "Bayway", "North Elizabeth", "South Broad Street"],
    customersServed: 980,
    nearbyCities: ["newark", "linden", "roselle", "hillside", "union", "rahway"],
    metaTitle: "Garage Door Repair Elizabeth NJ | Union County Service",
    metaDescription: "Garage door repair & installation in Elizabeth, NJ. Serving all Union County. Same-day service. Licensed technicians. Call (201) 554-6769.",
    heroImage: "/images/cities/elizabeth.jpg",
    localContent: "As a major transportation hub, Elizabeth requires robust garage door solutions for both logistics businesses and residential communities. In the Elmora and Westminster sections, we install high-efficiency insulated doors to combat noise and weather. For businesses near the port and Jersey Gardens, we service high-speed commercial doors and loading dock equipment. Our technicians are certified to work on all major commercial door brands found throughout Union County.",
    coordinates: { lat: 40.664, lng: -74.2107 },
    heroTitle: "Elizabeth's Trusted Garage Door Service",
    heroSubtitle: "Union County's trusted garage door experts serving residential and commercial properties.",
    commonServices: ["Warehouse Doors", "Multi-Family Service", "Spring Repair", "Commercial Installation", "Emergency Service"],
    landmarks: ["The Mills at Jersey Gardens", "Warinanco Park", "Elizabeth Public Library", "Boxwood Hall"]
  },
  {
    id: "clifton",
    slug: "clifton-nj",
    city: "Clifton",
    county: "Passaic County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07011", "07012", "07013", "07014"],
    population: 90296,
    priority: "critical",
    neighborhoods: ["Main Avenue", "Athenia", "Botany Village", "Richfield", "Dutch Hill", "Allwood"],
    customersServed: 1250,
    nearbyCities: ["paterson", "passaic", "nutley", "montclair", "bloomfield", "garfield"],
    metaTitle: "Garage Door Repair Clifton NJ | Passaic County",
    metaDescription: "Professional garage door repair in Clifton, NJ. All neighborhoods served. Same-day service. 10-year warranty. Call (201) 554-6769.",
    heroImage: "/images/cities/clifton.jpg",
    localContent: "Clifton is characterized by its distinct neighborhoods, from the quiet, tree-lined streets of Allwood to the bustling commercial corridors of Main Avenue. We frequently service the Cape Cods and split-level homes common in Richfield and Dutch Hill, often upgrading original hardware to modern, quiet belt-drive openers. We also provide rapid response for businesses in the Clifton Commons area, ensuring their loading docks and security gates remain operational.",
    coordinates: { lat: 40.8584, lng: -74.1638 },
    heroTitle: "Clifton's Trusted Garage Door Company",
    heroSubtitle: "1,250+ satisfied customers in Clifton. Expert service for all home styles and garage types.",
    commonServices: ["Spring Replacement", "Opener Installation", "Residential Repairs", "Insulated Doors", "Belt Drive Openers"],
    landmarks: ["Clifton Commons", "Main Avenue", "Weasel Brook Park", "Clifton Arts Center", "Garret Mountain Reservation"]
  },
  {
    id: "hackensack",
    slug: "hackensack-nj",
    city: "Hackensack",
    county: "Bergen County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07601", "07602"],
    population: 46030,
    priority: "critical",
    neighborhoods: ["Downtown", "Fairmount", "South End", "North Hackensack"],
    customersServed: 680,
    nearbyCities: ["teaneck", "bogota", "river-edge", "maywood", "lodi", "south-hackensack"],
    metaTitle: "Garage Door Repair Hackensack NJ | Bergen County",
    metaDescription: "Garage door repair in Hackensack, NJ. Licensed in Bergen County. Emergency & scheduled service. Free estimates. Call (201) 554-6769.",
    heroImage: "/images/cities/hackensack.jpg",
    localContent: "Hackensack's revitalization has brought modern high-rises to the skyline while preserving the historic charm of the Fairmount section. We offer a full range of services to meet this diversity: smart garage door openers for tech-savvy homeowners, custom wood overlay doors for historic renovations, and high-performance steel doors for commercial facilities near the Courthouse. Our team is a staple in the community, providing reliable service to the county seat.",
    coordinates: { lat: 40.8859, lng: -74.0435 },
    heroTitle: "Bergen County's Garage Door Specialists",
    heroSubtitle: "Serving Hackensack and Bergen County with premium garage door solutions since 2015.",
    commonServices: ["Custom Wood Doors", "Insulated Installation", "Opener Repair", "Spring Service", "Commercial Doors"],
    landmarks: ["Bergen County Courthouse", "The Shops at Riverside", "Hackensack University Medical Center", "Foschini Park", "Johnson Public Library"]
  },
  // High Priority Cities
  {
    id: "passaic",
    slug: "passaic-nj",
    city: "Passaic",
    county: "Passaic County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07055"],
    population: 70537,
    priority: "high",
    neighborhoods: ["Downtown", "Passaic Park", "Dundee Island", "Presidents Park"],
    customersServed: 520,
    nearbyCities: ["clifton", "paterson", "garfield", "wallington", "rutherford", "nutley"],
    metaTitle: "Garage Door Repair Passaic NJ | Same-Day Service",
    metaDescription: "Garage door repair in Passaic, NJ. Emergency 24/7 service. Licensed Passaic County technicians. Free estimates. Call (201) 554-6769.",
    heroImage: "/images/cities/passaic.jpg",
    localContent: "In Passaic Park, we often encounter large, detached garages serving historic homes, requiring specialized care for heavy wooden doors and extension springs. Conversely, in the denser downtown areas, we specialize in space-saving torsion spring conversions and compact opener installations for multi-family units. We understand the local zoning and building codes, ensuring every installation in Passaic meets strict safety standards.",
    coordinates: { lat: 40.8569, lng: -74.1313 },
    heroTitle: "Prompt Garage Door Repair in Passaic, NJ",
    heroSubtitle: "24/7 emergency service for Passaic homes. Same-day repairs available.",
    commonServices: ["Spring Repair", "Cable Replacement", "Opener Installation", "Track Alignment", "Multi-Family Service"],
    landmarks: ["Passaic General Hospital", "Third Ward Park", "Passaic Park", "Dundee Island Park"]
  },
  {
    id: "bayonne",
    slug: "bayonne-nj",
    city: "Bayonne",
    county: "Hudson County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07002"],
    population: 71686,
    priority: "high",
    neighborhoods: ["Bergen Point", "Constable Hook", "Pamrapo", "Greenville"],
    customersServed: 480,
    nearbyCities: ["jersey-city", "staten-island", "elizabeth", "carteret"],
    metaTitle: "Garage Door Repair Bayonne NJ | Hudson County",
    metaDescription: "Expert garage door repair in Bayonne, NJ. All neighborhoods served. Licensed & insured. Same-day service available. Call (201) 554-6769.",
    heroImage: "/images/cities/bayonne.jpg",
    localContent: "Bayonne's unique peninsula geography exposes properties to salt air and humidity, accelerating rust and corrosion on standard garage door parts. We exclusively use galvanized springs, rust-resistant tracks, and weather-sealed bottom gaskets for our Bayonne customers. Whether you're in a classic home in Bergen Point or a new development near the harbor, we provide durable solutions designed to withstand the coastal elements.",
    coordinates: { lat: 40.6687, lng: -74.1143 },
    heroTitle: "Bayonne Garage Door Experts",
    heroSubtitle: "Specialized service for coastal properties. Rust prevention and weatherproofing available.",
    commonServices: ["Rust Prevention", "Weatherproofing", "Spring Replacement", "Corrosion-Resistant Parts", "Coastal Property Service"],
    landmarks: ["Bayonne Bridge", "Dennis P. Collins Park", "Tear Drop Memorial", "Bayonne Golf Club"]
  },
  {
    id: "union-city",
    slug: "union-city-nj",
    city: "Union City",
    county: "Hudson County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07087"],
    population: 68073,
    priority: "high",
    neighborhoods: ["The Heights", "Bergenline Avenue", "Transfer Station", "Palisade Avenue"],
    customersServed: 390,
    nearbyCities: ["hoboken", "weehawken", "north-bergen", "west-new-york", "jersey-city"],
    metaTitle: "Garage Door Repair Union City NJ | 24/7 Emergency",
    metaDescription: "Garage door repair in Union City, NJ. Multi-family & residential service. Licensed Hudson County. Emergency repairs. Call (201) 554-6769.",
    heroImage: "/images/cities/union-city.jpg",
    localContent: "As one of the most densely populated cities in the country, Union City relies on functional garages for critical parking space. We specialize in high-traffic door maintenance for multi-family buildings and condos along Palisade Avenue. Our technicians are experts in low-headroom track conversions to maximize vertical clearance in tight urban garages, allowing for taller vehicles and additional storage.",
    coordinates: { lat: 40.7795, lng: -74.0238 },
    heroTitle: "Union City Multi-Family Garage Door Experts",
    heroSubtitle: "Specialized service for urban properties and multi-unit buildings.",
    commonServices: ["Multi-Unit Installation", "Roll-Up Doors", "Space-Efficient Doors", "Commercial Service", "Urban Property Solutions"],
    landmarks: ["Bergenline Avenue", "Transfer Station", "Celia Cruz Park", "Union City High School"]
  },
  {
    id: "east-orange",
    slug: "east-orange-nj",
    city: "East Orange",
    county: "Essex County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07017", "07018", "07019"],
    population: 69612,
    priority: "high",
    neighborhoods: ["Ampere", "Elmwood Park", "Brick Church", "Ashland", "Prospect Hill"],
    customersServed: 450,
    nearbyCities: ["newark", "orange", "south-orange", "west-orange", "irvington"],
    metaTitle: "Garage Door Repair East Orange NJ | Essex County",
    metaDescription: "Garage door repair in East Orange, NJ. All ZIP codes served. Same-day emergency service. Licensed & insured. Call (201) 554-6769.",
    heroImage: "/images/cities/east-orange.jpg",
    localContent: "East Orange features a beautiful collection of pre-war apartment buildings and spacious single-family homes in the Presidential Streets area. We provide specialized repair services for heavy, original wood doors often found in these historic properties, as well as modern, insulated replacements that maintain architectural integrity. Our team is also highly experienced in maintaining the secure entry gates and parking doors for the city's numerous apartment complexes.",
    coordinates: { lat: 40.7644, lng: -74.2165 },
    heroTitle: "East Orange Garage Door Service",
    heroSubtitle: "Essex County licensed. Serving all 3 East Orange ZIP codes with reliable repairs.",
    commonServices: ["Spring Replacement", "Opener Repair", "New Installation", "Preventive Maintenance", "Multi-Unit Service"],
    landmarks: ["Brick Church Station", "Ampere Station", "East Orange City Hall", "Paul Robeson Stadium"]
  },
  {
    id: "montclair",
    slug: "montclair-nj",
    city: "Montclair",
    county: "Essex County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07042", "07043"],
    population: 40921,
    priority: "high",
    neighborhoods: ["Upper Montclair", "South Montclair", "Watchung Plaza", "Walnut Street", "Bloomfield Avenue"],
    customersServed: 520,
    nearbyCities: ["clifton", "bloomfield", "glen-ridge", "cedar-grove", "verona", "west-orange"],
    metaTitle: "Garage Door Repair Montclair NJ | Custom Doors",
    metaDescription: "Premium garage door repair in Montclair, NJ. Custom installations, spring repair, opener service. Licensed Essex County. Call (201) 554-6769.",
    heroImage: "/images/cities/montclair.jpg",
    localContent: "Montclair is renowned for its diverse and historic architecture, from Tudor revivals in Upper Montclair to Colonials near Watchung Plaza. We offer a curated selection of custom carriage house doors in wood, composite, and steel to perfectly complement these homes. Our design consultants work directly with Montclair homeowners to choose hardware and glass options that enhance curb appeal while providing modern thermal efficiency and smart-home integration.",
    coordinates: { lat: 40.8222, lng: -74.2127 },
    heroTitle: "Montclair's Expert Garage Door Service",
    heroSubtitle: "Custom installations and expert repairs for Montclair's distinctive homes.",
    commonServices: ["Custom Wood Doors", "Carriage House Style", "Insulated Steel Doors", "Architectural Matching", "Premium Installation"],
    landmarks: ["Montclair Art Museum", "Watchung Plaza", "Montclair State University", "Van Vleck House & Gardens", "Edgemont Park"]
  },
  {
    id: "fair-lawn",
    slug: "fair-lawn-nj",
    city: "Fair Lawn",
    county: "Bergen County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07410"],
    population: 34927,
    priority: "high",
    neighborhoods: ["Warren Point", "Radburn", "Columbia Heights", "Memorial Park"],
    customersServed: 410,
    nearbyCities: ["paterson", "paramus", "glen-rock", "saddle-brook", "hawthorne", "ridgewood"],
    metaTitle: "Garage Door Repair Fair Lawn NJ | Bergen County",
    metaDescription: "Garage door repair in Fair Lawn, NJ. Residential & commercial service. Same-day appointments. Licensed Bergen County. Call (201) 554-6769.",
    heroImage: "/images/cities/fair-lawn.jpg",
    localContent: "Fair Lawn, home to the historic Radburn planned community, features unique housing layouts with shared driveways and rear-facing garages. We are experts in navigating these specific access challenges and installing quiet, belt-drive openers that won't disturb neighbors in these tight-knit communities. Our team provides fast, reliable service to ensure your garage door is secure and functional, whether you're in a Cape Cod in Warren Point or a split-level near Memorial Park.",
    coordinates: { lat: 40.9404, lng: -74.1318 },
    heroTitle: "Fair Lawn's Garage Door Specialists",
    heroSubtitle: "Quiet, efficient solutions for Bergen County homeowners. Same-day service available.",
    commonServices: ["Belt-Drive Openers", "Insulated Doors", "Spring Replacement", "Energy Efficient Doors", "Quiet Operation"],
    landmarks: ["Radburn Plaza Building", "Memorial Park", "Fair Lawn Avenue", "Naugle House"]
  },
  // Medium Priority Cities
  {
    id: "cedar-grove",
    slug: "cedar-grove-nj",
    city: "Cedar Grove",
    county: "Essex County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07009"],
    population: 12980,
    priority: "medium",
    neighborhoods: ["North End", "Central", "South End", "Pompton Avenue"],
    customersServed: 290,
    nearbyCities: ["verona", "montclair", "little-falls", "west-caldwell", "essex-fells"],
    metaTitle: "Garage Door Repair Cedar Grove NJ | Expert Service",
    metaDescription: "Garage door repair in Cedar Grove, NJ. Serving all neighborhoods. Licensed Essex County technicians. Free estimates. Call (201) 554-6769.",
    heroImage: "/images/cities/cedar-grove.jpg",
    localContent: "Cedar Grove's suburban setting features many homes with double-wide driveways and two-car garages. We specialize in upgrading these large doors to high-R-value insulated models that help regulate temperature in rooms above the garage. Our technicians are also frequent visitors to the commercial properties along Pompton Avenue, providing same-day repair for rolling steel doors and security grilles.",
    coordinates: { lat: 40.8518, lng: -74.229 },
    heroTitle: "Cedar Grove Garage Door Repair",
    heroSubtitle: "Trusted by 290+ Cedar Grove families. Free safety inspections included.",
    commonServices: ["Spring Replacement", "Opener Installation", "Insulated Doors", "Safety Inspections", "Preventive Maintenance"],
    landmarks: ["Cedar Grove Park", "Mills Reservation", "Meadowleigh Park", "Pompton Avenue"]
  },
  {
    id: "little-falls",
    slug: "little-falls-nj",
    city: "Little Falls",
    county: "Passaic County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07424"],
    population: 14659,
    priority: "medium",
    neighborhoods: ["Peckman River", "Great Notch", "Singac", "Little Falls Center"],
    customersServed: 310,
    nearbyCities: ["cedar-grove", "totowa", "woodland-park", "west-caldwell", "montclair"],
    metaTitle: "Garage Door Repair Little Falls NJ | Passaic County",
    metaDescription: "Reliable garage door repair in Little Falls, NJ. Spring, cable, opener service. Licensed Passaic County. Same-day service. Call (201) 554-6769.",
    heroImage: "/images/cities/little-falls.jpg",
    localContent: "From the historic homes in the Singac neighborhood to the newer developments near Montclair State University, Little Falls offers a variety of garage door needs. We provide comprehensive maintenance packages to protect against the humidity from the Passaic River, which can affect door balance and spring life. Our local technicians are always nearby, often servicing homes near Great Notch and the downtown center.",
    coordinates: { lat: 40.8766, lng: -74.2148 },
    heroTitle: "Little Falls Garage Door Experts",
    heroSubtitle: "Same-day repairs with parts in stock. Serving Passaic County residential areas.",
    commonServices: ["Broken Spring Repair", "Cable Replacement", "Track Alignment", "Opener Malfunctions", "Same-Day Service"],
    landmarks: ["Little Falls Station", "Morris Canal", "Passaic River", "Yogi Berra Stadium"]
  },
  {
    id: "west-caldwell",
    slug: "west-caldwell-nj",
    city: "West Caldwell",
    county: "Essex County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07006"],
    population: 11233,
    priority: "medium",
    neighborhoods: ["Westville", "Harrison", "Francisco Avenue", "Passaic Avenue"],
    customersServed: 270,
    nearbyCities: ["caldwell", "roseland", "essex-fells", "fairfield", "cedar-grove", "north-caldwell"],
    metaTitle: "Garage Door Repair West Caldwell NJ | Essex County",
    metaDescription: "Garage door repair in West Caldwell, NJ. New installations, spring repair, openers. Licensed & insured. Free estimates. Call (201) 554-6769.",
    heroImage: "/images/cities/west-caldwell.jpg",
    localContent: "West Caldwell is known for its well-maintained suburban neighborhoods and the bustling commercial district along Bloomfield Avenue. We provide aesthetic upgrades for residential garage doors, including window inserts and decorative hardware that boost curb appeal. For local businesses, we offer high-cycle spring replacements and preventative maintenance plans to keep operations running smoothly without interruption.",
    coordinates: { lat: 40.8409, lng: -74.3018 },
    heroTitle: "West Caldwell Garage Door Service",
    heroSubtitle: "Complete service from installation to maintenance. Essex County licensed technicians.",
    commonServices: ["New Installation", "Spring Replacement", "Opener Upgrades", "Maintenance Programs", "Sectional Doors"],
    landmarks: ["West Caldwell Civic Center", "Crane Park", "Essex Valley School", "Mountain Ridge Country Club"]
  },
  {
    id: "north-caldwell",
    slug: "north-caldwell-nj",
    city: "North Caldwell",
    county: "Essex County",
    state: "New Jersey",
    stateAbbr: "NJ",
    zipCodes: ["07006"],
    population: 6900,
    priority: "medium",
    neighborhoods: ["Gould Avenue", "Westville", "Old Bloomfield Avenue"],
    customersServed: 180,
    nearbyCities: ["west-caldwell", "caldwell", "fairfield", "montville", "roseland"],
    metaTitle: "Garage Door Repair North Caldwell NJ | Premium Service",
    metaDescription: "Premium garage door service in North Caldwell, NJ. Custom installations, expert repairs. Licensed Essex County. Free estimates. Call (201) 554-6769.",
    heroImage: "/images/cities/north-caldwell.jpg",
    localContent: `North Caldwell's rolling hills and large estates demand the highest quality garage door craftsmanship. We specialize in installing premium wood and faux-wood overlay doors that match the grandeur of these properties. Our "silent service" package features ultra-quiet openers and nylon rollers, perfect for attached garages near living spaces. We treat every home in North Caldwell with white-glove care and attention to detail.`,
    coordinates: { lat: 40.8648, lng: -74.2582 },
    heroTitle: "North Caldwell's Luxury Garage Door Service",
    heroSubtitle: "Premium solutions for upscale homes. White-glove installation and smart technology.",
    commonServices: ["Custom Wood Doors", "Smart Technology", "High-End Openers", "Decorative Hardware", "White-Glove Service"],
    landmarks: ["Green Brook Country Club", "Camp Wyanokie", "North Caldwell Liberty Field"]
  }
];
function getNearbyCities(locationId) {
  const location = locations.find((l) => l.id === locationId);
  if (!location) return [];
  return location.nearbyCities.map((id) => locations.find((l) => l.id === id)).filter((l) => l !== void 0);
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "FAQ", href: "/faq" },
    { name: "Reviews", href: "/reviews" },
    { name: "About", href: "/about" },
    {
      name: "Contact",
      href: "/contact?utm_source=website&utm_medium=cta&utm_campaign=header"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 bg-cream-100 shadow-md"> <div class="container mx-auto px-4"> <div class="flex items-center justify-between h-20"> <!-- Logo --> <a href="/" class="flex items-center flex-shrink-0"> <img src="/images/logos/ez2fix-logo.png" alt="Ez2Fix LLC - Licensed Garage Door Repair Northern NJ" class="w-20 lg:w-auto lg:h-16" width="200" height="48"> </a> <!-- Desktop Navigation --> <nav class="hidden lg:flex items-center space-x-6"> ${navLinks.map((link) => {
    if (link.name === "Services") {
      return renderTemplate`<div class="relative group"> <button class="flex items-center text-dark-700 hover:text-gold-600 font-semibold transition-colors focus:outline-none py-6">
Services
${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:chevron-down", "class": "w-4 h-4 ml-1 transition-transform group-hover:rotate-180" })} </button> <div class="hidden absolute left-0 top-full w-[800px] bg-white shadow-xl rounded-xl border border-gold-200/20 group-hover:block p-6 z-50"> <div class="grid grid-cols-3 gap-4"> ${[
        {
          name: "Emergency Repair",
          href: "/services/emergency-repair",
          icon: "heroicons:bolt"
        },
        {
          name: "Spring Repair",
          href: "/services/spring-repair",
          icon: "heroicons:cog"
        },
        {
          name: "Opener Installation",
          href: "/services/opener-installation",
          icon: "heroicons:arrow-up-on-square"
        },
        {
          name: "Door Installation",
          href: "/services/door-installation",
          icon: "heroicons:home"
        },
        {
          name: "Opener Repair",
          href: "/services/opener-repair",
          icon: "heroicons:wrench"
        },
        {
          name: "Cable Repair",
          href: "/services/cable-repair",
          icon: "heroicons:link"
        },
        {
          name: "Panel Replacement",
          href: "/services/panel-replacement",
          icon: "heroicons:squares-plus"
        },
        {
          name: "Track Repair",
          href: "/services/track-repair",
          icon: "heroicons:bars-3-bottom-left"
        },
        {
          name: "Commercial Garage Door",
          href: "/services/commercial-garage-door",
          icon: "heroicons:building-office"
        }
      ].map((service) => renderTemplate`<a${addAttribute(service.href, "href")} class="flex items-start p-3 rounded-lg hover:bg-gold-50 transition-colors group/item"> <div class="flex-shrink-0 mt-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": service.icon, "class": "w-5 h-5 text-gold-500 group-hover/item:text-gold-600" })} </div> <div class="ml-3"> <p class="text-sm font-bold text-dark-900 group-hover/item:text-gold-700"> ${service.name} </p> </div> </a>`)} </div> <div class="mt-6 pt-4 border-t border-gray-200"> <a href="/services" class="flex items-center justify-center px-6 py-3 bg-gold-500 text-dark-900 rounded-lg font-bold hover:bg-gold-600 hover:text-white transition-all shadow-md hover:shadow-lg group/link">
View All Services
${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:arrow-right", "class": "w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" })} </a> </div> </div> </div>`;
    } else if (link.name === "Service Areas") {
      return renderTemplate`<div class="relative group"> <button class="flex items-center text-dark-700 hover:text-gold-600 font-semibold transition-colors focus:outline-none py-6">
Service Areas
${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:chevron-down", "class": "w-4 h-4 ml-1 transition-transform group-hover:rotate-180" })} </button> <div class="hidden absolute left-0 top-full w-[700px] bg-white shadow-xl rounded-xl border border-gold-200/20 group-hover:block p-6 z-50"> <div class="grid grid-cols-4 gap-4"> ${locations.map((location) => renderTemplate`<a${addAttribute(`/service-areas/${location.slug}`, "href")} class="flex items-center p-2 rounded-lg hover:bg-gold-50 transition-colors group/item"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:map-pin", "class": "w-4 h-4 text-gold-500 mr-2 group-hover/item:text-gold-600" })} <span class="text-sm font-medium text-dark-700 group-hover/item:text-gold-700"> ${location.city} </span> </a>`)} </div> <div class="mt-6 pt-4 border-t border-gray-200"> <a href="/service-areas" class="flex items-center justify-center px-6 py-3 bg-gold-500 text-dark-900 rounded-lg font-bold hover:bg-gold-600 hover:text-white transition-all shadow-md hover:shadow-lg group/link">
View All Service Areas
${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:arrow-right", "class": "w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" })} </a> </div> </div> </div>`;
    } else {
      return renderTemplate`<a${addAttribute(link.href, "href")} class="text-dark-700 hover:text-gold-600 font-semibold transition-colors"> ${link.name} </a>`;
    }
  })} </nav> <!-- Desktop CTAs --> <div class="hidden lg:flex items-center space-x-4"> ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "size": "md", "href": `tel:${siteConfig.contact.phoneRaw}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:phone", "class": "w-5 h-5 mr-2" })}
Call ${siteConfig.contact.phone}` })} ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "md", "href": "/booking?utm_source=website&utm_medium=cta&utm_campaign=header" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:calendar", "class": "w-5 h-5 mr-2" })}
Book Online
` })} </div> <!-- Mobile Right Section (CTAs + Menu) --> <div class="flex lg:hidden items-center space-x-3 max-[375px]:space-x-1 ml-auto"> <!-- Mobile CTAs --> <div class="flex items-center space-x-2 max-[375px]:space-x-1"> <a${addAttribute(`tel:${siteConfig.contact.phoneRaw}`, "href")} class="flex items-center justify-center px-3 py-1.5 max-[375px]:px-1.5 max-[375px]:py-1 text-dark-900 border-2 border-dark-900 rounded-lg hover:bg-gray-50 transition-all font-bold text-xs max-[375px]:text-[10px] whitespace-nowrap" aria-label="Call Now"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:phone", "class": "w-4 h-4 max-[375px]:w-3.5 max-[375px]:h-3.5" })} <span class="ml-1.5 max-[330px]:hidden">Call Now</span> </a> <a href="/booking?utm_source=website&utm_medium=cta&utm_campaign=header" class="flex items-center justify-center px-3 py-1.5 max-[375px]:px-1.5 max-[375px]:py-1 bg-gold-500 text-dark-900 rounded-lg font-bold text-xs max-[375px]:text-[10px] hover:bg-gold-600 hover:text-white transition-all whitespace-nowrap" aria-label="Book Online"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:calendar", "class": "w-4 h-4 max-[375px]:w-3.5 max-[375px]:h-3.5" })} <span class="ml-1.5">Book Online</span> </a> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="p-1 text-dark-700 hover:text-gold-600" aria-label="Toggle menu"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:bars-3", "class": "w-7 h-7 max-[375px]:w-6 max-[375px]:h-6" })} </button> </div> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden lg:hidden bg-white border-t border-gray-200"> <nav class="container mx-auto px-4 py-4 flex flex-col space-y-2"> ${navLinks.map((link) => {
    if (link.name === "Services") {
      return renderTemplate`<div class="border-b border-gray-200 pb-2"> <button class="mobile-dropdown-trigger w-full flex items-center justify-between text-dark-700 hover:text-gold-600 font-semibold transition-colors py-2" data-target="mobile-services"> <span class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:wrench-screwdriver", "class": "w-5 h-5 mr-2 text-gold-500" })}
Services
</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:chevron-down", "class": "w-5 h-5 transition-transform duration-200" })} </button> <div id="mobile-services" class="hidden mt-2 ml-4 space-y-2"> ${[
        {
          name: "Emergency Repair",
          href: "/services/emergency-repair",
          icon: "heroicons:bolt"
        },
        {
          name: "Spring Repair",
          href: "/services/spring-repair",
          icon: "heroicons:cog"
        },
        {
          name: "Opener Installation",
          href: "/services/opener-installation",
          icon: "heroicons:arrow-up-on-square"
        },
        {
          name: "Door Installation",
          href: "/services/door-installation",
          icon: "heroicons:home"
        },
        {
          name: "Opener Repair",
          href: "/services/opener-repair",
          icon: "heroicons:wrench"
        },
        {
          name: "Cable Repair",
          href: "/services/cable-repair",
          icon: "heroicons:link"
        },
        {
          name: "Panel Replacement",
          href: "/services/panel-replacement",
          icon: "heroicons:squares-plus"
        },
        {
          name: "Track Repair",
          href: "/services/track-repair",
          icon: "heroicons:bars-3-bottom-left"
        },
        {
          name: "Commercial Garage Door",
          href: "/services/commercial-garage-door",
          icon: "heroicons:building-office"
        }
      ].map((service) => renderTemplate`<a${addAttribute(service.href, "href")} class="flex items-center text-sm text-dark-600 hover:text-gold-600 py-1.5 transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": service.icon, "class": "w-4 h-4 mr-2 text-gold-500 flex-shrink-0" })} ${service.name} </a>`)} <a href="/services" class="block mt-3 pt-3 border-t border-gray-100 text-sm font-bold text-gold-600 hover:text-gold-700 flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:wrench-screwdriver", "class": "w-4 h-4 mr-1.5" })}
View All Services
</a> </div> </div>`;
    } else if (link.name === "Service Areas") {
      return renderTemplate`<div class="border-b border-gray-200 pb-2"> <button class="mobile-dropdown-trigger w-full flex items-center justify-between text-dark-700 hover:text-gold-600 font-semibold transition-colors py-2" data-target="mobile-areas"> <span class="flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:map-pin", "class": "w-5 h-5 mr-2 text-gold-500" })}
Service Areas
</span> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:chevron-down", "class": "w-5 h-5 transition-transform duration-200" })} </button> <div id="mobile-areas" class="hidden mt-2 ml-4 grid grid-cols-2 gap-2"> ${locations.map((location) => renderTemplate`<a${addAttribute(`/service-areas/${location.slug}`, "href")} class="flex items-center text-sm text-dark-600 hover:text-gold-600 py-1 transition-colors"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:map-pin", "class": "w-3.5 h-3.5 mr-1.5 text-gold-400 flex-shrink-0" })} ${location.city} </a>`)} <a href="/service-areas" class="col-span-2 mt-2 pt-2 border-t border-gray-100 text-sm font-bold text-gold-600 hover:text-gold-700 flex items-center justify-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:map-pin", "class": "w-4 h-4 mr-1.5" })}
View All Service Areas
</a> </div> </div>`;
    } else {
      return renderTemplate`<a${addAttribute(link.href, "href")} class="flex items-center text-dark-700 hover:text-gold-600 font-semibold transition-colors py-2 border-b border-gray-200 pb-2"> ${link.name === "FAQ" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:question-mark-circle", "class": "w-5 h-5 mr-2 text-gold-500" })}`} ${link.name === "Reviews" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:star-solid", "class": "w-5 h-5 mr-2 text-gold-500" })}`} ${link.name === "About" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:information-circle", "class": "w-5 h-5 mr-2 text-gold-500" })}`} ${link.name === "Contact" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "heroicons:envelope", "class": "w-5 h-5 mr-2 text-gold-500" })}`} ${link.name} </a>`;
    }
  })} <div class="pt-4 border-t border-gray-200 flex flex-col space-y-3"> ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "size": "md", "href": `tel:${siteConfig.contact.phoneRaw}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:phone", "class": "w-5 h-5 mr-2" })}
Call Now
` })} ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "size": "md", "href": "/booking?utm_source=website&utm_medium=cta&utm_campaign=header" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": "heroicons:calendar", "class": "w-5 h-5 mr-2" })}
Book Online
` })} </div> </nav> </div> </header> `;
}, "/Users/yaronhayo/Desktop/ez2fix-website/rebuild/src/components/layout/Header.astro", void 0);

export { $$Header as $, getNearbyCities as g, locations as l };
