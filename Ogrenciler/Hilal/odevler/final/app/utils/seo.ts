import type { Metadata } from "next";

export const generatePageMetadata = ({
  title,
  description,
  locale = "en",
  url = "https://yourdomain.com", 
  image = "/og-image.png",        
}: {
  title: string;
  description: string;
  locale?: string;
  url?: string;
  image?: string;
}): Metadata => {
  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      siteName: "Your Site Name", 
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons: {
      icon: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${url}/en`,
        tr: `${url}/tr`,
      },
    },
  };
};
