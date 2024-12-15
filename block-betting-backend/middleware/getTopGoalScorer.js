const axios = require("axios");
require("dotenv").config();

async function getTopGoalScorer(){
    try {
        const response = await axios.get("https://api.football-data.org/v4/competitions/PL/scorers", {
            headers: {
                'X-Auth-Token': process.env.AP1_KEY_2
            }
        });
    
        let topGoalscorers = [];
        const scorersResponse = response.data["scorers"];
    
        for (let i = 0; i < 5; i++){
            topGoalscorers.push({
                name: scorersResponse[i]["player"]["lastName"] + ", " + scorersResponse[i]["team"]["shortName"],
                goals: scorersResponse[i]["goals"]
            });
        }
    
        return topGoalscorers;
    } catch (error) {
        return error;
    }
}


module.exports = getTopGoalScorer;