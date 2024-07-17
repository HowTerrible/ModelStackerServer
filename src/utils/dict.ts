import { GetDict } from '../data/dict';
import { NullableType } from '../type';

/**
 * 根据字典值获取文本
 * @param {string} name 字典名
 * @param {string} value 字典值
 * @returns 字典文本
 */
export async function GetLabelFromValue(name: string, value: string) {
  let result: NullableType<string> = null;
  if (name && value) {
    result = await GetDict(name)?.then((dict) => {
      if (dict) {
        return dict.find((item) => item.value === value)?.label || null;
      } else return null;
    });
  }
  return result;
}

/**
 * 根据字典文本获取值
 * @param {string} name 字典名
 * @param {string} label 字典文本
 * @returns 字典值
 */
export async function GetValueFromLabel(name: string, label: string) {
  let result: NullableType<string> = null;
  if (name && label) {
    result = await GetDict(name)?.then((dict) => {
      if (dict) {
        return dict.find((item) => item.label === label)?.value || null;
      } else return null;
    });
  }
  return result;
}
