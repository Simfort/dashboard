import FormLogin from "../ui/login/FormLogin";

export default function Page() {
  return (
    <main
      className={`h-screen flex justify-center bg-[url(../../../public/bitcoin.png)] bg-cover bg-center w-1/1`}>
      <section className="flex  justify-center items-center flex-col">
        <h1 className="text-[100px]">Login</h1>
        <FormLogin />
      </section>
    </main>
  );
}
