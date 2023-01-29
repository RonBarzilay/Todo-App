import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState("");

  function goalTextInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Here goes the goal"
          onChangeText={goalTextInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return <GoalItem />;
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
  inputContainer: {
    // flex: 1/6, inputContainer:goalContainer
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    borderRadius: 6,
  },
  // flex: 5/6, goalContainer:inputContainer
  goalContainer: {
    flex: 5,
  },
});
