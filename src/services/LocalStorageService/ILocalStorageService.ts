/* eslint-disable no-unused-vars */

export interface ILocalStorageService {
  getItem<I>(key: string): I | undefined;
  setItem(key: string, value: string): void;
  deleteItem(key: string): void;
}
