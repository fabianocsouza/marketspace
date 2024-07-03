import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Karla_200ExtraLight, Karla_300Light, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { THEME } from './src/theme';

import { SignUp } from '@screens/SignUp';
import { Loading } from './src/components/Loading';
import { SignIn } from '@screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_200ExtraLight, Karla_300Light, Karla_400Regular, Karla_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      {fontsLoaded ? <SignUp/> : <Loading/>}
    </NativeBaseProvider>
  );
}
