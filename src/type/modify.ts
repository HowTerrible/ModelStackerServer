/** 改件
 * Model modifications
 */

import { IBrandId } from './brand';
import { IModel } from './model';
import { IRealItemId } from './readItem';

export interface IModifyId {
  modifyId: string;
}

/** 改件类型 1: 树脂件; 2: 金属件; 3: 套改; 4: 三弟打印; 5: 其他; 6: 场景件; */
export enum ModifyTypeEnum {
  树脂件 = 1,
  /** 蚀刻片/车制件 */
  金属件 = 2,
  套改 = 3,
  三弟打印 = 4,
  其他 = 5,
  场景件 = 6,
}

/** 改件位置 1: 炮管; 2: 轮子; 3: 履带; 4: 其他; */
export enum ModifyPartEnum {
  /** 炮管/枪管 英文都是barrel */
  炮管 = 1,
  轮子 = 2,
  履带 = 3,
  其他 = 4,
}

export interface IModify extends IModel {
  /** 改件类型 1: 树脂件; 2: 金属件; 3: 套改; 4: 三弟打印; 5: 其他; 6: 场景件; */
  type: ModifyTypeEnum;
  /** 改件位置 1: 炮管; 2: 轮子; 3: 履带; 4: 其他; */
  modifyPart?: ModifyPartEnum[];
  /** 改件位置的补充 */
  modifyPartText?: string;
}
