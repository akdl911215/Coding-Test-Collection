import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Home } from 'estimate/index';

const App = () => {
    return (
        <>
            <Route exact path="/" component={Home} />
        </>
    );
};

export default App;
