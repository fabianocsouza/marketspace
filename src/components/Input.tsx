import { IInputProps, Input as InputNativeBase } from "native-base";

type Props = IInputProps & {}

export function Input({ ...rest }: Props ) {
  return (
    <InputNativeBase
      w="80" h="12" m="2.5" px="4" rounded="lg" bg="gray.700" borderWidth="0"
      fontFamily="body" fontSize="lg"
      _focus={{
        borderWidth: "1",
        bg: "gray.700",
        borderColor: "gray.300"
      }}
      {...rest}
    />
  );
}