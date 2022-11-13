import express, { Request, Response} from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8080;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1
  app.get( "/", async ( req: Request, res: Response ) => {
    res.status(200).send({message: "Try GET /filteredimage_url={{URL}} to filter an image"})
  })
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/filteredimage", async ( req: Request, res: Response ) => {
    try {
      const imageUrl:string = req.query.image_url;
      if (!imageUrl) {
        return res.status(404).json({ message: "Image URL is required" });
      }

    const filteredImageFilePath:string = await filterImageFromURL(imageUrl)
    res.status(200).sendFile(filteredImageFilePath)
    req.on('close', () => deleteLocalFiles([filteredImageFilePath])) 
    } catch (error) {
      res.status(422).send({message: "ERROR: The image could not be downloaded, Try Again"})
    }
  });
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();