import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

function GoalItem(props) {
  return (
    <Modal>
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#dddddd" }}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={(pressed) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc", // background c
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white", // text c
    padding: 8,
  },
});
