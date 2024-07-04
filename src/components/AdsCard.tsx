import { Box, HStack, Heading, Pressable, Text, VStack } from "native-base";
import { ArrowLeft, ArrowRight, Tag } from "phosphor-react-native";

export function AdsCard() {
  return (
    <Pressable 
      rounded="md" bg="blue.50" h="20" w="100%" p="4" flexDirection="row"  
      alignItems="center"justifyContent="space-between"
    >
      <HStack alignItems="center">
      <Tag color="#364D9D" size={29} />
        <VStack ml="5">
          <Heading fontFamily="heading">4</Heading>
          <Text>anúncios ativos</Text>
        </VStack>
      </HStack>
      <HStack alignItems="center">
        <Text fontFamily="heading" fontSize="md" color="blue.dark"  mr="2">Meus anúncios</Text>
        <ArrowRight color="#364D9D" size={20}/>
      </HStack>
    </Pressable>
  );
}