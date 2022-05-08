import { Container, interfaces } from 'inversify';
import React, { useContext } from 'react';

const inversifyContext = React.createContext<{ container: Container | null }>({
    container: null,
});

export function InversifyProvider(props: {
    container: Container;
    children: JSX.Element | JSX.Element[];
}) {
    return (
        <inversifyContext.Provider value={{ container: props.container }}>
            {props.children}
        </inversifyContext.Provider>
    );
}

export function useInjection<T>(identifier: interfaces.ServiceIdentifier<T>) {
    const { container } = useContext(inversifyContext);

    if (!container)
        throw new Error(
            'Found null inversify container. Make sure it has been provided in InversifyProvider'
        );

    return container.get<T>(identifier);
}
