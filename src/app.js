import React, {Fragment, Component} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import initStore from './store';
import Screen from './navigation/routes';
import {Colors} from './utilities/theme';
const {store, persistor} = initStore();

export default class App extends Component {
  render = () => (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Fragment>
          <StatusBar
            backgroundColor={Colors.primaryColor}
            barStyle="light-content"
          />
          <SafeAreaView style={{flex: 1, backgroundColor: Colors.primaryColor}}>
            <Screen />
          </SafeAreaView>
        </Fragment>
      </PersistGate>
    </Provider>
  );
}
