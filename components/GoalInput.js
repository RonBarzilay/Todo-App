import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  // Manage Text Input, enteredGoalText: value,
  // setEnteredGoalText: call to set
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalTextInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/logo.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Here goes the goal"
          placeholderTextColor="#ccccc1"
          onChangeText={goalTextInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={props.onCnacel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#b180f0" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1/6, inputContainer:goalContainer
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
