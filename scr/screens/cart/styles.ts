import { StyleSheet } from 'react-native';

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
  cartList: {
    flexGrow: 1
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10
  },
  cartItemDetails: {
    flex: 1
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700'
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#FFF'
  },
  cartItemQuantity: {
    fontSize: 14,
    color: '#FFF'
  },
  quantityControls: {
    alignItems: 'center'
  },
  paymentMethodContainer: {
    marginTop: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10
  },
  paymentOption: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },
  selectedPaymentOption: {
    borderWidth: 2,
    borderColor: '#FFD700'
  },
  paymentOptionText: {
    fontSize: 16,
    color: '#FFF'
  },
  creditCardForm: {
    marginTop: 10
  },
  cardOption: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },
  selectedCardOption: {
    borderWidth: 2,
    borderColor: '#FFD700'
  },
  cardOptionText: {
    fontSize: 16,
    color: '#FFF'
  },
  newCardForm: {
    marginTop: 10
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    color: '#FFF'
  },
  saveCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  saveCardText: {
    fontSize: 14,
    color: '#FFF'
  },
  saveCardCheckbox: {
    padding: 5
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#444',
    paddingTop: 20,
    marginTop: 20
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20
  },
  checkoutButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center'
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E'
  }
});