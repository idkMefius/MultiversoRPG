import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#333',
        borderTopWidth: 0,
        height: 53,
      },
      tabBarActiveTintColor: '#FFD700',
      tabBarInactiveTintColor: '#FFF',
    }}>
      <Tabs.Screen 
        name="cart/index" 
        options={{ 
          title: 'Carrinho',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="main/index" 
        options={{ 
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile/index"
        options={{ 
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}