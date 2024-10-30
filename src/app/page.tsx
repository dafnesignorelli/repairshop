import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="font-bold">
            Dafne&apos;s Computers <br /> Repair Shop
          </h1>
          <address>23 Brusaport, BG Italy</address>
        <p> Open Daily: 9pm</p>
        <Link href="tel:555555" className="hover: underline"> hhhhhhh</Link>
        </div>
      </main>
    </div>
  );
}
