import { HStack, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header } from "@components/Header";

export function AdsForm() {

  return (
    <ScrollView>
      <SafeAreaView>
        <HStack justifyContent="center">
          <Header title="Criar anúncio" iconLeftAtive={false}/>
        </HStack>
      </SafeAreaView>
    </ScrollView>
  );
}