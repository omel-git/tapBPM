export const clickTimes: number[] = [];

export const calculateBPM = (): number => {
  const numClicks = clickTimes.length;
  if (numClicks < 2) {
    return 0; // Недостаточно данных для расчета BPM
  }

  const firstClickTime = clickTimes[0];
  const lastClickTime = clickTimes[numClicks - 1];
  const totalTime = (lastClickTime - firstClickTime) / 1000; // Время в секундах
  const bpm = ((numClicks - 1) / totalTime) * 60; // Расчет BPM

  return Math.round(bpm);
};
