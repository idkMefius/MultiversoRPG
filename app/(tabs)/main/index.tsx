import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../../assets/styles/main.styles';
import { useRouter } from 'expo-router';
import { products } from '../../../assets/products';

const getNumberOfColumns = () => {
  const screenWidth = Dimensions.get('window').width;
  return screenWidth > 600 ? 3 : 2;
};

export default function MainScreen() {
  const router = useRouter();
  const numColumns = getNumberOfColumns();

  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  const handleProductPress = (productId: string) => {
    router.push({ pathname: '/product', params: { id: productId } });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const renderProduct = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleProductPress(item.id)}
    >
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
      <Text style={styles.productStock}>
        {item.stock > 0 ? `Estoque: ${item.stock}` : 'Sem estoque'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar produtos..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch(searchQuery)}>
            <MaterialIcons name="search" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredProducts}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.productList}
          ListEmptyComponent={
            <Text style={{ color: '#ccc', textAlign: 'center', marginTop: 20 }}>
              Nenhum produto encontrado
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
