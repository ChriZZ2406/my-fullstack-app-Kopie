import React, { useState } from 'react';

function NachrichtUpdate({ onNachrichtUpdated }) {
    const [nachricht, setNachricht] = useState('');

    function handleUpdate(e) {
        e.preventDefault();

        fetch('http://localhost:8080/api/nachricht/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nachricht }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Nachricht erfolgreich aktualisiert:', data);
            onNachrichtUpdated(data.nachricht); 
        })
        .catch(error => {
            console.error('Es gab ein Problem beim Aktualisieren der Nachricht:', error);
        });
    }

    return (
        <div className="NachrichtUpdate">
            <h2>Update Nachricht</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" value={nachricht} onChange={e => setNachricht(e.target.value)} />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default NachrichtUpdate;
