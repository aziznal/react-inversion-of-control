import React, { useState } from 'react';

export default function SecondPage() {
    const [counter, setCounter] = useState(0);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",

            placeContent: "center",
            placeItems: "center",
            
            gap: "1rem",

        }}>
            <span>{ counter }</span>

            <button onClick={() => setCounter(counter + 1)}>
                Inc
            </button>
        </div>
    )
}