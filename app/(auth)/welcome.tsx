import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

export default function WelcomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-4xl font-bold text-gray-800 mb-2">
        SportyProfessor
      </Text>
      <Text className="text-6xl mb-8">🏀</Text>
      <Text className="text-lg text-gray-600 text-center mb-12">
        Learn basketball from rules to advanced tactics
      </Text>
      
      <View className="w-full space-y-4">
        <TouchableOpacity 
          className="bg-orange-500 py-4 px-8 rounded-xl w-full"
          onPress={() => router.push('/(auth)/signup')}
        >
          <Text className="text-white text-lg font-bold text-center">
            Join for free
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="py-4 px-8 w-full"
          onPress={() => router.push('/(auth)/login')}
        >
          <Text className="text-orange-500 text-lg font-bold text-center">
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}