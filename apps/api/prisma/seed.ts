import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main() {
  const demoUser = await prisma.user.upsert({
    where: { id: "demo-user-1" },
    update: {},
    create: {
      id: "demo-user-1",
      email: "demo@example.com",
      isSubscribed: true,
    },
  });

  console.log("Seeded demo user:", demoUser);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });