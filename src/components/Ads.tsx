import { Box, HStack, Heading, Pressable, Text, Image as ImageAds, VStack } from 'native-base';

import imageUserPNG from '@assets/user-1.png'
import imageAdsPNG from '@assets/ads.png'
import { Image } from './Image';
import { StatusProduct } from './StatusProduct';

export function Ads() {
  const is_new = false;
  return (
    <Pressable bg="gray.600" mr="5" mb="10">
      <VStack>
        <ImageAds w="45" h="30" rounded="sm" source={imageAdsPNG} alt="Imagem anúncio" />

        <HStack  position="absolute" p="1.5">
          <Image w="8" h="8" borderColor="gray.700" borderWidth="2" source={imageUserPNG} alt="Imagem user"/>
          <StatusProduct left={is_new ? "20":"16"} is_new={is_new} />
        </HStack>

        <Text mt="2" fontFamily="mono" fontSize="md">Tênis vermelho</Text>

        <HStack>
          <Text mt="1" fontFamily="heading" mr="1">R$</Text>
          <Heading fontFamily="heading" fontSize="20">59,90</Heading>
        </HStack>
      </VStack>
    </Pressable>
  );
}