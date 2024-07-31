import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Heading, Icon, Pressable } from "native-base";
import { ArrowLeft, PencilSimpleLine, Plus } from "phosphor-react-native";

import { TabScreensNavigatorProps } from "@routes/TabScreens";

const  Icons = {
  PencilSimpleLine: PencilSimpleLine,
  ArrowLeft: ArrowLeft,
  Plus: Plus
}

type Props = {
  title?: string;
  iconLeft?: keyof typeof Icons;
  iconRight?: keyof typeof Icons;
  iconRightAtive?: boolean;
  iconLeftAtive?: boolean;
}

export function Header({ title='', iconLeft="PencilSimpleLine", iconRight="ArrowLeft", iconLeftAtive=true, iconRightAtive=true }: Props) {  
  const navigator = useNavigation<TabScreensNavigatorProps>();

  function handleGoBack(){
    navigator.navigate("myAds");
  }

  function handleAdsForm(){
    navigator.navigate("adsForm");
  }
  
  return (
    <HStack mt={6} px={4} justifyContent="space-between" w="96">
      {
        iconRightAtive
        ? <Pressable
            onPress={handleGoBack}
          >
           <Icon as={Icons[iconRight]}  name={iconRight} color="gray.200" />
          </Pressable>
        : <Box/>
      }
      <Heading fontFamily="heading" fontSize="xl">{title}</Heading>
        {
          iconLeftAtive
          ? <Pressable
            onPress={handleAdsForm}
            >
            <Icon as={Icons[iconLeft]}  name={iconLeft} color="gray.200" />
            </Pressable>
          : <Box/>
        }
    </HStack>
  );
}