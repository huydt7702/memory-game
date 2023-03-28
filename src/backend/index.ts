import express, { Request, Response } from "express";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", "templates");

app.use("/assets", express.static(path.join("dist/frontend")));
app.use("/", express.static(path.join("public")));

app.get("/board", (req: Request, res: Response) => {
    res.render("index", {});
});

app.get("/login", (req: Request, res: Response) => {
    res.render("login", {});
});

app.listen(3333, () => {
    console.log(`Sever is running on port 3333`);
});
