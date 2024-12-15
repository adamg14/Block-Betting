"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { useEffect, useState } from "react"
import axios from "axios";

// const standings = [
//   { position: 1, team: 'Manchester City', played: 38, won: 28, drawn: 5, lost: 5, gd: 61, points: 89 },
//   { position: 2, team: 'Arsenal', played: 38, won: 26, drawn: 6, lost: 6, gd: 45, points: 84 },
//   { position: 3, team: 'Manchester United', played: 38, won: 23, drawn: 6, lost: 9, gd: 15, points: 75 },
//   { position: 4, team: 'Newcastle', played: 38, won: 19, drawn: 14, lost: 5, gd: 35, points: 71 },
//   { position: 5, team: 'Liverpool', played: 38, won: 19, drawn: 10, lost: 9, gd: 28, points: 67 },
//   { position: 6, team: 'Brighton', played: 38, won: 18, drawn: 8, lost: 12, gd: 19, points: 62 },
//   { position: 7, team: 'Aston Villa', played: 38, won: 18, drawn: 7, lost: 13, gd: 5, points: 61 },
//   { position: 8, team: 'Tottenham', played: 38, won: 18, drawn: 6, lost: 14, gd: 7, points: 60 },
//   { position: 9, team: 'Brentford', played: 38, won: 15, drawn: 14, lost: 9, gd: 12, points: 59 },
//   { position: 10, team: 'Fulham', played: 38, won: 15, drawn: 7, lost: 16, gd: 2, points: 52 },
// ]

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default function Standings() {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    axios.get(API_URL + "/get-standings").then((result) => {
      setStandings(result.data);
    }).catch((error) => {
      console.log("API error: " + error);
    })
  })
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-green-400">Premier League Standings</h1>
      <Card className="bg-gray-800 border border-green-500/20">
        <CardHeader>
          <CardTitle className="text-green-400">Current Table</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Current Premier League table as of {new Date().toLocaleDateString()}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Position</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Played</TableHead>
                <TableHead>Won</TableHead>
                <TableHead>Drawn</TableHead>
                <TableHead>Lost</TableHead>
                <TableHead>GD</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {standings.map((team) => (
                <TableRow key={team.position} className={team.position <= 4 ? "bg-green-900/20" : ""}>
                  <TableCell className="font-medium">{team.position}</TableCell>
                  <TableCell>{team.team}</TableCell>
                  <TableCell>{team.played}</TableCell>
                  <TableCell>{team.won}</TableCell>
                  <TableCell>{team.drawn}</TableCell>
                  <TableCell>{team.lost}</TableCell>
                  <TableCell>{team.gd}</TableCell>
                  <TableCell className="font-bold">{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

