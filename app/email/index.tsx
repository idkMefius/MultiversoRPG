import React from 'react';
import {
  View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../assets/styles/email.styles';

const validationSchema = Yup.object().shape({
  currentEmail: Yup.string()
    .email('Email inválido')
    .required('Email atual é obrigatório'),
  newEmail: Yup.string()
    .email('Email inválido')
    .required('Novo email é obrigatório'),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('newEmail'), ''], 'Os emails não coincidem')
    .required('Confirmação de email obrigatória'),
});

export default function ChangeEmailScreen() {
  const router = useRouter();

  const handleEmailChange = (values: any) => {
    console.log('Email alterado com sucesso:', values);
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} color="#FFD700" />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Alterar E-mail</Text>

        <Formik
          initialValues={{
            currentEmail: '',
            newEmail: '',
            confirmEmail: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleEmailChange}
        >
          {({
            handleChange, handleBlur, handleSubmit, values, errors, touched
          }) => (
            <>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>E-mail Atual</Text>
                <TextInput
                  style={styles.input}
                  value={values.currentEmail}
                  onChangeText={handleChange('currentEmail')}
                  onBlur={handleBlur('currentEmail')}
                  placeholder="Digite seu e-mail atual"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {touched.currentEmail && errors.currentEmail && (
                  <Text style={styles.error}>{errors.currentEmail}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Novo E-mail</Text>
                <TextInput
                  style={styles.input}
                  value={values.newEmail}
                  onChangeText={handleChange('newEmail')}
                  onBlur={handleBlur('newEmail')}
                  placeholder="Digite o novo e-mail"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {touched.newEmail && errors.newEmail && (
                  <Text style={styles.error}>{errors.newEmail}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirmar Novo E-mail</Text>
                <TextInput
                  style={styles.input}
                  value={values.confirmEmail}
                  onChangeText={handleChange('confirmEmail')}
                  onBlur={handleBlur('confirmEmail')}
                  placeholder="Confirme o novo e-mail"
                  placeholderTextColor="#999"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {touched.confirmEmail && errors.confirmEmail && (
                  <Text style={styles.error}>{errors.confirmEmail}</Text>
                )}
              </View>

              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Salvar Alterações</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}
