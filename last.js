function gemsToDiamond(friends1, friends2, friends3) {
    const first = friends1 * 21;
    const second = friends2 * 32;
    const third = friends3 * 43;
    const total = first + second + third;
    if (total > 2000) {
      return total - 2000;
    } else {
      return total;
    }
  }
  const friends1 = 1;
  const friends2 = 1;
  const friends3 = 1;
  // console.log(gemsToDiamond(friends1, friends2, friends3));