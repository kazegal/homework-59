import React from 'react';
import {IMovie} from "../../types";
import MoviesItem from "./MoviesItem";

interface Props {
    movies: IMovie [];
    onRemoveItem: (id: string) => void;
}

class Movies extends React.Component<Props> {
    render() {
        return (
            <div>
                <h4>To watch list:</h4>
                {this.props.movies.map((item) => (
                    <MoviesItem key={item.id} movie={item} onRemoveMovie={() => this.props.onRemoveItem(item.id)}/>
                ))}
            </div>
        );
    }
}

export default Movies;