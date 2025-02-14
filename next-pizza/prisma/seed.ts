import { prisma } from './prisma-client';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@test.com',
        password: hashSync ('11111',10),
        verified: new Date(),
        role: 'USER',
      },
    ],  
  })
}
async function down() {}
async function main() {
  try {
    await up();
    await down();
  } catch (error) {
    console.error(error);
  }
}
