import React from 'react';
import {IMovie} from "../../types";
import {nanoid} from "nanoid";
import "./AddMovieForm.css"

interface State {
    name: string;
}

interface Props {
    addMovie: (name: IMovie) => void
}

class AddMovieForm extends React.Component<Props, State> {

    state: State = {
        name: '',
    };

    changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState((prevState) => ({
            ...prevState,
            name: event.target.value,
        }));
    };

    onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.addMovie({
            id: nanoid(),
            ...this.state,
        });
    };

    render() {
        return (
            <div className="form">
                <form onSubmit={this.onFormSubmit}>
                    <input className="input-message"
                           onChange={this.changeText}
                           type="text"
                           placeholder="Add new Movie"/>
                    <button type='submit' className="send-btn">Add</button>
                </form>
            </div>
        );
    }
}

export default AddMovieForm;