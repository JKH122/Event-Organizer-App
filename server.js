/*
Steps for a Server file:
1.import express
2. create the app
3. Tell app what tools/settings we will use
4. Create routes
5. Listen for browser requests
*/

//step 1:
const express = require("express");

//step 2:
const app = express(); //shorten express command
const PORT = 3000;

//step 3:
app.set("view engine", "ejs"); //"Files inside views are EJS files
app.use(express.static("public"));//tell express where static files are

//step 4:
app.get("/", (req, res) => {
    res.render("index");
})

//step 5:
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});