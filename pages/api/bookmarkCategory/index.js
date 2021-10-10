import prisma from '../../../lib/prisma'

export default async function handler(req, res) {

  // GET /api/bookmarkCategory
  if(req.method === 'GET'){
    const results = await prisma.bookmarkCategory.findMany({});
    res.json(results);
  }
  // POST /api/bookmarkCategory
  //Required: Title
  else if(req.method === 'POST'){
    const {title} = req.body;
    const result = await prisma.bookmarkCategory.create({
      data:{
        title: title,
        bookmarks:{
          create: [
            {
              link: '',
              name: '',
              icon: '',
              color: ''

            }
          ]
        }
      }
    });

    res.json(result);
  }
  //Throw error
  else { 
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }

}