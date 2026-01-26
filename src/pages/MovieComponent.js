import {useState, useEffect} from 'react';

function MovieComponent() {
    

    useEffect(()=>{
        console.log('page loaded');
    }, []);

    return <p>Here is a movie.</p>;

}