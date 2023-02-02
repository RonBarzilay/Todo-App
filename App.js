import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  // List of goals
  const [goalsList, setGoalsList] = useState("");

  // Button state
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentGoalsList) => {
      return currentGoalsList.filter((goal) => goal.id != id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
          onAddGoal={addGoalHandler}
        />
        <View style={styles.goalContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
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
