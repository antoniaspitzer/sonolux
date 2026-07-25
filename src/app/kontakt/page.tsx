import "../globals.css";
import Contact from "@/components/Contactform/Contactform";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Contact />
      </body>
    </html>
  );
}
