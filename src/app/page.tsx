"use client";
import { redirect } from "next/navigation";
import Description from "./Description";
import Welcome from "./Welcome";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      redirect("/dashboard");
    }
  }, []);
  return (
    <main>
      <Welcome />
      <Description />
    </main>
  );
}
