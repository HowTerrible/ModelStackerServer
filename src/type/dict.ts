export interface IDictKeyValuePair {
  label: string;
  value: string;
}

export interface IDict {
  name: string;
  dicts: IDictKeyValuePair[];
}