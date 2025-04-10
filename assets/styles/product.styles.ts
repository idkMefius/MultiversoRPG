import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E1E'
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  backButton: {
    marginRight: 10
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 10
  },
  carousel: {
    width: '100%',
    height: 300,
    marginBottom: 20
  },
  productImage: {
    width: Dimensions.get('window').width - 40,
    height: '100%'
  },
  indicatorsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#666',
    marginHorizontal: 5
  },
  activeIndicator: {
    backgroundColor: '#FFD700'
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20
  },
  productDescription: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 20
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  quantityButton: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10
  },
  quantityInput: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    width: 50,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16
  },
  addToCartButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center'
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E'
  },
  stockText: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 4,
    marginBottom: 8,
  },
  successToast: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#4BB543',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  successToastText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
