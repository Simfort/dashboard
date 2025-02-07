export async function fetchLogin(value: { password: string; name: string }) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
  const data = await res.json();
  console.log(data);
}
