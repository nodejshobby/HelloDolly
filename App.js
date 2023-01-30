import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Heading}>Hello Dolly</Text>
      <Text style={styles.SubHeading}>A simple dummy text mobile application built with love ❤</Text>
      <Text style={styles.Footer}>Copyright &copy; 2023</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Heading: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  SubHeading: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 15,
    paddingHorizontal: 'auto',
    width: 300,
    textAlign: 'center',
  },
  Footer: {
    fontWeight: '500',
    position: 'absolute',
    bottom: '10%',
  }
});
