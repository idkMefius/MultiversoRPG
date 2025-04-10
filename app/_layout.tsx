import { Stack } from 'expo-router';
import { CartProvider } from '../assets/contexts/cartContext';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </CartProvider>
    </SafeAreaProvider>
  );
}
