import { Button, IButtonProps, Icon } from "native-base";
import { PencilSimpleLine, Eye, EyeSlash, Faders } from "phosphor-react-native";

const  Icons = {
  PencilSimpleLine: PencilSimpleLine,
  Eye: Eye,
  EyeSlash: EyeSlash,
  Faders: Faders
}

type Props = IButtonProps & {
  icon: keyof typeof Icons;
  color?: string;
}

export function IconButton({icon, color="gray.100",...rest}: Props) {
  return (
    <Button w="10" h="10" rounded="full" bg="blue.light" {...rest}>
      <Icon as={Icons[icon]}  name="PencilSimpleLine" color={color} />
    </Button>
  );
}