import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlass, Plus } from 'phosphor-react-native';
import { Box, FlatList, HStack, Heading, Text, VStack } from 'native-base';

import imageUserPNG from '@assets/user.png';

import { ImageUser } from '@components/ImageUser';
import { Button } from '@components/Button';

import { Ads } from '@components/Ads';
import { Input } from '@components/Input';
import { AdsCard } from '@components/AdsCard';
import { IconButton } from '@components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { TabScreensNavigatorProps } from '@routes/TabScreens';

export function Home() {
  const navigation = useNavigation<TabScreensNavigatorProps>();

  function handleCreateAds(){
    navigation.navigate("adsForm");
  }

  return (
    <FlatList
      bg="gray.600"
      data={['']}
      keyExtractor={item => item}
      renderItem={_ =>
        (
          <VStack flex={1}  px="8">
          <SafeAreaView>
            <HStack alignItems="center" justifyContent="space-between" mt={3}>
                <HStack alignItems="center">
                  <ImageUser source={imageUserPNG} w="14" h="14"/>
                  <VStack ml="4">
                    <Text fontFamily="body" fontSize="lg" >Boas vindas,</Text>
                    <Heading fontFamily="heading" fontSize="lg">Maria!</Heading>
                  </VStack>
                </HStack>
                <Button title="Criar anúncio" variant="black" w="33" mt={2}
                  leftIcon={<Plus color="#EDECEE" size={21}/>}
                  onPress={handleCreateAds}
                />
            </HStack>

            <Box mt="10">
              <Text fontFamily="mono" fontSize="17" mb="3">
                Seus produtos anunciados para venda
              </Text>
              <AdsCard/>
            </Box>

            <Box mt="8" mb="4">
              <Text fontFamily="mono" fontSize="17" >Compre Produtos variados</Text>
              <Input left={-10} placeholder="Buscar anúncio"
                pr="12"
                InputRightElement={
                  <HStack right={2} alignItems="center" justifyContent="space-between" w="20">
                    <MagnifyingGlass size={28}/>
                    <Box left="1" bg="gray.400" w="0.4" h="6"></Box>
                    <IconButton bg="gray.700" icon="Faders" _pressed={{bg:"gray.700"}}/>
                  </HStack>
                }
              />
            </Box>
            <FlatList
              data={['1','2','3', '4', '5', '6', '7']}
              keyExtractor={item => item}
              renderItem={(_) => <Ads/>}
              numColumns={2}
            />
          </SafeAreaView>
            </VStack>
        )
      }
    />
  );
}