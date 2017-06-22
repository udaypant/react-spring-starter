import 'whatwg-fetch';
import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import '../sass/style.scss';

import HelloWorldContainer from './containers/HelloWorldContainer';
import About from './viewComponents/About';

let store = createStore(
    reducer,
    applyMiddleware(ReduxThunk)
);

class ApplicationRoutes extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router basename='/'>
                    <div>
                        <div>
                            <Link to='/user'>User</Link> | <Link to='/about'>About</Link>
                        </div>
                        <Switch>
                            <Route exact path='/user' component={HelloWorldContainer} />
                            <Route path='/about' component={About} />
                            <Route component={HelloWorldContainer} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(
    <ApplicationRoutes />,
    document.getElementById('app')
);
