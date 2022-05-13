import { ILocalStorageService } from './ILocalStorageService';

export class WindowLocalStorageService implements ILocalStorageService {
  deleteItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  getItem<I>(key: string): I | undefined {
    const res = window.localStorage.getItem(key);
    if (!res) return undefined;
    if (this.isJustAString(res)) return res as unknown as I;
    return JSON.parse(res) as I;
  }

  setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  private isJustAString(res: string): boolean {
    try {
      JSON.parse(res);
      return false;
    } catch (e) {
      return true;
    }
  }
}
