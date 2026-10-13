import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "grid",
          placeItems: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <main style={{ textAlign: "center" }}>
          <h1>404</h1>
          <Link href="/">Go home</Link>
        </main>
      </body>
    </html>
  );
}
