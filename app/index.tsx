import { useEffect } from 'react'
import { router } from 'expo-router'
import { View, Text } from 'react-native'
import { useAuth } from '../lib/auth'

export default function Index() {
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/(tabs)')
      } else {
        router.replace('/(auth)/welcome')
      }
    }
  }, [user, loading])

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-lg">Loading...</Text>
      </View>
    )
  }

  return null
}