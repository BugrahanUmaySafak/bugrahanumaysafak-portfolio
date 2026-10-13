"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function CopyButton({ value }: { value: string }) {
  const t = useTranslations("Contact");
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          toast.success(t("copiedToast"), { description: value });
        } catch {
          toast.error(t("copyFailed"));
        }
      }}
    >
      {copied ? <Check className="animate-in zoom-in-50 duration-200" /> : <Copy />}
      {copied ? t("copied") : t("copy")}
    </Button>
  );
}
