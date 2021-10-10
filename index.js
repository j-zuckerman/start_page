const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.bookmarkList.create({
    data: {
      title: "Home",
      bookmarks: {
        create: { 
            link: 'https://www.twitch.tv',
            name: "Twitch",
            color: "red"
         },
      },
    },
  })

  const allBookmarkLists = await prisma.bookmarkList.findMany({
    include: {
      bookmarks: true,

    },
  })
  console.dir(allBookmarkLists, { depth: null })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })