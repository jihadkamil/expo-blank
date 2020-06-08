import { Ionicons, Entypo } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RectButton, ScrollView } from 'react-native-gesture-handler'

const SuratScreen = () => {
  console.log('SuratScreen')
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="book-sharp"
        onPress={() =>
          WebBrowser.openBrowserAsync('https://tafsirweb.com/37082-quran-surat-al-fatihah.html')
        }
        label="Surat Al Fatihah"
      />
      <OptionButton
        icon="md-school"
        onPress={() =>
          WebBrowser.openBrowserAsync('https://tafsirweb.com/37098-quran-surat-al-baqarah.html')
        }
        label="Surat Al Baqarah"
      />
    </ScrollView>
  )
}

const OptionButton = ({ icon, label, onPress, isLastOption }) => (
  <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
    <View style={{ flexDirection: 'column' }}>
      <View style={styles.optionIconContainer}>
        <Entypo name={'book'} size={22} color="rgba(0,0,0,0.35)" />
      </View>
      <View style={styles.optionText}>
        <Text style={styles.optionText}>{label}</Text>
      </View>
    </View>
  </RectButton>
)
export default SuratScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
})
