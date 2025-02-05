import Link from "next/link";
import { dashboardsLinks } from "@/app/lib/dashboard/links";

export default function SideNav() {
  return (
    <aside className="bg-white shadow-md h-screen justify-between flex flex-col rounded-br-[50px] rounded-tr-[50px]">
      <header className=" bg-blue-500 h-[20%] rounded-tr-[50px] flex justify-center items-center ">
        <h1 className="text-5xl text-white">TGD</h1>
      </header>
      <nav className="bg-white flex flex-col m-3 gap-5">
        {dashboardsLinks.map((val, i) => {
          return (
            <Link
              key={i}
              className="p-3 border-2 rounded-xl transition-colors duration-150 hover:text-blue-500 hover:border-blue-500 hover:border-solid "
              href={val.path}>
              {val.text}
            </Link>
          );
        })}
      </nav>
      <Link
        className="p-3 rounded-br-[50px]  border-2 justify-self-center transition-colors duration-150 hover:text-red-500 hover:border-red-500 hover:border-solid "
        href="/">
        Sign Out
      </Link>
    </aside>
  );
}
