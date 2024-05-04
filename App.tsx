import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nome do Evento
      </Text>
      <Text style={styles.subtitle}>
        Sexta-feira, 03 de Maio de 2024
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  subtitle: {
    color: '#6B6B6B',
    fontSize: 16,
  }
});
