export async function fetchLogin(value: { password: string; name: string }) {
  await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(value),
  });
}
