import { View, Text } from 'react-native'

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-white p-5">
      <Text className="text-3xl font-bold text-slate-800 mb-3">
        SportyProfessor
      </Text>
      <Text className="text-5xl mb-5">🏀</Text>
      <Text className="text-base text-center text-gray-600">
        Welcome to your sports learning journey!
      </Text>
    </View>
  )
}