import { legalInfo } from "@/lib/site";

const phone = process.env.NEXT_PUBLIC_PHONE ?? "0671551931";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@rubyassur.fr";

// Conversion 0671551931 -> +33671551931
const phoneE164 = phone.startsWith("0") ? `+33${phone.slice(1)}` : phone;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Ruby Assur'",
  legalName: legalInfo.name,
  url: "https://rubyassur.fr",
  logo: "https://rubyassur.fr/icon.svg",
  image: "https://rubyassur.fr/opengraph-image",
  description:
    "Ruby Assur', courtier en assurances indépendant (ORIAS 24007878) dans l'Aisne. Assurance auto, habitation, mutuelle, RC Pro, décennale. Devis gratuit et sans engagement.",
  telephone: phoneE164,
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "44 avenue du Bois Roger",
    postalCode: "02200",
    addressLocality: "Pasly",
    addressRegion: "Aisne",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Aisne" },
    { "@type": "Country", name: "France" },
  ],
  sameAs: ["https://www.facebook.com/rubyassur"],
  identifier: [
    { "@type": "PropertyValue", name: "SIREN", value: legalInfo.siren.replace(/\s/g, "") },
    { "@type": "PropertyValue", name: "ORIAS", value: legalInfo.orias },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
