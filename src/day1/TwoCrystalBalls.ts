// hundred story building, where do they break? etc.

export default function twoCrystalBalls(breaks: boolean[]): number {
  const jumpAmount = Math.sqrt(Math.floor(breaks.length));

  let i = jumpAmount;

  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }

  return -1;
}
