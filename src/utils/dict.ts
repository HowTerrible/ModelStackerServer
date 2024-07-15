import { IDictKeyValuePair } from '../type';

/**
 * 根据字典值获取文本
 * @param {string} name 字典名
 * @param {string} value 字典值
 * @returns 字典文本
 */
export function GetLabelFromValue(name: string, value: string) {
  let result: null | string = null;
  if (name && value) {
    const dict = GetDict(name);
    if (dict) {
      result = dict.find((item) => item.value === value)?.label || null;
    }
  }
  return result;
}

/**
 * 根据字典文本获取值
 * @param {string} name 字典名
 * @param {string} label 字典文本
 * @returns 字典值
 */
export function GetValueFromLabel(name: string, label: string) {
  let result: null | string = null;
  if (name && label) {
    const dict = GetDict(name);
    if (dict) {
      result = dict.find((item) => item.label === label)?.value || null;
    }
  }
  return result;
}

/**
 * 获取字典
 * @param {string} name 字典名
 * @returns 字典内容
 */
export function GetDict(name: string) {
  let result: IDictKeyValuePair[] | null = null;
  if (name) {
    result = [];
  }
  return result;
}
