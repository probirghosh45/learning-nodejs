import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
app.use(express.json())

const filePath = path.join(__dirname, "./todo.json");

app.get("/", (req: Request, res: Response) => {
  res.send("Learning ExpressJs with Typescript!");
});

app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filePath, { encoding: "utf-8" });
  //    res.send(data)
  res.json(data);
});

app.get("/todos/:title", (req: Request , res : Response) => {
    console.log("From Query",req.query)
    console.log("From Params",req.params)
    const data = fs.readFileSync(filePath,{encoding : "utf-8"})
    res.json(data);
} )

app.get("/todos/:title/:body", (req: Request , res : Response) => {
    console.log("From Query",req.query)
    console.log("From Params",req.params)
    const data = fs.readFileSync(filePath,{encoding : "utf-8"})
    res.json(data);
} )



app.post('/todos/create-job',(req:Request , res : Response ) => {
    const { title, body } = req.body;
    console.log(title, body);
    res.send("Hello Express JS!")
})

export default app;

// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
//[todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]

/**
 * Basic File structure
 * server.ts - server handling like - starting, closing error handling of server. only related to server
 * app.ts - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
