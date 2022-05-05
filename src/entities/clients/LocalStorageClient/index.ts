import LocalStorage from "@/entities/LocalStorage";

interface ILocalStorageClient<T> {
  LSClient: LocalStorage<T>;
  clientGet: (key: string) => T[];
  clientSet: (key: string, arrT: T[]) => void;
}

class LocalStorageClient<T> implements ILocalStorageClient<T> {
  readonly LSClient: LocalStorage<T> = new LocalStorage();

  clientGet(key: string): T[] {
    return this.LSClient.getValueByKey(key);
  }

  clientSet(key: string, arrT: T[]): void {
    this.LSClient.setValueByKey(key, arrT);
  }
}
export default LocalStorageClient;
