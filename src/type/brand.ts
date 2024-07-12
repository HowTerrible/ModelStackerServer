/** 品牌（制造商)
 * Brand ( manufacturer )
 */

export interface IBrandId {
  brandId: string;
}

export interface IBrand extends IBrandId {
  brandName: string;
  /** 外号 */
  nickname?: string[];
  /** 标签 */
  tag?: string[];
  /** 成立时间 */
  foundedDate: string;
  /** 国家 */
  country?: string;
  /** 联系电话 */
  tel?: string;
  /** 电子邮箱 */
  email?: string;
  /** 地址 */
  address?: string;
  /** 数据来源 */
  infoSource?: string;
}
