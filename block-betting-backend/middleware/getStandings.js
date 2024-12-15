const axios =  require("axios");
require("dotenv").config();

async function getStandings(){
    console.log("This should be the API key: " + process.env.AP1_KEY_2);
    const response = await axios.get("https://api.football-data.org/v4/competitions/PL/standings", {
        headers: {
            'X-Auth-Token': process.env.AP1_KEY_2
        }
    });

    const standingsFormat = []
    const standingResponse = response.data["standings"][0]["table"];
    console.log(standingResponse);

    for (let i = 0; i < standingResponse.length; i++){
        standingsFormat.push({
            position: standingResponse[i]["position"],
            team: standingResponse[i]["team"]["name"],
            played: standingResponse[i]["position"],
            won: standingResponse[i]["won"],
            drawn: standingResponse[i]["daw"],
            lost: standingResponse[i]["lost"],
            gd: standingResponse[i]["goalDifference"],
            points: standingResponse[i]["points"]
        });
    }

    return standingsFormat;
}

getStandings();
module.exports = getStandings;