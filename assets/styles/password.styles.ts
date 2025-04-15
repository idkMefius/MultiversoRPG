import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 24,
    alignSelf: 'center',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: '#FFF',
    marginBottom: 4,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  error: {
    color: '#FF6B6B',
    marginTop: 4,
    fontSize: 13,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#1E1E1E',
    fontWeight: 'bold',
    fontSize: 16,
  },
  togglePassword: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  togglePasswordText: {
    color: '#FFD700',
    marginLeft: 6,
    fontSize: 14,
  },
  requirementsContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  requirementsTitle: {
    color: '#FFF',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  requirementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  requirementText: {
    color: '#FFF',
    marginLeft: 6,
    fontSize: 13,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    padding: 8,
  },
});
