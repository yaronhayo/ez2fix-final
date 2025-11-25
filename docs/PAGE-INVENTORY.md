# Page Inventory

This document provides a comprehensive inventory of all page templates within the `/rebuild` folder, detailing the sections present on each page.

## Core Pages

### Home (`src/pages/index.astro`)
- **Header**: Navigation and contact info.
- **Hero Section**: `HomeHero` component with video background, headline, and booking form (desktop).
- **Intro Section**: Keyword-optimized text about services and coverage.
- **Mobile Booking Form**: Visible only on mobile devices.
- **Services Grid**: `ServicesGrid` component listing main services.
- **CTA Button**: Link to all services.
- **Recent Guides**: Links to 3 latest blog posts.
- **Reviews Section**: `ReviewsCarousel` component.
- **Service Area Map**: Map and list of priority cities.
- **Trust Section**: Trust signals (Licensed, Warranty, etc.).
- **Final CTA**: Call to action for booking.
- **Footer**: Links and contact info.

### About (`src/pages/about.astro`)
- **Header**
- **Breadcrumb**
- **Hero Section**: Title and tagline.
- **Our Story**: Company history and mission.
- **Our Credentials**: Trust signals grid.
- **Our Values**: Core company values list.
- **Service Area**: List of counties served.
- **CTA Section**: Booking and call buttons.
- **Footer**

### Contact (`src/pages/contact.astro`)
- **Header**
- **Breadcrumb**
- **Hero Section**: Title.
- **Contact Section**:
    - Contact Information (Phone, Email, Hours).
    - Contact Form (Name, Email, Phone, Message).
- **Service Area Map**: Google Map and coverage text.
- **Footer**

### FAQ (`src/pages/faq.astro`)
- **Header**
- **Breadcrumb**
- **Hero Section**: Title and intro.
- **FAQs Section**: Accordion list of FAQs grouped by category.
- **Still Have Questions CTA**: Buttons to contact or call.
- **Footer**

### Reviews (`src/pages/reviews.astro`)
- **Header**
- **Hero Section**: Title, aggregate rating stats.
- **Reviews Grid**: Grid of `ReviewCard` components.
- **Google Reviews Link**: External link to Google profile.
- **Final CTA**
- **Footer**

### Gallery (`src/pages/gallery.astro`)
- **Header**
- **Hero Section**: Title and description.
- **Gallery Grid**: Before/After photo comparison cards.
- **Final CTA**
- **Footer**

### Booking (`src/pages/booking.astro`)
- **Header**
- **Hero Section**: (Implicit in `BaseLayout` or separate?) *Note: The file uses `BaseLayout` and then a section with `BookingForm`.*
- **Booking Form Section**: The main `BookingForm` component.
- **Trust Signals**: (If present in Footer or implicit).
- **Footer**

### Thank You (`src/pages/thank-you.astro`)
- **Header**
- **Hero Section**: Success message and "What Happens Next" steps.
- **Emergency Contact**: CTA for urgent issues.
- **Trust Signals**: Grid of trust icons.
- **CTA**: Link to browse services.
- **Footer**

## Service Pages

### Services Index (`src/pages/services/index.astro`)
- **Header**
- **Hero Section**: Background image, title, and CTAs.
- **Services Grid**: Complete list of services.
- **Reviews Section**: `ReviewsCarousel`.
- **Trust Section**: Trust icons grid.
- **Final CTA**
- **Footer**

### Service Detail (`src/pages/services/[slug].astro`)
- **Header**
- **Hero Section**: Custom hero with service image and emergency badge.
- **Overview Section**:
    - About text.
    - "Why Choose Us" list.
    - Promotions display.
    - Service image with trust badge.
- **Process Steps**: Step-by-step process (if available).
- **Reviews Section**: `ReviewsCarousel` filtered for service (if applicable).
- **FAQs Section**: Service-specific FAQs.
- **Related Services**: Grid of related services.
- **Final CTA**
- **Footer**

## Location Pages

### Service Areas Index (`src/pages/service-areas/index.astro`)
- **Header**
- **Hero Section**: Title and map background.
- **Service Areas List**: Grouped by county, listing cities with ZIP counts.
- **Map Section Placeholder**: Placeholder for interactive map.
- **Final CTA**
- **Footer**

### City Detail (`src/pages/service-areas/[city].astro`)
- **Header**
- **Breadcrumb**
- **Hero Section**: City-specific title and intro.
- **Local Info Section**:
    - Local content text.
    - Service stats (Customers served, etc.).
    - ZIP Codes & Neighborhoods list.
- **Popular Services**: Grid of popular services in that city.
- **Nearby Cities**: Links to adjacent service areas.
- **Trust Section**: Localized trust signals.
- **Final CTA**
- **Footer**

## Blog Pages

### Blog Index (`src/pages/blog/index.astro`)
- **Header**
- **Hero Section**: Title and pattern background.
- **Category Filter**: Sticky navigation for blog categories.
- **Blog Grid**: Grid of blog post cards (featured and standard).
- **Footer**

### Blog Post (`src/pages/blog/[...slug].astro`)
- **Header**
- **Progress Bar**: Reading progress indicator.
- **Post Header**: Title, meta info, author.
- **Main Content**:
    - Featured Image.
    - Article Content (Prose).
    - Share Buttons & Tags.
    - CTA Box.
- **Sidebar**:
    - Table of Contents.
    - Related Posts.
    - Service Area widget.
- **Footer**

## Legal Pages

### Privacy Policy (`src/pages/privacy-policy.astro`)
- **Header**
- **Breadcrumb**
- **Content Section**: Full text of the privacy policy.
- **Footer**

### Terms of Service (`src/pages/terms-of-service.astro`)
- **Header**
- **Breadcrumb**
- **Content Section**: Full text of the terms of service.
- **Footer**

### Accessibility (`src/pages/accessibility.astro`)
- **Header**
- **Breadcrumb**
- **Content Section**: Full text of the accessibility statement.
- **Footer**
