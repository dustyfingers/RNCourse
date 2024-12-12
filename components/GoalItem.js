import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ text, id, onDeleteItem }) {
  return (
    <Pressable onPress={() => onDeleteItem(id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
