import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { styles } from '../../../assets/styles/cart.styles';
import { useCart } from '../../../assets/contexts/cartContext';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function CartScreen() {
  const { cart, removeFromCart, clearCart, calculateTotal, updateQuantity } = useCart();

  const handleIncrease = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleDecrease = (productId: string, currentQuantity: number) => {
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image
        source={{ uri: item.product.images[0]?.toString() || '' }}
        style={styles.cartItemImage}
      />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.product.name}</Text>
        <Text style={styles.cartItemPrice}>R$ {item.product.price.toFixed(2)}</Text>
        <View style={styles.quantityRow}>
          <TouchableOpacity onPress={() => handleDecrease(item.product.id, item.quantity)}>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.cartItemQuantity}> {item.quantity} </Text>
          <TouchableOpacity onPress={() => handleIncrease(item.product.id, item.quantity)}>
            <MaterialIcons name="keyboard-arrow-up" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.product.id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Itens no Carrinho</Text>

        {!cart || cart.length === 0 ? (
          <Text style={{ color: '#FFF', textAlign: 'center', marginTop: 20 }}>
            Seu carrinho está vazio.
          </Text>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.product.id.toString()}
              renderItem={renderItem}
              scrollEnabled={false}
              contentContainerStyle={styles.cartList}
            />

            <TouchableOpacity
              style={[styles.checkoutButton, { backgroundColor: 'red', marginBottom: 20 }]}
              onPress={clearCart}
            >
              <Text style={styles.checkoutButtonText}>Limpar Carrinho</Text>
            </TouchableOpacity>

            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total: R$ {calculateTotal().toFixed(2)}</Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => router.push('/checkout')}
            >
              <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}