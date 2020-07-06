import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.prod.css';
import * as serviceWorker from './serviceWorker';
import { Layout } from './components/Layout/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './pages';

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Switch>
                {
                    routes.map(({component: Component, ...rest}, key) => (
                        <Route
                            {...rest}
                            key={key}
                            render={() => (
                                <Layout>
                                    <Component/>
                                </Layout>
                            )}
                        />
                    ))
                }
            </Switch>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
