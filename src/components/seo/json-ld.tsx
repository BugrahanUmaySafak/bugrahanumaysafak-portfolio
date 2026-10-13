export function JsonLd({ graph }: { graph: Record<string, unknown>[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
