import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CoinDetail from './components/CoinDetail';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Markets from './components/Markets';
import Trade from './components/Trade';
import BankDeposit from './components/BankDeposit';
import CardDeposit from './components/CardDeposit';
import './styles/App.css'

const App = () => {
    return (
        <div className="app">
            <Router>
                <Header />
                    <main>
                        <h4 className="prices-update-info">Prices Are Updating In Every 5 Minutes!
                        </h4>
                       <Switch>
                           <Route path="/" exact component={Homepage} />
                           <Route path="/coin/:coinId" exact component={CoinDetail} />
                           <Route path="/login" exact component={Login} />
                           <Route path="/register" exact component={Register} />
                           <Route path="/markets" exact component={Markets} />
                           <Route path="/trade" exact component={Trade} />
                           <Route path="/bank-deposit" exact component={BankDeposit} />
                           <Route path="/card-deposit" exact component={CardDeposit} />
                       </Switch>
                    </main>
                <Footer />
            </Router>
        </div>
    )
}

export default App;
