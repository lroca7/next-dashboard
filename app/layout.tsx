import "./ui/global.css";
import { monsterrat } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monsterrat.className}`}>{children}</body>
      <footer className="py-10 flex justify-center items-center">
        Hecho by Vercel
      </footer>
    </html>
  );
}
