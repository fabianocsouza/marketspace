import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabScreens } from "./TabScreens";

import { Home } from "@screens/Home";
import { AdsForm } from "@screens/AdsForm";

type AppRoutes = { 
  home: undefined;
  adsForm: {type: string};
  tabs: undefined;
}
export type HomeScreensNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

export function AppRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();
  return (
    <Navigator screenOptions={{ headerShown: false, animation: "fade" }}>
      <Screen name="tabs" component={TabScreens}/>
      <Screen name="home" component={Home}/>
      <Screen name="adsForm" component={AdsForm}/>
    </Navigator>
  );
}