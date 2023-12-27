import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ReadComponent from './ReadComponent';
import CreateComponent from './CreateComponent';
import UpdateComponent from './UpdateComponent';
import DeleteComponent from './DeleteComponent';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <ReadComponent />
                <CreateComponent />
                <UpdateComponent />
                <DeleteComponent />
            </div>
        </Provider>
    );
};

export default App;
