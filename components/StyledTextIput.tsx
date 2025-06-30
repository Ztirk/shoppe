import { Link } from "expo-router";
import React from "react";
import { Button, Icon, TextInput } from "react-native-paper";

interface Props {
  label: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

function StyledTextInput({ label, left, right }: Props) {
  return (
    <TextInput
      label={label}
      style={{
        backgroundColor: "#F8F8F8",
        width: 335,
        height: 52.37,
        borderRadius: 999,
        marginBottom: 10,
      }}
      underlineStyle={{
        display: "none",
      }}
      theme={{
        roundness: 999, // Also controls corner radius for Paper components
      }}
      left={left}
      right={right}
    />
  );
}

export default StyledTextInput;
