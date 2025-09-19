const express = require("express");
const app = express();
const port = 3000;

//Serving Static file di folder Public
app.use(express.static("public"));

app.listen(port,(reo,res) => {
    console.log(`Server running at http://localhost:${port}`);
})