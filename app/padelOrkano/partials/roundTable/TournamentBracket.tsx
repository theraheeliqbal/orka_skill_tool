interface BracketProps {
  round: number
}

export default function TournamentBracket({ round }: BracketProps) {
  // This data would typically come from an API or database
  const matchData = {
    1: [
      { set: 1, player1: { name: "James/Max", score: 5 }, player2: { name: "Kaisa/Harris", score: 4 } },
      { set: 1, player1: { name: "James/Max", score: 5 }, player2: { name: "Kaisa/Harris", score: 4 } },
      { set: 1, player1: { name: "James/Max", score: 5 }, player2: { name: "Kaisa/Harris", score: 4 } },
    ],
    2: [
      { set: 1, player1: { name: "James/Max", score: 5 }, player2: { name: "Kaisa/Harris", score: 4 } },
      { set: 1, player1: { name: "James/Max", score: 5 }, player2: { name: "Kaisa/Harris", score: 4 } },
      { set: 1, player1: { name: "James/Max", score: 5 }, player2: { name: "Kaisa/Harris", score: 4 } },
    ],
  }

  const matches = matchData[round as keyof typeof matchData]

  return (
    <div className="flex flex-col max-w-[350px] mx-auto">
      {matches.map((match, index) => (
        <div key={index} className="border border-black overflow-hidden">
          <div className="grid grid-cols-[60px_1fr_60px_1fr]">
            <div className="border-r h-[60px] border-r-black flex items-center font-oswald text-sm p-1">Set {match.set}</div>

            <div className="border-r border-r-black h-[60px]">
              <div className="flex flex-col items-center justify-center font-oswald text-sm p-1">
                <div>{match.player1.name}</div>
                <div>{match.player1.score}</div>
              </div>
            </div>

            <div className="border-r h-[60px] border-r-black flex items-center justify-center font-oswald text-sm p-1">vs</div>

            <div className="flex flex-col h-[60px] items-center justify-center font-oswald text-sm p-1">
              <div>{match.player2.name}</div>
              <div>{match.player2.score}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
