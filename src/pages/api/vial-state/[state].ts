import { NextApiRequest, NextApiResponse } from 'next';
import { vials } from '@/lib/data/vials';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { state } = req.query;
  const vial = vials.find(
    (vial) => vial.state == Number(state)
  );
  
  res.status(200).json(vial);
};
