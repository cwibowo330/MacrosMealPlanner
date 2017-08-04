import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createLogger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import Nav from '../components/Nav/Nav';
import UserInfo from '../components/UserInfo/UserInfo';
import MacrosWrapper from '../components/Macros/MacrosWrapper';
import Demo from '../components/Demo';
import reducer from '../reducers';
// import sagas from '../sagas';

// const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
// const middlewares = [sagaMiddleware, logger];
const middlewares = [logger];
// const middlewares = [];
const store = createStore(
  reducer,
  compose(applyMiddleware(...middlewares)),
);
// const store = createStore(reducer);
// sagaMiddleware.run(sagas);

const App = () => (
  <Provider store={store}>
    <View>
      <Demo userId={1} />
      <Nav />
      <UserInfo />
      <MacrosWrapper />
    </View>
  </Provider>
);

export default App;
