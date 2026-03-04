// src/App.jsx
// ─────────────────────────────────────────────────────────────────────────────
// MULTI-TENANT SUBDOMAIN ROUTER
//
// How it works:
//   1. Reads window.location.hostname at runtime
//   2. Extracts the subdomain  → "dr-idris.techiesaie.com" gives "dr-idris"
//   3. Looks up that key in clinics.js
//   4. Renders the full clinic site if found, or a 404 if not
//
// Local development:
//   The URL won't have a subdomain, so it falls back to reading ?clinic=dr-idris
//   from the query string. Example: http://localhost:5173/?clinic=dr-idris
// ─────────────────────────────────────────────────────────────────────────────
// src/App.jsx
// Reads subdomain → looks up clinics.js → renders ClinicPage
// Local dev: ?clinic=dr-idris   Production: dr-idris.techiesaie.com

// src/App.jsx
// Multi-tenant resolver with DEMO fallback

import { clinics } from "./data/clinics";
import ClinicPage from "./pages/ClinicPage";
import { DEMO } from "./pages/ClinicPage"; // export DEMO from file

function getSlug() {
  const host = window.location.hostname;

  // Production subdomain
  if (host.includes("techiesaie.com")) {
    const parts = host.split(".");
    if (parts.length >= 3) return parts[0];
  }

  // Local dev query param
  const params = new URLSearchParams(window.location.search);
  if (params.get("clinic")) return params.get("clinic");

  // fallback to first clinic key
  return Object.keys(clinics)[0];
}

export default function App() {
  const slug = getSlug();

  // ✅ fallback to DEMO instead of 404
  const clinic = clinics[slug] ?? DEMO;

  return <ClinicPage clinic={clinic} />;
}