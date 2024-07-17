import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { DataPath } from '../constant/path';
import { IDictKeyValuePair } from '../type/dict';
import { HTListDB } from '.';

export const dictDb = new JsonDB(new Config(DataPath.dict, true, true, '/', true));

function getDictPath(name: string) {
  return '/' + name;
}

const db = new HTListDB(dictDb);

/**
 * 获取字典
 * @param {string} name 字典名
 * @returns 字典内容
 */
export async function GetDict(name: string) {
  return db.GetListData(getDictPath(name));
}

/**
 * 增加字典项目
 * @param name 字典名
 * @param label 字典项键
 * @param value 字典项值
 * @returns {boolean} 是否新增成功
 */
export async function AddDictItem(name: string, label: string, value: string | number) {
  db.AddListItem(getDictPath(name), { label, value }, 'value');
}

/**
 * 编辑字典项
 * @param name
 * @param label
 * @param value
 * @returns
 */
export async function EditDictItem(name: string, label: string, value: string | number) {
  db.EditListItem(getDictPath(name), { label, value }, 'value');
}
