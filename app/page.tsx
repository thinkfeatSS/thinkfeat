import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/images/logo.png" alt="not found" layout="fill" className="w-screen h-screen absolute top-0 left-0" />
    </main>
  );
}
