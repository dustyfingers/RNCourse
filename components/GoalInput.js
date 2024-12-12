import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";

function GoalInput({ setGoals, visible, setModalOpen }) {
  const [goalInput, setGoalInput] = useState("");
  const addGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalInput, id: Math.random().toString() },
    ]);
    setModalOpen(false);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          onChangeText={(enteredText) => setGoalInput(enteredText)}
          placeholder="Your course goal"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={"#5e0acc"}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => setModalOpen(false)}
              color={"#f31282"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    color: "white",
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
