import { prisma } from "../../../../prisma/seed";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, password } = body;
  await prisma.user.create({
    data: {
      name,
      password,
    },
  });
  return Response.json(`ok`, { status: 200 });
}
