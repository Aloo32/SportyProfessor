import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../lib/firebase'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.replace('/(tabs)')
    } catch (error: any) {
      Alert.alert('Login Failed', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className="flex-1 justify-center bg-white px-6">
      <Text className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Welcome Back
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
      </View>
      
      <TouchableOpacity 
        className="bg-orange-500 py-4 rounded-xl mb-4"
        onPress={handleLogin}
        disabled={loading}
      >
        <Text className="text-white text-lg font-bold text-center">
          {loading ? 'Logging in...' : 'Log In'}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-gray-500 text-center">Back</Text>
      </TouchableOpacity>
    </View>
  )
}