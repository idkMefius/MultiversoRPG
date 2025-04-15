import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, SafeAreaView, StatusBar
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../assets/styles/password.styles';

const passwordValidationRules = [
  { test: (val: string) => val.length >= 8, label: 'Pelo menos 8 caracteres' },
  { test: (val: string) => /[A-Z]/.test(val), label: 'Pelo menos uma letra maiúscula' },
  { test: (val: string) => /[a-z]/.test(val), label: 'Pelo menos uma letra minúscula' },
  { test: (val: string) => /\d/.test(val), label: 'Pelo menos um número' },
  { test: (val: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val), label: 'Pelo menos um caractere especial' },
];

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required('Senha atual é obrigatória'),
  newPassword: Yup.string()
    .required('Nova senha é obrigatória')
    .min(8, 'Pelo menos 8 caracteres')
    .matches(/[A-Z]/, 'Pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'Pelo menos uma letra minúscula')
    .matches(/\d/, 'Pelo menos um número')
    .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Pelo menos um caractere especial'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), ''], 'As senhas não coincidem')
    .required('Confirmação de senha obrigatória'),
});

export default function ChangePasswordScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (values: any) => {
    console.log('Senha alterada com sucesso:', values);
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1E1E1E" barStyle="light-content" />

      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} color="#FFD700" />
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.title}>Alterar Senha</Text>

        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handlePasswordChange}
        >
          {({
            handleChange, handleBlur, handleSubmit, values, errors, touched
          }) => (
            <>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Senha Atual</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  value={values.currentPassword}
                  onChangeText={handleChange('currentPassword')}
                  onBlur={handleBlur('currentPassword')}
                  placeholder="Digite sua senha atual"
                  placeholderTextColor="#999"
                />
                {touched.currentPassword && errors.currentPassword && (
                  <Text style={styles.error}>{errors.currentPassword}</Text>
                )}
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nova Senha</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                  placeholder="Digite a nova senha"
                  placeholderTextColor="#999"
                />
                {touched.newPassword && errors.newPassword && (
                  <Text style={styles.error}>{errors.newPassword}</Text>
                )}
              </View>

              {values.newPassword.length > 0 && (
                <View style={styles.requirementsContainer}>
                  <Text style={styles.requirementsTitle}>A nova senha deve conter:</Text>
                  {passwordValidationRules.map((rule, index) => {
                    const isValid = rule.test(values.newPassword);
                    return (
                      <View key={index} style={styles.requirementItem}>
                        <MaterialIcons
                          name={isValid ? 'check' : 'close'}
                          size={16}
                          color={isValid ? 'green' : 'red'}
                        />
                        <Text style={styles.requirementText}>{rule.label}</Text>
                      </View>
                    );
                  })}
                </View>
              )}

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Confirmar Nova Senha</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  placeholder="Confirme a nova senha"
                  placeholderTextColor="#999"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                )}
              </View>

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.togglePassword}
              >
                <MaterialIcons
                  name={showPassword ? 'visibility-off' : 'visibility'}
                  size={20}
                  color="#FFD700"
                />
                <Text style={styles.togglePasswordText}>
                  {showPassword ? 'Ocultar senhas' : 'Mostrar senhas'}
                </Text>
              </TouchableOpacity>

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
