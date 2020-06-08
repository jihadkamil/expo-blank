import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { Ngaji, Surat } from '../containers'
import TabBarIcon from '../containers/TabBarIcon'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })
  console.log('navigation', navigation)
  console.log('route', route)

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={Ngaji}
        options={{
          title: 'Getting started',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={Surat}
        options={{
          title: 'Links Surat',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  )
}
const getHeaderTitle = (route) => {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME
  switch (routeName) {
    case 'Home':
      return 'Getting started'
      break
    case 'Links':
      return 'Getting linked'
      break
    default:
      break
  }
}
