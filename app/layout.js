import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Don't Subscribe Bro",
  description: "Your goto price comparator between various subscription types",
  openGraph: {
    title: "Don't Subscribe Bro",
    description:
      "Your goto price comparator between various subscription types",
    url: "https://dont-sub-bro.vercel.app",
    siteName: "Don't Subscribe Bro",
    images: [
      {
        url: "https://i.imgur.com/ZippwYU.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
