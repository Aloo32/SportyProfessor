import { Text, View } from "react-native";
 
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <View className="bg-white p-6 rounded-xl shadow-lg">
        <Text className="text-3xl font-bold text-blue-600 mb-4">
          SportyProfessor
        </Text>
        <Text className="text-lg text-gray-700 text-center">
          Nativewind is connected!!
        </Text>
        <View className="bg-green-500 p-3 rounded-lg mt-4">
          <Text className="text-white font-semibold text-center">
            Green Button
          </Text>
        </View>
      </View>
    </View>
  );
}