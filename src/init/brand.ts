import { InitDataType } from '.';
import { IBrand } from '@ht-model-stacker/types';

const BrandInitData: InitDataType<IBrand> = {
  name: 'dict',
  data: [
    {
      brandId: '0',
      brandName: '万代',
      foreignName: 'BANDAI',
      nickname: ['B社'],
    },
    {
      brandId: '1',
      brandName: '田宫',
      foreignName: 'TAMIYA',
      nickname: ['TAMAYA'],
    },
  ],
};

export default BrandInitData;
