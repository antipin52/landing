import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Лендинги и веб-приложения под ключ | ИИ + Человек",
  description: "Создаём красивые и функциональные веб-страницы за 1-3 дня. Лендинги, AI-страницы, простые приложения.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
