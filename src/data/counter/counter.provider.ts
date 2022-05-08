import { injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';

import { CounterRepo } from '../../core/counter/counter.repo';

const COUNTER_LOCAL_STORAGE_KEY = 'counter';

@injectable()
export class CounterProvider implements CounterRepo {
    counter$: BehaviorSubject<number>;

    private _counter: number;

    private get counter() {
        return this._counter;
    }

    private set counter(value: number) {
        this._counter = value;

        localStorage.setItem(COUNTER_LOCAL_STORAGE_KEY, String(this._counter));

        this.counter$.next(this.counter);
    }

    constructor() {
        this._counter = this.getCounterFromLocalStorage();
        this.counter$ = new BehaviorSubject(this._counter);
    }

    setCounter(value: number): void {
        this.counter = value;
    }

    private getCounterFromLocalStorage() {
        const counter = localStorage.getItem(COUNTER_LOCAL_STORAGE_KEY);

        if (counter === undefined || counter === null) {
            localStorage.setItem(COUNTER_LOCAL_STORAGE_KEY, '0');
        }

        return Number(counter);
    }
}
