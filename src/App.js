import React from "react";
import { StyleSheet, View, Text } from "react-native-web";

const App = () => {
  return (
    <View styles={styles.container}>
      <Text styles={styles.text}>Inline Styling - Text</Text>
      <Text styles={styles.error}>Inline Styling - Error</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 10,
    fontSize: 26,
    fontWeight: "600",
    color: "black",
  },
  error: {
    padding: 10,
    fontSize: 26,
    fontWeight: "400",
    color: "red",
  },
});

export default App;
