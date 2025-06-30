import { Link } from "expo-router";
import React from "react";
import { Button, Icon } from "react-native-paper";

interface Props {
  href: any;
  text: string;
  mode:
    | "text"
    | "outlined"
    | "contained"
    | "elevated"
    | "contained-tonal"
    | undefined;
  backgroundColor?: string;
  marginTop?: number;
}

function StyledButton({ href, text, mode, backgroundColor, marginTop }: Props) {
  return (
    <Button
      mode={mode}
      onPress={() => console.log("Pressed")}
      style={{
        marginTop: marginTop || 0,
        backgroundColor: backgroundColor || "",
        height: 61,
        width: 335,
        display: "flex",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
}

export default StyledButton;
