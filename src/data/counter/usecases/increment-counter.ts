import { inject, injectable } from 'inversify';
import { take } from 'rxjs';

import { Providers } from '../../providers.enum';

import { IncrementCounterUsecase } from '../../../core/counter/counter-usecases';
import { CounterRepo } from '../../../core/counter/counter.repo';

@injectable()
export class IncrementCounter implements IncrementCounterUsecase {
    @inject<CounterRepo>(Providers.counterProvider)
    private counterProvider!: CounterRepo;

    execute() {
        this.counterProvider.counter$.pipe(take(1)).subscribe((counter) => {
            this.counterProvider.setCounter(counter + 1);
        });
    }
}
