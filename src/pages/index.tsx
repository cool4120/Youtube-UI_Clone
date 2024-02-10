import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCards } from "@/components/VideoCards";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const t= 'Hello';
  return (
   <div>
      <AppBar/>
      <VideoGrid></VideoGrid>
   </div>
  );
}
