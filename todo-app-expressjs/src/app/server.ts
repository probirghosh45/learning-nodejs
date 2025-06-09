import { CURSOR_FLAGS, MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
const port = 3000;

let server;

const uri =
  "mongodb+srv://simple-todo-app:eJ1ndJgsvOQGK5sg@cluster0.rgora5h.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const bootstrap = async () => {
  await client.connect();
  console.log("DB Connected!")
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
