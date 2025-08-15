"use client";

import * as React from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ModeLanguage() {
  const [, setLanguage] = React.useState("EN");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Change language">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("EN")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("TR")}>Türkçe</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}