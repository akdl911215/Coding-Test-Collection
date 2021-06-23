import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Home, Estimate00_1, Estimate01_1, Estimate03_1, Estimate02_1, Estimate01_2, Estimate03_2, EstimateFinal, StartHome } from 'estimate/index';
import CountTest from '_TestCode/countTest/CountTest';
import CountTest2 from '_TestCode/countTest/CountTest2';
import SubmitCehck from '_TestCode/buttonTest/SubmitCheck';
import ChangeCheck from '_TestCode/buttonTest/ChangeCheck';
import Counter2 from '_TestCode/counterReducerTest/Counter2';
import HandleSearch from '_TestCode/buttonTest/HandleSearch';
import DocumentTest from '_TestCode/buttonTest/DocumentTest';
import RadioBtn from '_TestCode/buttonTest/RadioBtn';
import RadioBtn2 from '_TestCode/buttonTest/RadioBtn2';
import RadioBtn3 from '_TestCode/buttonTest/RadioBtn3';

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
        </>
    );
};

export default App;
