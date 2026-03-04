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
import ClinicPage, { DEMO } from "./pages/ClinicPage";

function getSlug() {
  const host = window.location.hostname;

  // remove www
  const cleanHost = host.replace("www.", "");

  // only process subdomains of techiesaie.com
  if (cleanHost.endsWith("techiesaie.com")) {
    const parts = cleanHost.split(".");

    // if exactly 3 parts → subdomain exists
    if (parts.length === 3) {
      return parts[0]; // dr-idris
    }
  }

  return null; // root or invalid
}

export default function App() {
  const slug = getSlug();

  console.log("Slug detected:", slug); // debug in browser

  const clinic =
    slug && clinics.hasOwnProperty(slug)
      ? clinics[slug]
      : DEMO;

  return <ClinicPage clinic={clinic} />;
}