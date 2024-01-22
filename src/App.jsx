import React, { useState } from 'react';
import './App.css';
import GameImages from './GameImages';
import PlayerGuess from './PlayerGuess';
import TournamentGuess from './TournamentGuess';
import Congrats from './Congrats';

export default function App() {
  const logoSrc = '/assets/GameImages/AMIM-Header.gif';
  const backgroundSrc = '/assets/GameImages/background2.gif';
  const [isBothPlayerAnswersCorrect, setIsBothPlayerAnswersCorrect] = useState(null);
  const [GlobalTournamentAnswer, setGlobalTournamentAnswer] = useState(null);

  return (
    <div className="h-screen mx-auto flex flex-col items-center justify-center pb-10" style={{ backgroundImage: `url(${backgroundSrc})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
      <header className="">
        <img src={logoSrc} alt="Melee Logo" className="mx-auto" style={{ width: '50%' }} />
      </header>

      <div className="flex flex-col items-center justify-start"> {/* Add 'justify-start' class */}
        <div className="flex flex-col">
          <GameImages
            isBothPlayerAnswersCorrect={isBothPlayerAnswersCorrect}
            GlobalTournamentAnswer={GlobalTournamentAnswer}
          />
        </div>

        <div className='bg-black bg-opacity-50 rounded-2xl shadow-lg px-5 mt-5 mb-5'>
          <div className="mt-5 text-center">
            <h1 className="text-white text-2xl font-bold shadow-md">Which two players had this interaction?</h1>
          </div>

          <div className=''>
            <PlayerGuess setIsBothPlayerAnswersCorrect={setIsBothPlayerAnswersCorrect} />
          </div>

          <div className="mt-5 text-center">
            <h1 className="text-white text-2xl font-bold shadow-lg">Which tournament was this interaction?</h1>
          </div>

          <div className='pb-10'>
            <TournamentGuess setGlobalTournamentAnswer={setGlobalTournamentAnswer} />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full h-16">
        {isBothPlayerAnswersCorrect && GlobalTournamentAnswer && (
          <div className='font-custom text-white flex flex-col items-center justify-center'>
            <Congrats 
              isBothPlayerAnswersCorrect={isBothPlayerAnswersCorrect}
              GlobalTournamentAnswer={GlobalTournamentAnswer}/>
          </div>
        )}
      </div>
    </div>
  );
}
