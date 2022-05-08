import React, { useEffect, useState } from 'react';

import { Providers } from '../../../data/providers.enum';

import '../loading.css';

import {
    DecrementCounterUsecase,
    GetCounterUsecase,
    IncrementCounterUsecase,
    ResetCounterUsecase,
} from '../../../core/counter/counter-usecases';
import { useInjection } from '../../ioc.react';

export default function SecondPage() {
    const [counter, setCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const getCounter = useInjection<GetCounterUsecase>(
        Providers.counterUsecase.getCounter
    );

    const incrementCounter = useInjection<IncrementCounterUsecase>(
        Providers.counterUsecase.increment
    );

    const decrementCounter = useInjection<DecrementCounterUsecase>(
        Providers.counterUsecase.decrement
    );

    const resetCounter = useInjection<ResetCounterUsecase>(
        Providers.counterUsecase.reset
    );

    useEffect(() => {
        setIsLoading(true);

        let sub = getCounter.execute().subscribe((newCounter) => {
            setCounter(newCounter);
            setIsLoading(false);
        });

        return () => {
            sub.unsubscribe();
        };
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',

                placeContent: 'center',
                placeItems: 'center',

                gap: '1rem',
            }}
        >
            {isLoading && <h1 className="loading">Loading...</h1>}

            {!isLoading && (
                <>
                    <h1>Second Page</h1>

                    <h2>{counter}</h2>

                    <button onClick={() => incrementCounter.execute()}>
                        Inc
                    </button>

                    <button onClick={() => decrementCounter.execute()}>
                        Dec
                    </button>

                    <button onClick={() => resetCounter.execute()}>
                        Reset
                    </button>
                </>
            )}
        </div>
    );
}
