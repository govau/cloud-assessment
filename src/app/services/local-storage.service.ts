import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    localStorageKey: string;

    constructor() {
        this.localStorageKey = 'userInput';
    }

    set(data: any): void {
        try {
            localStorage.setItem(this.localStorageKey, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }

    get() {
        try {
            return JSON.parse(localStorage.getItem(this.localStorageKey));
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }

    clear() {
        localStorage.clear();
    }
}
