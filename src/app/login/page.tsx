"use client";
import { useEffect } from "react";
import FormLogin from "../ui/login/FormLogin";
import { redirect } from "next/navigation";
export default function Page() {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      redirect("/dashboard");
    }
  }, []);
  return (
    <main className=" h-screen  flex justify-center  w-1/1">
      <section className="flex   justify-center items-center flex-col">
        <h1 className="text-[100px]">Login</h1>
        <FormLogin />
      </section>
    </main>
  );
}
