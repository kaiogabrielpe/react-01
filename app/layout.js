import "./globals.css";

export const metadata = {
  title: "Mini Bio",
  description: "Cartão de mini bio feito com React + Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
