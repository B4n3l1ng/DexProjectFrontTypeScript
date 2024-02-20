import { useState } from 'react';
import { MoveProperties } from '../interfaces';
import MovesTable from './MovesTable';

interface props {
  levelingMoves: [{ _id: MoveProperties; level: number }];
  tutorMoves: [MoveProperties];
  machineMoves: [MoveProperties];
  eggMoves: [MoveProperties];
}

const Tabs = ({ levelingMoves, tutorMoves, machineMoves, eggMoves }: props) => {
  const [activeTab, setActiveTab] = useState('leveling');
  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === 'leveling' ? 'active' : ''} onClick={() => setActiveTab('leveling')}>
          Level Up Moves
        </li>
        <li className={activeTab === 'tutor' ? 'active' : ''} onClick={() => setActiveTab('tutor')}>
          Tutor Moves
        </li>
        <li className={activeTab === 'machine' ? 'active' : ''} onClick={() => setActiveTab('machine')}>
          TM/TR Moves
        </li>
        <li className={activeTab === 'egg' ? 'active' : ''} onClick={() => setActiveTab('egg')}>
          Egg Moves
        </li>
      </ul>
      <div className="outlet">
        {activeTab === 'leveling' ? (
          <div className="levelUpMoves">
            <MovesTable arrayWithLevel={levelingMoves} hasLevel={true} />
          </div>
        ) : activeTab === 'tutor' ? (
          <div className="tutorMoves">
            <MovesTable array={tutorMoves} />
          </div>
        ) : activeTab === 'machine' ? (
          <div className="machineMoves">
            <MovesTable array={machineMoves} />
          </div>
        ) : activeTab === 'egg' ? (
          <div className="eggMoves">
            <MovesTable array={eggMoves} />
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Tabs;
