"use client";

import dynamic from "next/dynamic";

const DockNav = dynamic(() => import("@/components/DockNav"), { ssr: false });

export default function DockNavWrapper() {
  return <DockNav />;
}
