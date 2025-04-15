import * as React from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView, TextInput,
  SafeAreaView, StatusBar, Alert
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';
import { styles } from '../../../assets/styles/profile.styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  phone: Yup.string()
    .required('Telefone é obrigatório')
    .matches(/^\(\d{2}\) \d{1} \d{4}-\d{4}$/, 'Telefone inválido'),
});

export default function ProfileScreen() {
  const router = useRouter();

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

  const saveChanges = (values: { name: string; phone: string }) => {
    setUser({ ...user, ...values });
    setIsEditing(false);
  };

  const handleChangeEmail = () => {
    router.push('/email');
  };

  const handleChangePassword = () => {
    router.push('/password');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Excluir Conta',
      'Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            console.log('Conta excluída');
            router.replace('/login');
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
        <Text style={styles.headerTitle}>Perfil</Text>
        <TouchableOpacity onPress={toggleEdit}>
          <Text style={styles.editButtonText}>
            {isEditing ? 'Cancelar' : 'Editar'}
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

        <Formik
          initialValues={{ name: user.name, phone: user.phone }}
          validationSchema={validationSchema}
          onSubmit={saveChanges}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Nome</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.input}
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                ) : (
                  <Text style={styles.text}>{user.name}</Text>
                )}
                {touched.name && errors.name && (
                  <Text style={styles.error}>{errors.name}</Text>
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
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    keyboardType="phone-pad"
                  />
                ) : (
                  <Text style={styles.text}>{user.phone}</Text>
                )}
                {touched.phone && errors.phone && (
                  <Text style={styles.error}>{errors.phone}</Text>
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

              {isEditing && (
                <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
                  <Text style={styles.saveButtonText}>Salvar Alterações</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}