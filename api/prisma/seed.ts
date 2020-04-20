import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('people')
  await prisma.person.create({ data: { name: 'Curtis' } })
  await prisma.person.create({ data: { name: 'Bob' } })
  await prisma.person.create({ data: { name: 'Joe' } })
  await prisma.person.create({ data: { name: 'Tom' } })
}

try {
  console.log('Seeding Started')
  main()
} catch (e) {
  throw e
} finally {
  prisma.disconnect()
  console.log('Seeding Ended')
}
