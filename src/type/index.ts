export interface IDictKeyValuePair {
  label: string;
  value: string;
}

export interface IDict {
  name: string;
  dicts: IDictKeyValuePair[];
}

/** 通用布尔枚举 */
export enum CommonBooleanEnum {
  true = 1,
  false = 0,
}

/** 数据是否删除 type */
export interface DeleteType {
  delete: CommonBooleanEnum;
  /** 删除时间 YYYY-MM-DD hh:mm:ss */
  deleteTime: string;
  /** 删除操作人 ID */
  deleteOperatorId: string;
  /** 删除操作人 名称 */
  deleteOperatorName: string;
}
