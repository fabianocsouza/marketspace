import { Platform } from 'react-native';
import { House, Tag } from 'phosphor-react-native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { MyAds } from '@screens/MyAds';
import { useTheme } from 'native-base';

type AppRoutes = {
  home: undefined;
  myAds: undefined;
  exit: undefined;
}

export type AuthNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export function AppRoutes() {
  const { Navigator, Screen} =  createBottomTabNavigator<AppRoutes>();

  const { sizes, colors } = useTheme();
  const iconSize = sizes[8];

  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.gray[200],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle: {
          backgroundColor: colors.gray[700],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          padding: sizes[6]
        }
      }}
    >
      <Screen name="home" component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <House color={color} size={iconSize} />
          )
        }}
      />
      <Screen name="myAds" component={MyAds}
        options={{
          tabBarIcon: ({ color }) => (
            <Tag color={color} size={iconSize}/>
          )
        }}
      />
    </Navigator>
  )
}