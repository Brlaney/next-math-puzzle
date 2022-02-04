export interface IVials {
  id: number;
  slots: number[];
  status: number[];
  disabled?: boolean;
};

export interface IVialState {
  state: number;
  completed?: number;
  next?: number[];
  arrangement: number[];
  vials: object[];
};

export interface IGames {
  id: number;
  name: string;
  endpoint: string;
};
