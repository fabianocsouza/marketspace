import { Center, Text } from 'native-base';

import MarkSVG from '@assets/mark.svg';
import LogoSVG from '@assets/marketspace.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { IconButton } from '@components/IconButton';
import { useState } from 'react';

export function SignIn() {
  const [ secret, setSecret ] = useState(true);
  return (
    <Center flex={1} bg="gray.700">
      <Center mt="-32" bg="gray.600" w="100%" h="650" rounded="30">
        <Center mt="16">
          <MarkSVG style={{ width:96, height:64}}/>
          <LogoSVG style={{marginTop: 20, width: 300, height: 33}} />
          <Text fontFamily="sm"  fontSize="md">Seu espaço de compra e venda</Text>
        </Center>

        <Center mt="20">
          <Text fontFamily="mono"  fontSize="md">Acesse sua conta</Text>
          <Input placeholder="E-mail"/>
          <Input placeholder="Senha" type={secret ? "text":"password"}
             InputRightElement={
              <IconButton  right={2} color="gray.300" icon={secret  ? "Eye": "EyeSlash" }
                bg="gray.700" _pressed={{bg: "gray.700"}}
                onPress={()=> setSecret(!secret)}
              />
            }
          />
          <Button mt="6" title="Entrar" variant="blue"/>
        </Center>
      </Center>

      <Center mt="16">
        <Text fontFamily="mono"  fontSize="md">Anda não tem acesso?</Text>
        <Button title="Criar uma conta"/> 
      </Center>
    </Center>
  );
}