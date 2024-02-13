import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-rose-500">
      <h1 className="text-4xl font-black ">welcome to self mock</h1>
      <Link
        href="/dashboard/menu"
        className="m-2 p-2  bg-white text-black rounded hover:bg-slate-200"
      >
        Get Started
      </Link>
    </div>
  );
}
