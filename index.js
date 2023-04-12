import express from "express";

let app = express();

app.get("/", function (req, res) {
  res.send("helloo start page");
});

app.get("/1/", function (req, res) {
  res.send("page 1");
  console.log(req.path);
  console.log(req.url);
  console.log(req.originalUrl);
  console.log(req.query);
  console.log(req.query.get1);
  console.log(req.protocol);
  console.log(req.secure);
  console.log(req.headers);
  console.log(req.acceptsLanguages);
  console.log(req.ip);
});

//status 403
app.get("/2/", function (req, res) {
  res.status(403).send("page 2");
});

// redirect to start page
app.get("/3/", function (req, res) {
  res.redirect("/");
});

//handle 404
app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(3000, function () {
  console.log("runing");
});
