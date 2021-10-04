import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import {FormIndex} from '../Forms'


function App(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={FormIndex} />
        </BrowserRouter>
    )
}

export default App