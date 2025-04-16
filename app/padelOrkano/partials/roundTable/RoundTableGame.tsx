import React from 'react'
import TournamentBracket from './TournamentBracket'
import ResultsTable from './ResultsTable'
import PlayerHighlight from './PlayerHighlight'

const RoundTableGame = () => {
  return (
    <>
      <main className="max-w-[1250px] mx-auto px-[20px] py-8 border-4 border-black mt-[80px]">
        <div className='max-w-[1050px] mx-auto'>
          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-4xl font-bold font-oswald text-black text-center mb-2">Round 1</h2>
                  <TournamentBracket round={1} />
                </div>
                <div>
                  <h2 className="text-4xl font-bold font-oswald text-black text-center mb-2">Round 2</h2>
                  <TournamentBracket round={2} />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-4xl font-bold font-oswald text-black text-center mb-2">Final Result & Ranking</h2>

              <ResultsTable />
            </div>

            <PlayerHighlight />
          </div>
        </div>
      </main>
    </>)
}

export default RoundTableGame