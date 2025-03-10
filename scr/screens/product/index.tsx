import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView, StatusBar, FlatList, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

const { width } = Dimensions.get('window');

export function ProductScreen() {
  const product = {
    id: '1',
    name: 'Produto 1',
    images: [
      require('../../assets/imgs/product1.png'),
      require('../../assets/imgs/product1.png'),
      require('../../assets/imgs/product1.png')
    ],
    price: 29.99,
    description:
      'Este é um produto incrível com ótima qualidade e design moderno. Perfeito para o seu dia a dia!'
  };

  const [quantity, setQuantity] = React.useState(1);
  const [inputValue, setInputValue] = React.useState('1');

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const increaseQuantity = () => {
    if (quantity < 99) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      setInputValue(newQuantity.toString());
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setInputValue(newQuantity.toString());
    }
  };

  const handleQuantityChange = (value: string) => {
    setInputValue(value);

    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 1 && newValue <= 99) {
      setQuantity(newValue);
    }
  };

  const handleBlur = () => {
    const newValue = parseInt(inputValue, 10);
    if (isNaN(newValue) || newValue < 1) {
      setQuantity(1);
      setInputValue('1');
    } else if (newValue > 99) {
      setQuantity(99);
      setInputValue('99');
    } else {
      setQuantity(newValue);
      setInputValue(newValue.toString());
    }
  };

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentImageIndex(newIndex);
  };

  const renderImage = ({ item }: { item: any }) => (
    <Image source={item} style={styles.productImage} resizeMode="contain" />
  );

  const renderIndicators = () => (
    <View style={styles.indicatorsContainer}>
      {product.images.map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            index === currentImageIndex && styles.activeIndicator
          ]}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#FFD700" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <FlatList
          data={product.images}
          renderItem={renderImage}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          onScroll={handleScroll}
        />

        {renderIndicators()}

        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>

        <Text style={styles.productDescription}>{product.description}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
            <MaterialIcons name="remove" size={24} color="#FFD700" />
          </TouchableOpacity>
          <TextInput
            style={styles.quantityInput}
            value={inputValue}
            onChangeText={handleQuantityChange}
            onBlur={handleBlur}
            keyboardType="numeric"
            maxLength={2}
          />
          <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
            <MaterialIcons name="add" size={24} color="#FFD700" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}