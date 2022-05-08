import { Observable } from 'rxjs';

import { Usecase } from '../usecase';

export interface GetCounterUsecase extends Usecase<Observable<number>> {}

export interface IncrementCounterUsecase extends Usecase<void> {}

export interface DecrementCounterUsecase extends Usecase<void> {}

export interface ResetCounterUsecase extends Usecase<void> {}
