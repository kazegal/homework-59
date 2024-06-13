import React from 'react';
import {IMovie} from "../../types";
import AddMovieForm from "../../components/AddPostForm/AddMovieForm";
import Movies from "../../components/Movies/Movies";


interface State {
    movies: IMovie [];
}

class WatchList extends React.Component<{}, State> {
    state: State = {
        movies: [
            {id: '123', name: 'Американский пирог'},
            {id: '1223', name: 'Король вечеринок'},
            {id: '1213', name: 'Добро пожаловать в ЗомбиLand'},
        ],
    };

    addMovie = (newMovie: IMovie) => {
        this.setState((prevState) => ({
            ...prevState,
            movies: [...prevState.movies, newMovie]
        }));
    };

    removeMovie = (id: string) => {
        const index = this.state.movies.findIndex(movie => movie.id === id);
        const copy = [...this.state.movies];
        copy.splice(index, 1);
        this.setState((prevState) => ({
            ...prevState,
            movies: copy,
        }));
    };

    render() {
        return (
            <>
                <AddMovieForm addMovie={this.addMovie}/>
                <Movies movies={this.state.movies} onRemoveItem={this.removeMovie}/>
            </>
        );
    }
}

export default WatchList;