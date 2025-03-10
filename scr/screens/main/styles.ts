import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: '#FFF'
  },
  searchButton: {
    padding: 10
  },
  productList: {
    flexGrow: 1
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#333',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center'
  },
  productStock: {
    fontSize: 14,
    color: '#FF6347',
    textAlign: 'center'
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    paddingVertical: 10
  },
  navButton: {
    alignItems: 'center'
  },
  navText: {
    color: '#FFF',
    fontSize: 12,
    marginTop: 5
  },
  navTextActive: {
    color: '#FFD700',
    fontSize: 12,
    marginTop: 5
  }
});