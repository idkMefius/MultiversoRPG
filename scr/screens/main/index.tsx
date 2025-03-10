import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

const products = [
  { id: '1', name: 'Produto 1', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '2', name: 'Produto 2', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '3', name: 'Produto 3', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '4', name: 'Produto 4', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '5', name: 'Produto 5', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '6', name: 'Produto 6', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '7', name: 'Produto 7', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '8', name: 'Produto 8', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '9', name: 'Produto 9', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '10', name: 'Produto 10', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '11', name: 'Produto 11', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '12', name: 'Produto 12', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '13', name: 'Produto 13', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '14', name: 'Produto 14', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '15', name: 'Produto 15', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '16', name: 'Produto 16', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '17', name: 'Produto 17', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '18', name: 'Produto 18', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '19', name: 'Produto 19', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '20', name: 'Produto 20', image: require('../../assets/imgs/product1.png'), stock: 0 },
  { id: '21', name: 'Produto 21', image: require('../../assets/imgs/product1.png'), stock: 0 }
];

const getNumberOfColumns = () => {
  const screenWidth = Dimensions.get('window').width;
  return screenWidth > 600 ? 3 : 2;
};

export function MainScreen() {
  const numColumns = getNumberOfColumns();

  const renderProduct = ({ item }: { item: any}) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productStock}>Sem estoque</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar produtos..."
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.searchButton}>
            <MaterialIcons name="search" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.productList}
        />

        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="shopping-cart" size={24} color="#FFF" />
            <Text style={styles.navText}>Carrinho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="assignment" size={24} color="#FFF" />
            <Text style={styles.navText}>Fichas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="home" size={32} color="#FFD700" />
            <Text style={styles.navTextActive}>Início</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="person" size={24} color="#FFF" />
            <Text style={styles.navText}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <MaterialIcons name="settings" size={24} color="#FFF" />
            <Text style={styles.navText}>Config</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}