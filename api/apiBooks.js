module.exports = (app, fetch) => {
  app.get("/api/books", async (req, res) => {
    console.log("helpx");
    console.log(req.body);
    const { author, title } = req.body;

    const params = `${title ? "title=" + title : ""}${
      author ? "&author=" + author : ""
    }`;
    fetch(`http://openlibrary.org/search.json?title=harriet&limit=10`)
      .then((result) => result.json())
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  });
};
