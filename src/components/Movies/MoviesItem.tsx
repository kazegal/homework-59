import React, {MouseEventHandler} from 'react';
import {IMovie} from "../../types";
import "./MoviesItem.css"

interface Props {
    movie: IMovie;
    onRemoveMovie: MouseEventHandler;
}


class MoviesItem extends React.Component<Props> {
    render() {
        return (
            <div className='movie-wrap'>
                <input type="text" value={this.props.movie.name}/>
                <button type="button" onClick={this.props.onRemoveMovie}>x</button>
            </div>
        );
    }
}

export default MoviesItem;