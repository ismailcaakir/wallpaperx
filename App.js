/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { SafeAreaView, View } from 'react-native';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers  from './src/App/Reducers';
import ReduxThunk from 'redux-thunk';

// APP
import { Home } from './src/Screens';

type Props = {};
export default class App extends Component<Props> {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Home />
        </View>
      </Provider>
    );
  }
}
