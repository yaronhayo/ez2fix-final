export interface Service {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    icon: string;
    emergency: boolean;
    popular: boolean;
    metaTitle: string;
    metaDescription: string;
    heroImage: string;
    heroBanner?: string;             // Separate wide image for hero section
    heroTitle?: string;              // Marketing H1
    heroSubtitle?: string;           // Marketing subtitle
    symptoms: string[];              // List of symptoms for "Diagnose Your Issue"
    priceRange?: string;             // "$$", "$$$" for Schema
    overview: string;
    benefits: string[];
    processSteps: Array<{
        number: number;
        title: string;
        description: string;
        duration?: string;
    }>;
    faqs: Array<{
        question: string;
        answer: string;
    }>;
    relatedServices: string[];
    keywords: {
        primary: string;
        secondary: string[];
    };
}

export const services: Service[] = [
    {
        id: 'emergency-repair',
        slug: 'emergency-repair',
        title: 'Emergency Garage Door Repair',
        shortDescription: '24/7 emergency repair for broken doors, springs, and openers. Same-day service available.',
        icon: 'bolt',
        emergency: true,
        popular: true,
        metaTitle: 'Emergency Garage Door Repair Northern NJ | 24/7 Service',
        metaDescription: '24/7 emergency garage door repair in Northern NJ. Broken spring, door stuck, opener failure? Call (201) 554-6769 for same-day service.',
        heroImage: '/images/services/emergency-repair-v3.png',
        heroTitle: '24/7 Emergency Garage Door Repair',
        heroSubtitle: 'We fix broken springs, stuck doors, and opener failures on the spot. No extra charge for weekends.',
        symptoms: ['Door won\'t open', 'Car trapped in garage', 'Door stuck halfway', 'Loud bang heard', 'Door off tracks'],
        priceRange: '$$',
        overview: 'Hearing a loud bang? Door stuck halfway? We know the panic of a broken garage door. It\'s not just an inconvenience—it\'s a security risk. Our emergency response team is on standby 24/7 to secure your home and restore your peace of mind. We arrive with fully stocked trucks, ready to fix 95% of issues in a single visit, whether it\'s a snapped spring at 2 AM or a door that won\'t close before you leave for work.',
        benefits: [
            'Response within 2 hours (typical)',
            'Trucks stocked with all common parts',
            'No extra charge for weekend service',
            '10-year warranty on springs and parts',
            'Licensed technicians, not subcontractors',
            'We don\'t leave until your door is safe'
        ],
        processSteps: [
            {
                number: 1,
                title: 'Immediate Dispatch',
                description: 'Call (201) 554-6769. A live person answers 24/7 and dispatches the nearest technician to your location.',
            },
            {
                number: 2,
                title: 'Safety Assessment',
                description: 'We arrive, secure the door to prevent injury or further damage, and diagnose the root cause.',
            },
            {
                number: 3,
                title: 'On-the-Spot Repair',
                description: 'We provide a clear, upfront price. With your approval, we fix the issue immediately using stocked parts.',
            },
            {
                number: 4,
                title: 'Safety Verification',
                description: 'We perform a 25-point safety check to ensure every component is operating perfectly before we leave.',
            }
        ],
        faqs: [
            {
                question: 'Do you really offer 24/7 emergency service?',
                answer: 'Yes, we have technicians on call 24 hours a day, 7 days a week, including weekends and holidays. When you have a garage door emergency, we\'re here to help.'
            },
            {
                question: 'How promptly can you arrive for an emergency?',
                answer: 'We respond as promptly as possible for emergency calls in Northern NJ. Response times vary based on current demand and your location.'
            },
            {
                question: 'Do you charge extra for emergency service?',
                answer: 'Our standard labor rates apply for emergency calls. We provide upfront pricing before starting any work, so there are no surprises.'
            },
            {
                question: 'What if you don\'t have the part I need?',
                answer: 'Our service trucks carry the most common parts for emergency repairs. If we need a specialty part, we can secure your door safely and return the same day or next day to complete the repair.'
            },
            {
                question: 'Is my garage door safe to use after an emergency repair?',
                answer: 'Absolutely. We don\'t leave until your door is operating safely and smoothly. All our repairs come with a 10-year warranty for your peace of mind.'
            }
        ],
        relatedServices: ['spring-repair', 'cable-repair', 'opener-repair'],
        keywords: {
            primary: 'emergency garage door repair northern nj',
            secondary: ['24/7 garage door repair', 'same day garage door fix', 'broken garage door help']
        }
    },
    {
        id: 'spring-repair',
        slug: 'spring-repair',
        title: 'Spring Repair & Replacement',
        shortDescription: 'Expert torsion and extension spring replacement. Same-day service with 10-year warranty.',
        icon: 'spring',
        emergency: false,
        popular: true,
        metaTitle: 'Garage Door Spring Repair & Replacement Northern NJ',
        metaDescription: 'Broken garage door spring? Expert torsion & extension spring replacement in Northern NJ. Same-day service, 10-year warranty. Call (201) 554-6769.',
        heroImage: '/images/services/spring-repair-v3.png',
        heroBanner: '/images/services/spring-repair-banner.png',
        heroTitle: 'Broken Garage Door Spring Replacement',
        heroSubtitle: 'High-cycle springs backed by a 10-year warranty. Safe, professional replacement done today.',
        symptoms: ['Loud "gunshot" noise', 'Door is too heavy to lift', 'Gap in spring coils', 'Cables hanging loose', 'Door opens a few inches and stops'],
        priceRange: '$$',
        overview: 'Did you hear a loud "gunshot" sound from your garage? That\'s the sound of a spring snapping under extreme tension. The spring is the muscle of your garage door, lifting 90% of its weight. When it breaks, your door becomes dead weight—often over 200 lbs—and is dangerous to try and lift. We specialize in high-cycle spring replacement, using springs rated for 25,000+ cycles (double the industry standard). We replace both torsion and extension springs with precision-calibrated parts that ensure your door balances perfectly and lifts effortlessly.',
        benefits: [
            'High-Cycle Springs (25,000+ cycles)',
            '10-Year Warranty (Parts & Labor)',
            'Precision Balance Calibration',
            'Both Springs Replaced (Recommended)',
            'Safety Inspection Included',
            'Same-Day Service Available'
        ],
        processSteps: [
            {
                number: 1,
                title: 'System Diagnosis',
                description: 'We measure your door\'s weight and dimensions to calculate exactly the right spring size (IPPT).',
            },
            {
                number: 2,
                title: 'Safe Removal',
                description: 'We carefully release tension from the remaining spring and remove the broken components safely.',
            },
            {
                number: 3,
                title: 'Precision Installation',
                description: 'We install dual high-cycle springs and wind them to the precise tension required for your door.',
            },
            {
                number: 4,
                title: 'Balance Testing',
                description: 'We test that the door balances at every height and runs smoothly without straining the opener.',
            }
        ],
        faqs: [
            {
                question: 'How do I know if my garage door spring is broken?',
                answer: 'Common signs include: loud bang when spring breaks, door won\'t open or feels extremely heavy, visible gap in spring coils, door stuck halfway, or cable hanging loose. If you see these signs, stop using your door and call us immediately.'
            },
            {
                question: 'Can I replace a garage door spring myself?',
                answer: 'We strongly advise against DIY spring replacement. Springs are under 200+ pounds of tension and require specialized tools. Improper handling can cause serious injury. Professional replacement ensures safety and comes with a 10-year warranty.'
            },
            {
                question: 'How long do garage door springs last?',
                answer: 'Standard springs last 7,000-10,000 cycles (about 7-10 years with normal use). High-cycle springs last 25,000-100,000 cycles. We offer high-cycle options for longer life and fewer replacements.'
            },
            {
                question: 'Do you have my spring type in stock?',
                answer: 'Yes, our service trucks carry a complete range of torsion and extension springs for residential and commercial doors. We stock springs for single, double, and oversized doors.'
            },
            {
                question: 'What\'s included in your 10-year warranty?',
                answer: 'Our 10-year warranty covers the spring itself and our installation labor. If your spring fails within 10 years under normal use, we replace it free of charge.'
            }
        ],
        relatedServices: ['cable-repair', 'track-repair', 'maintenance'],
        keywords: {
            primary: 'garage door spring repair northern nj',
            secondary: ['broken garage door spring', 'torsion spring replacement', 'extension spring repair']
        }
    },
    {
        id: 'opener-installation',
        slug: 'opener-installation',
        title: 'Garage Door Opener Installation',
        shortDescription: 'Professional installation of LiftMaster, Chamberlain, and Genie openers with Wi-Fi connectivity.',
        icon: 'remote',
        emergency: false,
        popular: true,
        metaTitle: 'Garage Door Opener Installation Northern NJ | Smart Openers',
        metaDescription: 'Professional garage door opener installation in Northern NJ. LiftMaster, Chamberlain, Genie. Wi-Fi smart openers. Call (201) 554-6769 for free estimate.',
        heroImage: '/images/services/opener-installation-v3.png',
        heroTitle: 'Smart Garage Door Opener Installation',
        heroSubtitle: 'Upgrade to ultra-quiet, Wi-Fi enabled openers. Control your garage from anywhere.',
        symptoms: ['Opener is noisy/grinding', 'Remote not working', 'Door reverses unexpectedly', 'Old opener (15+ years)', 'Want smartphone control'],
        priceRange: '$$',
        overview: 'Modern garage door openers offer more than just open/close functionality—they provide security, silence, and smart home integration. We install top-tier openers from LiftMaster and Genie that feature built-in cameras, battery backup (so you can open the door during a power outage), and smartphone control. Whether you need a heavy-duty chain drive for a solid wood door or a whisper-quiet belt drive for a garage below a bedroom, we have the perfect solution.',
        benefits: [
            'Smartphone Control (Open/Close from anywhere)',
            'Ultra-Quiet Belt Drive Technology',
            'Battery Backup (Works without power)',
            'Integrated Camera Options',
            'Amazon Key In-Garage Delivery Compatible',
            'Professional Installation & Network Setup'
        ],
        processSteps: [
            {
                number: 1,
                title: 'Selection & Sizing',
                description: 'We help you choose the right horsepower and drive type (belt/chain/jackshaft) for your specific door.',
            },
            {
                number: 2,
                title: 'Professional Install',
                description: 'We remove the old unit and install the new motor, rail, and safety sensors to manufacturer specs.',
            },
            {
                number: 3,
                title: 'Smart Setup',
                description: 'We connect the opener to your Wi-Fi, set up the app on your phone, and program your car remotes.',
            },
            {
                number: 4,
                title: 'Walkthrough',
                description: 'We show you how to use the keypad, app features, and emergency release before we leave.',
            },
            {
                number: 5,
                title: 'Training & Testing',
                description: 'We demonstrate all features, program remotes, set up alerts, and ensure everything works perfectly before we leave.',
            }
        ],
        faqs: [
            {
                question: 'What is a smart garage door opener and how does it work?',
                answer: 'A smart garage door opener connects to your home WiFi network and allows you to control your garage door from anywhere using a smartphone app. You can open/close your door remotely, receive  notifications when it opens or closes, and even grant temporary access to guests or delivery drivers. Smart openers work with Amazon Alexa, Google Assistant, and Apple HomeKit for voice control.'
            },
            {
                question: 'Which smart garage door opener brand should I choose?',
                answer: 'We recommend LiftMaster MyQ for the most features and reliability, with battery backup and Security+ 2.0 rolling code technology. Chamberlain offers excellent value with MyQ smart technology built-in. Genie Aladdin Connect is budget-friendly with solid WiFi features. All three integrate with major smart home platforms. We\'ll help you choose based on your budget and specific needs.'
            },
            {
                question: 'Do smart openers work with Amazon Alexa and Google Home?',
                answer: 'Yes! LiftMaster MyQ, Chamberlain, and Genie Aladdin Connect all work with Amazon Alexa, Google Assistant, and Apple HomeKit. You can use voice commands like "Alexa, close the garage door" or check status by asking "Hey Google, is my garage door open?" We can set up the integration during installation.'
            },
            {
                question: 'Can I add smart features to my existing garage door opener?',
                answer: 'Yes, if your current opener was manufactured after 1993. You can add a smart garage door controller like the Chamberlain MyQ Smart Garage Hub ($30-50) or Nexx Garage. These devices connect to your existing opener and provide smartphone control. We\'ll assess compatibility during a free consultation.'
            },
            {
                question: 'Are smart garage openers secure? Can they be hacked?',
                answer: 'Modern smart openers use bank-level 128-bit encryption and Security+ 2.0 rolling code technology that changes the access code after every use, making them extremely difficult to hack. They\'re significantly more secure than older fixed-code openers. We only install openers with proven security features and can explain all security measures during installation.'
            },
            {
                question: 'Do smart garage openers work without WiFi or during power outages?',
                answer: 'If WiFi goes down, you lose remote app control but can still use the wall button and physical remotes. During power outages, most smart openers (especially LiftMaster) include battery backup that allows 20-50 door cycles without electricity. The door will work normally, but app notifications won\'t function until power and WiFi are restored.'
            },
            {
                question: 'How long does smart garage door opener installation take?',
                answer: 'Professional installation typically takes 2-3 hours, including physical installation, WiFi setup, app configuration, and training. If you want smart home integration (Alexa, Google Home), add 30-60 minutes. We schedule installations at your convenience and complete everything in one visit.'
            },
            {
                question: 'What\'s the difference between belt drive and chain drive openers?',
                answer: 'Belt drive openers use a rubber belt and are ultra-quiet (ideal for garages under bedrooms), while chain drives use a metal chain and are louder but more affordable. Belt drives cost $50-$100 more but are worth it for attached garages. Both are available as smart openers with WiFi. We\'ll recommend the option for your situation.'
            }
        ],
        relatedServices: ['opener-repair', 'door-installation', 'maintenance'],
        keywords: {
            primary: 'garage door opener installation northern nj',
            secondary: ['smart garage door opener', 'LiftMaster installation', 'Wi-Fi garage opener']
        }
    },
    {
        id: 'door-installation',
        slug: 'door-installation',
        title: 'New Garage Door Installation',
        shortDescription: 'Custom garage door installation with insulated, steel, wood, and carriage house styles available.',
        icon: 'door',
        emergency: false,
        popular: true,
        metaTitle: 'New Garage Door Installation Northern NJ | Custom Doors',
        metaDescription: 'New garage door installation in Northern NJ. Steel, wood, insulated, carriage house styles. 10-year warranty. Free estimate: (201) 554-6769.',
        heroImage: '/images/services/door-installation-v3.png',
        heroTitle: 'Transform Your Home with a New Garage Door',
        heroSubtitle: 'Boost curb appeal and energy efficiency. Expert installation of Carriage House, Modern, and Traditional doors.',
        symptoms: ['Door is rusted or rotting', 'Panels are dented', 'Drafty/Cold garage', 'Want to improve curb appeal', 'Door is over 20 years old'],
        priceRange: '$$$',
        overview: 'A new garage door has the highest Return on Investment (ROI) of almost any home improvement project. It instantly transforms your home\'s curb appeal while improving energy efficiency and security. We guide you through the entire process, from choosing the perfect style (Carriage House, Modern Glass, Traditional) to selecting the right insulation (R-Value) for your needs. Our installation is meticulous, ensuring your new door operates smoothly and seals tightly against the elements.',
        benefits: [
            'Free In-Home Design Consultation',
            'High R-Value Insulation Options',
            'Custom Color Matching',
            'Heavy-Duty Hardware Included',
            'Disposal of Old Door Included',
            '10-Year Installation Warranty'
        ],
        processSteps: [
            {
                number: 1,
                title: 'Design Consultation',
                description: 'We visit your home, measure precisely, and show you samples/brochures to find the perfect match for your style and budget.',
            },
            {
                number: 2,
                title: 'Order & Prep',
                description: 'We order your custom door and verify all specs. We schedule installation at your convenience.',
            },
            {
                number: 3,
                title: 'Professional Install',
                description: 'We remove and haul away your old door. We install the new door, tracks, and springs with laser precision.',
            },
            {
                number: 4,
                title: 'Weather Seal & Trim',
                description: 'We install premium weather stripping and vinyl trim to ensure an airtight seal against rain and cold.',
            }
        ],
        faqs: [
            { question: 'How do I choose the right garage door style?', answer: 'Consider your home\'s architecture, climate, and budget. Traditional raised-panel suits most homes. Carriage house adds classic charm. Modern flush fits contemporary homes. We provide samples and expert guidance.' },
            { question: 'Should I get an insulated garage door?', answer: 'Yes, if your garage is attached or you use it as workspace. Insulated doors (R-10 to R-20.4) reduce energy costs, dampen noise, and withstand dents better than non-insulated doors.' },
            { question: 'How long does installation take?', answer: 'Installation time varies based on door type and complexity. We complete most installations in a single day and provide time estimates when scheduling.' },
            { question: 'Do new garage doors increase home value?', answer: 'Yes! Garage door replacement has one of the highest ROI of home improvements, typically recouping 90-95% of cost at resale and boosting curb appeal significantly.' }
        ],
        relatedServices: ['panel-replacement', 'opener-installation', 'maintenance'],
        keywords: {
            primary: 'new garage door installation northern nj',
            secondary: ['custom garage doors', 'insulated garage door', 'carriage house doors']
        }
    },
    {
        id: 'opener-repair',
        slug: 'opener-repair',
        title: 'Garage Door Opener Repair',
        shortDescription: 'Fix noisy, slow, or malfunctioning garage door openers. Same-day repair for all brands.',
        icon: 'wrench',
        emergency: false,
        popular: false,
        metaTitle: 'Garage Door Opener Repair Northern NJ | AllBrands',
        metaDescription: 'Garage door opener repair in Northern NJ. Fix noisy, slow, or stuck openers. Same-day service for LiftMaster, Genie, Chamberlain. Call (201) 554-6769.',
        heroImage: '/images/services/opener-repair-v3.png',
        heroTitle: 'Expert Garage Door Opener Repair',
        heroSubtitle: 'We repair all major brands. Get your automatic door moving again today.',
        symptoms: ['Motor hums but door won\'t move', 'Chain/Belt is loose', 'Door reverses immediately', 'Remote works but wall button doesn\'t', 'Grinding noise from motor'],
        priceRange: '$$',
        overview: 'A malfunctioning opener is frustrating and can leave your home vulnerable. Before you buy a new one, let us take a look—many opener issues can be repaired for a fraction of the cost of replacement. We stock parts for all major brands (LiftMaster, Genie, Chamberlain, Craftsman) and can fix stripped gears, bad logic boards, misaligned sensors, and worn sprockets on the spot.',
        benefits: [
            'Repair vs. Replace Honest Advice',
            'Parts for All Major Brands in Stock',
            'Gear & Sprocket Replacement',
            'Sensor Alignment & Wiring Fixes',
            'Logic Board Troubleshooting',
            'Same-Day Service'
        ],
        processSteps: [
            {
                number: 1,
                title: 'Diagnostic Test',
                description: 'We test the motor, sensors, and electronics to pinpoint the exact failure.',
            },
            {
                number: 2,
                title: 'Repair Options',
                description: 'We explain the issue and give you a price to repair vs. replace, so you can make the best financial decision.',
            },
            {
                number: 3,
                title: 'Expert Repair',
                description: 'We replace the worn components (gears, capacitor, sensors) and lubricate the drive system.',
            },
            {
                number: 4,
                title: 'Force Adjustment',
                description: 'We recalibrate the opener\'s force and travel limits to ensure it opens fully and closes safely.',
            }
        ],
        faqs: [
            { question: 'Why is my garage door opener so loud?', answer: 'Common causes include worn gears, loose hardware, or a chain that needs lubrication. Sometimes the opener just needs adjustment. We can diagnose and fix noise issues promptly.' },
            { question: 'Should I repair or replace my garage door opener?', answer: 'If your opener is under 10 years old and the repair cost is under half the replacement cost, repair is usually the better choice. For openers over 15 years old, replacement often makes more sense.' },
            { question: 'Why won\'t my garage door open with the remote?', answer: 'This can be caused by dead batteries in the remote, interference from LED bulbs, antenna issues, or circuit board problems. We diagnose and fix remote issues onsite.' },
            { question: 'Do you repair smart garage door openers?', answer: 'Yes, we repair and service all smart openers including LiftMaster MyQ, Chamberlain MyQ, and Genie Aladdin Connect systems.' }
        ],
        relatedServices: ['opener-installation', 'maintenance', 'emergency-repair'],
        keywords: {
            primary: 'garage door opener repair northern nj',
            secondary: ['LiftMaster repair', 'noisy garage opener', 'garage remote not working']
        }
    },
    {
        id: 'cable-repair',
        slug: 'cable-repair',
        title: 'Cable Repair & Replacement',
        shortDescription: 'Safe repair and replacement of broken or frayed garage door cables. Same-day service.',
        icon: 'cable',
        emergency: false,
        popular: false,
        metaTitle: 'Garage Door Cable Repair & Replacement Northern NJ',
        metaDescription: 'Garage door cable repair in Northern NJ. Broken or frayed cables fixed same-day. Licensed technicians. 10-year warranty. Call (201) 554-6769.',
        heroImage: '/images/services/cable-repair-v3.png',
        heroTitle: 'Garage Door Cable Replacement',
        heroSubtitle: 'Snapped or frayed cables? We install heavy-duty aircraft-grade cables for safety.',
        symptoms: ['Door is crooked/slanted', 'Cable hanging loose', 'Door jammed in track', 'Cable frayed or rusting', 'Door slams shut'],
        priceRange: '$$',
        overview: 'Cables are the "muscles" of your garage door, lifting the heavy weight. If a cable snaps, the door can slam down or become dangerously crooked, often jamming in the tracks. We don\'t just replace cables; we upgrade them. We use heavy-duty, aircraft-grade steel cables that are thicker and more durable than standard builder-grade parts. We also reset the drum timing and door balance to prevent future breaks.',
        benefits: [
            'Heavy-Duty Aircraft Grade Cables',
            'Door Re-Balancing Included',
            'Track & Roller Inspection',
            'Emergency Service Available',
            '10-Year Warranty',
            'Prevention of Future Jams'
        ],
        processSteps: [
            {
                number: 1,
                title: 'Secure the Door',
                description: 'We clamp the door securely to prevent it from falling or moving during repair.',
            },
            {
                number: 2,
                title: 'Tension Release',
                description: 'We safely release the spring tension (critical for safety) to access the cables.',
            },
            {
                number: 3,
                title: 'Cable Installation',
                description: 'We install new, high-strength cables and wind them correctly onto the drums.',
            },
            {
                number: 4,
                title: 'Leveling & Balancing',
                description: 'We adjust the tension to ensure the door sits perfectly level and lifts evenly.',
            }
        ],
        faqs: [
            { question: 'How do I know if my garage door cable is broken?', answer: 'Signs include: door hangs crooked or binds when opening, visible frayed or broken cable, door slams shut, or cable hanging loose. If you see these signs, stop using your door immediately.' },
            { question: 'Can I use my garage door with a broken cable?', answer: 'No! Operating a door with a broken cable is extremely dangerous. The door can fall suddenly or bind, causing damage or injury. Call us for same-day repair.' },
            { question: 'Why do garage door cables break?', answer: 'Cables break due to normal wear, rust, improper installation, broken springs (which put extra stress on cables), or binding caused by track issues.' },
            { question: 'How long do garage door cables last?', answer: 'Quality cables typically last 7-10 years with regular maintenance. Our high-strength cables come with a 10-year warranty.' }
        ],
        relatedServices: ['spring-repair', 'track-repair', 'emergency-repair'],
        keywords: {
            primary: 'garage door cable repair northern nj',
            secondary: ['broken garage cable', 'garage door cable replacement', 'frayed cable repair']
        }
    },
    {
        id: 'panel-replacement',
        slug: 'panel-replacement',
        title: 'Panel Replacement',
        shortDescription: 'Replace damaged garage door panels to restore appearance without full door replacement.',
        icon: 'panel',
        emergency: false,
        popular: false,
        metaTitle: 'Garage Door Panel Replacement Northern NJ',
        metaDescription: 'Garage door panel replacement in Northern NJ. Fix dented or damaged panels without replacing entire door. Free estimate: (201) 554-6769.',
        heroImage: '/images/services/panel-replacement-v3.png',
        heroTitle: 'Garage Door Panel Replacement',
        heroSubtitle: 'Fix dents and damage without buying a whole new door. Seamless color matching.',
        symptoms: ['Dented bottom panel', 'Rotting wood section', 'Car hit the door', 'Panel buckling when opening', 'Rust spots on one section'],
        priceRange: '$$',
        overview: 'Accidents happen. If you backed into your door or a storm damaged a section, you might not need a whole new door. We can often replace just the damaged panels, saving you hundreds of dollars. We work with all major manufacturers (Clopay, Amarr, Wayne Dalton) to source matching panels. We ensure the new panel aligns perfectly and reinforce the door with new struts if needed.',
        benefits: [
            'Save Money vs. Full Replacement',
            'Restore Curb Appeal',
            'Color & Style Matching',
            'Reinforcement Struts Included',
            'Same-Day Assessment',
            'Extend Door Life'
        ],
        processSteps: [
            {
                number: 1,
                title: 'Match & Measure',
                description: 'We identify your door\'s manufacturer, model, and color to find the exact matching panel.',
            },
            {
                number: 2,
                title: 'Section Removal',
                description: 'We carefully remove the damaged section without disturbing the rest of the door assembly.',
            },
            {
                number: 3,
                title: 'New Panel Install',
                description: 'We install the new panel, securing it to the hinges and rollers for a seamless fit.',
            },
            {
                number: 4,
                title: 'Strut Reinforcement',
                description: 'We often add a steel strut to the new panel to prevent future buckling and strengthen the door.',
            }
        ],
        faqs: [
            { question: 'Can you match my garage door color for panel replacement?', answer: 'We work with all major manufacturers to match your door\'s style and color. For older doors where exact matches aren\'t available, we provide the closest match possible.' },
            { question: 'Is it better to replace panels or the whole door?', answer: 'If only 1-2 panels are damaged and your door is under 10 years old, panel replacement is usually cost-effective. For extensive damage or doors over 15 years old, full replacement often makes more sense.' },
            { question: 'How long does panel replacement take?', answer: 'Panel replacement time varies based on the number of panels and complexity. We provide time estimates when scheduling your appointment.' },
            { question: 'Will replaced panels look different from the rest of my door?', answer: 'While we match color and style precisely, slight variations may occur due to weathering of existing panels. Over time, weathering will blend the panels together.' }
        ],
        relatedServices: ['door-installation', 'track-repair', 'maintenance'],
        keywords: {
            primary: 'garage door panel replacement northern nj',
            secondary: ['damaged garage panel', 'dented door repair', 'garage door section replacement']
        }
    },
    {
        id: 'track-repair',
        slug: 'track-repair',
        title: 'Track Repair & Alignment',
        shortDescription: 'Fix bent or misaligned garage door tracks for smooth, safe operation.',
        icon: 'track',
        emergency: false,
        popular: false,
        metaTitle: 'Garage Door Track Repair & Alignment Northern NJ',
        metaDescription: 'Garage door track repair in Northern NJ. Fix bent, misaligned, or damaged tracks. Same-day service. Call (201) 554-6769 for expert repair.',
        heroImage: '/images/services/track-repair-v3.png',
        heroTitle: 'Garage Door Track Repair & Alignment',
        heroSubtitle: 'Eliminate noise and binding. We fix bent tracks and realign your door for smooth operation.',
        symptoms: ['Door binds or sticks', 'Rollers pop out of track', 'Gap between door and wall', 'Bent vertical track', 'Grinding noise'],
        priceRange: '$$',
        overview: 'The tracks guide your door safely up and down. If they are bent, rusted, or misaligned, your door is a ticking time bomb that could fall or jam. We have the specialized tools to straighten minor bends and the heavy-duty parts to replace severely damaged tracks. We also align the tracks to within a fraction of an inch, ensuring your door "floats" effortlessly rather than grinding its way up.',
        benefits: [
            'Precision Laser Alignment',
            'Bent Track Straightening',
            'Heavy-Duty Track Replacement',
            'Roller Inspection & Lube',
            'Quiet Door Operation',
            'Prevent Door Jams'
        ],
        processSteps: [
            {
                number: 1,
                title: 'Alignment Check',
                description: 'We check the spacing between the door and track along the entire height to identify tight spots.',
            },
            {
                number: 2,
                title: 'Track Repair',
                description: 'We straighten bent sections using a track anvil or replace damaged vertical/horizontal tracks.',
            },
            {
                number: 3,
                title: 'Secure Mounting',
                description: 'We tighten all track bolts and lag screws to the wall to prevent future shifting.',
            },
            {
                number: 4,
                title: 'Lubrication',
                description: 'We lubricate the tracks and rollers with premium silicone spray for whisper-quiet operation.',
            }
        ],
        faqs: [
            { question: 'Why is my garage door binding or sticking?', answer: 'Common causes include bent or misaligned tracks, worn rollers, dirt buildup, or damaged hinges. We diagnose the exact cause and provide targeted repairs.' },
            { question: 'Can you fix bent garage door tracks?', answer: 'Minor bends can often be straightened. Severely bent or cracked tracks should be replaced for safety. We assess damage and recommend the most appropriate solution.' },
            { question: 'How do garage door tracks get misaligned?', answer: 'Tracks can shift due to impact from vehicles, foundation settling, loose mounting brackets, or improper installation. Regular maintenance helps prevent misalignment.' },
            { question: 'Will track repair stop the grinding noise?', answer: 'Yes, if the noise is caused by misaligned tracks or worn rollers. We also lubricate all moving parts during track repair to eliminate noise.' }
        ],
        relatedServices: ['cable-repair', 'spring-repair', 'maintenance'],
        keywords: {
            primary: 'garage door track repair northern nj',
            secondary: ['bent garage track', 'misaligned door', 'garage door binding']
        }
    },
    {
        id: 'commercial',
        slug: 'commercial-garage-door',
        title: 'Commercial Garage Door',
        shortDescription: 'Professional commercial garage door installation, repair, and maintenance for businesses.',
        icon: 'building',
        emergency: false,
        popular: false,
        metaTitle: 'Commercial Garage Door Service Northern NJ | Business Solutions',
        metaDescription: 'Commercial garage door installation and repair in Northern NJ. Loading docks, warehouses, retail. 24/7 emergency service. Call (201) 554-6769.',
        heroImage: '/images/services/commercial-garage-door-v3.png',
        heroTitle: 'Commercial Garage Door Services',
        heroSubtitle: 'Heavy-duty solutions for warehouses, loading docks, and retail. 24/7 Priority Business Service.',
        symptoms: ['Door stuck (business halted)', 'Loading dock leveler broken', 'Chain hoist jammed', 'Slat damage on rolling door', 'Opener motor burned out'],
        priceRange: '$$$',
        overview: 'Time is money. When a commercial door is down, your business stops. We offer priority 24/7 service for our commercial clients in Northern NJ. We service all types of commercial doors: Rolling Steel, Sectional, High-Speed, and Aluminum Glass. Our technicians are certified to work on heavy-duty industrial openers and loading dock equipment. We also offer preventive maintenance plans to keep your facility compliant and operational.',
        benefits: [
            'Priority 24/7 Business Response',
            'Rolling Steel & Sectional Doors',
            'Loading Dock Equipment Repair',
            'Fire Door Drop Testing',
            'Preventive Maintenance Plans',
            'OSHA Compliant Repairs'
        ],
        processSteps: [
            {
                number: 1,
                title: 'Site Assessment',
                description: 'We evaluate your facility needs, door specifications, usage frequency, and security requirements.',
            },
            {
                number: 2,
                title: 'Custom Solution Design',
                description: 'We recommend the right commercial door type, size, insulation, and opener system for your business.',
            },
            {
                number: 3,
                title: 'Professional Installation',
                description: 'Our certified technicians install your commercial door system with minimal disruption to your operations.',
            },
            {
                number: 4,
                title: 'Testing & Training',
                description: 'We test all safety features, train your staff on operation, and provide maintenance guidelines.',
            }
        ],
        faqs: [
            { question: 'What types of commercial garage doors do you install?', answer: 'We install rolling steel doors, sectional overhead doors, high-speed doors, fire-rated doors, insulated doors, and loading dock equipment. We work with all major commercial brands including Overhead Door, Amarr, and Wayne Dalton.' },
            { question: 'Do you offer 24/7 emergency service for businesses?', answer: 'Yes, we understand that door failures can halt business operations. We provide 24/7 emergency repair service for commercial clients with priority response times.' },
            { question: 'How long do commercial garage doors last?', answer: 'With proper maintenance, commercial doors last 15-25 years. High-cycle springs and commercial-grade hardware are designed for heavy daily use. We offer preventive maintenance programs to maximize lifespan.' },
            { question: 'Can you install doors that meet fire code requirements?', answer: 'Yes, we install fire-rated commercial doors that meet all local fire codes and safety regulations. We ensure compliance with building codes and can provide documentation for inspections.' },
            { question: 'Do you service loading dock equipment?', answer: 'Yes, we service and repair loading dock doors, dock levelers, dock seals, and related equipment. Our technicians are trained on all major loading dock systems.' }
        ],
        relatedServices: ['opener-installation', 'door-installation', 'emergency-repair'],
        keywords: {
            primary: 'commercial garage door northern nj',
            secondary: ['commercial door installation', 'loading dock repair', 'business garage door']
        }
    }
];

// Helper function to get service by slug
export function getServiceBySlug(slug: string): Service | undefined {
    return services.find(s => s.slug === slug);
}

// Helper function to get related services
export function getRelatedServices(serviceId: string): Service[] {
    const service = services.find(s => s.id === serviceId);
    if (!service) return [];

    return service.relatedServices
        .map(id => services.find(s => s.id === id))
        .filter((s): s is Service => s !== undefined);
}
