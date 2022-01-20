import express from "express";
import serverRender from '../serverRender';
import packageInfo from "testData.json";

const server = express();

server.use(express.static("public"));
server.set('view engine', 'ejs');

server.get("/", async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', {...initialContent});
});

server.get("/data", (req, res) => {
  res.send(packageInfo.data);
});

server.listen(4242, () => console.log("Server is running..."));