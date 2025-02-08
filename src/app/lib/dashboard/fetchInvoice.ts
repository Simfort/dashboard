import { Invoice } from "./invoicesTypes";

export async function fetchInvoice(invoice: Invoice) {
  await fetch("/api/invoice/create", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(invoice),
  });
}
