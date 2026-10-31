# Perfect Tyre — Master Website Documentation & Deployment Guide

Welcome to the official static website codebase for **PERFECT TYRE**, a multi-brand tyre showroom and sales & service business.

The showroom offers tyres from major tyre brands and operates through the following five associated showroom/business identities:
1. **Bridgestone Select – Perfect Tyre**
2. **Yokohama Club Network – Perfect Wheels**
3. **Perfect Tyre Sales Service**
4. **Bridgestone Select – Suraj Motor Comp**
5. **PERFECT TYRES ZONE**

---

## 1. Technology Architecture

This website is engineered strictly as a **100% Static Frontend Application**. It requires no Node.js backend, no database, no PHP, and no build compilation steps. It runs immediately in any modern web browser and can be hosted on any static web host, CDN, or Apache/Nginx web server.

- **HTML5**: Semantic, accessible markup with Open Graph meta tags and structured headings.
- **CSS3 / Vanilla CSS**: Located in `assets/css/style.css`, built using 2026 cutting-edge modern CSS features: custom Design Tokens, frosted glassmorphism (`backdrop-filter`), ambient radial glows, live pulse status indicators, multi-layer studio depth shadows, and an ultra-clean corporate daylight luxury theme.
- **Bootstrap 5.3 (via CDN)**: Responsive grid, navigation toggles, modal dialogs, and utility classes.
- **Bootstrap Icons (via CDN)**: Clean iconography across trust badges, vehicle categories, and contact cards.
- **Google Fonts**: Modern automotive typography utilizing **Outfit** for bold headlines, **Plus Jakarta Sans** for body readability, and **JetBrains Mono** for tyre dimension typography.
- **Vanilla JavaScript**: Located in `assets/js/main.js`, providing an interactive tyre finder, live category filtering, visual sidewall anatomy decoder, client-side form validation, and a preformatted WhatsApp enquiry engine.

---

## 2. Directory Structure

```
WEBSITE/
├── index.html              # Homepage: Hero, Trust Strip, Tyre Finder, Brands, Categories, Services, Network, Journey
├── about.html              # About Us: Multi-brand concept, sizing integrity, showroom profile
├── tyres.html              # Tyres & Products: Interactive sidewall anatomy visualizer, filterable sample catalogue
├── services.html           # Tyre Services: 3D alignment, balancing, tyre rotation, inspection, repair, enquiry form
├── brands.html             # Brands & Network: Area A (Manufacturers) and Area B (5 Showroom Identities)
├── contact.html            # Contact: Validated enquiry form, click-to-call, WhatsApp trigger, showroom directory
├── 404.html                # Custom branded 404 error page
├── README.md               # Setup, customization, and business launch instructions
└── assets/
    ├── css/
    │   └── style.css       # Master stylesheet and design system
    ├── js/
    │   └── main.js         # Frontend interactive engine and business configuration
    └── images/
        ├── hero-automotive.jpg         # Luxury SUV wheel and wet asphalt hero photograph
        ├── tyre-showroom.jpg           # Modern multi-brand tyre showroom interior
        ├── service-workshop.jpg        # 3D laser wheel alignment workshop bay
        ├── technician-inspection.jpg   # Technician measuring tread depth with digital gauge
        ├── tyre-tread-closeup.jpg      # Macro high-performance radial tread
        ├── tyre-commercial.jpg         # Heavy commercial truck tyre
        ├── tyre-motorcycle.jpg         # Sport two-wheeler motorcycle tyre
        └── tyre-tractor.jpg            # Deep-lug agricultural tractor tyre
```

---

## 3. How to Launch & Test Locally

### Option A: Direct Browser File Opening
Simply double-click `index.html` or drag it into any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari). All navigation, CSS styles, JavaScript interactions, and images will work immediately.

### Option B: Local Static Web Server (Optional)
If you prefer testing with a local HTTP server:
- **Python**: Run `python -m http.server 8000` in the `WEBSITE` directory, then visit `http://localhost:8000`.
- **VS Code Live Server**: Right-click `index.html` and select **"Open with Live Server"**.

---

## 4. Business Configuration Guide (Required Before Public Launch)

All business details, showroom phone numbers, WhatsApp contact numbers, and network addresses are centralized in **`assets/js/main.js`** inside the `BUSINESS_CONFIG` object (lines 14–80).

### Step 1: Open `assets/js/main.js` in Any Text Editor
Locate the `BUSINESS_CONFIG` object at the top of the file:

```javascript
const BUSINESS_CONFIG = {
  brandName: "Perfect Tyre",
  tagline: "Quality Tyres. Expert Guidance. Confident Driving.",

  // 1. Primary Showroom Contact Details
  phoneNumber: "+91 98765 43210",       // Enter real phone number
  whatsappNumber: "919876543210",        // Enter digits only (with country code)
  emailAddress: "info@perfecttyre.in",   // Enter verified business email
  showroomAddress: "Plot No. 12, Main Automotive Road, City...",
  googleMapsUrl: "https://maps.google.com/?q=...",

  // 2. Verified Operating Hours
  businessHours: {
    weekdays: "Monday – Saturday: 9:30 AM – 8:00 PM",
    sunday: "Sunday: By Appointment / Closed",
  },

  // 3. The 5 Associated Showroom Identities
  networkIdentities: [
    {
      id: "bridgestone-select-pt",
      name: "Bridgestone Select – Perfect Tyre",
      location: "Shop 1-2, Commercial Complex, Sector 4...",
      phone: "+91 98765 00001",
      googleMapsLink: "https://maps.google.com/..."
    },
    // ... update the remaining 4 identities
  ]
};
```

### Step 2: What Happens If Fields Are Left Empty?
If a telephone number or WhatsApp number is not yet entered, the site will **not** display fake numbers or broken links. Instead, clicking the WhatsApp button will open a polite, branded helper modal displaying the preformatted tyre enquiry message and allowing the user to copy the text to their clipboard.

---

## 5. WhatsApp Message Formatting

When a user submits an enquiry or clicks **"Enquire on WhatsApp"**, the site automatically generates the standardized message format:

```
Hello Perfect Tyre,

I would like to enquire about tyres.

Vehicle Category: Passenger Car
Vehicle Make/Model: Honda City
Tyre Size: 185/65 R15
Preferred Brand: Bridgestone
Required Service: Tyre Replacement & Fitting

Please share suitable options and current availability.

Thank you.
```

The message is URL-encoded and automatically opens `https://wa.me/<configured-number>?text=<message>`.

---

## 6. Static Hosting Deployment

This site can be deployed instantly to any static hosting provider:

- **Netlify**: Drag and drop the `WEBSITE` folder into the Netlify dashboard.
- **GitHub Pages**: Push this repository to GitHub and enable Pages in repository Settings (Branch: `main`, Folder: `/root`).
- **Cloudflare Pages**: Connect the repository or upload the static folder directly.
- **cPanel / Apache / Nginx / Traditional Web Hosting**: Upload all files to the `public_html` directory via FTP/File Manager.

---

## 7. Quality Assurance Checklist Completed

- [x] All 6 core HTML pages created and interconnected.
- [x] Branded `404.html` page included.
- [x] Responsive navigation with active page indicator, mobile burger menu, and sticky header.
- [x] Responsive layout validated across mobile, tablet, laptop, and desktop viewports.
- [x] Interactive Tyre Finder with category selection, brand selection, and size input.
- [x] Interactive Tyre Size Sidewall Anatomy Decoder (205 / 55 / R / 16).
- [x] Real-time category and brand filterable sample tyre catalogue.
- [x] Validated service and contact enquiry forms with client-side review modal.
- [x] High-resolution automotive imagery in `assets/images/` without placeholder fallbacks.
- [x] Clean browser console with zero runtime JavaScript errors.
- [x] Clear disclaimers stating that product stock and exact fitments are verified in-store.
