export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "de" }];
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: "en-US" | "bn-BD" };
}>) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
