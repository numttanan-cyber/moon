import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-2xl font-bold">ให้เราเรียกคุณว่าอะไรดี?</p>
      <input className="box-border size-40 border-2 p-4 ..."></input>
      <a href="#" className="text-2xl font-bold">NEXT</a>
      <Image
        src="/img/bg.png"
        alt="bg.png logo"
        width={1920}
        height={1080}
      />
    
    </div>
  );
}
