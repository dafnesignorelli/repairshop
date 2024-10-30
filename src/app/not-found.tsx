import Image from "next/image";

export const matedata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl ">Page Not Found</h2>
        <Image
          alt="imgnot"
          className="m-0 rounded-xl"
          src="/images/not-found-img.jpg"
          width={300}
          height={300}
          priority={true}
          title="Page Not Found"
        />
      </div>
    </div>
  );
}
