import {useEffect, useState} from 'react';

const Jokes = () => {

    const [joke, setJoke] = useState('');

    useEffect(() => {
        console.log('[Blog] mount or update');
    });

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            setJoke(data.value);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchJoke().catch(error => console.error(error));
    }, []);

    const getNewJoke = () => {
        fetchJoke().catch(error => console.error(error));
    };



    return (
        <div className="joke-app">
            <h2>Joke of Chuck Norris</h2>
            <button onClick={getNewJoke}>New Joke</button>
            <p>{joke}</p>
        </div>
    );

};

export default Jokes;