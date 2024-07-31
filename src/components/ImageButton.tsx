import { Pressable, IPressableProps } from 'native-base';
import { Plus } from 'phosphor-react-native';
type Props = IPressableProps;
export function ImageButton({...rest}:Props) {
  return (
    <Pressable
      bg="gray.500"
      size={29}
      alignItems="center"
      justifyContent="center"
      rounded="6"
      mr="1"
      mt="3"
      {...rest}
    >
      <Plus size={30} color='#9F9BA1'/>
    </Pressable>
  );
}