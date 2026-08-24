import type { Metadata, Viewport } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manakamana Bag House | Dhangadhi, Kailali",
  description:
    "Premium bags, backpacks, purses and luggage shop in Dhangadhi, Kailali, Nepal.",
};

export const viewport: Viewport = {
  themeColor: "#60a5fa",
};

const themeInit = `(function(){try{var t=localStorage.getItem("mbh-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-bs-theme",t);}catch(e){document.documentElement.setAttribute("data-bs-theme","light");}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-100" suppressHydrationWarning>
      <body className="h-100 d-flex flex-column">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
