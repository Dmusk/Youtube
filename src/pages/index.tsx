import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/videoGrid";
import { AppBar } from "@/components/AppBAr";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return <div>
    
    <AppBar />
    <VideoGrid />
  </div>
}
