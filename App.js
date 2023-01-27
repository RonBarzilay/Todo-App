import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Here goes the goal'/>
        <Button title='Add Goal'/>
      </View>
      <View style={styles.goalContainer}>
        <Text>List of goals later on ...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // flex: 1, all space for this appContainer
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
  // flex: 1/6, inputContainer:goalContainer
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    padding: 10, 
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8
  },
  // flex: 5/6, goalContainer:inputContainer
  goalContainer: {
    flex: 5,
  },
});
