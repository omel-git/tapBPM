import { calculateBPM, clickTimes } from './calculateBPM';

export const counterClick = (
  ev: React.MouseEvent<HTMLDivElement>,
  setBPM: React.Dispatch<React.SetStateAction<number>>,
): void => {
  clickTimes.push(Date.now());
  setBPM(calculateBPM());
};
