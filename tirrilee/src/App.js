import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Home, Estimate00_1, Estimate01_1, Estimate03_1, Estimate02_1, Estimate01_2, Estimate03_2, EstimateFinal, StartHome } from 'estimate/index';
import CountTest from '_TestCode/countTest/CountTest';
import CountTest2 from '_TestCode/countTest/CountTest2';
import SubmitCehck from '_TestCode/buttonTest/SubmitCheck';
import ChangeCheck from '_TestCode/buttonTest/ChangeCheck';
import Counter2 from '_TestCode/counterReducerTest/Counter2';

const App = () => {
    return (
        <>
            <Route exact path="/" component={StartHome} />
            <Route exact path="/startHome" component={StartHome} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/estimate00_1" component={Estimate00_1} />
            <Route exact path="/estimate01_1" component={Estimate01_1} />
            <Route exact path="/estimate01_2" component={Estimate01_2} />
            <Route exact path="/estimate02_1" component={Estimate02_1} />
            <Route exact path="/estimate03_1" component={Estimate03_1} />
            <Route exact path="/estimate03_2" component={Estimate03_2} />
            <Route exact path="/estimate_final" component={EstimateFinal} />

            <Route exact path="/countTest" component={CountTest} />
            <Route exact path="/countTest2" component={CountTest2} />
            <Route exact path="/submitCehck" component={SubmitCehck} />
            <Route exact path="/changeCheck" component={ChangeCheck} />
            <Route exact path="/counter2" component={Counter2} />
        </>
    );
};

export default App;
