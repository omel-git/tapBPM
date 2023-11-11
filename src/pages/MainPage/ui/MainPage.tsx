import React, { useState } from 'react';
import { Header } from 'entities/Header';
import { BPMCounter } from 'features/BPMCounter';
import { clickTimes } from 'features/BPMCounter/lib/calculateBPM';
import { counterClick } from 'features/BPMCounter/lib/counterClick';

function MainPage() {
  const [BPM, setBPM] = useState(0);

  return (
    <div
      onClick={(ev) => counterClick(ev, setBPM)}
      onContextMenu={(ev) => {
        ev.preventDefault();
        clickTimes.length = 0;
        setBPM(0);
      }}
    >
      <Header className="Header" />
      <BPMCounter className="BPMCounter" BPM={BPM} />
    </div>
  );
}

export default MainPage;
