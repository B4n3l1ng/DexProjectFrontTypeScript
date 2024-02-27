import { useEffect, useState } from 'react';
import { MoveProperties } from '../interfaces';
import MovesTable from './MovesTable';
import { useLocation } from 'react-router-dom';
import tabStyles from './styles/Tabs.module.css';

interface props {
  levelingMoves: [{ _id: MoveProperties; level: number }];
  tutorMoves: [MoveProperties];
  machineMoves: [MoveProperties];
  eggMoves: [MoveProperties];
}

const Tabs = ({ levelingMoves, tutorMoves, machineMoves, eggMoves }: props) => {
  const [activeTab, setActiveTab] = useState('leveling');
  const { pathname } = useLocation();

  useEffect(() => {
    setActiveTab('leveling');
  }, [pathname]);
  return (
    <div className={tabStyles.Tabs}>
      <ul className={tabStyles.nav}>
        <li className={activeTab === 'leveling' ? tabStyles.active : ''} onClick={() => setActiveTab('leveling')}>
          Level Up Moves
        </li>
        <li className={activeTab === 'tutor' ? tabStyles.active : ''} onClick={() => setActiveTab('tutor')}>
          Tutor Moves
        </li>
        <li className={activeTab === 'machine' ? tabStyles.active : ''} onClick={() => setActiveTab('machine')}>
          TM/TR Moves
        </li>
        <li className={activeTab === 'egg' ? tabStyles.active : ''} onClick={() => setActiveTab('egg')}>
          Egg Moves
        </li>
      </ul>
      <div className="outlet">
        {activeTab === 'leveling' ? (
          <div>
            <MovesTable arrayWithLevel={levelingMoves} hasLevel={true} />
          </div>
        ) : activeTab === 'tutor' ? (
          <div>
            <MovesTable array={tutorMoves} />
          </div>
        ) : activeTab === 'machine' ? (
          <div>
            <MovesTable array={machineMoves} />
          </div>
        ) : activeTab === 'egg' ? (
          <div>
            <MovesTable array={eggMoves} />
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default Tabs;
