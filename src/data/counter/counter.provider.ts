import { injectable } from 'inversify';
import { BehaviorSubject } from 'rxjs';

import { CounterRepo } from '../../core/counter/counter.repo';

@injectable()
export class CounterProvider implements CounterRepo {
    static foo = 1;

    counter$: BehaviorSubject<number>;

    private counter: number;

    constructor() {
        console.log('Counter Provider Constructor Called');

        this.counter = 10;
        this.counter$ = new BehaviorSubject(this.counter);
    }

    increment(): void {
        this.counter++;
        this.counter$.next(this.counter);
    }

    decrement(): void {
        this.counter--;
        this.counter$.next(this.counter);
    }
}
