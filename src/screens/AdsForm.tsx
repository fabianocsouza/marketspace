import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Heading, HStack, ScrollView, Text, VStack } from "native-base";

import { Header } from "@components/Header";
import { ImageButton } from "@components/ImageButton";
import { ImageProduct } from "@components/ImageProduct";
import { useState } from 'react';

export function AdsForm() {
  const [ images, setImages ] = useState<string[]>([]);
  
  async function handleImagePicker(){
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,4],
      quality: 1
    });

    if(!image.canceled){
      setImages(prevStatus => [...prevStatus, image.assets[0].uri])
    }
  }

  function handleRemoveImage(image: string){
    const updateImages = images.filter(item => item !== image);
    setImages(updateImages);
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <VStack px={7} justifyContent="center">
          <Header title="Criar anúncio" iconLeftAtive={false}/>
          <VStack mt="8">
            <Heading fontFamily="heading"  fontSize="lg" color="gray.200">Imagens</Heading>
            <Text fontSize="17" fontFamily="mono" color="gray.300" mt="1">
              Escolha até 3 imagens para mostrar o quando o seu produto é incrível!
            </Text>
            <HStack>
              <FlatList
                flexGrow={0}
                data={images}
                keyExtractor={item => item}
                horizontal
                renderItem={({item}) => (
                  <ImageProduct image={item} onRemove={()=> handleRemoveImage(item)}/>
                )}
                showsHorizontalScrollIndicator={false}
              />
              {images.length <= 2 && <ImageButton onPress={handleImagePicker}/>}
            </HStack>
          </VStack>
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
}