import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../../lib/firebase'

export default function SignupScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match')
      return
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters')
      return
    }

    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      
      // Create user profile in Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: email,
        displayName: 'Student',
        currentStreak: 0,
        totalPoints: 0,
        completedLessons: [],
        createdAt: new Date()
      })

      router.replace('/(tabs)')
    } catch (error: any) {
      Alert.alert('Signup Failed', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="flex-1 justify-center bg-white px-6">
      <Text className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Create Account
      </Text>
      
      <View className="space-y-4 mb-8">
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-4 text-lg"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-4 text-lg"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TextInput
          className="border border-gray-300 rounded-xl px-4 py-4 text-lg"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>
      
      <TouchableOpacity 
        className="bg-orange-500 py-4 rounded-xl mb-4"
        onPress={handleSignup}
        disabled={loading}
      >
        <Text className="text-white text-lg font-bold text-center">
          {loading ? 'Creating Account...' : 'Create Account'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-gray-500 text-center">Back</Text>
      </TouchableOpacity>
    </View>
  )
}