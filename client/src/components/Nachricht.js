import React, { useState, useEffect } from 'react';
import NachrichtUpdate from './NachrichtUpdate';

function Nachricht() {
    const [nachricht, setNachricht] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/nachricht')
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setNachricht(json.nachricht);
        });
    }, []);

    function handleNachrichtUpdated(newNachricht) {
        setNachricht(newNachricht);
    }

    return (
        <div className="Nachricht">
            <h1>Aktuelle Nachricht:</h1>
            <h2>{nachricht}</h2>
            <NachrichtUpdate onNachrichtUpdated={handleNachrichtUpdated} />
        </div>
    );
}

export default Nachricht;