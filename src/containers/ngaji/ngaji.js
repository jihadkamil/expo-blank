import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import ngaji from '../../../assets/ngaji.jpg'
import * as ImagePicker from 'expo-image-picker'
import * as ImageSharing from 'expo-sharing'
function Ngaji() {
  console.log('ngajisekarang')
  const [selectedImage, setSelectedImage] = useState({
    localUri:
      'https://images.unsplash.com/photo-1574545640323-59dc7a2b4a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=750&q=80',
  })

  let openShareDialogAsync = async () => {
    if (!(await ImageSharing.isAvailableAsync())) {
      alert("Uh oh, sharing isn't available on your platform")
      return
    }

    ImageSharing.shareAsync(selectedImage.localUri)
  }
  const openImageAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync()

    if (!permissionResult.granted) {
      alert('permission to access camera roll is required')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (pickerResult.cancelled) {
      return
    }

    setSelectedImage({ localUri: pickerResult.uri })
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={ngaji} style={styles.photo} />
      <Text style={styles.text}>
        kata pak haji, yang muda harus hormatin yang lebih tua, yang tua harus sayang sama yang muda
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => alert('Hello, start from Ngaji Iqro')}>
        <Text style={styles.buttonText}>Mulai Ngaji</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: selectedImage.localUri,
        }}
        style={styles.photo}
      />
      <Text style={styles.text}>
        kata pak haji, ngaji mahs terus aja udah umur berapa juga, harus tetep ngaji
      </Text>
      <TouchableOpacity style={styles.button} onPress={openImageAsync}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openShareDialogAsync}>
        <Text style={styles.buttonText}>Share thiss photo</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D8CDB9',
    padding: 20,
    borderRadius: 50,
    width: 100,
  },
  buttonText: {
    color: '#721B29',
    fontSize: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#C28C2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#222220',
  },
  photo: {
    height: 159,
    width: 305,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
})
export default Ngaji
