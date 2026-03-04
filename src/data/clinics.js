// src/data/clinics.js
// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW CLINIC:
//  1. Copy a block below and paste at the bottom with a new key.
//  2. Key = subdomain slug. "dr-idris" → dr-idris.techiesaie.com
//  3. All `image` fields accept any public URL. Use Unsplash, your own CDN, etc.
//  4. Save & deploy — the clinic is instantly live.
//
// IMAGE GUIDE:
//   heroImage     — full-bleed hero photo (doctor / clinic exterior)  ~1400×900px
//   doctorImage   — doctor portrait, ideally square or portrait         ~600×700px
//   clinicImages  — array of clinic interior shots shown in gallery     ~800×600px
//   serviceImages — one image per service (can be Unsplash links)
// ─────────────────────────────────────────────────────────────────────────────

export const clinics = {

    // ── CLINIC 1 ──────────────────────────────────────────────────────────────
    "dr-idris": {
        // ── Identity
        name: "Dr. Idris Jariwalla",
        shortName: "Jariwalla Dental",
        tagline: "Precision. Care. Excellence.",
        heroHeading: "The Smile You've\nAlways Wanted.",
        heroSubheading:
            "Advanced dental care crafted with precision and delivered with warmth — in the heart of Mumbai.",

        // ── Contact
        phone: "+91 98765 43210",
        whatsapp: "919876543210",
        email: "contact@dridris.com",
        address: "42, Linking Road, Bandra West, Mumbai 400050",
        mapLink: "https://maps.google.com/?q=Bandra+West+Mumbai",

        // ── Brand colors (keeps white base, accent used sparingly)
        accentColor: "#1A1A1A",         // near-black for headings, borders
        accentColorLight: "#F5F0E8",    // warm off-white for section bg
        highlightColor: "#C8A45D",      // gold — used only for key accents

        // ── Images — replace with your own URLs
        heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80",
        doctorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
        clinicImages: [
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
            "https://images.unsplash.com/photo-1643660526741-094639fbe53a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVudGFsJTIwY2xpbmljfGVufDB8fDB8fHww?w=800&q=80",
            "https://merakidentalstudio.com/wp-content/uploads/2023/07/Meraki-dental-studio-best-dental-clinic-in-india-1200x800-1.jpg?w=800&q=80",
        ],

        // ── Doctor
        doctorName: "Dr. Idris Jariwalla",
        doctorQual: "BDS, MDS — Prosthodontics",
        doctorBio:
            "With 18 years of experience in advanced prosthodontics and smile design, Dr. Idris trained at the University of Michigan and has transformed over 4,000 smiles. His philosophy: precision in every detail, warmth in every interaction.",
        doctorCredentials: ["University of Michigan Alumni", "18+ Years Experience", "4,000+ Smiles", "Pain-Free Specialist"],

        // ── Services (icon = lucide icon name, image = Unsplash URL)
        services: [
            {
                icon: "Layers",
                title: "Dental Implants",
                subtitle: "Permanent restoration",
                desc: "Precision titanium implants that look, feel, and function exactly like natural teeth — backed by a lifetime structural guarantee.",
                image: "https://motherdentalhospital.in/wp-content/uploads/2024/07/dental-hospitals.webp?w=600&q=80",
            },
            {
                icon: "Sparkles",
                title: "Smile Designing",
                subtitle: "Complete transformation",
                desc: "Digital full-mouth makeovers — from veneers and bonding to complete smile reconstruction, previewed digitally before any work begins.",
                image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
            },
            {
                icon: "Shield",
                title: "Root Canal",
                subtitle: "Pain-free precision",
                desc: "Rotary endodontic therapy using the latest cone-beam imaging. Patients consistently report less discomfort than a routine filling.",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
            },
            {
                icon: "Sun",
                title: "Teeth Whitening",
                subtitle: "Up to 8 shades brighter",
                desc: "In-office Zoom whitening that delivers dramatic results in 60 minutes, with custom take-home maintenance kits included.",
                image: "https://bestdentaldeals.in/wp-content/uploads/2025/11/Economy-Setup-scaled-1.webp?w=600&q=80",
            },
            {
                icon: "AlignCenter",
                title: "Invisible Aligners",
                subtitle: "Discreet correction",
                desc: "Crystal-clear aligners custom-fabricated from your 3D digital scan. Straight teeth without metal, discomfort, or disruption to your life.",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
            },
            {
                icon: "Heart",
                title: "Kids Dentistry",
                subtitle: "Gentle & playful",
                desc: "Child-focused care in a calming, colourful environment. We turn every visit into a positive experience that builds healthy habits for life.",
                image: "https://bestdentaldeals.in/wp-content/uploads/2025/11/Economy-Setup-scaled-1.webp?w=600&q=80",
            },
        ],

        // ── Testimonials
        testimonials: [
            { name: "Priya Sharma", location: "Bandra", text: "Dr. Idris transformed my smile completely. The digital preview meant I knew exactly what to expect. Truly exceptional work.", rating: 5 },
            { name: "Rahul Mehta", location: "Andheri", text: "I was terrified of the dentist for years. One visit here changed everything — the care and the technology are in another league.", rating: 5 },
            { name: "Sonal Kapoor", location: "Juhu", text: "My implants are indistinguishable from real teeth. Six months on and I still can't believe the result. Worth every rupee.", rating: 5 },
            { name: "Vikram Nair", location: "Worli", text: "The attention to detail is extraordinary. Dr. Idris genuinely listens and delivers beyond what he promises.", rating: 5 },
            { name: "Anjali Desai", location: "Santacruz", text: "Both my children look forward to their appointments. I never thought I'd say that about a dental clinic.", rating: 5 },
        ],

        // ── Stats
        stats: [
            { value: "4,000+", label: "Smiles Transformed" },
            { value: "18", label: "Years of Practice" },
            { value: "4.9", label: "Google Rating" },
            { value: "98%", label: "Recommend Us" },
        ],

        // ── Hours
        clinicHours: [
            { day: "Monday – Friday", time: "9:00 – 19:00" },
            { day: "Saturday", time: "9:00 – 16:00" },
            { day: "Sunday", time: "Closed" },
        ],

        about:
            "Jariwalla Dental was founded on a simple conviction — that world-class dentistry should feel calm, transparent, and personal. We've spent 18 years building a clinic where advanced technology and genuine care exist in equal measure.",
    },

    // ── CLINIC 2 ──────────────────────────────────────────────────────────────
    "smile-dental": {
        name: "Smile Dental Care",
        shortName: "Smile Dental",
        tagline: "Family. Comfort. Confidence.",
        heroHeading: "Dentistry Your\nFamily Will Love.",
        heroSubheading:
            "Affordable, gentle dental care for every age — from your child's first visit to a complete smile transformation.",

        phone: "+91 91234 56780",
        whatsapp: "919123456780",
        email: "info@smiledental.com",
        address: "14, Connaught Place, New Delhi 110001",
        mapLink: "https://maps.google.com/?q=Connaught+Place+Delhi",

        accentColor: "#1A1A1A",
        accentColorLight: "#F0F4F8",
        highlightColor: "#2A7B9B",

        heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1400&q=80",
        doctorImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
        clinicImages: [
            "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
            "https://images.unsplash.com/photo-1588776814546-1ffb2b83e7a9?w=800&q=80",
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        ],

        doctorName: "Dr. Meera Kapila",
        doctorQual: "BDS, MDS — Orthodontics",
        doctorBio:
            "Dr. Meera Kapila has served Delhi families for over 12 years with a specialisation in orthodontics and preventive care. Her approach is straightforward: no unnecessary procedures, honest advice, and lasting results that patients are proud of.",
        doctorCredentials: ["12+ Years Experience", "Orthodontics Specialist", "6,000+ Patients", "Family Care Expert"],

        services: [
            { icon: "AlignCenter", title: "Braces & Aligners", subtitle: "Precision straightening", desc: "Traditional braces, ceramic options, and invisible aligners — all custom-planned using 3D digital scans for the most accurate outcome.", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80" },
            { icon: "Heart", title: "Kids Dentistry", subtitle: "From the first tooth", desc: "A calm, friendly space designed for children. We make every visit positive and build habits that protect their smiles for life.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80" },
            { icon: "Sparkles", title: "Cosmetic Dentistry", subtitle: "Aesthetic refinement", desc: "Veneers, bonding, whitening, and contouring — individually planned to enhance your natural features, not override them.", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80" },
            { icon: "Zap", title: "Tooth Extraction", subtitle: "Gentle & painless", desc: "Simple and surgical extractions performed with precision. Most patients are back to their day within hours.", image: "https://images.unsplash.com/photo-1588776814546-1ffb2b83e7a9?w=600&q=80" },
            { icon: "Shield", title: "Preventive Care", subtitle: "Protection first", desc: "Scaling, polishing, fluoride treatment, and sealants. The best dental care is the kind that stops problems before they start.", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80" },
            { icon: "Layers", title: "Digital X-Rays", subtitle: "Accurate diagnosis", desc: "Low-radiation digital X-rays and 3D CBCT scanning for diagnoses that are fast, precise, and completely comfortable.", image: "https://images.unsplash.com/photo-1598256989814-5e4f587abc68?w=600&q=80" },
        ],

        testimonials: [
            { name: "Neha Gupta", location: "CP, Delhi", text: "My 6-year-old was terrified of dentists. Dr. Meera turned it around in one visit. He actually asks when we're going back.", rating: 5 },
            { name: "Amit Sehgal", location: "Dwarka", text: "Got aligners at 32. Best decision I've made. The process was clear from day one and the results are genuinely stunning.", rating: 5 },
            { name: "Pooja Malhotra", location: "Rohini", text: "Exceptional quality at honest prices. The team is warm, the clinic is spotless, and the care is first-rate.", rating: 5 },
            { name: "Deepak Arora", location: "Lajpat Nagar", text: "Wisdom tooth removal with no drama whatsoever. The aftercare was attentive and the recovery was smooth.", rating: 5 },
        ],

        stats: [
            { value: "6,000+", label: "Patients Treated" },
            { value: "12", label: "Years of Practice" },
            { value: "4.9", label: "Google Rating" },
            { value: "97%", label: "Recommend Us" },
        ],

        clinicHours: [
            { day: "Monday – Saturday", time: "10:00 – 20:00" },
            { day: "Sunday", time: "10:00 – 14:00" },
        ],

        about:
            "Smile Dental Care was built around one idea — that great dentistry should be accessible to every family. For 12 years we have delivered honest, affordable, high-quality care across every age group, from a child's first tooth to a complete adult smile makeover.",
    },

    // ── ADD MORE CLINICS BELOW ─────────────────────────────────────────────────
    // "new-clinic": { ... }
};