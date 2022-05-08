import { BehaviorSubject } from 'rxjs';

export interface CounterRepo {
    counter$: BehaviorSubject<number>;
    increment(): void;
    decrement(): void;
}
