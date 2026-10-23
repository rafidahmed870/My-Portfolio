import type { Metadata, Viewport } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Serif,
  DM_Sans,
  Space_Grotesk,
  Inter,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { cn } from "@/lib/utils";
import {
  BASE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
} from "@/lib/constants";

// ── Fonts ──────────────────────────────────────────────────────────────────────
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ── Metadata ───────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Rafid Ahmed",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Rafid Ahmed",
    "full-stack developer",
    "web developer Bangladesh",
    "Next.js developer",
    "React developer",
    "SaaS developer",
    "Node.js",
    "TypeScript",
    "portfolio",
    "Dhaka developer",
    "rafidstudio",
    "software engineer Bangladesh",
    "ecommerce developer",
    "backend developer",
  ],

  authors: [{ name: "Rafid Ahmed", url: BASE_URL }],
  creator: "Rafid Ahmed",
  publisher: "Rafid Ahmed",
  applicationName: "Rafid Studio",
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: BASE_URL,
    languages: { "en-US": BASE_URL },
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description:
      "Full-stack developer from Dhaka building modern web apps, SaaS products, and scalable backend systems. Let's build your next digital edge.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@rafidahmed870",
    creator: "@rafidahmed870",
    title: SITE_TITLE,
    description:
      "Full-stack developer from Dhaka building modern web apps, SaaS products, and scalable backend systems.",
    images: [{ url: "/og-image.png", alt: SITE_TITLE }],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  //   bing: "YOUR_BING_WEBMASTER_TOKEN",
  // },
};

// ── Viewport (separate from metadata per Next.js 15+) ──────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090d" },
    { media: "(prefers-color-scheme: light)", color: "#09090d" },
  ],
  colorScheme: "dark",
};

// ── JSON-LD Structured Data ────────────────────────────────────────────────────
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Rafid Ahmed",
  url: BASE_URL,
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og-image.png`,
    width: 1200,
    height: 630,
  },
  jobTitle: "Full-Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Rafid Studio",
    url: BASE_URL,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  email: "hello@rafidstudio.cloud",
  sameAs: [
    "https://github.com/rafidahmed870",
    "https://www.linkedin.com/in/rafid-ahmed-76b777432",
    "https://www.instagram.com/_rafidahmed_/",
    "https://x.com/rafidahmed870",
    "https://www.youtube.com/@rafidcreations",
  ],
  knowsAbout: [
    "React", "Next.js", "TypeScript", "Node.js", "NestJS",
    "PostgreSQL", "Redis", "Docker", "AWS",
    "SaaS Development", "Web Development", "Tailwind CSS", "CI/CD",
  ],
  description: SITE_DESCRIPTION,
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: SITE_NAME,
  description: "Official portfolio of Rafid Ahmed, full-stack developer from Dhaka, Bangladesh.",
  publisher: { "@id": `${BASE_URL}/#person` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};

// ── Layout ─────────────────────────────────────────────────────────────────────
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        instrumentSerif.variable,
        dmSans.variable,
        spaceGrotesk.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <Nav />
        {children}
      </body>
    </html>
  );
}
