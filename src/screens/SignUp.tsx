import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Center, Heading, ScrollView, Text } from "native-base";

import MarkSVG from '@assets/mark.svg';

import { Image } from "@components/Image";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { IconButton } from "@components/IconButton";
import { useNavigation } from "@react-navigation/native";

export function SignUp() {
  const [ secret, setSecret ] = useState(true);
  const navigation = useNavigation();
  function handleGoBack(){
    navigation.goBack()
  }
  return (
    <ScrollView flex={1} bg="gray.600" px="10">
      <SafeAreaView>
        <Center mt="-2" p="5">
          <MarkSVG style={{ width:76, height:44}}/>
          <Heading fontFamily="heading" mt="2" >Boas vindas!</Heading>
          <Text mt="2" fontFamily="mono" fontSize="md" textAlign="center">
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>
        </Center>

        <Center mt="2">
          <Box mb="2">       
            <Image/>
            <IconButton mt="-12" left="16" color="gray.600" icon="PencilSimpleLine"
              _pressed={{bg: "blue.dark"}}
            />      
          </Box>
          <Input placeholder="Nome"/>
          <Input placeholder="E-mail"/>
          <Input placeholder="Telefone"/>
          <Input placeholder="Senha" type={secret ? "text":"password"}
            InputRightElement={
            <IconButton  right={2} color="gray.300" icon={secret  ? "Eye": "EyeSlash" }
              bg="gray.700" _pressed={{bg: "gray.700"}}
              onPress={()=> setSecret(!secret)}
            />
            }
          />

          <Input placeholder="Confirmar senha" type={secret ? "text":"password"}
             InputRightElement={
              <IconButton  right={2} color="gray.300" icon={secret  ? "Eye": "EyeSlash" }
                bg="gray.700" _pressed={{bg: "gray.700"}}
                onPress={()=> setSecret(!secret)}
              />
            }
          />
          <Button title="Criar" variant="black"/>
        </Center>

        <Center mt="10">
          <Text>Já tem uma conta?</Text>
          <Button title="Ir para o login"
          onPress={handleGoBack}
          />
        </Center>
      </SafeAreaView>
    </ScrollView>
  );
}