import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

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
        <ScrollView>
          {goals.map((goal, idx) => <View style={styles.goalItem} key={idx}><Text style={styles.goalText}>{goal}</Text></View>)}
        </ScrollView>
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
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
