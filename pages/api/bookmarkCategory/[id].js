import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  // DELETE /api/bookmarkCategory/:id
  // Delete bookmark category as well as all bookmarks that is a part of said category
  if (req.method === 'DELETE') {
    const deleteBookmarks = prisma.bookmark.deleteMany({
      where: {
        categoryId: Number(id),
      },
    });

    const deleteCategory = prisma.bookmarkCategory.delete({
      where: {
        id: Number(id),
      },
    });

    const transaction = await prisma.$transaction([
      deleteBookmarks,
      deleteCategory,
    ]);
    res.json(transaction);
  }
  // PUT /api/bookmarkCategory/:id
  else if (req.method === 'PUT') {
    const { title } = req.body;

    const bookmarkCategoryToUpdate = await prisma.bookmarkCategory.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
      },
    });

    res.json(bookmarkCategoryToUpdate);
  }
  //error
  else {
  }
}
