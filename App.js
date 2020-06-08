import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ngaji from './assets/ngaji.jpg'
import * as ImagePicker from 'expo-image-picker'
import * as ImageSharing from 'expo-sharing'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ngaji } from './src/containers'
import BottomTabNavigator from './src/navigation/BottomNavigator'
import LinkingConfiguration from './src/navigation/LinkingConfiguration'
import useCachedResources from './src/hooks/usecachedResources'

const Stack = createStackNavigator()

export default function App() {
  // return <View style={styles.container}>{Ngaji()}</View>

  const isLoadingComplete = useCachedResources()

  if (isLoadingComplete) {
    return (
      <View style={styles.container}>
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C28C2E',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
