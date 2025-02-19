import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  // SELECT * FROM users WHERE email = 'emasd'
  const ingredients = await prisma.ingredient.findMany();

  return NextResponse.json(ingredients);
}
