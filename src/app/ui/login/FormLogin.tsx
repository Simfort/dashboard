"use client";
import { FormEvent, useRef, useState } from "react";
import { inputs } from "../../lib/login/inputs";
import { validator } from "../../lib/login/validator";

export default function FormLogin() {
  const [value, setValue] = useState<{ password: string; name: string }>({
    password: "",
    name: "",
  });
  const err = useRef<HTMLParagraphElement>(
    "" as unknown as HTMLParagraphElement
  );
  const handlerSubmit = (e: FormEvent) => {
    const valid = validator(value);
    if (valid) {
      localStorage.setItem("user", value.name);
      return true;
    } else {
      e.preventDefault();
      err.current.style.color = "red";
      err.current.textContent = "Name or password not valid!";
      return false;
    }
  };
  return (
    <form
      onSubmit={(e) => handlerSubmit(e)}
      className="bg-white flex-wrap max-sm:items-center max-sm:p-5  font-sans p-10 h-[500px] flex rounded-[20%] text-black shadow-2xl  "
      action="/dashboard">
      <table className="">
        <tbody className="max-sm:flex max-sm:flex-col max-sm:gap-14">
          {inputs.map((val, i) => {
            return (
              <tr className=" max-sm:flex max-sm:flex-col " key={i}>
                <th>{val.title}</th>
                <th className="pl-5">
                  <input
                    value={
                      value[
                        val.type == "password"
                          ? (value.password as keyof typeof value)
                          : (value.name as keyof typeof value)
                      ]
                    }
                    onChange={(e) => {
                      err.current.textContent =
                        " Log in on this site your access config with your data.";
                      err.current.style.color = "";
                      setValue(
                        val.type == "password"
                          ? { ...value, password: e.target.value }
                          : { ...value, name: e.target.value }
                      );
                    }}
                    className="h-10 w-1/1 outline-none rounded-md p-5 border-blue-500 border-solid border-[2px]"
                    type={val.type}
                  />
                </th>
              </tr>
            );
          })}

          <tr>
            <th colSpan={2}>
              <p className="text-center  mb-5" ref={err}>
                Log in on this site your access config with your data.
              </p>
              <button
                className="p-3 border-2 w-80 rounded-xl transition-colors duration-150 hover:text-blue-500 hover:border-blue-500 hover:border-solid active:border-blue-300 active:text-blue-300"
                type="submit">
                LogIn
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
