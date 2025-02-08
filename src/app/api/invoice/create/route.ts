import { Invoice } from "@/app/lib/dashboard/invoicesTypes";
import { prisma } from "../../../../../prisma/seed";

export async function POST(req: Request) {
  try {
    const body: Invoice = await req.json();
    const author = await prisma.user.findFirst({
      where: {
        name: body.author as string,
      },
    });
    await prisma.invoice.create({
      data: {
        authorId: author!.id!,
        title: body.title,
        price: body.price,
        content: body.content,
        published: body.public,
      },
    });
    return Response.json(JSON.stringify("ok"), { status: 200 });
  } catch {
    console.log("Ooops");
  }
}
