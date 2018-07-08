import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import Blog from './components/blog';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(
    // <Provider store={createStoreWithMiddleware(
    //     reducers, 
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}
    //   >
      <BrowserRouter>
        <div>
          <Switch>
              <Route path='/blog' component={Blog} />
              <Route path='/' component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    // </Provider>
  , document.getElementById('root'));
  registerServiceWorker();