import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Home, Estimate00_1, Estimate01_1, Estimate03_1, Estimate02_1, Estimate01_2, Estimate03_2, EstimateFinal, StartHome } from 'estimate/index';

const App = () => {
    return (
        <>
            <Route exact path="/" component={StartHome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/estimate00_1" component={Estimate00_1} />
            <Route exact path="/estimate01_1" component={Estimate01_1} />
            <Route exact path="/estimate01_2" component={Estimate01_2} />
            <Route exact path="/estimate02_1" component={Estimate02_1} />
            <Route exact path="/estimate03_1" component={Estimate03_1} />
            <Route exact path="/estimate03_2" component={Estimate03_2} />
            <Route exact path="/estimate_final" component={EstimateFinal} />
        </>
    );
};

export default App;
