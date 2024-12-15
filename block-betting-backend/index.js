// create a server for football API data - required for the front-end and backend
// express server
const express = require("express");
const PORT = 8080;
const getTopGoalScorer = require("./middleware/getTopGoalScorer");
const getFixtures = require("./middleware/getFixtures");
const getStandings = require("./middleware/getStandings");

const cors = require("cors");


const app = express();
app.use(cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST"]
}));

// test each of these functions!!!!!

app.get("/top-scorers", async (request, response) => {
    const result = await getTopGoalScorer();
    response.send(result);
});

app.get("/get-fixtures", async(request, response) => {
    const result = await getFixtures();
    response.send(result);
});

app.get("/get-standings", async(request, response) => {
    const result = await getStandings();
    response.send(result)
});

app.listen(PORT, () => {
    console.log("server listening on PORT: " + PORT);
});