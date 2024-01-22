import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import Calculator from './components/screens/calculator';
import IntroScreen from './components/screens/introScreen';
import { Provider } from 'react-redux';
import store from './components/redux/store';

const App = () => {
  const [isloaded, setIsLoaded] = useState(false);

  setInterval(() => {
    setIsLoaded(true);
  }, 2000);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor='transparent' barStyle='dark-content'/>
      <View >
      {isloaded ? <Calculator /> : <IntroScreen />}
    </View>
    </Provider>
    
  );
};

export default App;
