import type { Metadata } from "next";
export const metadata: Metadata = { title: "cafe website", description: "Built by Heaven AI Engine" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{margin:0,fontFamily:"sans-serif"}}>{children}</body></html>);
}