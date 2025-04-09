import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView, StatusBar, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../../assets/styles/profile.styles';

export default function ProfileScreen() {
  const [user, setUser] = React.useState({
    name: 'Mateus Pacífico',
    email: 'mateus.pacifico@example.com',
    phone: '(82) 9 9689-8822',
    photo: require('../../../assets/imgs/profile.jpg')
  });

  const [isEditing, setIsEditing] = React.useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveChanges = () => {
    setIsEditing(false);
  };

  const handleChangeEmail = () => {
    console.log('Redirecionar para a tela de alteração de e-mail');
  };

  const handleChangePassword = () => {
    console.log('Redirecionar para a tela de alteração de senha');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Excluir Conta',
      'Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            console.log('Conta excluída');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#FFD700" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity onPress={isEditing ? saveChanges : toggleEdit}>
          <Text style={styles.editButtonText}>
            {isEditing ? 'Salvar' : 'Editar'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profilePhotoContainer}>
          <Image source={user.photo} style={styles.profilePhoto} />
          {isEditing && (
            <TouchableOpacity style={styles.editPhotoButton}>
              <MaterialIcons name="edit" size={24} color="#FFD700" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={user.name}
              onChangeText={(text) => setUser({ ...user, name: text })}
            />
          ) : (
            <Text style={styles.text}>{user.name}</Text>
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.text}>{user.email}</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefone</Text>
          {isEditing ? (
            <TextInput
              style={styles.input}
              value={user.phone}
              onChangeText={(text) => setUser({ ...user, phone: text })}
              keyboardType="phone-pad"
            />
          ) : (
            <Text style={styles.text}>{user.phone}</Text>
          )}
        </View>

        <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
          <Text style={styles.changePasswordButtonText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.changeEmailButton} onPress={handleChangeEmail}>
          <Text style={styles.changeEmailButtonText}>Alterar E-mail</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteAccountButton} onPress={handleDeleteAccount}>
          <Text style={styles.deleteAccountButtonText}>Excluir Conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}