import { JsonDB } from 'node-json-db';

export class HTListDB {
  db: JsonDB;

  constructor(db: JsonDB) {
    this.db = db;
  }

  public async GetListData(path: string) {
    if (await this.isPathExist(path)) {
      return this.db.getData(path);
    }
    return null;
  }

  /** 根据路径对应的数据是否存在 */
  private async isPathExist(path: string) {
    return (path && (await this.db.exists(path))) || false;
  }

  /** 根据key判断数据是否存在
   * 此方法会判断路径是否存在.
   */
  private async isDataExist(path: string, data: any, primaryKey: string, donotCheckPath?: boolean) {
    let result = true;
    if (!donotCheckPath) {
      result = result && (await this.isPathExist(path));
    }
    const index = await this.db.getIndex(path, data[primaryKey], primaryKey);
    result = (result && index >= 0) || false;
    return { isExist: result, index };
  }

  public async AddListItem(path: string, data: any, primaryKey: string) {
    if (await this.isPathExist(path)) {
      const isDataExist = await this.isDataExist(path, data, primaryKey, true);
      if (isDataExist.isExist) {
        // 数据存在应该是编辑？还是报错
        throw new Error('数据已存在');
      } else {
        try {
          this.db.push(path + '[]', { data });
          this.db.save();
          return true;
        } catch (ex) {
          console.log('新增列表数据项时发生异常', path, data, ex);
          throw new Error('新增列表数据项时发生异常');
        }
      }
    } else {
      console.log('新增列表数据项时发生错误, 路径不存在', path, data);
    }
    return false;
  }

  /** 编辑列表数据的某一项 */
  public async EditListItem(path: string, data: any, primaryKey: string) {
    const exist = await this.isDataExist(path, data, primaryKey);
    if (exist.isExist) {
      try {
        this.db.push(`${path}[${exist.index}]`, { ...data });
        this.db.save();
        return true;
      } catch (ex) {
        console.log('编辑列表数据项时发生异常', path, data, ex);
        throw new Error('编辑列表数据项时发生异常');
      }
    } else {
      console.log('编辑列表数据项时发生错误, 路径不存在', path, data);
    }
    return false;
  }

  public async DeleteListItem(path: string, data: any, primaryKey: string) {
    const exist = await this.isDataExist(path, data, primaryKey);
    if (exist.isExist) {
      try {
        this.db.delete(`${path}[${exist.index}]`);
        this.db.save();
        return true;
      } catch (ex) {
        console.log('删除列表数据项时发生异常', path, data, ex);
        throw new Error('删除列表数据项时发生异常');
      }
    } else {
      console.log('删除列表数据项时发生错误, 路径不存在', path, data);
    }
    return false;
  }
}
