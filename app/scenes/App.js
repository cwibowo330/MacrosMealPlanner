import React from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createLogger } from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
import Nav from '../components/Nav';
import UserInfo from '../components/UserInfo';
import MacrosModule from '../components/MacrosModule';
import Demo from '../components/Demo';
import MacrosTest from '../components/MacrosTest';
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
      <MacrosTest />
      <Nav />
      <UserInfo />
      <MacrosModule title="proteins" />
      <MacrosModule title="fats" />
      <MacrosModule title="carbs" />
    </View>
  </Provider>
);

export default App;
