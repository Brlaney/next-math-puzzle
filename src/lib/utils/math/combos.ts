// A combination utility function
const combos = (objects) => {
  if (objects.length === 0) return [[]];
  const firstEl = objects[0];
  const rest = objects.slice(1);
  const combosWithoutFirst = combos(rest);
  const combosWithFirst = [];

  combosWithoutFirst.forEach((combo) => {
    const comboWithFirst = [...combo, firstEl];
    combosWithFirst.push(comboWithFirst);
  });

  return [...combosWithoutFirst, ...combosWithFirst];
}

export default combos;
