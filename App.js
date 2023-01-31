import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState("");

  function addGoalHandler(enteredGoalText) {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // flex: 1, all space for this appContainer
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  // flex: 5/6, goalContainer:inputContainer
  goalContainer: {
    flex: 5,
  },
});
