import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import ProductsApp from './Products/components/ProductsApp';
import { store } from './store';
import { Provider } from 'react-redux' 


const ClientRoutes = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ProductsApp} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )    
}

export default ClientRoutes