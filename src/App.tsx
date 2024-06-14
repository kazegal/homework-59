import './App.css';
import WatchList from "./containers/WatchList/WatchList";
import Jokes from "./containers/Jokes/Jokes";

function App() {
    return (
        <div className="App">
            <WatchList/>
            <Jokes />
        </div>
    );
}

export default App;
