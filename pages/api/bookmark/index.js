import prisma from '../../../lib/prisma'

// POST /api/bookmark
// Required fields in body: link, name
// Optional fields in body: color
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { link, name, icon, color, categoryName } = req.body;
    const bookmark = await prisma.bookmark.create({
      data: {
          link: link,
          name: name,
          icon: icon,
          color: color,
          category:{
            connect:{
              title: categoryName
            }
          }
        },
    });
    res.json(bookmark);
        
  }
}