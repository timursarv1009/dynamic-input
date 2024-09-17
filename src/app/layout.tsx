import type { Metadata } from "next";

import "../../public/css/reset.css";
import "../../public/css/globals.css";

export const metadata: Metadata = {
  title: "Datrix Assignment",
  description: "Done by Oyediran Seun Stephen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
