// src/pages/ClinicPage.jsx
// oven.studio-inspired: editorial typography, extreme whitespace,
// sharp geometry, Instrument Serif + DM Sans pairing, white base.

import { useState, useEffect, useRef } from "react";

// ─── FALLBACK DATA ────────────────────────────────────────────────────────────
export const DEMO = {
    name: "Dr. Name",
    shortName: "Clinic",
    tagline: "Professional. Caring. Trusted.",

    heroHeading: "Your Health\nOur Priority.",
    heroSubheading: "High-quality care delivered with modern technology and a patient-first approach.",

    phone: "+1 000 000 0000",
    whatsapp: "10000000000",
    email: "contact@example.com",

    address: "123 Medical Street, City, Country",
    mapLink: "https://maps.google.com",

    accentColor: "#1A1A1A",
    accentColorLight: "#F8F6F1",
    highlightColor: "#C8A45D",

    heroImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80",
    doctorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",

    clinicImages: [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
        "https://images.unsplash.com/photo-1588776814546-1ffb2b83e7a9?w=800&q=80",
        "https://images.unsplash.com/photo-1598256989814-5e4f587abc68?w=800&q=80",
    ],

    doctorName: "Dr. Name",
    doctorQual: "MD — Specialist",
    doctorBio:
        "This is placeholder content describing the doctor. Replace this with real credentials, experience, and background information.",

    doctorCredentials: [
        "Board Certified",
        "10+ Years Experience",
        "Advanced Technology",
        "Patient Focused Care",
    ],

    services: [
        {
            icon: "implant",
            title: "Service 1",
            subtitle: "Primary treatment",
            desc: "Placeholder description explaining this service and its benefits for patients.",
            image: "https://images.unsplash.com/photo-1588776814546-1ffb2b83e7a9?w=600&q=80",
        },
        {
            icon: "smile",
            title: "Service 2",
            subtitle: "Advanced care",
            desc: "Placeholder description explaining this service and how it improves outcomes.",
            image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
        },
        {
            icon: "root",
            title: "Service 3",
            subtitle: "Specialized treatment",
            desc: "Placeholder description for another key treatment offered at the clinic.",
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
        },
        {
            icon: "whiten",
            title: "Service 4",
            subtitle: "Cosmetic procedure",
            desc: "Placeholder content describing cosmetic or enhancement treatments.",
            image: "https://images.unsplash.com/photo-1598256989814-5e4f587abc68?w=600&q=80",
        },
        {
            icon: "aligner",
            title: "Service 5",
            subtitle: "Corrective care",
            desc: "Placeholder description explaining corrective treatment options.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
        },
        {
            icon: "kids",
            title: "Service 6",
            subtitle: "Preventive care",
            desc: "Placeholder description for preventive and routine care services.",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
        },
    ],

    testimonials: [
        {
            name: "Patient Name",
            location: "City",
            text: "This is placeholder feedback from a patient. Replace with real testimonials.",
            rating: 5,
        },
        {
            name: "Patient Name",
            location: "City",
            text: "Another example testimonial describing patient experience.",
            rating: 5,
        },
        {
            name: "Patient Name",
            location: "City",
            text: "Placeholder testimonial highlighting quality of care.",
            rating: 5,
        },
    ],

    stats: [
        { value: "1,000+", label: "Patients" },
        { value: "10+", label: "Years" },
        { value: "4.9★", label: "Rating" },
        { value: "95%", label: "Satisfaction" },
    ],

    clinicHours: [
        { day: "Monday – Friday", time: "9:00 – 18:00" },
        { day: "Saturday", time: "9:00 – 14:00" },
        { day: "Sunday", time: "Closed" },
    ],

    about:
        "This is generic placeholder content describing the clinic. Replace with real information about your practice, philosophy, and approach to care.",
};

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const ICONS = {
    implant: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.1V20h8v-4.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7z" /><line x1="9" y1="20" x2="15" y2="20" /><line x1="9" y1="22" x2="15" y2="22" /></svg>,
    smile: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 13s1.5 3 4 3 4-3 4-3" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
    root: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L8 8H4l4 8 4-4 4 4 4-8h-4L12 2z" /><line x1="12" y1="12" x2="12" y2="22" /></svg>,
    whiten: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>,
    aligner: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18M3 12h18M3 17h18" /><rect x="2" y="5" width="20" height="14" rx="3" /></svg>,
    kids: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
    shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    layers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>,
    zap: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
    arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
    arrowUpRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>,
    menu: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
    close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
    phone: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l1.27-.89a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
    mapPin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    whatsapp: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>,
    star: <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>,
};

const Icon = ({ name, size = 20, style = {} }) => {
    const svg = ICONS[name] || ICONS.smile;
    return <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, flexShrink: 0, ...style }}>{svg}</span>;
};

// ─── CSS ──────────────────────────────────────────────────────────────────────
function useCSS(c) {
    useEffect(() => {
        const id = "ov-css";
        document.getElementById(id)?.remove();
        const s = document.createElement("style");
        s.id = id;
        const hl = c.highlightColor || "#C8A45D";
        const bg = c.accentColorLight || "#F8F6F1";
        s.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; font-size: 16px; }
      body {
        font-family: 'DM Sans', sans-serif;
        background: #fff;
        color: #1A1A1A;
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
      }

      /* Typography */
      .ov-serif { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; }
      .ov-serif-i { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; }
      .ov-label {
        font-size: 10px; font-weight: 600; letter-spacing: 2.5px;
        text-transform: uppercase; color: #999;
      }
      .ov-hl { color: ${hl}; }

      /* Buttons */
      .ov-btn {
        display: inline-flex; align-items: center; gap: 10px;
        background: #1A1A1A; color: #fff; border: none;
        padding: 14px 28px; font-family: 'DM Sans', sans-serif;
        font-size: 13px; font-weight: 500; letter-spacing: .3px;
        cursor: pointer; text-decoration: none;
        transition: background .2s, transform .2s;
        border-radius: 0;
      }
      .ov-btn:hover { background: #333; }
      .ov-btn-outline {
        display: inline-flex; align-items: center; gap: 10px;
        background: transparent; color: #1A1A1A;
        border: 1px solid #1A1A1A;
        padding: 13px 27px; font-family: 'DM Sans', sans-serif;
        font-size: 13px; font-weight: 500; letter-spacing: .3px;
        cursor: pointer; text-decoration: none;
        transition: all .2s; border-radius: 0;
      }
      .ov-btn-outline:hover { background: #1A1A1A; color: #fff; }
      .ov-btn-hl {
        display: inline-flex; align-items: center; gap: 10px;
        background: ${hl}; color: #fff; border: none;
        padding: 14px 28px; font-family: 'DM Sans', sans-serif;
        font-size: 13px; font-weight: 500; letter-spacing: .3px;
        cursor: pointer; text-decoration: none;
        transition: opacity .2s; border-radius: 0;
      }
      .ov-btn-hl:hover { opacity: .88; }

      /* Form */
      .ov-input {
        width: 100%; padding: 14px 0; border: none;
        border-bottom: 1px solid #D0D0D0;
        background: transparent; font-family: 'DM Sans', sans-serif;
        font-size: 15px; color: #1A1A1A; outline: none;
        transition: border-color .2s;
        border-radius: 0;
      }
      .ov-input:focus { border-color: #1A1A1A; }
      .ov-input::placeholder { color: #AAA; }
      select.ov-input { appearance: none; cursor: pointer; }
      textarea.ov-input { resize: none; height: 90px; padding-top: 14px; }

      /* Nav */
      .ov-navlink {
        font-size: 13px; font-weight: 500; color: #555; cursor: pointer;
        letter-spacing: .2px; text-decoration: none;
        transition: color .2s; position: relative;
      }
      .ov-navlink::after {
        content: ''; position: absolute; left: 0; bottom: -2px;
        width: 0; height: 1px; background: #1A1A1A; transition: width .25s;
      }
      .ov-navlink:hover { color: #1A1A1A; }
      .ov-navlink:hover::after, .ov-navlink.on::after { width: 100%; }
      .ov-navlink.on { color: #1A1A1A; }

      /* Card hover */
      .ov-lift { transition: transform .35s cubic-bezier(.22,1,.36,1); }
      .ov-lift:hover { transform: translateY(-6px); }

      /* Image hover zoom */
      .ov-img-wrap { overflow: hidden; }
      .ov-img-wrap img { transition: transform .6s cubic-bezier(.22,1,.36,1); width: 100%; height: 100%; object-fit: cover; display: block; }
      .ov-img-wrap:hover img { transform: scale(1.04); }

      /* Marquee */
      @keyframes ov-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .ov-marquee { display: flex; animation: ov-marquee 44s linear infinite; width: max-content; }
      .ov-marquee:hover { animation-play-state: paused; }

      /* Page entrance */
      @keyframes ov-fade { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
      .ov-page { animation: ov-fade .55s cubic-bezier(.22,1,.36,1) both; }

      /* Stagger */
      .ov-stagger > * { opacity: 0; animation: ov-fade .55s cubic-bezier(.22,1,.36,1) both; }
      .ov-stagger > *:nth-child(1) { animation-delay: .04s; }
      .ov-stagger > *:nth-child(2) { animation-delay: .12s; }
      .ov-stagger > *:nth-child(3) { animation-delay: .20s; }
      .ov-stagger > *:nth-child(4) { animation-delay: .28s; }
      .ov-stagger > *:nth-child(5) { animation-delay: .36s; }
      .ov-stagger > *:nth-child(6) { animation-delay: .44s; }

      /* FAQ */
      .ov-faq-body { max-height: 0; overflow: hidden; transition: max-height .45s cubic-bezier(.4,0,.2,1); }
      .ov-faq-body.open { max-height: 300px; }

      /* Scrollbar */
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-thumb { background: #D0D0D0; }
      ::-webkit-scrollbar-track { background: #fff; }

      /* Divider */
      .ov-divider { width: 100%; height: 1px; background: #E8E8E8; }

      /* Responsive */
      @media (max-width: 900px) {
        .ov-hide { display: none !important; }
        .ov-show { display: flex !important; }
        .ov-2col { grid-template-columns: 1fr !important; }
        .ov-3col { grid-template-columns: 1fr 1fr !important; }
      }
      @media (max-width: 560px) {
        .ov-3col { grid-template-columns: 1fr !important; }
        .ov-fgrid { grid-template-columns: 1fr !important; }
      }
    `;
        document.head.appendChild(s);
        return () => document.getElementById(id)?.remove();
    }, [c.highlightColor]);
}

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ page, go, c }) {
    const [sc, setSc] = useState(false);
    const [mob, setMob] = useState(false);
    const hl = c.highlightColor || "#C8A45D";

    useEffect(() => {
        const fn = () => setSc(window.scrollY > 50);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const links = [["Home", "Home"], ["About", "About"], ["Services", "Services"], ["Contact", "Contact"]];

    return (
        <>
            <nav style={{
                position: "fixed",
                top: sc ? "20px" : "0px",
                left: "50%",
                transform: "translateX(-50%)",
                width: sc ? "min(95%, 1200px)" : "100%",
                zIndex: 1000,
                height: sc ? 64 : 80,
                background: sc ? "rgba(255, 255, 255, 0.85)" : "transparent",
                backdropFilter: sc ? "blur(12px)" : "none",
                borderRadius: sc ? "100px" : "0px",
                border: sc ? "1px solid rgba(0,0,0,0.05)" : "none",
                boxShadow: sc ? "0 20px 40px rgba(0,0,0,0.05)" : "none",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                alignItems: "center",
                padding: "0 4%",
                justifyContent: "space-between",
                boxSizing: "border-box"
            }}>
                {/* Logo Section */}
                <div onClick={() => go("Home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{
                        width: 36, height: 36,
                        background: "#1A1A1A",
                        borderRadius: "10px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "transform 0.3s"
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.1V20h8v-4.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7z" /></svg>
                    </div>

                    {/* CLINIC NAME: Now always visible, with a smooth fade/slide on scroll */}
                    <div style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: sc ? 18 : 20, // Slightly shrinks when scrolled for elegance
                        color: "#1A1A1A",
                        letterSpacing: "-0.5px",
                        transition: "all 0.5s ease",
                        opacity: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    }}>
                        {c.shortName || c.name}
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="ov-hide-mobile" style={{ display: "flex", alignItems: "center", gap: 40 }}>
                    {links.map(([l, p]) => (
                        <span
                            key={p}
                            onClick={() => go(p)}
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                                cursor: "pointer",
                                color: page === p ? hl : "#1A1A1A",
                                transition: "0.3s",
                                opacity: page === p ? 1 : 0.6
                            }}
                        >
                            {l}
                        </span>
                    ))}
                    <button
                        className="ov-btn"
                        onClick={() => go("Book")}
                        style={{
                            padding: "12px 24px",
                            fontSize: 12,
                            borderRadius: "100px",
                            background: "#1A1A1A",
                            color: "#fff",
                            border: "none",
                            fontWeight: 600,
                            cursor: "pointer"
                        }}
                    >
                        Book Now
                    </button>
                </div>

                {/* Mobile Burger Trigger */}
                <button
                    className="ov-show-mobile"
                    style={{
                        display: "none",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 8
                    }}
                    onClick={() => setMob(!mob)}
                >
                    <div style={{ width: 22, height: 2, background: "#1A1A1A", marginBottom: 6, transition: "0.3s", transform: mob ? "rotate(45deg) translateY(6px)" : "none" }} />
                    <div style={{ width: 22, height: 2, background: "#1A1A1A", transition: "0.3s", transform: mob ? "rotate(-45deg) translateY(-6px)" : "none" }} />
                </button>
            </nav>

            {/* Mobile Full-Screen Overlay (Rest of your code remains exactly the same) */}
            <div style={{
                position: "fixed",
                top: 0, left: 0, right: 0, bottom: 0,
                zIndex: 999,
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                transform: mob ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                padding: "10%"
            }}>
                {links.map(([l, p]) => (
                    <div
                        key={p}
                        onClick={() => { go(p); setMob(false); }}
                        style={{
                            fontSize: 42,
                            fontFamily: "'Instrument Serif', serif",
                            color: page === p ? hl : "#1A1A1A",
                            cursor: "pointer"
                        }}
                    >
                        {l}
                    </div>
                ))}
                <button
                    onClick={() => { go("Book"); setMob(false); }}
                    style={{
                        marginTop: 40,
                        width: "100%",
                        padding: "20px",
                        borderRadius: "100px",
                        background: hl,
                        color: "#fff",
                        border: "none",
                        fontSize: 18,
                        fontWeight: 600
                    }}
                >
                    Book Appointment
                </button>

                {/* <button
                    onClick={() => setMob(false)}
                    style={{ position: "absolute", top: 30, right: "5%", background: "none", border: "none", fontSize: 14, fontWeight: 800, letterSpacing: 2 }}
                >
                    CLOSE
                </button> */}
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .ov-hide-mobile { display: none !important; }
                    .ov-show-mobile { display: block !important; }
                }
            `}</style>
        </>
    );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ c, go }) {
    const [in1, setIn1] = useState(false);
    const hl = c.highlightColor || "#C8A45D";
    const bgStone = "#F5F5F1";

    useEffect(() => {
        const t = setTimeout(() => setIn1(true), 60);
        return () => clearTimeout(t);
    }, []);

    const lines = c.heroHeading.split("\n");

    return (
        <section style={{
            minHeight: "100vh",
            paddingTop: 80,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            background: "#fff",
            overflow: "hidden"
        }}>
            {/* 1. TOP STATS STRIP - Upgraded with Ticker-feel */}
            <div style={{
                borderBottom: "1px solid #F0F0F0",
                padding: "12px 16px", // Fixed padding for consistency
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                zIndex: 20,
                position: "relative",
                width: "100%",
                boxSizing: "border-box",
                gap: "12px"
            }}>
                {/* Stats Container - The Scroll magic happens here */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(16px, 4vw, 40px)",
                    overflowX: "auto",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                    flex: "1",
                    paddingRight: "10px"
                }} className="ov-no-scrollbar">
                    {c.stats?.map((s, i) => (
                        <div key={s.label} style={{
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0, // Prevents the individual stat from squishing
                            opacity: in1 ? 1 : 0,
                            transform: in1 ? "none" : "translateY(10px)",
                            transition: `all 0.8s ease ${i * 0.1}s`,
                        }}>
                            <span style={{
                                fontFamily: "'Instrument Serif', serif",
                                fontSize: "clamp(20px, 2.5vw, 26px)",
                                color: "#1A1A1A",
                                lineHeight: 1.1
                            }}>
                                {s.value}
                            </span>
                            <span style={{
                                fontSize: "clamp(7px, 1.2vw, 8px)", // Smaller on mobile
                                fontWeight: 900,
                                textTransform: "uppercase",
                                letterSpacing: "0.5px", // Tightened for mobile
                                color: hl,
                                whiteSpace: "nowrap" // STOP THE OVERLAP
                            }}>
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Badge - Stays put on the same line */}
                <div style={{
                    padding: "6px 14px",
                    borderRadius: "100px",
                    background: "rgba(34, 197, 94, 0.06)",
                    border: "1px solid rgba(34, 197, 94, 0.1)",
                    color: "#166534",
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    whiteSpace: "nowrap",
                    flexShrink: 0, // Forces it to stay on one line
                    height: "fit-content"
                }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 10px #22C55E" }} />
                    <span className="ov-hide-mobile">ACCEPTING NEW PATIENTS</span>
                    <span className="ov-show-mobile">OPEN</span>
                </div>

                <style>{`
        /* Essential fix for your screen width */
        @media (max-width: 600px) {
            .ov-hide-mobile { display: none !important; }
            .ov-show-mobile { display: inline-block !important; }
        }
        @media (min-width: 601px) {
            .ov-show-mobile { display: none !important; }
        }
    `}</style>
            </div>

            {/* 2. MAIN COMPOSITION GRID */}
            <div style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 450px), 1fr))",
                width: "100%"
            }}>
                {/* LEFT: CONTENT AREA */}
                <div style={{
                    padding: "clamp(50px, 10vh, 120px) 5%",
                    display: "flex", flexDirection: "column", justifyContent: "center",
                    opacity: in1 ? 1 : 0,
                    transform: in1 ? "none" : "translateY(40px)",
                    transition: "all 1.4s cubic-bezier(.16,1,.3,1)",
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                        <div style={{ width: 40, height: 1, background: hl }} />
                        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", color: hl, margin: 0 }}>
                            {c.tagline}
                        </p>
                    </div>

                    <h1 style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: "clamp(54px, 8vw, 110px)",
                        fontWeight: 400, lineHeight: 0.9,
                        letterSpacing: "-3px", color: "#1A1A1A", marginBottom: 40
                    }}>
                        {lines[0]} <br />
                        <span style={{ fontStyle: "italic", color: hl, display: "inline-block", transform: "translateX(10px)" }}>{lines[1]}</span>
                    </h1>

                    <p style={{
                        fontSize: "clamp(16px, 1.2vw, 19px)",
                        color: "#666", lineHeight: 1.8,
                        maxWidth: 500, marginBottom: 56
                    }}>
                        {c.heroSubheading}
                    </p>

                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
                        <button className="ov-btn" onClick={() => go("Book")} style={{ padding: "22px 44px", borderRadius: 100, fontSize: 15 }}>
                            Request Invitation <Icon name="arrowUpRight" size={16} />
                        </button>
                        <button className="ov-btn-outline" onClick={() => go("Services")} style={{ padding: "22px 44px", borderRadius: 100, border: "1px solid #E5E5E5", fontSize: 15 }}>
                            Explore Care
                        </button>
                    </div>

                    {/* CONTACT BAR */}
                    <div style={{ display: "flex", gap: 40, alignItems: "center", paddingTop: 40, borderTop: "1px solid #F5F5F5" }}>
                        {[
                            { icon: "phone", val: c.phone, href: `tel:${c.phone}` },
                            { icon: "whatsapp", val: "WhatsApp", href: `https://wa.me/${c.whatsapp}` }
                        ].map(item => (
                            <a key={item.icon} href={item.href} style={{ display: "flex", gap: 10, alignItems: "center", textDecoration: "none", color: "#1A1A1A", fontSize: 13, fontWeight: 700 }}>
                                <Icon name={item.icon} size={16} color={hl} /> {item.val}
                            </a>
                        ))}
                    </div>
                </div>

                {/* RIGHT: THE VISUAL (Arched & Layered) */}
                <div style={{
                    position: "relative",
                    background: bgStone,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "clamp(20px, 5vw, 60px)",
                    minHeight: "60vh"
                }}>
                    {/* Background Decorative Letter */}
                    <div style={{
                        position: "absolute", top: "10%", right: "5%",
                        fontSize: "25vw", fontFamily: "'Instrument Serif', serif",
                        color: "#fff", zIndex: 0, opacity: 0.8, pointerEvents: "none"
                    }}>
                        {c.shortName?.charAt(0) || "D"}
                    </div>

                    <div style={{
                        width: "100%",
                        maxWidth: "520px",
                        height: "85%",
                        borderRadius: "1000px 1000px 40px 40px",
                        overflow: "hidden",
                        boxShadow: "0 60px 120px -20px rgba(0,0,0,0.12)",
                        position: "relative",
                        zIndex: 1,
                        opacity: in1 ? 1 : 0,
                        transform: in1 ? "scale(1)" : "scale(0.95)",
                        transition: "all 1.8s cubic-bezier(.16,1,.3,1) 0.2s"
                    }}>
                        <img src={c.heroImage} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>

                    {/* GLASS CARD (Responsive positioning) */}
                    <div style={{
                        position: "absolute",
                        bottom: "8%",
                        left: "5%",
                        background: "rgba(255,255,255,0.8)",
                        backdropFilter: "blur(20px)",
                        padding: "32px",
                        borderRadius: "28px",
                        maxWidth: 260,
                        border: "1px solid rgba(255,255,255,0.4)",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
                        zIndex: 10,
                        transform: in1 ? "translateY(0)" : "translateY(30px)",
                        transition: "all 1.2s cubic-bezier(.16,1,.3,1) 1s"
                    }} className="ov-hide-mobile">
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: hl }} />
                            <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: 1.5, color: "#999" }}>AVAILABILITY</span>
                        </div>
                        <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 26, color: "#1A1A1A", margin: "0 0 4px" }}>Available Today</p>
                        <p style={{ fontSize: 14, color: hl, fontWeight: 700 }}>3:30 PM — 5:00 PM</p>
                    </div>
                </div>
            </div>

            <style>{`
                .ov-no-scrollbar::-webkit-scrollbar { display: none; }
                @media (max-width: 900px) {
                    .ov-hide-mobile { display: none !important; }
                    .ov-show-mobile { display: block !important; }
                }
            `}</style>
        </section>
    );
}
// ─── TESTIMONIALS MARQUEE ─────────────────────────────────────────────────────
function Testimonials({ c }) {
    const hl = c.highlightColor || "#C8A45D";
    const bgWarm = "#FAF9F6"; // Soft organic cream
    const slate = "#4A453E"; // Warm slate instead of black

    // Duplicate for smooth infinite scroll
    const all = [...c.testimonials, ...c.testimonials, ...c.testimonials];

    return (
        <section style={{
            padding: "clamp(80px, 10vw, 120px) 0",
            background: bgWarm,
            borderTop: "1px solid #E8E2D9",
            borderBottom: "1px solid #E8E2D9",
            overflow: "hidden", // Locks the section from causing horizontal page scroll
            position: "relative"
        }}>
            {/* Background Decorative Quote Mark */}
            <div style={{
                position: "absolute", top: "0", left: "5%",
                fontSize: "20vw", fontFamily: "'Instrument Serif', serif",
                color: "#E8E2D9", opacity: 0.4, zIndex: 0, pointerEvents: "none"
            }}>“</div>

            <div style={{ textAlign: "center", padding: "0 5%", marginBottom: 64, position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
                    <div style={{ width: 24, height: 1, background: hl }} />
                    <p style={{
                        fontSize: 10, fontWeight: 900, letterSpacing: "2.5px",
                        textTransform: "uppercase", color: hl, margin: 0
                    }}>Kind Words</p>
                    <div style={{ width: 24, height: 1, background: hl }} />
                </div>
                <h2 style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(34px, 4vw, 54px)",
                    fontWeight: 400, color: slate, letterSpacing: "-1.5px"
                }}>
                    Trusted by <span style={{ fontStyle: "italic", color: hl }}>our community.</span>
                </h2>
            </div>

            {/* Marquee Container */}
            <div style={{
                position: "relative",
                display: "flex",
                maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}>
                <div className="ov-marquee-enhanced" style={{
                    display: "flex",
                    gap: "24px",
                    animation: "ov-scroll 40s linear infinite",
                    padding: "20px 0"
                }}>
                    {all.map((t, i) => (
                        <div key={i} style={{
                            width: "clamp(300px, 25vw, 400px)",
                            flexShrink: 0,
                            padding: "40px",
                            background: "#fff",
                            borderRadius: "24px",
                            boxShadow: "0 15px 35px rgba(165, 148, 116, 0.1)", // Warm soft shadow
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}>
                            <div>
                                <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                                    {[...Array(t.rating || 5)].map((_, j) => (
                                        <Icon key={j} name="star" size={12} style={{ color: hl }} />
                                    ))}
                                </div>
                                <p style={{
                                    fontSize: "clamp(14px, 1.1vw, 16px)",
                                    color: "#555",
                                    lineHeight: 1.8,
                                    marginBottom: 30,
                                    fontStyle: "italic",
                                    fontFamily: "Georgia, serif"
                                }}>
                                    "{t.text}"
                                </p>
                            </div>

                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 14,
                                borderTop: "1px solid #F5F5F0",
                                paddingTop: 24
                            }}>
                                {/* Avatar with Initials */}
                                <div style={{
                                    width: 48, height: 48,
                                    background: hl,
                                    borderRadius: "50%",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontFamily: "'Instrument Serif', serif",
                                    color: "#fff", fontSize: 20, flexShrink: 0
                                }}>
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div style={{
                                        fontWeight: 700,
                                        fontSize: 14,
                                        color: slate,
                                        letterSpacing: "-0.2px"
                                    }}>{t.name}</div>
                                    <div style={{
                                        fontSize: 11,
                                        color: hl,
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        marginTop: 2
                                    }}>{t.location}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes ov-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ov-marquee-enhanced:hover {
                    animation-play-state: paused;
                }
                /* Mobile Fix: Prevent side-scrolling the whole page while swiping the marquee */
                @media (max-width: 768px) {
                    .ov-marquee-enhanced {
                        animation-duration: s; /* Faster for smaller screens */
                    }
                }
            `}</style>
        </section>
    );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const DEFAULT_FAQS = [
    { q: "Is dental treatment painful?", a: "We use the latest anaesthesia techniques as standard. Most patients tell us a visit here is far more comfortable than they expected." },
    { q: "How long do dental implants last?", a: "With good care, implants last a lifetime. The crown typically needs replacing every 10–15 years." },
    { q: "Do you offer payment plans?", a: "Yes — we offer flexible payment options including 0% EMI through partner banks. We believe cost should never be a barrier to good dental care." },
    { q: "How quickly can I get an appointment?", a: "We maintain same-day and next-day slots for urgent cases. Routine appointments are typically available within 2–3 days." },
];
function FAQ({ c }) {
    const [open, setOpen] = useState(null);
    const faqs = c.faqs || DEFAULT_FAQS;
    return (
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
            {faqs.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid #EBEBEB" }}>
                    <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
                        <span style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: 18, color: "#1A1A1A", fontWeight: 400, paddingRight: 24, lineHeight: 1.4 }}>{f.q}</span>
                        <span style={{ fontSize: 22, color: "#999", flexShrink: 0, transition: "transform .3s", transform: open === i ? "rotate(45deg)" : "none", lineHeight: 1 }}>+</span>
                    </button>
                    <div className={`ov-faq-body${open === i ? " open" : ""}`}>
                        <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, paddingBottom: 22 }}>{f.a}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function Home({ c, go }) {
    const hl = c.highlightColor || "#C8A45D";
    const bg = c.accentColorLight || "#F8F6F1";
    return (
            <div className="ov-page">
                <Hero c={c} go={go} />

            <section style={{
                padding: "clamp(80px, 12vw, 140px) 5%",
                background: "#d7c8a2", // Deep dark background
                position: "relative",
                overflow: "hidden"
                }}>
                {/* Decorative Subtle Background Text - Adjusted for Dark Mode */}
                <div
                    className="hidden md:block"
                    style={{
                        position: "absolute",
                        top: "5%",
                        right: "-5%",
                        fontSize: "30vw",
                        fontFamily: "'Instrument Serif', serif",
                        color: "#f5f4d3",
                        zIndex: 0,
                        pointerEvents: "none",
                        opacity: 0.8,
                        lineHeight: 1
                    }}
                >
                    Care
                </div>
                <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                    {/* Header Section */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                        gap: 40,
                        marginBottom: "clamp(40px, 8vw, 80px)"
                    }}>
                        <div style={{ maxWidth: 600 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                                <div style={{ width: 32, height: 1, background: hl }} />
                                <p style={{
                                    fontSize: 11, fontWeight: 900, letterSpacing: "2.5px",
                                    textTransform: "uppercase", color: hl, margin: 0
                                }}>
                                    Exclusive Expertise
                                </p>
                            </div>
                            <h2 style={{
                                fontFamily: "'Instrument Serif', serif",
                                fontSize: "clamp(38px, 5vw, 64px)",
                                fontWeight: 400, letterSpacing: "-1.5px", lineHeight: 1.1,
                                color: "#FFFFFF" // White text for heading
                            }}>
                                Treatments crafted<br />
                                <span style={{ color: hl, fontStyle: "italic" }}>with precision.</span>
                            </h2>
                        </div>

                        <button
                            className="ov-btn-outline"
                            onClick={() => go("Services")}
                            style={{
                                padding: "18px 36px",
                                borderRadius: "100px",
                                border: `1px solid rgba(255,255,255,0.15)`,
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#28280b",
                                background: "#fff",
                                cursor: "pointer",
                                transition: "all 0.3s"
                            }}
                        >
                            View Full Catalog <Icon name="arrowUpRight" size={14} />
                        </button>
                    </div>

                    {/* Services Grid - Responsive & Scroll-Safe */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                        gap: "24px"
                    }}>
                        {c.services.map((s, i) => (
                            <div
                                key={s.title}
                                className="ov-service-card"
                                onClick={() => go("Services")}
                                style={{
                                    padding: "clamp(30px, 5vw, 50px)",
                                    cursor: "pointer",
                                    background: "#FFFFFF", // Keep cards white for that "clean medical" feel
                                    borderRadius: "32px",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                                    minHeight: "360px",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)" // Stronger shadow for the dark background
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
                                    e.currentTarget.style.boxShadow = `0 40px 80px rgba(0,0,0,0.4)`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
                                }}
                            >
                                <div>
                                    {/* Soft Glow Icon Box */}
                                    <div style={{
                                        width: 64, height: 64,
                                        background: `${hl}12`,
                                        borderRadius: "20px",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        marginBottom: 32, color: hl,
                                        border: `1px solid ${hl}20`
                                    }}>
                                        <Icon name={s.icon} size={28} />
                                    </div>

                                    <p style={{
                                        fontSize: 10, fontWeight: 800, letterSpacing: "1.5px",
                                        color: hl, marginBottom: 12
                                    }}>
                                        {s.subtitle}
                                    </p>

                                    <h3 style={{
                                        fontFamily: "'Instrument Serif', serif",
                                        fontSize: 32, fontWeight: 400, color: "#1A1A1A",
                                        marginBottom: 16, letterSpacing: "-0.5px"
                                    }}>
                                        {s.title}
                                    </h3>

                                    <p style={{
                                        fontSize: 15, color: "#555", lineHeight: 1.7, maxWidth: "90%"
                                    }}>
                                        {s.desc}
                                    </p>
                                </div>

                                <div style={{
                                    display: "flex", alignItems: "center", gap: 10,
                                    fontSize: 12, fontWeight: 800, color: "#1A1A1A",
                                    marginTop: 40, letterSpacing: "1px"
                                }}>
                                    DISCOVER MORE <Icon name="arrow" size={14} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{
                background: "#FAF9F6", // Soft organic off-white instead of pure white/black
                borderTop: "1px solid #E8E2D9",
                borderBottom: "1px solid #E8E2D9",
                overflow: "hidden"
            }}>
                <div style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    display: "grid",
                    // Logic: Stack on mobile (1fr), Side-by-side on desktop (1.1fr 0.9fr)
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                    minHeight: "min-content"
                }}>

                    {/* 1. IMAGE BOX - Using Arched Mask for elegance */}
                    <div style={{
                        padding: "clamp(20px, 4vw, 60px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#F2F0EB" // Slightly darker cream to pop the image
                    }}>
                        <div style={{
                            width: "100%",
                            maxWidth: "480px",
                            height: "clamp(400px, 60vh, 580px)",
                            borderRadius: "240px 240px 20px 20px", // Arched top
                            overflow: "hidden",
                            boxShadow: "0 20px 40px rgba(165, 148, 116, 0.15)", // Warm shadow
                            position: "relative"
                        }}>
                            {c.doctorImage ? (
                                <img
                                    src={c.doctorImage}
                                    alt={c.doctorName}
                                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                                />
                            ) : (
                                <div style={{ width: "100%", height: "100%", background: "#E8E2D9" }} />
                            )}
                        </div>
                    </div>

                    {/* 2. TEXT CONTENT */}
                    <div style={{
                        padding: "clamp(40px, 6vw, 80px) 5%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        borderLeft: window.innerWidth > 1000 ? "1px solid #E8E2D9" : "none"
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                            <div style={{ width: 30, height: 1, background: hl }} />
                            <p style={{
                                fontSize: 10,
                                fontWeight: 800,
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                                color: hl,
                                margin: 0
                            }}>
                                Expert Clinician
                            </p>
                        </div>

                        <h2 style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontSize: "clamp(32px, 3.5vw, 52px)",
                            fontWeight: 400,
                            color: "#4A453E", // Rich Taupe instead of black
                            lineHeight: 1.1,
                            marginBottom: 12
                        }}>
                            {c.doctorName}
                        </h2>

                        <p style={{
                            fontSize: "clamp(14px, 1.1vw, 16px)",
                            color: hl,
                            marginBottom: 24,
                            fontWeight: 600,
                            letterSpacing: "0.5px"
                        }}>
                            {c.doctorQual}
                        </p>

                        <p style={{
                            fontSize: "clamp(15px, 1vw, 17px)",
                            color: "#706C61", // Slate-Grey for readability
                            lineHeight: 1.8,
                            marginBottom: 32,
                            maxWidth: "540px"
                        }}>
                            {c.doctorBio}
                        </p>

                        {/* Credentials - Pill styling */}
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 40 }}>
                            {c.doctorCredentials?.map(cred => (
                                <span key={cred} style={{
                                    fontSize: 10,
                                    fontWeight: 700,
                                    padding: "8px 16px",
                                    borderRadius: "100px",
                                    background: "#FFFFFF",
                                    border: "1px solid #E8E2D9",
                                    color: "#706C61",
                                    letterSpacing: "0.5px"
                                }}>
                                    {cred}
                                </span>
                            ))}
                        </div>

                        <button
                            className="ov-btn"
                            onClick={() => go("About")}
                            style={{
                                alignSelf: "flex-start",
                                padding: "18px 40px",
                                background: hl,
                                color: "#FFF",
                                border: "none",
                                borderRadius: "100px",
                                fontSize: 13,
                                fontWeight: 700,
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                boxShadow: `0 10px 20px ${hl}33`
                            }}
                        >
                            View Professional Biography <Icon name="arrowUpRight" size={14} />
                        </button>
                    </div>
                </div>
            </section>

                <Testimonials c={c} />

                {/* Why us */}
            <section style={{
                padding: "clamp(80px, 15vw, 160px) 5%",
                background: "#F9F8F6",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Background Decorative Element */}
                <div style={{
                    position: "absolute",
                    top: "-10%",
                    right: "-5%",
                    fontSize: "25vw",
                    fontFamily: "'Instrument Serif', serif",
                    color: "#F0EFEA",
                    zIndex: 0,
                    pointerEvents: "none",
                    userSelect: "none"
                }}>
                    Quality
                </div>

                <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap", // Handles responsiveness naturally
                        gap: "clamp(40px, 8vw, 120px)",
                        alignItems: "flex-start"
                    }}>

                        {/* Left Column: Fixed Content Area */}
                        <div style={{
                            flex: "1 1 400px", // Grows, shrinks, but basis is 400px
                            maxWidth: "600px"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                                <div style={{ width: 40, height: 1, background: hl }} />
                                <p style={{
                                    fontSize: 11, fontWeight: 900, letterSpacing: "3px",
                                    textTransform: "uppercase", color: hl, margin: 0
                                }}>
                                    The Standard
                                </p>
                            </div>

                            <h2 style={{
                                fontFamily: "'Instrument Serif', Georgia, serif",
                                fontSize: "clamp(42px, 5.5vw, 72px)",
                                fontWeight: 400, letterSpacing: "-2px", lineHeight: 0.95,
                                color: "#1A1A1A", marginBottom: 32
                            }}>
                                Excellence in every<br />
                                <span style={{ color: hl, fontStyle: "italic" }}>refined detail.</span>
                            </h2>

                            <p style={{
                                fontSize: "clamp(16px, 1.2vw, 18px)",
                                color: "#555", lineHeight: 1.7,
                                marginBottom: 48, maxWidth: "480px"
                            }}>
                                {c.about}
                            </p>

                            <button
                                className="ov-btn"
                                onClick={() => go("Book")}
                                style={{
                                    padding: "22px 48px",
                                    borderRadius: "100px",
                                    background: hl,
                                    color: "#fff",
                                    border: "none",
                                    fontSize: "14px",
                                    fontWeight: "700",
                                    cursor: "pointer",
                                    boxShadow: `0 15px 35px ${hl}33`
                                }}
                            >
                                Book Consultation <Icon name="arrowUpRight" size={14} />
                            </button>
                        </div>

                        {/* Right Column: Dynamic Feature List */}
                        <div style={{
                            flex: "1 1 450px",
                            display: "grid",
                            gap: "20px"
                        }}>
                            {[
                                ["Precision Technology", "3D imaging and CAD/CAM crowns planned to the millimetre."],
                                ["Pain-Free Promise", "Advanced anaesthesia as standard. Comfort is not optional."],
                                ["Transparent Pricing", "Clear treatment plans with all costs upfront. No surprises."],
                                ["Written Guarantee", "All major restorations backed by a formal written guarantee."],
                            ].map(([t, d], i) => (
                                <div
                                    key={t}
                                    className="ov-why-card"
                                    style={{
                                        display: "flex",
                                        gap: 28,
                                        padding: "clamp(30px, 4vw, 40px)",
                                        background: "#fff",
                                        borderRadius: "32px",
                                        border: "1px solid rgba(0,0,0,0.03)",
                                        boxShadow: "0 15px 45px rgba(0,0,0,0.03)",
                                        transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-5px)";
                                        e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.06)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0)";
                                        e.currentTarget.style.boxShadow = "0 15px 45px rgba(0,0,0,0.03)";
                                    }}
                                >
                                    <div style={{
                                        fontFamily: "'Instrument Serif', serif",
                                        fontSize: "28px",
                                        color: hl,
                                        opacity: 0.4,
                                        lineHeight: 1
                                    }}>
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h3 style={{
                                            fontWeight: 800, fontSize: "17px", marginBottom: 10,
                                            color: "#1A1A1A", letterSpacing: "-0.3px"
                                        }}>
                                            {t}
                                        </h3>
                                        <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, margin: 0 }}>
                                            {d}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

                {/* FAQ */}
            <section style={{
                padding: "clamp(80px, 12vw, 140px) 5%",
                background: "#FBFBF9", // Soft organic background
                borderTop: "1px solid #F0EDE8",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Decorative background text */}
                <div style={{
                    position: "absolute", bottom: "-2%", left: "-2%",
                    fontSize: "20vw", fontFamily: "'Instrument Serif', serif",
                    color: "#F4F2EE", zIndex: 0, pointerEvents: "none"
                }}>Help</div>

                <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "clamp(40px, 8vw, 100px)",
                        alignItems: "flex-start"
                    }}>

                        {/* LEFT: THE PINNED HEADER */}
                        <div style={{
                            flex: "1 1 350px", // Stacks on mobile, pins on desktop
                            position: window.innerWidth > 1000 ? "sticky" : "static",
                            top: 120
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                                <div style={{ width: 32, height: 1, background: hl }} />
                                <p style={{
                                    fontSize: 10, fontWeight: 900, letterSpacing: "2.5px",
                                    textTransform: "uppercase", color: hl, margin: 0
                                }}>Support</p>
                            </div>

                            <h2 style={{
                                fontFamily: "'Instrument Serif', Georgia, serif",
                                fontSize: "clamp(38px, 4vw, 56px)",
                                fontWeight: 400, letterSpacing: "-1.5px", lineHeight: 1,
                                color: "#1A1A1A", marginBottom: 24
                            }}>
                                Common<br />
                                <span style={{ color: hl, fontStyle: "italic" }}>Questions.</span>
                            </h2>

                            <p style={{
                                fontSize: 15, color: "#666", lineHeight: 1.8,
                                marginBottom: 36, maxWidth: 320
                            }}>
                                We believe in full transparency. If your question isn't listed, our team is ready to assist you.
                            </p>

                            <a
                                href={`https://wa.me/${c.whatsapp}`}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 12,
                                    padding: "18px 32px",
                                    borderRadius: "100px",
                                    background: "#fff",
                                    border: "1px solid #E8E2D9",
                                    fontSize: 13,
                                    fontWeight: 700,
                                    color: "#1A1A1A",
                                    textDecoration: "none",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 10px 20px rgba(0,0,0,0.03)"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                    e.currentTarget.style.borderColor = hl;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.borderColor = "#E8E2D9";
                                }}
                            >
                                <Icon name="whatsapp" size={16} color={hl} /> Chat with Specialist
                            </a>
                        </div>

                        {/* RIGHT: THE FAQ ACCORDION COMPONENT */}
                        <div style={{
                            flex: "1 1 500px",
                            display: "flex",
                            flexDirection: "column",
                            gap: 12
                        }}>
                            <FAQ c={c} />
                        </div>
                    </div>
                </div>
            </section>

            {c.clinicImages?.length > 0 && (
                <section style={{
                    padding: "clamp(100px, 15vw, 180px) 0",
                    background: "#16181B", // Deep charcoal for a cinematic, high-contrast feel
                    overflow: "hidden"
                }}>
                    <div style={{ padding: "0 5%", marginBottom: 60 }}>
                        <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "4px", color: hl, textTransform: "uppercase", marginBottom: 20 }}>
                            Spatial Design
                        </p>
                        <h2 style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontSize: "clamp(48px, 6vw, 90px)",
                            color: "#FFF",
                            lineHeight: 0.9,
                            letterSpacing: "-3px"
                        }}>
                            A sanctuary <br />
                            <span style={{ fontStyle: "italic", opacity: 0.7 }}>of modern care.</span>
                        </h2>
                    </div>

                    {/* CINEMATIC HORIZONTAL SCROLL AREA */}
                    <div style={{
                        display: "flex",
                        gap: "20px",
                        padding: "0 5%",
                        overflowX: "auto",
                        scrollSnapType: "x mandatory",
                        msOverflowStyle: "none",
                        scrollbarWidth: "none"
                    }} className="ov-no-scrollbar">
                        {c.clinicImages.map((img, i) => (
                            <div
                                key={i}
                                style={{
                                    flex: "0 0 auto",
                                    width: i % 2 === 0 ? "clamp(300px, 60vw, 800px)" : "clamp(250px, 40vw, 500px)",
                                    height: "clamp(400px, 70vh, 600px)",
                                    scrollSnapAlign: "start",
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "4px" // Sharp, modern editorial edges
                                }}
                            >
                                <img
                                    src={img}
                                    alt={`Clinic view ${i + 1}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        filter: "grayscale(20%) contrast(110%)", // Editorial photo filter
                                        transition: "all 1s cubic-bezier(0.2, 1, 0.3, 1)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.1)";
                                        e.currentTarget.style.filter = "grayscale(0%)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.filter = "grayscale(20%)";
                                    }}
                                />

                                {/* Subtle Numbering */}
                                <div style={{
                                    position: "absolute",
                                    bottom: 30,
                                    left: 30,
                                    color: "#FFF",
                                    fontFamily: "'Instrument Serif', serif",
                                    fontSize: 24,
                                    opacity: 0.5
                                }}>
                                    0{i + 1}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Instruction */}
                    <div style={{
                        marginTop: 40,
                        padding: "0 5%",
                        display: "flex",
                        alignItems: "center",
                        gap: 20,
                        color: "rgba(255,255,255,0.3)"
                    }}>
                        <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.1)" }} />
                        <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
                            Shift + Scroll to Explore
                        </span>
                    </div>
                </section>
            )}

                {/* CTA */}
            <section style={{
                padding: "clamp(100px, 15vw, 180px) 5%",
                background: "#F9F8F6", // High-end off-white/bone background
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Decorative Background Icon/Graphic */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "30vw",
                    color: "#F0EFEA", // Very subtle contrast
                    fontFamily: "'Instrument Serif', serif",
                    zIndex: 0,
                    pointerEvents: "none",
                    userSelect: "none"
                }}>
                    Smile
                </div>

                <div style={{
                    maxWidth: 800,
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center"
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 24 }}>
                        <div style={{ width: 24, height: 1, background: hl }} />
                        <p style={{
                            fontSize: 10, fontWeight: 900, letterSpacing: "3px",
                            textTransform: "uppercase", color: hl, margin: 0
                        }}>
                            Start Your Journey
                        </p>
                        <div style={{ width: 24, height: 1, background: hl }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontSize: "clamp(48px, 6vw, 84px)",
                        fontWeight: 400, letterSpacing: "-2px", lineHeight: 0.95,
                        color: "#1A1A1A", marginBottom: 48
                    }}>
                        Your perfect smile<br />
                        <span style={{ color: hl, fontStyle: "italic" }}>starts with a conversation.</span>
                    </h2>

                    <div style={{
                        display: "flex",
                        gap: "16px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        alignItems: "center"
                    }}>
                        {/* Primary Action */}
                        <button
                            className="ov-btn"
                            onClick={() => go("Book")}
                            style={{
                                padding: "24px 48px",
                                borderRadius: "100px",
                                background: "#1A1A1A", // Contrast button
                                color: "#FFF",
                                border: "none",
                                fontSize: "14px",
                                fontWeight: "700",
                                cursor: "pointer",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                transition: "transform 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            Book Free Consultation <Icon name="arrowUpRight" size={16} />
                        </button>

                        {/* Secondary Action */}
                        <a
                            href={`tel:${c.phone}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                padding: "24px 40px",
                                borderRadius: "100px",
                                background: "transparent",
                                border: "1px solid #D1D1CB",
                                color: "#1A1A1A",
                                fontSize: "14px",
                                fontWeight: "700",
                                textDecoration: "none",
                                transition: "all 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#fff";
                                e.currentTarget.style.borderColor = hl;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.borderColor = "#D1D1CB";
                            }}
                        >
                            <Icon name="phone" size={16} /> {c.phone}
                        </a>
                    </div>

                    <p style={{ marginTop: 32, fontSize: 12, color: "#999", letterSpacing: "0.5px" }}>
                        Free initial assessment • No obligation • Specialized care
                    </p>
                </div>
            </section>
            </div>
    );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About({ c, go }) {
    const hl = c.highlightColor || "#C8A45D";
    const bone = "#F9F8F6";
    const charcoal = "#121417";

    return (
        <div className="ov-page" style={{ background: bone }}>
            {/* 1. HEADER - Bone Background */}
            <section style={{ padding: "clamp(100px, 15vw, 160px) 5%", background: bone }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
                        <div style={{ width: 40, height: 1, background: hl }} />
                        <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "3px", textTransform: "uppercase", color: hl, margin: 0 }}>About the Clinic</p>
                    </div>
                    <h1 style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: "clamp(42px, 6vw, 84px)",
                        fontWeight: 400, letterSpacing: "-2.5px", lineHeight: 0.95,
                        maxWidth: 900, color: charcoal
                    }}>
                        {c.about.split('.').slice(0, 1)}. <br />
                        <span style={{ fontStyle: "italic", color: hl }}>Refined care</span> for your smile.
                    </h1>
                </div>
            </section>

            {/* 2. DOCTOR - Deep Charcoal Background */}
            <section style={{ background: charcoal, borderRadius: "clamp(0px, 4vw, 40px) clamp(0px, 4vw, 40px) 0 0", overflow: "hidden" }}>
                <div style={{
                    maxWidth: 1400, margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
                    alignItems: "center"
                }}>
                    <div style={{ padding: "clamp(40px, 8vw, 100px) 5%" }}>
                        <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "3px", color: hl, textTransform: "uppercase", marginBottom: 24 }}>The Founder</p>
                        <h2 style={{
                            fontFamily: "'Instrument Serif', serif",
                            fontSize: "clamp(38px, 4vw, 56px)",
                            color: "#FFF", marginBottom: 12, lineHeight: 1
                        }}>{c.doctorName}</h2>
                        <p style={{ fontSize: 16, color: hl, fontStyle: "italic", marginBottom: 32 }}>{c.doctorQual}</p>
                        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 40, maxWidth: 500 }}>{c.doctorBio}</p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
                            {c.doctorCredentials?.map(cred => (
                                <div key={cred} style={{ borderLeft: `1px solid ${hl}`, paddingLeft: 16 }}>
                                    <span style={{ fontSize: 12, color: "#FFF", fontWeight: 600, display: "block", lineHeight: 1.4 }}>{cred}</span>
                                </div>
                            ))}
                        </div>

                        <button className="ov-btn" onClick={() => go("Book")} style={{ background: hl, color: "#FFF", border: "none", padding: "20px 40px", borderRadius: 100 }}>
                            Secure an Appointment <Icon name="arrowUpRight" size={14} />
                        </button>
                    </div>

                    <div style={{ height: "100%", minHeight: "600px", position: "relative" }}>
                        <img
                            src={c.doctorImage}
                            alt={c.doctorName}
                            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.1) grayscale(20%)" }}
                        />
                    </div>
                </div>
            </section>

            {/* 3. VALUES - Warm Bone Background */}
            <section style={{ padding: "clamp(80px, 12vw, 140px) 5%", background: bone }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ marginBottom: 80, textAlign: "center" }}>
                        <p style={{ fontSize: 10, fontWeight: 900, letterSpacing: "2px", color: hl, textTransform: "uppercase", marginBottom: 16 }}>Philosophy</p>
                        <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(32px, 4vw, 52px)", color: charcoal }}>What we stand for.</h2>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                        gap: 24
                    }}>
                        {[
                            ["Compassion", "Every patient is treated as an individual — with empathy, patience, and genuine attention."],
                            ["Precision", "Technology and technique applied with absolute care. Good enough is never our standard."],
                            ["Honesty", "Transparent pricing, honest advice, and treatment plans you can trust."],
                            ["Excellence", "Constant refinement. We pursue the best outcome for every patient, every time."]
                        ].map(([t, d], i) => (
                            <div key={t} style={{
                                padding: 40, background: "#FFF", borderRadius: 32,
                                border: "1px solid rgba(0,0,0,0.03)",
                                transform: `translateY(${i % 2 === 0 ? "0" : "30px"})` // Floating stagger
                            }} className="ov-hide-mobile-stagger">
                                <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 28, color: hl, marginBottom: 20, opacity: 0.4 }}>0{i + 1}</div>
                                <h3 style={{ fontWeight: 800, fontSize: 18, marginBottom: 16, color: charcoal }}>{t}</h3>
                                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7 }}>{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. HOURS - Deep Charcoal Contrast */}
            <section style={{ padding: "clamp(80px, 12vw, 140px) 5%", background: charcoal }}>
                <div style={{ maxWidth: 800, margin: "0 auto", background: "rgba(255,255,255,0.03)", padding: "clamp(30px, 6vw, 60px)", borderRadius: 40, border: "1px solid rgba(255,255,255,0.05)" }}>
                    <p style={{ color: hl, fontSize: 10, fontWeight: 900, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16, textAlign: "center" }}>Schedule</p>
                    <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 42, color: "#FFF", textAlign: "center", marginBottom: 48 }}>Opening Hours</h2>
                    <div>
                        {c.clinicHours.map((h, i) => (
                            <div key={i} style={{
                                display: "flex", justifyContent: "space-between", padding: "20px 0",
                                borderBottom: i < c.clinicHours.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none"
                            }}>
                                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{h.day}</span>
                                <span style={{ fontSize: 15, color: h.time === "Closed" ? "rgba(255,255,255,0.2)" : hl, fontWeight: 700 }}>{h.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. GALLERY - Full Bleed */}
            {c.clinicImages?.length > 0 && (
                <section style={{ background: bone, padding: "20px" }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
                        gap: 16
                    }}>
                        {c.clinicImages.map((img, i) => (
                            <div key={i} style={{ height: 400, borderRadius: 24, overflow: "hidden" }}>
                                <img src={img} alt="Clinic" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

// ─── SERVICES ────────────────────────────────────────────────────────────────
function Services({ c, go }) {
    const hl = c.highlightColor || "#C8A45D";
    const bone = "#F9F8F6";
    const stone = "#F0EFEB";
    const [hover, setHover] = useState(null);

    return (
        <div className="ov-page" style={{ background: "#FFF" }}>
            {/* 1. THE HEADER - Pure Minimalist White */}
            <section style={{
                padding: "clamp(100px, 12vw, 160px) 5% 100px",
                background: "#FFF",
                textAlign: "center"
            }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                        <div style={{ width: 12, height: 12, borderRadius: "50%", background: hl }} />
                        <p style={{ fontSize: 10, fontWeight: 900, letterSpacing: "3px", textTransform: "uppercase", color: "#1A1A1A", margin: 0 }}>The Portfolio</p>
                    </div>
                    <h1 style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: "clamp(48px, 7vw, 96px)",
                        fontWeight: 400, letterSpacing: "-3px", lineHeight: 0.9, color: "#1A1A1A"
                    }}>
                        Curating the art <br />
                        <span style={{ fontStyle: "italic", color: hl }}>of the modern smile.</span>
                    </h1>
                </div>
            </section>

            {/* 2. SERVICES - STICKY CARD FLOW */}
            <section style={{ padding: "clamp(40px, 8vw, 100px) 2.5%", background: "#FFF" }}>
                <div style={{ maxWidth: 1300, margin: "0 auto" }}>
                    {c.services.map((s, i) => (
                        <div
                            key={s.title}
                            style={{
                                position: "sticky",
                                // The 'i * 20' creates the visible edge of the card underneath
                                top: `clamp(60px, 10vh, 120px)`,
                                marginBottom: "clamp(40px, 15vh, 200px)",
                                display: "flex",
                                // Column on mobile, Row on desktop
                                flexDirection: "row",
                                flexWrap: "wrap-reverse",
                                background: i % 2 === 0 ? "#F9F8F6" : "#F0EFEB",
                                borderRadius: "clamp(24px, 4vw, 40px)",
                                overflow: "hidden",
                                boxShadow: `0 -15px 40px rgba(0,0,0,0.04)`,
                                border: "1px solid rgba(0,0,0,0.05)",
                                // Crucial: Ensures each card sits on top of the previous one
                                zIndex: i + 1,
                                minHeight: "min-content"
                            }}
                        >
                            {/* 1. CONTENT SIDE (Flex basis handles the 'grid' feel responsively) */}
                            <div style={{
                                flex: "1 1 500px",
                                padding: "clamp(30px, 6vw, 80px)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }}>
                                <div style={{
                                    fontFamily: "'Instrument Serif', serif",
                                    fontSize: "clamp(40px, 5vw, 64px)",
                                    color: hl,
                                    opacity: 0.2,
                                    lineHeight: 1,
                                    marginBottom: 10
                                }}>
                                    0{i + 1}
                                </div>

                                <h3 style={{
                                    fontFamily: "'Instrument Serif', serif",
                                    fontSize: "clamp(28px, 4vw, 48px)",
                                    fontWeight: 400,
                                    color: "#1A1A1A",
                                    marginBottom: 20,
                                    letterSpacing: "-1px",
                                    lineHeight: 1.1
                                }}>
                                    {s.title}
                                </h3>

                                <p style={{
                                    fontSize: "clamp(15px, 1.1vw, 17px)",
                                    color: "#555",
                                    lineHeight: 1.7,
                                    maxWidth: 480,
                                    marginBottom: 40
                                }}>
                                    {s.desc}
                                </p>

                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "clamp(16px, 3vw, 24px)",
                                    flexWrap: "wrap"
                                }}>
                                    <button
                                        onClick={() => go("Book")}
                                        style={{
                                            padding: "16px 32px",
                                            borderRadius: "100px",
                                            background: "#1A1A1A",
                                            color: "#FFF",
                                            border: "none",
                                            fontWeight: "700",
                                            fontSize: 13,
                                            cursor: "pointer",
                                            transition: "transform 0.2s"
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    >
                                        Book Consultation
                                    </button>
                                    <div style={{
                                        fontSize: 10,
                                        fontWeight: 800,
                                        letterSpacing: "1.5px",
                                        textTransform: "uppercase",
                                        color: hl
                                    }}>
                                        From {s.price || "Enquire"}
                                    </div>
                                </div>
                            </div>

                            {/* 2. IMAGE SIDE */}
                            <div style={{
                                flex: "1 1 500px",
                                height: "clamp(300px, 50vh, 600px)",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                {s.image ? (
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                ) : (
                                    <div style={{ background: "#DDD", height: "100%" }} />
                                )}

                                {/* Floating Badge (Only visible/aesthetic on larger mobile + desktop) */}
                                <div style={{
                                    position: "absolute",
                                    bottom: 24,
                                    left: 24,
                                    padding: "10px 18px",
                                    background: "rgba(255,255,255,0.85)",
                                    backdropFilter: "blur(8px)",
                                    borderRadius: "100px",
                                    fontSize: 9,
                                    fontWeight: 900,
                                    letterSpacing: "1px",
                                    color: "#1A1A1A",
                                    textTransform: "uppercase",
                                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                                }}>
                                    {s.subtitle}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. CTA FOOTER - Transitions back to Pure White */}
            <section style={{ padding: "100px 5%", textAlign: "center", borderTop: "1px solid #EEE" }}>
                <h2 style={{ fontFamily: "'Instrument Serif', serif", fontSize: 42, marginBottom: 32 }}>Ready for your transformation?</h2>
                <button onClick={() => go("Book")} className="ov-btn" style={{ background: hl, color: "#FFF", padding: "20px 50px" }}>
                    Reserve Your Visit <Icon name="arrowUpRight" size={14} />
                </button>
            </section>
        </div>
    );
}

// ─── BOOK ─────────────────────────────────────────────────────────────────────
function Book({ c, go }) {
    const hl = c.highlightColor || "#C8A45D";
    const bg = c.accentColorLight || "#F8F6F1";
    const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "", service: "", notes: "" });
    const [err, setErr] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Required";
        if (!/^[+\d\s\-]{8,}$/.test(form.phone)) e.phone = "Enter a valid phone number";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
        if (!form.date) e.date = "Required";
        if (!form.time) e.time = "Required";
        if (!form.service) e.service = "Required";
        return e;
    };

    const submit = () => {
        const e = validate(); setErr(e);
        if (Object.keys(e).length) return;
        setLoading(true);
        setTimeout(() => { setLoading(false); go("Confirmed"); }, 1500);
    };

    const F = ({ label, id, type = "text", opts, full }) => (
        <div style={{ gridColumn: full ? "1 / -1" : undefined }}>
            <label style={{ display: "block", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#999", marginBottom: 8 }}>{label}</label>
            {opts ? (
                <select className="ov-input" value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })}>
                    <option value="">Select</option>
                    {opts.map(o => <option key={o}>{o}</option>)}
                </select>
            ) : type === "textarea" ? (
                <textarea className="ov-input" value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })} placeholder="Optional notes or questions" />
            ) : (
                <input className="ov-input" type={type} value={form[id]} onChange={e => setForm({ ...form, [id]: e.target.value })} placeholder={type === "date" ? "" : label.replace(" *", "")} />
            )}
            {err[id] && <p style={{ fontSize: 11, color: "#E53E3E", marginTop: 6 }}>{err[id]}</p>}
        </div>
    );

    return (
        <div className="ov-page" style={{ paddingTop: 64 }}>
            <section style={{ padding: "72px 5% 56px", borderBottom: "1px solid #EBEBEB", background: bg }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6vw", alignItems: "end" }} className="ov-2col">
                    <div>
                        <p className="ov-label" style={{ marginBottom: 16 }}>Book an Appointment</p>
                        <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 400, letterSpacing: "-1.5px", lineHeight: 1.06 }}>
                            Reserve your<br /><em>slot today.</em>
                        </h1>
                    </div>
                    <p style={{ fontSize: 15, color: "#666", lineHeight: 1.85, alignSelf: "end" }}>
                        Fill in the form and we'll confirm your appointment within 30 minutes. Same-day slots available for urgent cases.
                    </p>
                </div>
            </section>

            <section style={{ padding: "64px 5%", background: "#fff" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "6vw", alignItems: "start" }} className="ov-2col">
                    {/* Form */}
                    <div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 40px" }} className="ov-fgrid">
                            <F label="Full Name *" id="name" />
                            <F label="Phone *" id="phone" type="tel" />
                            <F label="Email Address *" id="email" type="email" full />
                            <F label="Preferred Date *" id="date" type="date" />
                            <F label="Preferred Time *" id="time" opts={["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"]} />
                            <F label="Service Required *" id="service" opts={c.services.map(s => s.title)} full />
                            <F label="Additional Notes" id="notes" type="textarea" full />
                        </div>
                        <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid #EBEBEB", display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                            <button className="ov-btn-hl" onClick={submit} disabled={loading} style={{ padding: "15px 32px", fontSize: 14 }}>
                                {loading ? "Confirming..." : "Confirm Appointment"}
                                {!loading && <Icon name="arrowUpRight" size={14} />}
                            </button>
                            <p style={{ fontSize: 12, color: "#999" }}>Secure & confidential. No hidden fees.</p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div style={{ paddingLeft: "5%", borderLeft: "1px solid #EBEBEB" }}>
                        <p className="ov-label" style={{ marginBottom: 20 }}>Contact Details</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 40 }}>
                            {[
                                { icon: "phone", label: "Phone", val: c.phone, href: `tel:${c.phone}` },
                                { icon: "mail", label: "Email", val: c.email, href: `mailto:${c.email}` },
                                { icon: "whatsapp", label: "WhatsApp", val: "Chat Now", href: `https://wa.me/${c.whatsapp}` },
                                { icon: "mapPin", label: "Address", val: c.address, href: c.mapLink },
                            ].map(item => (
                                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "flex", gap: 14, alignItems: "flex-start" }}>
                                    <div style={{ width: 36, height: 36, border: "1px solid #E0E0E0", display: "flex", alignItems: "center", justifyContent: "center", color: "#1A1A1A", flexShrink: 0 }}>
                                        <Icon name={item.icon} size={16} />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#999", marginBottom: 3 }}>{item.label}</div>
                                        <div style={{ fontSize: 14, color: "#1A1A1A", fontWeight: 500 }}>{item.val}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div style={{ background: bg, padding: "24px 20px", borderTop: `2px solid ${hl}` }}>
                            <p className="ov-label" style={{ marginBottom: 12 }}>What to Expect</p>
                            {["Confirmation call within 30 min", "Reminder the day before", "Free on-site parking", "All insurance accepted"].map(item => (
                                <div key={item} style={{ display: "flex", gap: 10, fontSize: 13, color: "#555", marginBottom: 10, alignItems: "flex-start" }}>
                                    <Icon name="check" size={14} style={{ color: hl, flexShrink: 0, marginTop: 1 }} />{item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// ─── CONFIRMED ───────────────────────────────────────────────────────────────
function Confirmed({ c, go }) {
    const hl = c.highlightColor || "#C8A45D";
    return (
        <div className="ov-page" style={{ paddingTop: 64, minHeight: "92vh", display: "flex", alignItems: "center", background: "#fff" }}>
            <div style={{ maxWidth: 700, margin: "0 auto", padding: "80px 5%", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, border: `1px solid ${hl}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 36px", color: hl }}>
                    <Icon name="check" size={28} />
                </div>
                <p className="ov-label" style={{ marginBottom: 16, color: hl }}>Appointment Confirmed</p>
                <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(36px,4.5vw,60px)", fontWeight: 400, letterSpacing: "-1.5px", lineHeight: 1.06, marginBottom: 20 }}>
                    You're all set.<br /><em>We'll be in touch shortly.</em>
                </h1>
                <p style={{ fontSize: 15, color: "#666", lineHeight: 1.8, marginBottom: 48 }}>
                    Thank you for choosing <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>{c.name}</strong>. We will call to confirm your slot within 30 minutes.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, border: "1px solid #EBEBEB", marginBottom: 48, textAlign: "left" }}>
                    {[["Confirmation Call", "Within 30 minutes"], ["Email", "Sent to your inbox"], ["Address", c.address.split(",").slice(0, 2).join(",")], ["Parking", "Free on-site"]].map(([l, v], i) => (
                        <div key={l} style={{ padding: "20px 22px", borderRight: i % 2 === 0 ? "1px solid #EBEBEB" : "none", borderBottom: i < 2 ? "1px solid #EBEBEB" : "none" }}>
                            <div className="ov-label" style={{ marginBottom: 6 }}>{l}</div>
                            <div style={{ fontSize: 14, color: "#1A1A1A", fontWeight: 500 }}>{v}</div>
                        </div>
                    ))}
                </div>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                    <button className="ov-btn" onClick={() => go("Home")}>Back to Home</button>
                    <button className="ov-btn-outline" onClick={() => go("Book")}>Book Another</button>
                </div>
            </div>
        </div>
    );
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
function Contact({ c, go }) {
    const hl = c.highlightColor || "#C8A45D";
    const bg = c.accentColorLight || "#F8F6F1";
    return (
        <div className="ov-page" style={{ paddingTop: 64 }}>
            <section style={{ padding: "80px 5% 64px", borderBottom: "1px solid #EBEBEB", background: bg }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <p className="ov-label" style={{ marginBottom: 20 }}>Contact</p>
                    <h1 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: "clamp(40px,5vw,72px)", fontWeight: 400, letterSpacing: "-2px", lineHeight: 1.06, maxWidth: 700 }}>
                        Let's start your<br /><em>smile journey.</em>
                    </h1>
                </div>
            </section>
            <section style={{ padding: "80px 5%", background: "#fff" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6vw" }} className="ov-2col">
                    <div>
                        <p className="ov-label" style={{ marginBottom: 20 }}>Reach Us</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #EBEBEB" }}>
                            {[
                                { icon: "phone", label: "Phone", val: c.phone, href: `tel:${c.phone}` },
                                { icon: "mail", label: "Email", val: c.email, href: `mailto:${c.email}` },
                                { icon: "whatsapp", label: "WhatsApp", val: "Start a chat", href: `https://wa.me/${c.whatsapp}` },
                                { icon: "mapPin", label: "Address", val: c.address, href: c.mapLink },
                            ].map((item, i) => (
                                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", display: "flex", gap: 20, padding: "24px 24px", borderBottom: i < 3 ? "1px solid #EBEBEB" : "none", alignItems: "flex-start", transition: "background .2s" }}
                                    onMouseEnter={e => e.currentTarget.style.background = bg}
                                    onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                                >
                                    <div style={{ width: 40, height: 40, border: "1px solid #E0E0E0", display: "flex", alignItems: "center", justifyContent: "center", color: "#1A1A1A", flexShrink: 0 }}>
                                        <Icon name={item.icon} size={17} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div className="ov-label" style={{ marginBottom: 4 }}>{item.label}</div>
                                        <div style={{ fontSize: 15, color: "#1A1A1A", fontWeight: 500 }}>{item.val}</div>
                                    </div>
                                    <Icon name="arrowUpRight" size={16} style={{ color: "#CCC", flexShrink: 0, marginTop: 12 }} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="ov-label" style={{ marginBottom: 20 }}>Opening Hours</p>
                        <div style={{ border: "1px solid #EBEBEB" }}>
                            {c.clinicHours.map((h, i) => (
                                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "20px 24px", borderBottom: i < c.clinicHours.length - 1 ? "1px solid #EBEBEB" : "none", alignItems: "center" }}>
                                    <span style={{ fontSize: 14, color: "#555" }}>{h.day}</span>
                                    <span style={{ fontSize: 14, fontWeight: 600, color: h.time === "Closed" ? "#CCC" : hl }}>{h.time}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: 32, padding: "32px 28px", background: "#1A1A1A", textAlign: "center" }}>
                            <p className="ov-label" style={{ color: "#666", marginBottom: 14 }}>Book Online</p>
                            <h3 style={{ fontFamily: "'Instrument Serif',Georgia,serif", fontSize: 26, fontWeight: 400, color: "#fff", marginBottom: 22, lineHeight: 1.2 }}>Free consultation<br /><em style={{ color: hl }}>available now.</em></h3>
                            <button className="ov-btn-hl" onClick={() => go("Book")} style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 14 }}>
                                Book Appointment <Icon name="arrowUpRight" size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer({ c, go }) {
    const hl = c.highlightColor || "#C8A45D";
    const deepSlate = "#121417"; // The "Not Black" Dark Color

    return (
        <footer style={{ background: deepSlate, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(60px, 10vw, 100px) 5% 40px" }}>

                {/* Main Grid: Responsive auto-fit logic */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                    gap: "60px 40px",
                    marginBottom: 80,
                    paddingBottom: 60,
                    borderBottom: "1px solid rgba(255,255,255,0.06)"
                }}>

                    {/* Brand Column */}
                    <div style={{ gridColumn: "span 1", minWidth: "260px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                            <div style={{
                                width: 40, height: 40,
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "12px",
                                display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={hl} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8 2 5 5 5 9c0 2.5 1.2 4.7 3 6.1V20h8v-4.9c1.8-1.4 3-3.6 3-6.1 0-4-3-7-7-7z" /></svg>
                            </div>
                            <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 20, color: "#FFF", letterSpacing: "-0.5px" }}>
                                {c.shortName || c.name}
                            </span>
                        </div>
                        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 32 }}>
                            {c.tagline}
                        </p>
                        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                            <a href={`tel:${c.phone}`} style={{
                                padding: "12px 20px", fontSize: 12, fontWeight: 700,
                                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "100px", color: "#FFF", textDecoration: "none",
                                display: "flex", alignItems: "center", gap: 8
                            }}>
                                <Icon name="phone" size={14} /> Call
                            </a>
                            <a href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer" style={{
                                padding: "12px 20px", fontSize: 12, fontWeight: 700,
                                background: "#25D366", borderRadius: "100px", color: "#FFF",
                                textDecoration: "none", display: "flex", alignItems: "center", gap: 8
                            }}>
                                <Icon name="whatsapp" size={14} /> WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Navigate Column */}
                    <div>
                        <p style={{ color: hl, fontSize: 10, fontWeight: 900, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 30 }}>Navigate</p>
                        {["Home", "About", "Services", "Book", "Contact"].map(p => (
                            <div key={p} onClick={() => { go(p); window.scrollTo({ top: 0 }) }}
                                style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 16, cursor: "pointer", transition: "all .3s" }}
                                onMouseEnter={e => { e.currentTarget.style.color = "#FFF"; e.currentTarget.style.transform = "translateX(5px)"; }}
                                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                                {p}
                            </div>
                        ))}
                    </div>

                    {/* Services Column */}
                    <div>
                        <p style={{ color: hl, fontSize: 10, fontWeight: 900, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 30 }}>Care</p>
                        {c.services.slice(0, 5).map(s => (
                            <div key={s.title} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
                                {s.title}
                            </div>
                        ))}
                    </div>

                    {/* Contact Column */}
                    <div>
                        <p style={{ color: hl, fontSize: 10, fontWeight: 900, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 30 }}>Contact</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                            {[[c.email, `mailto:${c.email}`], [c.address.split(",").slice(0, 2).join(","), c.mapLink]].map(([v, href]) => (
                                <a key={v} href={href} target="_blank" rel="noreferrer"
                                    style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none", lineHeight: 1.6, transition: "color .3s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#FFF"}
                                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
                                    {v}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.5px" }}>
                        © {new Date().getFullYear()} {c.name}. Carefully Crafted.
                    </p>
                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>
                        Powered by{" "}
                        <a href="https://techiesaie.com" target="_blank" rel="noreferrer"
                            style={{ color: "#FFF", fontWeight: 700, textDecoration: "none", borderBottom: `1px solid ${hl}` }}>
                            TechiesAIe
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function ClinicPage({ clinic }) {
    const c = clinic || DEMO;
    useCSS(c);
    const [page, setPage] = useState("Home");
    const go = (p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

    const pages = {
        Home: <Home c={c} go={go} />,
        About: <About c={c} go={go} />,
        Services: <Services c={c} go={go} />,
        Book: <Book c={c} go={go} />,
        Confirmed: <Confirmed c={c} go={go} />,
        Contact: <Contact c={c} go={go} />,
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Nav page={page} go={go} c={c} />
            <main style={{ flex: 1 }}>{pages[page] || pages.Home}</main>
            <Footer c={c} go={go} />
        </div>
    );
}