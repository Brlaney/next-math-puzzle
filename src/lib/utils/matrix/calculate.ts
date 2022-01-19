/* Function 1.)
Calculates area given a radius ~
  Input: cross-sectional radius
  Output: cross-sectional area in US units 
*/
export function calcAreaR(r) {
  let initial = Math.PI * r^2;
  let final = initial / 144; // Assumming the input is in, convert to sq ft.

  // Rounded to two decimal places
  let A = final.toFixed(3); 

  return A;
};


/* Function 2.)
Calculates area given a diameter ~
  Input: members angle of orientation in radians
  Output: members angle of orientation in degrees 
*/
export function calcAreaD(d) {
  let initial = Math.PI * d^2;
  let final = initial / 576;  // Assumming the input is in, convert to sq ft. (576 = 4 * 12 * 12)

  // Rounded to two decimal places
  let A = final.toFixed(2); 

  return A;
};


// Function 3.)
// point • matrix
function multiplyMatrixAndPoint(matrix, point) {
  let c0r0 = matrix[ 0], c1r0 = matrix[ 1], c2r0 = matrix[ 2], c3r0 = matrix[ 3];
  let c0r1 = matrix[ 4], c1r1 = matrix[ 5], c2r1 = matrix[ 6], c3r1 = matrix[ 7];
  let c0r2 = matrix[ 8], c1r2 = matrix[ 9], c2r2 = matrix[10], c3r2 = matrix[11];
  let c0r3 = matrix[12], c1r3 = matrix[13], c2r3 = matrix[14], c3r3 = matrix[15];

  let x = point[0];
  let y = point[1];
  let z = point[2];
  let w = point[3];

  let resultX = (x * c0r0) + (y * c0r1) + (z * c0r2) + (w * c0r3);
  let resultY = (x * c1r0) + (y * c1r1) + (z * c1r2) + (w * c1r3);
  let resultZ = (x * c2r0) + (y * c2r1) + (z * c2r2) + (w * c2r3);
  let resultW = (x * c3r0) + (y * c3r1) + (z * c3r2) + (w * c3r3);

  return [resultX, resultY, resultZ, resultW];
};


// Function 4.)
//matrixB • matrixA
export function multiplyMatrices(matrixA, matrixB) {
  let row0 = [matrixB[ 0], matrixB[ 1], matrixB[ 2], matrixB[ 3]];
  let row1 = [matrixB[ 4], matrixB[ 5], matrixB[ 6], matrixB[ 7]];
  let row2 = [matrixB[ 8], matrixB[ 9], matrixB[10], matrixB[11]];
  let row3 = [matrixB[12], matrixB[13], matrixB[14], matrixB[15]];

  let result0 = multiplyMatrixAndPoint(matrixA, row0);
  let result1 = multiplyMatrixAndPoint(matrixA, row1);
  let result2 = multiplyMatrixAndPoint(matrixA, row2);
  let result3 = multiplyMatrixAndPoint(matrixA, row3);

  return [
    result0[0], result0[1], result0[2], result0[3],
    result1[0], result1[1], result1[2], result1[3],
    result2[0], result2[1], result2[2], result2[3],
    result3[0], result3[1], result3[2], result3[3]
  ];
};


/* Function 5.)
Checks if truss system is statically determinate or not ~
  Input: 
  - Number of members (m)
  - nodes/joints (n)
  - reaction forces (p)
  Output: boolean variable check 
*/
export function trussCheck(m, n, r) {
  // For inequality check:
  let lhs = m + r;
  let rhs = 2 * n;

  // Degree of indeterminancy:
  let d = r + m - 2 * n;

  if (lhs > rhs) {
    // 1 implies success
    return 1;
  } else if (lhs <= rhs) {
    // 2 implies error
    return 2;
  }
};
