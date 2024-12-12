import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [goals, setGoals] = useState([])
  const [goalInput, setGoalInput] = useState('');
  function goalInputHandler(enteredText) {
    setGoalInput(enteredText)
  }
  function addGoalHandler() {
    setGoals(currentGoals => [...currentGoals, goalInput])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder='Your course goal' />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal, idx) => <Text key={idx}>{goal}</Text>)}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 64,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8
  },
  goalsContainer: {
    flex: 5
  }
});
