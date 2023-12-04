import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DrawWithOptions} from '@archireport/react-native-svg-draw';
import LinearGradient from 'react-native-linear-gradient';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.secondaryContainer}>
        <View style={styles.secondaryContainer}>
          <Text>HELLO WORLD</Text>
          <DrawWithOptions linearGradient={LinearGradient} />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  secondaryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
    flex: 1,
  },
});

export default App;
