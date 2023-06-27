const express = require('express');
const connectDB = require('./dbConnect');
const { urlencoded, json } = require('body-parser');
const URLS = require("./schema");
const expressEjsLayout = require("express-ejs-layouts")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
// console.log(process.env.Mongo_URI)
connectDB();

app.set('view engine', 'ejs');
app.use(expressEjsLayout);
app.use(express.static('public'))

app.use(urlencoded({ extended: true }));
app.use(express.json())
app.get("/", (req, res) => {
    res.render('index', { host: req.get('host') });
})

app.post("/", async (req, res) => {
    console.log(`Form data : `, req.body);
    const { originalUrl, name, keywords } = req.body;
    if (originalUrl === '' || name === '' || keywords == '') {
        return res.render('index', {
            host: req.get('host'),
            error: "Please fill in all fields"
        })
    }

    const url = await URLS.find({ name: name });
    if (url.length === 1) {
      return res.render('index', {
        host: req.get('host'),
        error: "This custom URL name is already present. Please type different name."
    })
    }
    const shortUrl = req.protocol + "://" + req.get("host") + "/" + name;
    const newUrl = new URLS({
        originalUrl,
        name,
        shortUrl,
        keywords
    })
    newUrl.save().
        then((response) => res.render('index', { host: req.get('host'), success: shortUrl }))
        .catch(err => console.log(err));
})


app.get('/search', async (req, res) => {
  const searchQuery = req.query.q; 
  if (!searchQuery || searchQuery.trim().length === 0) {
    return res.render('index', { host: req.get('host'),error: 'Please enter a search query' });
  }
  try {

    const searchResults = await URLS.find({
      $or: [
        { name: { $regex: searchQuery, $options: 'i' } },
        { originalURL: { $regex: searchQuery, $options: 'i' } },
        { shortenURL: { $regex: searchQuery, $options: 'i' } },
        { keywords: { $regex: searchQuery, $options: 'i' } }
      ]
    });

    console.log('Search Results:', searchResults);

    res.render('search-results', { results: searchResults,query:searchQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.get("/:name", async (req, res) => {
    const { name } = req.params;
    const data = await URLS.find({ name });
    if (data.length < 1) {
        return res.status(404).json({ error: true, msg: "Error 404, This url is not found" })
    }
    res.redirect(data[0].originalUrl)
    console.log(data[0].originalUrl)
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})