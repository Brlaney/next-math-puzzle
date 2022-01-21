export interface IVials {
  id: number;
  slots: number[];
  status: number[];
  disabled?: boolean;
};

export interface IGames {
  id: number;
  name: string;
  endpoint: string;
};
