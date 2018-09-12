import { Injectable } from '@angular/core';
// service
import { Config } from '../data/Config';

@Injectable()
export class LocalStorageService {
    localStorageKey: string;

    constructor() {
        this.localStorageKey = Config.LocalStorageKey;
    }

    set(data: any): void {
        try {
            window.localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }

    get(): any {
        try {
            return JSON.parse(window.localStorage.getItem(this.localStorageKey));
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }

    clear() {
        window.localStorage.clear();
    }

    exist(): boolean {
        return this.get() != null;
    }
}
