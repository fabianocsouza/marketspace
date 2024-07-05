import { Box, useTheme } from "native-base";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { colors } =  useTheme();
  const theme = DefaultTheme;

  theme.colors.background = colors.gray[600];
  
  return (
    <Box flex={1} bg="gray.600">
      <NavigationContainer>
        <AppRoutes/>
      </NavigationContainer>
    </Box>
  )
}