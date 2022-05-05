interface ILocalStorage<T> {
  LS: Storage;
  getValueByKey: (key: string) => T[];
  setValueByKey: (key: string, arr: T[]) => void;
}

class LocalStorage<T> implements ILocalStorage<T> {
  readonly LS: Storage = localStorage;

  getValueByKey(key: string): T[] {
    return JSON.parse(this.LS.getItem(key) || "[]");
  }

  setValueByKey(key: string, arrT: T[]): void {
    localStorage.setItem(key, JSON.stringify(arrT));
  }
}
export default LocalStorage;
