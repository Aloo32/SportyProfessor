import { View, Text, TouchableOpacity, Alert } from 'react-native'
import { useAuth } from '../../lib/auth'
import { useAppStore } from '../../store/useAppStore'

export default function ProfileScreen() {
  const { logout, user: authUser } = useAuth()
  const { user: storeUser } = useAppStore()

  const handleLogout = async () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Sign Out', 
          style: 'destructive',
          onPress: async () => {
            try {
              await logout()
            } catch (error) {
              Alert.alert('Error', 'Failed to sign out')
            }
          }
        }
      ]
    )
  }

  return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-2xl font-bold text-gray-800 mb-4">
        {storeUser?.displayName || 'Student'}
      </Text>
      
      <Text className="text-base text-gray-600 mb-8">
        {authUser?.email || 'No email'}
      </Text>
      
      <TouchableOpacity 
        className="bg-red-500 py-4 px-8 rounded-xl"
        onPress={handleLogout}
      >
        <Text className="text-white text-lg font-bold">Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}