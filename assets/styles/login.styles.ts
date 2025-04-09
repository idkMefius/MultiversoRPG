import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    color: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#333',
    color: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
  requirementsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  requirementsTitle: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 10,
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  requirementText: {
    color: '#FFF',
    fontSize: 14,
    marginLeft: 5,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFD700',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E1E1E',
  },
  footerText: {
    color: '#FFF',
    marginTop: 10,
  },
  link: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});