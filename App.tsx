import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Karla_200ExtraLight, Karla_300Light,
         Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';

import { THEME } from './src/theme';

import { Loading } from '@components/Loading';

import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_200ExtraLight, Karla_300Light, Karla_400Regular, Karla_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      {fontsLoaded ? <Routes/> : <Loading/>}
    </NativeBaseProvider>
  );
}
