import { IImageProps, Image as ImageNativeBase } from "native-base";

import ImageDefaultPNG from '@assets/avatar.png';

type Props  = IImageProps;

export function Image({...rest}: Props) {
  return (
    <ImageNativeBase
      w="24" h="24" borderWidth="3" borderColor="blue.light" rounded="full"
      source={ImageDefaultPNG} alt="Image user" mb="2"
      {...rest}
    />
  );
}