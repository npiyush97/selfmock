import Link from "next/link";
export default function Menu() {
  return (
    <div>
      <ul className="flex flex-col p-2 sm:flex-row cursor-pointer">
        <li className="m-2 p-2 border hover:bg-rose-700">
          <Link href="/dashboard/frontend">Frontend Questions</Link>
        </li>
        <li className="m-2 p-2 border hover:bg-rose-700">
          <Link href="/dashboard/nodejs">Nodejs Questions</Link>
        </li>
      </ul>
    </div>
  );
}
