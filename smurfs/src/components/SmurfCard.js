import React from 'react'

function SmurfCard({ smurf }) {

    return (
        <>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </>
    );
}

export default SmurfCard