import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E1E1E'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 20
  },
  backButton: {
    marginRight: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700'
  },
  editButtonText: {
    fontSize: 16,
    color: '#FFD700'
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 10
  },
  profilePhotoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  editPhotoButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 5
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 5
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    color: '#FFF',
    fontSize: 16
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    padding: 15
  },
  changePasswordButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20
  },
  changePasswordButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1E1E'
  },
  changeEmailButton: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10
  },
  changeEmailButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700'
  },
  deleteAccountButton: {
    backgroundColor: '#FF6347',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10
  },
  deleteAccountButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF'
  }
});