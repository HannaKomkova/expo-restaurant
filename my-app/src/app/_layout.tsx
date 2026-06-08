import { Stack } from 'expo-router';
import 'react-native-reanimated';
import {useFonts} from 'expo-font'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'roboto-regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    'roboto-light': require('../../assets/fonts/Roboto-Light.ttf'),
    'roboto-bold': require('../../assets/fonts/Roboto-Bold.ttf')
  })

  return (
    <>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="signUp" options={{ headerShown: false }} />
        <Stack.Screen name="order" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
