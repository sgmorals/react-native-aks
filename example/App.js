import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AksBridge, AksComponent, AksStandard as AKS } from 'react-native-aks'
export default () => {

  const state = AKS.ViewModel()


  return (
    <View style={styles.container}>
      <AksComponent.TestComponent />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})