import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

function GoalInput({ setState }) {
  const [goalInput, setGoalInput] = useState("");
  const addGoalHandler = () => {
    setState((currentGoals) => [...currentGoals, goalInput]);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={(enteredText) =>
          setGoalInput({ text: enteredText, id: Math.random().toString() })
        }
        placeholder="Your course goal"
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
  },
});

export default GoalInput;
