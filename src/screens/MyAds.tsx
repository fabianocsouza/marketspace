import { Header } from "@components/Header";
import { HStack, ScrollView } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export function MyAds() {
  return (
    <ScrollView>
      <SafeAreaView>
        <HStack justifyContent="center">
          <Header  title="Meus anúncios" iconLeft="Plus" iconRightAtive={false}/>
        </HStack>
      </SafeAreaView>
    </ScrollView>
  );
}