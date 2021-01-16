
# react-native-aks

## 爱科森移动端通用组件及设计标准
## Getting started

`$ yarn add react-native-aks@https://github.com/sgmorals/react-native-aks.git`

## Docs
### components
* [TestComponent]()


### staandards
* [ViewModel]()



## Usage
```javascript
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
```
  