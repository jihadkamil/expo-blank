import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'
const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          // 'space-mono'
        })
      } catch (e) {
        // error information
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }
    loadResourcesAndDataAsync()
  }, [])
  return isLoadingComplete
}
export default useCachedResources
