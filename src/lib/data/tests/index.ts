export const vials = [
  {
    state: 1, arrangements: [5, 5, 0], next: [1, 3], vials: [
      { id: 1, slots: [1, 2, 1, 1, 2], statuses: [5, 0] },
      { id: 2, slots: [2, 1, 2, 1, 2], statuses: [5, 0] },
      { id: 3, slots: [0, 0, 0, 0, 0], statuses: [0, 5] },
    ]
  },
  {
    state: 2, arrangements: [4, 5, 1], next: [2, 1], vials: [
      { id: 1, slots: [0, 2, 1, 1, 2], statuses: [4, 1] },
      { id: 2, slots: [2, 1, 2, 1, 2], statuses: [5, 0] },
      { id: 3, slots: [0, 0, 0, 0, 1], statuses: [1, 4] },
    ]
  },
  {
    state: 3, arrangements: [5, 4, 1], next: [2, 3], vials: [
      { id: 1, slots: [2, 2, 1, 1, 2], statuses: [5, 0] },
      { id: 2, slots: [0, 1, 2, 1, 2], statuses: [4, 1] },
      { id: 3, slots: [0, 0, 0, 0, 1], statuses: [1, 4] },
    ]
  },
  {
    state: 4, arrangements: [5, 3, 2], next: [1, 2], vials: [
      { id: 1, slots: [2, 2, 1, 1, 2], statuses: [5, 0] },
      { id: 2, slots: [0, 0, 2, 1, 2], statuses: [3, 2] },
      { id: 3, slots: [0, 0, 0, 1, 1], statuses: [2, 3] },
    ]
  },
  {
    state: 5, arrangements: [3, 5, 2], next: [], vials: [
      { id: 1, slots: [0, 0, 1, 1, 2], statuses: [3, 2] },
      { id: 2, slots: [2, 2, 2, 1, 2], statuses: [5, 0] },
      { id: 3, slots: [0, 0, 0, 1, 1], statuses: [2, 3] },
    ]
  },
  {
    state: 6, arrangements: [1, 5, 4], next: [], vials: [
      { id: 1, slots: [0, 0, 0, 0, 2], statuses: [1, 4] },
      { id: 2, slots: [2, 2, 2, 1, 2], statuses: [5, 0] },
      { id: 3, slots: [0, 1, 1, 1, 1], statuses: [4, 1] },
    ]
  },
  {
    state: 7, arrangements: [4, 2, 4], next: [], vials: [
      { id: 1, slots: [0, 2, 2, 2, 2], statuses: [4, 1] },
      { id: 2, slots: [0, 0, 0, 1, 2], statuses: [2, 3] },
      { id: 3, slots: [0, 1, 1, 1, 1], statuses: [4, 1] },
    ]
  },
  {
    state: 8, arrangements: [4, 1, 5], next: [], vials: [
      { id: 1, slots: [0, 2, 2, 2, 2], statuses: [4, 1] },
      { id: 2, slots: [0, 0, 0, 0, 2], statuses: [1, 4] },
      { id: 3, slots: [1, 1, 1, 1, 1], statuses: [5, 0] },
    ]
  },
  {
    state: 9, completed: 1, arrangements: [5, 0, 5], vials: [
      { id: 1, slots: [2, 2, 2, 2, 2], statuses: [5, 0] },
      { id: 2, slots: [0, 0, 0, 0, 0], statuses: [0, 5] },
      { id: 3, slots: [1, 1, 1, 1, 1], statuses: [5, 0] },
    ]
  }
];

