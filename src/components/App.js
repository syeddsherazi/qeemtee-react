import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TravellerProfile, Home, Travellers } from './pages';
import Menu from './sections/Menu';

class App extends React.Component {

    render() {
        return (
            <div className="application">
                <Router>
                    <Menu></Menu>
                    <div>
                        <Switch>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/travellers" component={Travellers} />
                            <Route path="/travellers/:id" component={TravellerProfile} />
                            <Route path="*" component={Home} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    };
};

export default App;
