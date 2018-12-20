/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { SafeAreaView, View, BackHandler} from 'react-native';

// REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers  from './src/App/Reducers';
import ReduxThunk from 'redux-thunk';
import { Router, Scene, Actions } from 'react-native-router-flux';

// APP
import { Home, Detail } from './src/Screens';

type Props = {};
export default class App extends Component<Props> {

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this._backAndroidHandler);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._backAndroidHandler);
  }

  _backAndroidHandler = () => {
      const scene = Actions.currentScene;
      // alert(scene)
      if (scene === 'homePage') {
        BackHandler.exitApp();
        return true;
      }
  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router>
            <Scene key="root" hideNavBar={true}>
              <Scene key="homePage" component={Home} title="Home" initial={true}/>
              <Scene key="detailPage" component={Detail} title="Details" rightTitle={'Deneme'}  />
            </Scene>
          </Router>
        </View>
      </Provider>
    );
  }
}
