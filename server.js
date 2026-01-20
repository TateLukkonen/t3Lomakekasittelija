import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "ejsPages");

app.use(express.urlencoded({ extended: true })); // parse form data

const port = 3000;
const host = "localhost";

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/palaute", (req, res) => {
    res.render("palaute");
});
app.post("/vastaukset", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Name:", name, "Email:", email, "Message:", message);
    res.render("vastaukset", {name, email, message});
});

app.listen(port, host, () => console.log(`${host}:${port} kuuntelee...`));
