import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viraal Labs by Shri | Unleash Viraal Vibes",
  description:
    "Hyper-targeted digital marketing campaigns that go viral. 5x Instagram reach in 3 months, 250% PPC lead growth via AI-optimized funnels. Pune's #1 growth agency.",
  keywords:
    "digital marketing Pune, social media marketing, PPC advertising, web design, viral campaigns, Viraal Labs, Shri digital agency",
  authors: [{ name: "Viraal Labs by Shri" }],
  creator: "Viraal Labs",
  publisher: "Viraal Labs by Shri",
  metadataBase: new URL("https://viraallabs.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://viraallabs.in",
    title: "Viraal Labs by Shri | Unleash Viraal Vibes",
    description:
      "5x growth. 250% leads. Zero guesswork. India's most results-driven digital marketing agency from Pune.",
    siteName: "Viraal Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viraal Labs by Shri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viraal Labs by Shri | Unleash Viraal Vibes",
    description: "5x growth. 250% leads. Zero guesswork. From Pune to viral domination.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MarketingAgency",
              name: "Viraal Labs by Shri",
              description: "Hyper-targeted digital marketing campaigns that go viral",
              url: "https://viraallabs.in",
              telephone: "+917420820894",
              email: "Rajiv.sharma20894@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sai Park, Dighi",
                addressLocality: "Pune",
                addressRegion: "Maharashtra",
                postalCode: "411015",
                addressCountry: "IN",
              },
              sameAs: [
                "https://instagram.com/viraallabs",
                "https://linkedin.com/company/viraallabs",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
