// A permutation utility function
const permute = (objects) => {
  const result = []; // Global result

  // dfs recursive helper
  const dfs = (i, objects) => {

    // Case 1 - Base case
    if (i === objects.length) {
      result.push(objects.slice());
      return;
    }

    // Case 2 - dfs recursive case
    for (let j = i; j < objects.length; j++) {
      [objects[i], objects[j]] = [objects[j], objects[i]];
      dfs(i + 1, objects);
      [objects[i], objects[j]] = [objects[j], objects[i]];
    }
  }

  dfs(0, objects);
  return result;
}

export default permute;
