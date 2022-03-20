export interface IVials {
  id: number;
  slots: number[];
  statuses: number[];
  disabled?: boolean;
};

export interface IVialState {
  state: number;
  completed?: number;
  next?: number[];
  arrangements: number[];
  vials: object[];
};

export interface IGames {
  id: number;
  name: string;
  endpoint: string;
};
