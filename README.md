
# react-native-aks

## 武汉爱科森移动端通用组件
## Getting started

`$ yarn add react-native-aks@https://github.com/sgmorals/react-native-aks.git`

## Docs
### components
* [TestComponent]()


### standards
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
  