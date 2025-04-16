export default function ResultsTable() {
  // This data would typically come from an API or database
  const players = [
    {
      rank: 1,
      name: "Alex",
      set1Score: [5, 5, 5],
      set2Score: [5, 5, 5],
      round1Wins: 3,
      round2Wins: 3,
      totalPoints: 30,
    },
    {
      rank: 2,
      name: "Kaisa",
      set1Score: [4, 4, 5],
      set2Score: [4, 4, 5],
      round1Wins: 1,
      round2Wins: 1,
      totalPoints: 28,
    },
    {
      rank: 3,
      name: "Harris",
      set1Score: [4, 5, 2],
      set2Score: [4, 5, 1],
      round1Wins: 1,
      round2Wins: 2,
      totalPoints: 24,
    },
    {
      rank: 4,
      name: "James",
      set1Score: [5, 4, 2],
      set2Score: [5, 4, 1],
      round1Wins: 1,
      round2Wins: 2,
      totalPoints: 23,
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse !border-none">
        <thead>
          <tr className="!border-none">
            <th colSpan={2} className="!border-none p-1 text-center text-2xl font-oswald font-semibold">
              {/* Empty space for Rank and Player */}
            </th>
            <th colSpan={3} className="!border-none p-1 text-center text-2xl font-oswald font-semibold">
              Round 1
            </th>
            <th colSpan={3} className="!border-none p-1 text-center text-2xl font-oswald font-semibold">
              Round 2
            </th>
            <th colSpan={2} className="!border-none p-1 text-center text-2xl font-oswald font-semibold">
              Wins
            </th>

            <th colSpan={1} className="!border-none p-1 text-center text-2xl font-oswald font-semibold">
              Points
            </th>
          </tr>

          <tr>
            <th className="border border-black p-1 text-center text-sm font-oswald font-semibold">Rank</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-semibold">Player</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Set 1 Score</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Set 2 Score</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Set 3 Score</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Set 1 Score</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Set 2 Score</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Set 3 Score</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Round1 Wins</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Round2 Wins</th>
            <th className="border border-black p-1 text-center text-sm font-oswald font-normal">Total Points</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player) => (
            <tr key={player.rank}>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.rank}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.name}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.set1Score[0]}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.set1Score[1]}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.set1Score[2]}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.set2Score[0]}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.set2Score[1]}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.set2Score[2]}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.round1Wins}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.round2Wins}</td>
              <td className="border border-black p-1 text-center text-sm font-oswald font-normal">{player.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
