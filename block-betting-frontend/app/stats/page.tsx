"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"
import axios from "axios";
import { useState, useEffect } from "react";


const matchOutcomes = [
  { name: "Home Win", value: 45 },
  { name: "Draw", value: 25 },
  { name: "Away Win", value: 30 },
]

const topScorers = [
  { name: "Harry Kane", goals: 23 },
  { name: "Erling Haaland", goals: 22 },
  { name: "Ivan Toney", goals: 20 },
  { name: "Marcus Rashford", goals: 17 },
  { name: "Gabriel Martinelli", goals: 15 },
]

const goalsScoredOverTime = [
  { week: 1, homeAvg: 1.5, awayAvg: 1.2 },
  { week: 5, homeAvg: 1.7, awayAvg: 1.3 },
  { week: 10, homeAvg: 1.6, awayAvg: 1.4 },
  { week: 15, homeAvg: 1.8, awayAvg: 1.5 },
  { week: 20, homeAvg: 1.7, awayAvg: 1.6 },
  { week: 25, homeAvg: 1.9, awayAvg: 1.5 },
  { week: 30, homeAvg: 1.8, awayAvg: 1.7 },
]

const teamPerformance = [
  { name: "Man City", attack: 90, defense: 85, overall: 88 },
  { name: "Liverpool", attack: 88, defense: 82, overall: 85 },
  { name: "Arsenal", attack: 85, defense: 80, overall: 83 },
  { name: "Man United", attack: 82, defense: 78, overall: 80 },
  { name: "Newcastle", attack: 80, defense: 75, overall: 78 },
]

export default function Stats() {
  const [MatchOutcomes, setMatchOutcomes] = useState([]);
  const [TopScorers, setTopScorers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/top-scorers").then((result) => {
      setTopScorers(result.data);
      console.log(result.data);
    }).catch((error) => {
      console.log("API error: " + error);
    });
  })

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Premier League Statistics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-gray-800 border border-green-500/20">
          <CardHeader>
            <CardTitle className="text-green-400">Match Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={matchOutcomes}>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border border-green-500/20">
          <CardHeader>
            <CardTitle className="text-green-400">Top Scorers</CardTitle>
          </CardHeader>

          <CardContent>
            <ul className="space-y-2">
              {TopScorers.map((scorer, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{scorer.name}</span>
                  <span className="text-green-400 font-semibold">{scorer.goals} goals</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        {/* <Card className="bg-gray-800 border border-green-500/20"> */}
          {/* <CardHeader>
            <CardTitle className="text-green-400">Top Assisters</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {TopScorers.map((scorer, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{scorer.name}</span>
                  <span className="text-green-400 font-semibold">{scorer.goals} goals</span>
                </li>
              ))}
            </ul>
          </CardContent> */}
        {/* </Card>  */}
        <Card className="bg-gray-800 border border-green-500/20">
          <CardHeader>
            <CardTitle className="text-green-400">Goals Scored Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={goalsScoredOverTime}>
                <XAxis dataKey="week" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="homeAvg" stroke="#22c55e" name="Home" />
                <Line type="monotone" dataKey="awayAvg" stroke="#3b82f6" name="Away" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border border-green-500/20">
          <CardHeader>
            <CardTitle className="text-green-400">Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={teamPerformance} layout="vertical">
                <XAxis type="number" stroke="#888888" />
                <YAxis dataKey="name" type="category" stroke="#888888" />
                <Tooltip />
                <Legend />
                <Bar dataKey="attack" fill="#22c55e" name="Attack" />
                <Bar dataKey="defense" fill="#3b82f6" name="Defense" />
                <Bar dataKey="overall" fill="#eab308" name="Overall" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

