import { View, Text, StyleSheet } from 'react-native'

export default function LearnScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Basketball Mastery</Text>
      <Text style={styles.subtitle}>Your learning path starts here!</Text>
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
  },
})