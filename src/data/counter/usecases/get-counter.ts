import { inject, injectable } from 'inversify';

import { Providers } from '../../providers.enum';

import { GetCounterUsecase } from '../../../core/counter/counter-usecases';
import { CounterRepo } from '../../../core/counter/counter.repo';
import { delay } from 'rxjs';

@injectable()
export class GetCounter implements GetCounterUsecase {
    @inject<CounterRepo>(Providers.counterProvider)
    private counterProvider!: CounterRepo;

    execute() {
        return this.counterProvider.counter$.pipe(delay(1000));
    }
}
