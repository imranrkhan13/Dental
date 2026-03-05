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
    "prague-clinics": {
        // ── Identity
        name: "Prague Clinics European Doctors",
        shortName: "Prague Clinics",
        tagline: "European Standards. Compassionate Care.",
        heroHeading: "Experience World-Class\nEuropean Healthcare.",
        heroSubheading:
            "From specialized family medicine to advanced diagnostics, we bring Czech medical excellence to Nad Al Sheba.",

        // ── Contact
        phone: "+971 4 558 0540",
        whatsapp: "97145580540",
        email: "reception@pragueclinics.ae",
        address: "Aswaaq Mall – 1st Floor, Nad Al Sheba 4, Dubai, UAE",
        mapLink: "https://goo.gl/maps/xyz123",

        // ── Brand colors
        accentColor: "#0A6C8C",         // Professional Medical Blue
        accentColorLight: "#F0F6FA",    // Soft sky blue for section bg
        highlightColor: "#E3A875",      // Warm sand/gold accents

        // ── Images
        heroImage: "https://www.medicaim.com/uploads/844651c0-f359-11e8-84f9-49c32aac8774/000204IstanbulAestheticCenterMedicaim.jpg",
        doctorImage: "https://img.freepik.com/premium-photo/medical-specialist-doing-healthcare-consultation-with-sick-patient-doctors-office-woman-working-as-doctor-consulting-person-with-illness-checkup-visit-healing-treatment_482257-29405.jpg",
        clinicImages: [
            "https://ideliahealth.com/wp-content/uploads/2023/02/istanbul-aesthetic-center-gallery-image-2.jpg",
            "https://davidbaileyfurniture.co.uk/wp-content/uploads/2020/08/hospital-aesthetics-830.jpg",
            "https://www.aestheticmed.com.pl/wp-content/uploads/2018/12/5ds_4876-edit-1.jpg"
        ],

        // ── Doctor (Primary Representative)
        doctorName: "Dr. Olga Janovska",
        doctorQual: "MD — Chief Physician & Founder",
        doctorBio:
            "A graduate of top Czech medical faculties with over 10 years of experience leading primary care networks in Europe. Dr. Janovska founded Prague Clinics to bring high-precision diagnostics and personalized European-style primary care to the UAE.",
        doctorCredentials: ["Charles University Alumni", "10+ Years Leadership", "60k+ Group Patients", "Diagnostic Specialist"],

        // ── Services
        services: [
            {
                icon: "Activity",
                title: "Family Medicine",
                subtitle: "European Primary Care",
                desc: "Focused on accurate diagnosis and long-term health management for adults, following strict European medical protocols.",
                image: "https://www.shutterstock.com/image-photo/male-doctor-visiting-female-cancer-600nw-2683296897.jpg",
            },
            {
                icon: "Baby",
                title: "Pediatrics",
                subtitle: "Specialized Child Care",
                desc: "Dedicated pediatric services including vaccinations, developmental tracking, and compassionate care for your little ones.",
                image: "https://newpeacylab.com/wp-content/uploads/2024/08/Medical_Treatment.jpg",
            },
            {
                icon: "Stethoscope",
                title: "Diagnostics",
                subtitle: "High-precision testing",
                desc: "State-of-the-art laboratory and imaging services to ensure early detection and highly accurate treatment pathways.",
                image: "https://ideliahealth.com/wp-content/uploads/2023/02/istanbul-aesthetic-center-gallery-image-2.jpg",
            },
            {
                icon: "Home",
                title: "Homecare Services",
                subtitle: "Care at your doorstep",
                desc: "Professional medical visits and nursing care delivered in the comfort of your home across Dubai.",
                image: "https://davidbaileyfurniture.co.uk/wp-content/uploads/2020/08/hospital-aesthetics-830.jpg",
            },
        ],

        // ── Testimonials
        testimonials: [
            { name: "Mohammed Al Falasi", location: "Dubai", text: "The European standards of care are evident. Professional staff and very clean facility. I highly recommend them.", rating: 5 },
            { name: "Elena R.", location: "Nad Al Sheba", text: "Finally, a clinic that listens. Dr. Jan was incredibly thorough with my diagnosis and the follow-up was excellent.", rating: 5 },
            { name: "Taha Sayed", location: "Dubai", text: "Very professional team. They use the latest technology and the environment is very calming.", rating: 5 },
        ],

        // ── Stats
        stats: [
            { value: "60k+", label: "European Patients" },
            { value: "45", label: "Group Locations" },
            { value: "4.9", label: "Google Rating" },
            { value: "10+", label: "Insurance Partners" },
        ],

        // ── Hours
        clinicHours: [
            { day: "Monday – Sunday", time: "10:00 – 22:00" },
        ],

        // ── About
        about:
            "Part of the renowned Vseobecny lekar Group, Prague Clinics brings a legacy of serving 60,000+ patients across 45 Central European locations to Dubai. We've built a clinic where advanced Czech medical technology and genuine compassionate care exist in equal measure.",
    },
    "madh-dental": {
        // ── Identity
        name: "Madh Dental Care- A Multispecialty Dental Clinic by Dr. Kriti Tiwari & Dr. Guru Jadhav",
        shortName: "Madh Dental",
        tagline: "Precision. Care. Excellence.",
        heroHeading: "The Smile You've\nAlways Wanted.",
        heroSubheading:
            "Advanced dental care crafted with precision and delivered with warmth — in the heart of Mumbai.",

        // ── Contact
        phone: "+91 79772 57458",
        whatsapp: "917977257458",
        email: "contact@madhdental.com",
        address: "Shop no. 2, Tiwari Complex, Madh Island, Near Harbadevi Mandir, Malad- (W), Mumbai 400061",
        mapLink: "https://maps.google.com/?cid=11724461827431797227&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",

        // ── Brand colors
        accentColor: "#1A1A1A",
        accentColorLight: "#F5F0E8",
        highlightColor: "#C8A45D",

        // ── Images from Google Maps
        heroImage: "https://lh3.googleusercontent.com/p/AF1QipOBA1jyqK5HtgJzXXTbgoAJ3Zxv2Nv7elopwQqD=s4000",
        doctorImage: "https://lh3.googleusercontent.com/p/AF1QipMK2hOULT1JkkqOEThHuhUgH80ydomfpFb96qSJ=s4000",
        clinicImages: [
            "https://lh3.googleusercontent.com/p/AF1QipOzHtITIYBdnNxQygJdMHXUbEmEvO1PND84FL9l=s4000",
            "https://lh3.googleusercontent.com/p/AF1QipP6UN7k6HZ-InFUkzycHjgYc4FNm_zJiySgQMdn=s4000",
            "https://lh3.googleusercontent.com/p/AF1QipO8LLBG822WAvRApeyXTB329QJrw8Xx3H8j-cPz=s4000",
        ],

        // ── Doctor
        doctorName: "Dr. Kriti Tiwari & Dr. Guru Jadhav",
        doctorQual: "BDS, MDS — Specialized Dental Surgeons",
        doctorBio:
            "With over 18 years of collective experience, Dr. Kriti and Dr. Guru have transformed thousands of smiles. Known for their gentle approach and pain-free treatments, they specialize in making even the most anxious patients feel at home.",
        doctorCredentials: ["5.0 Google Rating", "18+ Years Experience", "4,000+ Smiles", "Pain-Free Specialist"],

        // ── Services
        services: [
            {
                icon: "Layers",
                title: "Root Canal",
                subtitle: "Pain-free precision",
                desc: "Expert endodontic therapy using modern techniques. Patients consistently report a stress-free experience with natural-looking results.",
                image: "https://lh3.googleusercontent.com/p/AF1QipNelNjV6WnCOB1VH32a6atZoYQaH3DATdrNUfTZ=s4000",
            },
            {
                icon: "Sparkles",
                title: "Smile Designing",
                subtitle: "Complete transformation",
                desc: "From veneers to full-mouth reconstructions, we use digital previews to craft the perfect smile tailored to your face.",
                image: "https://lh3.googleusercontent.com/p/AF1QipOFbqtQzO_tX_WoK76aIkvHLnyP72ilHvpa8-Mb=s4000",
            },
            {
                icon: "Shield",
                title: "Dental Implants",
                subtitle: "Permanent restoration",
                desc: "State-of-the-art implant fixtures that restore both function and aesthetics with a focus on long-term durability.",
                image: "https://lh3.googleusercontent.com/p/AF1QipOx_vm57EUQgcmu1k6zgzJ8U3TE6KGlP-pBuzfF=s4000",
            },
            {
                icon: "AlignCenter",
                title: "Invisible Aligners",
                subtitle: "Discreet correction",
                desc: "Straighten your teeth without metal braces using clear aligners that are virtually invisible and completely comfortable.",
                image: "https://lh3.googleusercontent.com/p/AF1QipOmgYTS0d4awK087nbUo5jFHlsabgW3p4unz0x9=s4000",
            },
        ],

        // ── Testimonials
        testimonials: [
            { name: "Misbah Furniturewala", location: "Mumbai", text: "I recently had a root canal done by Dr. Kriti, and I’m really happy with the experience. She was professional, gentle, and made the whole process feel smooth and stress-free. She also did a great job with the aesthetics - my tooth looks completely natural. I highly recommend her!", rating: 5 },
            { name: "Sachin Mendhare", location: "Mumbai", text: "If you are looking for exceptional dental care and any dental treatment, then this is the place to be. Dr Kriti is extremely knowledgeable and professional yet approachable and comforting in her care. I have had multiple visits at Madh Dental not only for myself but also with other family members for their appointments and I have always admired how smoothly everything operates under their ownership. I pray they are always met with the goodness they spread to others and I am certain that they will always meet with success in each and every endeavour. God bless, thank you.", rating: 5 },
            { name: "Ayesha Qureshi", location: "Madh Island", text: "I've been visiting Dr Kriti for many of my teeth fillings and implant fixtures along with my mom who first introduced me to this clinic. I must say that this place is a safe place for someone sooo scared of dentists and dental treatment- Dr Kriti makes sure to take such good care! Even when I'm not ready or feeling anxious, she lets me take my time and very gently and calmly guides me throughout the procedure. Feels like I'm talking to a good friend or my sister, hehe. Thank you for all the great care!!!", rating: 5 },
        ],

        // ── Stats
        stats: [
            { value: "4,000+", label: "Smiles Transformed" },
            { value: "18", label: "Years of Practice" },
            { value: "5.0", label: "Google Rating" },
            { value: "98%", label: "Recommend Us" },
        ],

        // ── Hours
        clinicHours: [
            { day: "Mon – Sat", time: "10:00 – 14:00, 17:00 – 21:00" },
            { day: "Sunday", time: "10:00 – 14:00" },
        ],

        about:
            "Madh Dental Care was founded on the principle that world-class dentistry should be calm and personal. We specialize in treating dental anxiety with kindness and cutting-edge technology.",
    }
    // ── ADD MORE CLINICS BELOW ─────────────────────────────────────────────────
    // "new-clinic": { ... }
};