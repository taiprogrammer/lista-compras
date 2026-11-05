import { Text, TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

type Props = TextInputProps & {
  placeholder: string;
};

export function Input({ ...rest }: Props) {
  const [description, setDescription] = useState<string>("");

  function handleChangeText(value: string) {
    setDescription(value);
  }
  return (
    <>
    <TextInput
      style={styles.container}
      placeholderTextColor="#74798B"
      {...rest}
      onChangeText={handleChangeText}
    />
    </>
  );
}
