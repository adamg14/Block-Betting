const axios = require("axios");
require("dotenv").config()


async function getFixtures(){
    try {
        const API_KEY = process.env.API_KEY_1;

        const response = await axios.get("https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=" + API_KEY + "&regions=uk&markets=h2h");

        // get the next 10 fixtures
        const fixtures = response.data.slice(0,9);
        const format_fixtures = []
        for (i = 0; i < fixtures.length; i++){
            format_fixtures.push({
                id: fixtures[i]["id"],
                date: fixtures[i]["commence_time"].slice(0, 10),
                time: fixtures[i]["commence_time"].slice(11, 19),
                home: fixtures[i]["home_team"],
                away: fixtures[i]["away_team"],
                h2h: {
                home: fixtures[i]["bookmakers"][1]["markets"][0]["outcomes"][0].price,
                away: fixtures[i]["bookmakers"][1]["markets"][0]["outcomes"][1].price,
                draw: fixtures[i]["bookmakers"][1]["markets"][0]["outcomes"][2].price
            }
            });
        }

        return format_fixtures;
    } catch (error) {
        return error;
    }
}


module.exports =  getFixtures;