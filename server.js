


// Required ES6 external modules

import express from 'express'
import path    from 'path'
import cors    from 'cors'

// App Variables

const app = express()
const port = process.env.PORT || '8000'


// Serve static files from the "public" directory
app.use(cors());
app.use(express.static('public'));


// App configuration

app.set("view engine", "pug");

// Routes Defined

app.get("/", (req, res) => {
  res.render("index", { title: "Home"})
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve('views/index.pug'));
});


// Server Active

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});






console.log(12354)
