import { Container } from 'inversify';

import { Providers } from './providers.enum';

import {
    DecrementCounterUsecase,
    GetCounterUsecase,
    IncrementCounterUsecase,
    ResetCounterUsecase,
} from '../core/counter/counter-usecases';
import { CounterRepo } from '../core/counter/counter.repo';
import { CounterProvider } from './counter/counter.provider';
import { DecrementCounter } from './counter/usecases/decrement-counter';
import { GetCounter } from './counter/usecases/get-counter';
import { IncrementCounter } from './counter/usecases/increment-counter';
import { ResetCounter } from './counter/usecases/reset-counter';

const container = new Container();

// Bind all providers here
container
    .bind<CounterRepo>(Providers.counterProvider)
    .to(CounterProvider)
    .inSingletonScope();

container
    .bind<GetCounterUsecase>(Providers.counterUsecase.getCounter)
    .to(GetCounter);

container
    .bind<IncrementCounterUsecase>(Providers.counterUsecase.increment)
    .to(IncrementCounter);

container
    .bind<DecrementCounterUsecase>(Providers.counterUsecase.decrement)
    .to(DecrementCounter);

container
    .bind<ResetCounterUsecase>(Providers.counterUsecase.reset)
    .to(ResetCounter);

export { container };
