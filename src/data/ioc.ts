import { Container } from 'inversify';

import { CounterProvider } from './counter/counter.provider';

import { Providers } from './providers.enum';

import { CounterRepo } from '../core/counter/counter.repo';

const container = new Container();

// Bind all providers here
container
    .bind<CounterRepo>(Providers.counterProvider)
    .toConstantValue(new CounterProvider())

export { container };
