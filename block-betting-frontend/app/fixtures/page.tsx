"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { useEffect, useState } from "react"
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL

const template_fixtures = [
  { id: 1, home: 'Manchester United', away: 'Liverpool', date: '2023-12-01', time: '20:00', h2h: { home: 40, draw: 25, away: 35 } },
  { id: 2, home: 'Arsenal', away: 'Chelsea', date: '2023-12-02', time: '17:30', h2h: { home: 45, draw: 30, away: 25 } },
  { id: 3, home: 'Manchester City', away: 'Tottenham', date: '2023-12-03', time: '16:00', h2h: { home: 50, draw: 25, away: 25 } },
  { id: 4, home: 'Newcastle', away: 'Everton', date: '2023-12-04', time: '20:00', h2h: { home: 55, draw: 25, away: 20 } },
  { id: 5, home: 'Brighton', away: 'Brentford', date: '2023-12-05', time: '19:45', h2h: { home: 40, draw: 30, away: 30 } },
  { id: 6, home: 'West Ham', away: 'Crystal Palace', date: '2023-12-06', time: '20:00', h2h: { home: 45, draw: 30, away: 25 } },
  { id: 7, home: 'Aston Villa', away: 'Fulham', date: '2023-12-07', time: '19:45', h2h: { home: 50, draw: 25, away: 25 } },
  { id: 8, home: 'Wolves', away: 'Burnley', date: '2023-12-08', time: '20:00', h2h: { home: 45, draw: 30, away: 25 } },
  { id: 9, home: 'Nottingham Forest', away: 'Sheffield United', date: '2023-12-09', time: '15:00', h2h: { home: 40, draw: 30, away: 30 } },
  { id: 10, home: 'Bournemouth', away: 'Luton Town', date: '2023-12-10', time: '14:00', h2h: { home: 50, draw: 25, away: 25 } },
]

export default function Fixtures() {
  const [fixtures, setFixtures] = useState([]);


  useEffect(() => {
    axios.get(API_URL + "/get-fixtures").then((fixtureResult) => {
      setFixtures(fixtureResult.data);
      console.log(fixtureResult.data);
    });
  });
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Upcoming Fixtures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fixtures.map((fixture) => (
          <Card key={fixture.id} className="bg-gray-800 border border-green-500/20 hover:border-green-500/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-green-400">{fixture.home} vs {fixture.away}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-gray-300">{fixture.date} at {fixture.time}</p>
              <div className="flex justify-between mb-4 text-sm">
                <span className="text-blue-400">Home: {fixture.h2h.home}</span>
                <span className="text-yellow-400">Draw: {fixture.h2h.draw}</span>
                <span className="text-red-400">Away: {fixture.h2h.away}</span>
              </div>
              <Button className="w-full bg-green-500 hover:bg-green-600">Place Bet</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

