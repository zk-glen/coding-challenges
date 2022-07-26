function pendulum(values) {
  const finalArr = [];
  const sorted = values.sort((a, b) => a - b);

  sorted.forEach((num, i) => {
    const isEven = i % 2 === 0;
    isEven ? finalArr.unshift(num) : finalArr.push(num);
  });
  return finalArr;
}

pendulum([6, 6, 8, 5, 10]);
