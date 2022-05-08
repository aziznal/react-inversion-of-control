import { inject, injectable } from 'inversify';
import { CounterProvider } from '../counter.provider';
import { Providers } from '../../providers.enum';
import { CounterRepo } from '../../../core/counter/counter.repo';

import { ResetCounterUsecase } from '../../../core/counter/counter-usecases';

@injectable()
export class ResetCounter implements ResetCounterUsecase {
    @inject<CounterRepo>(Providers.counterProvider)
    private counterProvider!: CounterProvider;

    execute() {
        this.counterProvider.setCounter(0);
    }
}
