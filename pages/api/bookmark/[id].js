import prisma from '../../../lib/prisma'

export default function handler(req, res) {
  const { id } = req.query;

  // DELETE /api/bookmark/:id :
  if(req.method === "DELETE"){
    const deleteBookmark = await prisma.bookmark.delete({
      where: {
        id : id,
      },
    });

    res.json(deleteBookmark);
  }
  // PUT /api/bookmark/:id :
  else if(req.method === 'PUT'){
    const {link, name, icon, color} = req.body;
    const updateBookmark = await prisma.update({
      where: {
        id: id
      },
      data:{
        link: link,
        name: name,
        icon: icon, 
        color: color
      }
    });

    res.json(updateBookmark);
  }
  // ERROR :
  else{

  }
  res.end(`Bookmark: ${id}`)
}
