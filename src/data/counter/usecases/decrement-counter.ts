import { inject, injectable } from 'inversify';
import { take } from 'rxjs';

import { Providers } from '../../providers.enum';

import { DecrementCounterUsecase } from '../../../core/counter/counter-usecases';
import { CounterRepo } from '../../../core/counter/counter.repo';

@injectable()
export class DecrementCounter implements DecrementCounterUsecase {
    @inject<CounterRepo>(Providers.counterProvider)
    private counterProvider!: CounterRepo;

    execute() {
        this.counterProvider.counter$.pipe(take(1)).subscribe((counter) => {
            this.counterProvider.setCounter(counter - 1);
        });
    }
}
