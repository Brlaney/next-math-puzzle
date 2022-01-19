/*
Function 1.) 
Transformation function for Truss members

Inputs: 
  - theta (angle of orientation, degrees), 
  - A (cross - sectional area, in ^ 2),
  - E (modulus of elasticity, kip/in ^ 2),
  - L (length of member, in)

Output: local truss member stiffness matrix in global coordinates
*/
export function trussK(theta, E, A, L) {
  let radians = theta * Math.PI / 180;
  let s = Math.sin(radians);
  let c = Math.cos(radians);
  let coeff = A * E / L;

  // Row 1
  let k11 = coeff * c * c;
  let k12 = coeff * c * s;
  let k13 = coeff * - c * c;
  let k14 = coeff * - c * s;

  // Row 2
  let k21 = coeff * c * s;
  let k22 = coeff * s * s;
  let k23 = coeff * - c * s;
  let k24 = coeff * - s * s;

  // Row 3
  let k31 = coeff * - c * c;
  let k32 = coeff * -c * s;
  let k33 = coeff * c * c;
  let k34 = coeff * c * s;

  // Row 4
  let k41 = coeff * - c * s;
  let k42 = coeff * - s * s;
  let k43 = coeff * c * s;
  let k44 = coeff * s * s;

  let T = [
    k11, k12, k13, k14,
    k21, k22, k23, k24,
    k31, k32, k33, k34,
    k41, k42, k43, k44
  ];

  return T;
};

/*
Function 2.) 
Transformation function for Beam members

Inputs: 
  - I (moment of inertia, in ^ 4),
  - E (modulus of elasticity, kip/sq in),
  - L (length of member, in)

Output: local beam member stiffness matrix in global coordinates
*/
export function beamK(E, I, L) {
  let coeff = 2 * E * I / L ^ 3;

  // Row 1
  let k11 = coeff * 6;
  let k12 = coeff * - 3 * L;
  let k13 = coeff * - 6;
  let k14 = coeff * - 3 * L;

  // Row 2
  let k21 = coeff * - 3 * L;
  let k22 = coeff * 2 * L ^ 2;
  let k23 = coeff * 3 * L;
  let k24 = coeff * L * L;

  // Row 3
  let k31 = coeff * - 6;
  let k32 = coeff * 3 * L;
  let k33 = coeff * 6
  let k34 = coeff * 3 * L;

  // Row 4
  let k41 = coeff * - 3 * L;
  let k42 = coeff * L * L;
  let k43 = coeff * 3 * L;
  let k44 = coeff * 2 * L ^ 2;

  let T = [
    k11, k12, k13, k14,
    k21, k22, k23, k24,
    k31, k32, k33, k34,
    k41, k42, k43, k44
  ];

  return T;
};

/*
Function 3.) 
Transformation function for Frame members

Inputs: 
  - theta (angle of orientation), 
  - I (moment of inertia, in^4),
  - E (modulus of elasticity, kip/sq in),
    - A (cross - sectional area, in^2),
  - L (length of member, in)

Output: local frame member stiffness matrix in global coordinates
*/
// export function frameK(theta, E, I, A, L) {
//   let radians = theta * Math.PI / 180;
//   let s = Math.sin(radians);
//   let c = Math.cos(radians);

//   let k11 = 6;
//   let k12 = - 3 * L;
//   let k13 = - 6;
//   let k14 = - 3 * L;
//   let k21 = - 3 * L;
//   let k22 = 2 * L ^ 2;
//   let k23 = 3 * L;
//   let k24 = L * L;
//   let k31 = - 6;
//   let k32 = 3 * L;
//   let k33 = 6
//   let k34 = 3 * L;
//   let k41 = - 3 * L;
//   let k42 = L * L;
//   let k43 = 3 * L;
//   let k44 = 2 * L ^ 2;

//   let T = [
//     k11, k12, k13, k14,
//     k21, k22, k23, k24,
//     k31, k32, k33, k34,
//     k41, k42, k43, k44
//   ];

//   return T;
// };
