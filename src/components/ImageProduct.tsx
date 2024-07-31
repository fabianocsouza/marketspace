import { Box, Image, Pressable } from "native-base";
import { X } from "phosphor-react-native";

import AdsImage from "@assets/ads2.png";

type Props = {
  image: string;
  onRemove: () => void;
}

export function ImageProduct({ image, onRemove }: Props) {
  return (
    <Box size={29} bg="gray.500" rounded="6"
    mr="3"
    mt="3">
      <Image 
        source={{uri: image}}
        size={29}
        rounded="6"
        
        alt="Image product"
      />
        <Pressable bg="gray.200" rounded="full" size="5" ml="90" 
          mt="1.5" 
          position="absolute" alignItems="center" justifyContent="center"
          onPress={onRemove}
        >
          <X size={13} color="#F7F7F8" weight="bold"/>
        </Pressable>
    </Box>
  );
}