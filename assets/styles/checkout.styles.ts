import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  methodButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    backgroundColor: '#333',
    borderRadius: 8,
    alignItems: 'center',
  },
  methodButtonSelected: {
    backgroundColor: '#FFD700',
  },
  methodButtonText: {
    color: '#ccc',
    fontSize: 14,
  },
  methodButtonTextSelected: {
    color: '#1E1E1E',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  cardOption: {
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 8,
    marginBottom: 10,
  },
  cardOptionSelected: {
    backgroundColor: '#FFD700',
  },
  cardText: {
    color: '#FFF',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  inputHalf: {
    flex: 1,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    color: '#ff6b6b',
    marginBottom: 10,
    fontSize: 13,
  },
  payButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    opacity: 1,
  },
  payButtonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
