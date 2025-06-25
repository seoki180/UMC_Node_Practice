import { PrismaClient } from "@prisma/client"
// import { PrismaClient } from "@prisma/client"
// import pkg from '@prisma/client';
// const { PrismaClient } = pkg;

const prisma = new PrismaClient({})
 
prisma.$on('query', (e) => {
  console.log('Params: ' + e.params)
  console.log('Duration: ' + e.duration + 'ms')
})

export{ prisma }