import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../../assets/styles/cart.styles';

const initialCartItems = [
  { id: '1', name: 'Produto 1', image: require('../../../assets/imgs/product1.png'), price: 29.99, quantity: 2 },
  { id: '2', name: 'Produto 2', image: require('../../../assets/imgs/product1.png'), price: 49.99, quantity: 1 },
  { id: '3', name: 'Produto 3', image: require('../../../assets/imgs/product1.png'), price: 19.99, quantity: 3 },
];

const savedCards = [
  { id: '1', lastDigits: '1234', name: 'Meu Cartão Principal' },
  { id: '2', lastDigits: '5678', name: 'Cartão Secundário' },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = React.useState(initialCartItems);
  const [paymentMethod, setPaymentMethod] = React.useState('pix');
  const [selectedCard, setSelectedCard] = React.useState('- Novo Cartão -');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardHolder, setCardHolder] = React.useState('');
  const [cardCvv, setCardCvv] = React.useState('');
  const [cardNickname, setCardNickname] = React.useState('');
  const [saveCard, setSaveCard] = React.useState(false);

  const increaseQuantity = ({id}: { id: any }) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = ({id}: { id: any }) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const renderCartItem = ({item}: { item: any }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>R$ {item.price.toFixed(2)}</Text>
        <Text style={styles.cartItemQuantity}>Quantidade: {item.quantity}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="#FFD700" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="#FF6347" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.backButton}>
            <TouchableOpacity>
                <MaterialIcons name="arrow-back" size={24} color="#FFD700" />
            </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.cartList}
        />

        <View style={styles.paymentMethodContainer}>
          <Text style={styles.sectionTitle}>Método de Pagamento</Text>
          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'pix' && styles.selectedPaymentOption]}
            onPress={() => setPaymentMethod('pix')}
          >
            <Text style={styles.paymentOptionText}>Pix</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'boleto' && styles.selectedPaymentOption]}
            onPress={() => setPaymentMethod('boleto')}
          >
            <Text style={styles.paymentOptionText}>Boleto Bancário</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'creditCard' && styles.selectedPaymentOption]}
            onPress={() => setPaymentMethod('creditCard')}
          >
            <Text style={styles.paymentOptionText}>Cartão de Crédito</Text>
          </TouchableOpacity>

          {paymentMethod === 'creditCard' && (
            <View style={styles.creditCardForm}>
              <Text style={styles.sectionTitle}>Selecione ou adicione um cartão</Text>
              <TouchableOpacity
                style={[styles.cardOption, selectedCard === '- Novo Cartão -' && styles.selectedCardOption]}
                onPress={() => setSelectedCard('- Novo Cartão -')}
              >
                <Text style={styles.cardOptionText}>- Novo Cartão -</Text>
              </TouchableOpacity>
              {savedCards.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  style={[styles.cardOption, selectedCard === card.id && styles.selectedCardOption]}
                  onPress={() => setSelectedCard(card.id)}
                >
                  <Text style={styles.cardOptionText}>{card.name} (**** **** **** {card.lastDigits})</Text>
                </TouchableOpacity>
              ))}

              {selectedCard === '- Novo Cartão -' && (
                <View style={styles.newCardForm}>
                  <TextInput
                    style={styles.input}
                    placeholder="Número do Cartão"
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nome do Titular"
                    value={cardHolder}
                    onChangeText={setCardHolder}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Código de Segurança (CVV)"
                    value={cardCvv}
                    onChangeText={setCardCvv}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Apelido do Cartão (opcional)"
                    value={cardNickname}
                    onChangeText={setCardNickname}
                  />
                  <View style={styles.saveCardContainer}>
                    <Text style={styles.saveCardText}>Salvar cartão para compras futuras</Text>
                    <TouchableOpacity
                      style={styles.saveCardCheckbox}
                      onPress={() => setSaveCard(!saveCard)}
                    >
                      <MaterialIcons
                        name={saveCard ? 'check-box' : 'check-box-outline-blank'}
                        size={24}
                        color={saveCard ? '#FFD700' : '#666'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          )}
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: R$ {calculateTotal()}</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}