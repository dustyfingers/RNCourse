import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const deleteGoal = (id) =>
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => setModalOpen(true)}
      />
      <GoalInput
        setGoals={setGoals}
        visible={modalOpen}
        setModalOpen={setModalOpen}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(data) => (
            <GoalItem
              text={data.item.text}
              onDeleteItem={deleteGoal}
              id={data.item.id}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 64,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
