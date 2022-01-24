import React from "react";
import { View, Text } from "react-native";
import { viewStyles, textStyles } from "./style";

const App = () => {
  return (
    <View styles={viewStyles.container}>
      <Text styles={[textStyles.text, { color: "green" }]}>
        Inline Styling - Text
      </Text>
      <Text styles={[textStyles.text, textStyles.error]}>
        Inline Styling - Error
      </Text>
    </View>
  );
};

export default App;
