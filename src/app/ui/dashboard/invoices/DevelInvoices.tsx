"use client";
import { fetchInvoice } from "@/app/lib/dashboard/fetchInvoice";
import { Invoice } from "@/app/lib/dashboard/invoicesTypes";
import { useEffect, useState } from "react";
import CheckPublic from "./CheckPublic";

export default function DevelInvoices() {
  const [storage, setStorage] = useState("");
  const [invoice, setInvoice] = useState<Invoice>({
    price: "1.00",
    author: storage,
    title: "",
    content: "",
    public: false,
  });
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setStorage(localStorage.getItem("user")!);
    }
  }, []);
  return (
    <form
      onSubmit={() => {
        fetchInvoice(invoice);
      }}
      className=" bg-slate-100 rounded-2xl flex flex-wrap gap-10 shadow-md p-5 items-center">
      <label htmlFor="">
        <p>Title</p>
        <input
          value={invoice.title}
          onChange={(e) => {
            setInvoice({ ...invoice, title: e.target.value });
          }}
          className="outline-none p-3 rounded-2xl"
          type="text"
          placeholder="Write title"
        />
      </label>
      <label htmlFor="">
        <p>Content*</p>
        <textarea
          value={invoice.content}
          onChange={(e) => {
            setInvoice({ ...invoice, content: e.target.value });
          }}
          className="outline-none resize-none "
          placeholder="Write content"
        />
      </label>
      <label htmlFor="">
        <p>Public</p>
        <CheckPublic
          onClick={() => {
            setInvoice({ ...invoice, public: !invoice.public });
          }}
        />
      </label>
      <label htmlFor="">
        <p>Price in $</p>
        <input
          value={invoice.price}
          onChange={(e) => {
            setInvoice({ ...invoice, price: e.target.value });
          }}
          className="outline-none p-3 rounded-2xl"
          placeholder="1.00"
          type="number"
          min="1.00"
          step="0.01"
        />
      </label>
      <button
        className="bg-blue-500 text-white p-5 w-60 rounded-2xl font-[700] ml-80  transition-colors duration-150 hover:bg-blue-400 active:bg-blue-200"
        type="submit">
        Create
      </button>
    </form>
  );
}
