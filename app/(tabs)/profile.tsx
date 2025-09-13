import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { db } from '../../lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export default function ProfileScreen() {
  const testFirebaseConnection = async () => {
    try {
      console.log('Testing Firebase connection...')
      
      // Test writing to Firestore
      const docRef = await addDoc(collection(db, 'test'), {
        message: 'Hello from SportyProfessor!',
        timestamp: new Date()
      })
      
      console.log('Document written with ID: ', docRef.id)
      
      // Test reading from Firestore
      const querySnapshot = await getDocs(collection(db, 'test'))
      console.log('Documents in test collection:', querySnapshot.size)
      
      Alert.alert(
        'Firebase Connected! ✅', 
        `Successfully wrote and read data. Document ID: ${docRef.id}`
      )
      
    } catch (error) {
      console.error('Firebase connection error:', error)
      Alert.alert(
        'Firebase Error ❌', 
        `Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Your SportyProfessor profile</Text>
      
      <TouchableOpacity style={styles.testButton} onPress={testFirebaseConnection}>
        <Text style={styles.buttonText}>Test Firebase Connection</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  testButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})