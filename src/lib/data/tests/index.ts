import { IVialState } from '@/lib/types';

export const steps: IVialState[] = [
  {
    state: 1, arrangement: [5, 5, 0], next: [1, 3], vials: [
      { id: 1, slots: [1, 2, 1, 1, 2], status: [5, 0] },
      { id: 2, slots: [2, 1, 2, 1, 2], status: [5, 0] },
      { id: 3, slots: [0, 0, 0, 0, 0], status: [0, 5] },
    ]
  },
  {
    state: 2, arrangement: [4, 5, 1], next: [2, 1], vials: [
      { id: 1, slots: [0, 2, 1, 1, 2], status: [4, 1] },
      { id: 2, slots: [2, 1, 2, 1, 2], status: [5, 0] },
      { id: 3, slots: [0, 0, 0, 0, 1], status: [1, 4] },
    ]
  },
  {
    state: 3, arrangement: [5, 4, 1], next: [2, 3], vials: [
      { id: 1, slots: [2, 2, 1, 1, 2], status: [5, 0] },
      { id: 2, slots: [0, 1, 2, 1, 2], status: [4, 1] },
      { id: 3, slots: [0, 0, 0, 0, 1], status: [1, 4] },
    ]
  },
  {
    state: 4, arrangement: [5, 3, 2], next: [1, 2], vials: [
      { id: 1, slots: [2, 2, 1, 1, 2], status: [5, 0] },
      { id: 2, slots: [0, 0, 2, 1, 2], status: [3, 2] },
      { id: 3, slots: [0, 0, 0, 1, 1], status: [2, 3] },
    ]
  },
  {
    state: 5, arrangement: [3, 5, 2], next: [], vials: [
      { id: 1, slots: [0, 0, 1, 1, 2], status: [3, 2] },
      { id: 2, slots: [2, 2, 2, 1, 2], status: [5, 0] },
      { id: 3, slots: [0, 0, 0, 1, 1], status: [2, 3] },
    ]
  },
  {
    state: 6, arrangement: [1, 5, 4], next: [], vials: [
      { id: 1, slots: [0, 0, 0, 0, 2], status: [1, 4] },
      { id: 2, slots: [2, 2, 2, 1, 2], status: [5, 0] },
      { id: 3, slots: [0, 1, 1, 1, 1], status: [4, 1] },
    ]
  },
  {
    state: 7, arrangement: [4, 2, 4], next: [], vials: [
      { id: 1, slots: [0, 2, 2, 2, 2], status: [4, 1] },
      { id: 2, slots: [0, 0, 0, 1, 2], status: [2, 3] },
      { id: 3, slots: [0, 1, 1, 1, 1], status: [4, 1] },
    ]
  },
  {
    state: 8, arrangement: [4, 1, 5], next: [], vials: [
      { id: 1, slots: [0, 2, 2, 2, 2], status: [4, 1] },
      { id: 2, slots: [0, 0, 0, 0, 2], status: [1, 4] },
      { id: 3, slots: [1, 1, 1, 1, 1], status: [5, 0] },
    ]
  },
  {
    state: 9, completed: 1, arrangement: [5, 0, 5], vials: [
      { id: 1, slots: [2, 2, 2, 2, 2], status: [5, 0] },
      { id: 2, slots: [0, 0, 0, 0, 0], status: [0, 5] },
      { id: 3, slots: [1, 1, 1, 1, 1], status: [5, 0] },
    ]
  }
];

