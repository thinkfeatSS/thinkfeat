import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col text-center items-center justify-center gap-10 bg-black w-screen h-screen p-5">
      {/* <Image src="https://orangered-koala-430507.hostingersite.com/pictures/logo.jpg" alt="not found" layout="fill" className="w-screen h-screen absolute top-0 left-0 opacity-50 z-0" /> */}
      <Image src="/images/logo.png" alt="not found" width={1764} height={585} className="" />
      <h1 className="text-on-surface-color text-3xl z-10">Thinkfeat Software Solutions</h1>
      <h1 className="text-on-surface-color text-xl z-10">Your Imagination Is Our Creation</h1>
    </main>
  );
}
