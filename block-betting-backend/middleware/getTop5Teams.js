const axios = require("axios");
require("dotenv").config({ path: "../.env"})

// get the id of the 5 top teams in the premier league
async function getTop5Teams(){
    const response = await axios.get("https://api.football-data.org/v4/competitions/PL/standings", {
        headers: {
            'X-Auth-Token': process.env.AP1_KEY_2
        }
    });

    let topFive = [];
    console.log(response.data["standings"][0]["table"]);
    for (let i = 0; i < 5; i++){
        topFive.push(response.data["standings"][0]["table"][i]["team"]["id"])
    }

    const response2 = await axios.get("https://api.football-data.org/v4/teams/64/matches/", {
        headers: {
            'X-Auth-Token': '5e3291d217304cfeae5b9b6696826fd7'
        }
    });

    console.log(response2.data);
    return topFive;
}

getTop5Teams().then((response) => {
    console.log(response);
});
module.exports = getTop5Teams;