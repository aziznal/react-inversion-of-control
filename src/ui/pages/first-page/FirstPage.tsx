import React, { useEffect, useState } from 'react';

import { Providers } from '../../../data/providers.enum';

import { CounterRepo } from '../../../core/counter/counter.repo';
import { useInjection } from '../../ioc.react';

export default function FirstPage() {
    const [counter, setCounter] = useState(0);

    const counterProvider = useInjection<CounterRepo>(
        Providers.counterProvider
    );

    useEffect(() => {
        let sub = counterProvider.counter$.subscribe((newCounter) => {
            setCounter(newCounter);
        });
        
        return () => {
            sub.unsubscribe();
        };
    });

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
            First Page
            <span>{counter}</span>
            <button onClick={() => counterProvider.increment()}>Inc</button>
        </div>
    );
}
