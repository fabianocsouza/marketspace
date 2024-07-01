import { Center, Text } from 'native-base';

import MarkSVG from '@assets/mark.svg';
import LogoSVG from '@assets/marketspace.svg';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
  return (
    <Center flex={1} bg="gray.700">
      <Center mt="-32" bg="gray.600" w="100%" h="650" rounded="30">
        <Center mt="16">
          <MarkSVG/>
          <LogoSVG style={{marginTop: 20, width: 300, height: 33}} />
          <Text fontFamily="sm"  fontSize="md">Seu espaço de compra e venda</Text>
        </Center>

        <Center mt="20">
          <Text fontFamily="mono"  fontSize="md">Acesse sua conta</Text>
          <Input placeholder="E-mail"/>
          <Input placeholder="Senha"/>
          <Button mt="6" title="Entrar" variant="blue"/>
        </Center>
      </Center>

      <Center mt="16">
        <Text fontFamily="mono"  fontSize="md">Anda não tem acesso?</Text>
        <Button title="Criar uma conta" variant="black"/> 
      </Center>
    </Center>
  );
}