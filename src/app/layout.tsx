import "@/styles/globals.css";
import Header from "@/components/header/Header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
