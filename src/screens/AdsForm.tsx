import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Heading, HStack, Radio, ScrollView, Text, TextArea, VStack } from "native-base";

import { Header } from "@components/Header";
import { ImageButton } from "@components/ImageButton";
import { ImageProduct } from "@components/ImageProduct";
import { useState } from 'react';
import { Input } from '@components/Input';

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
            <HStack mt="2">
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

          <VStack mt="5">
            <Heading fontFamily="heading" fontSize="lg" >Sobre o produto</Heading>
            <Input mx="-0.5" placeholder="Título do anúncio"/>
            <TextArea
              autoCompleteType={false}
              type='text'
              fontFamily="body"
              fontSize="lg"
              maxLength={176}
              _focus={{
                bg: "gray.700",
                borderWidth: 1,
                borderColor: "gray.300",
                color: "gray.200"
              }}
              bg="gray.700"
              borderColor="0"
              mt="2"
              h="40"
              placeholder="Descrição do produto"
            />
            <Radio.Group name="myRadioGroup" accessibilityLabel="favorite number" flexDirection="row">
              <HStack mt="4" w="96" justifyContent="space-between" pr={8}>
              <Radio value="one" my={1} _checked={{borderColor: 'blue.light'}} _icon={{color: 'blue.light'}}>
                <Text fontFamily="mono" fontSize="lg">Produto novo</Text>
              </Radio>
              <Radio value="two" my={1} _checked={{borderColor: 'blue.light'}} _icon={{color: 'blue.light'}}>
              <Text fontFamily="mono" fontSize="lg">Produto usado</Text>
              </Radio>
              </HStack>
            </Radio.Group>
          </VStack>
        </VStack>
      </SafeAreaView>
    </ScrollView>
  );
}