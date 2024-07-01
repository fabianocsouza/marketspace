import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: 'gray' |'black' | 'blue'
}
export function Button({title, variant = 'gray',  ...rest }:Props) {
  return (
    <ButtonNativeBase
      w="80" h="12" mt="4" rounded="lg"
      bg={ variant === 'gray' 
          ? "gray.500" 
          : variant ==='black' ? "gray.100" : "blue.light"
        }
      _pressed={{
        bg:  variant == 'gray' 
              ? "gray.400" 
              : variant ==='black' ? "gray.200" : "blue.dark",
      }}
      {...rest}
    >
      <Text 
        fontFamily="heading" 
        color={variant === 'gray'? "gray.300": "gray.700"} 
        fontSize="md" 
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}