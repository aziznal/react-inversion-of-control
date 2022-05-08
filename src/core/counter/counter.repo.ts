import { BehaviorSubject } from 'rxjs';

export abstract class CounterRepo {
    abstract counter$: BehaviorSubject<number>;
    
    abstract setCounter(value: number): void;
}
