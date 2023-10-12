import React from 'react';
import {SafeAreaView,StyleSheet,Text,} from 'react-native';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';
function App(): JSX.Element {


  return (
    <SafeAreaView style={styles.root}>
      <Navigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 root:{
  flex:1,
  backgroundColor:'white'
 }
});

export default App;
