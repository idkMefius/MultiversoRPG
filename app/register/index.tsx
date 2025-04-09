import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../assets/styles/register.styles';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';

const logo = require('../../assets/imgs/logo.png');

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Por favor, insira seu nome.'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Por favor, insira seu e-mail.'),
  password: Yup.string()
    .required('Por favor, insira sua senha.')
    .min(8, 'Pelo menos 8 caracteres')
    .matches(/[A-Z]/, 'Pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'Pelo menos uma letra minúscula')
    .matches(/\d/, 'Pelo menos um número')
    .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, 'Pelo menos um caractere especial'),
});

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.icon} />
      <Text style={styles.title}>Criar Conta</Text>
      <Text style={styles.subtitle}>Junte-se ao MultiversoRPG</Text>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Registrado com sucesso:', values);
          router.replace('/login');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              autoCapitalize="words"
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Senha"
                secureTextEntry={!showPassword}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcons
                  name={showPassword ? 'visibility-off' : 'visibility'}
                  size={24}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

            {values.password.length > 0 && (
              <View style={styles.requirementsContainer}>
                <Text style={styles.requirementsTitle}>A senha deve conter:</Text>
                <View style={styles.requirementItem}>
                  <MaterialIcons name={values.password.length >= 8 ? 'check' : 'close'} size={16} color={values.password.length >= 8 ? 'green' : 'red'} />
                  <Text style={styles.requirementText}>Pelo menos 8 caracteres</Text>
                </View>
                <View style={styles.requirementItem}>
                  <MaterialIcons name={/[A-Z]/.test(values.password) ? 'check' : 'close'} size={16} color={/[A-Z]/.test(values.password) ? 'green' : 'red'} />
                  <Text style={styles.requirementText}>Pelo menos uma letra maiúscula</Text>
                </View>
                <View style={styles.requirementItem}>
                  <MaterialIcons name={/[a-z]/.test(values.password) ? 'check' : 'close'} size={16} color={/[a-z]/.test(values.password) ? 'green' : 'red'} />
                  <Text style={styles.requirementText}>Pelo menos uma letra minúscula</Text>
                </View>
                <View style={styles.requirementItem}>
                  <MaterialIcons name={/\d/.test(values.password) ? 'check' : 'close'} size={16} color={/\d/.test(values.password) ? 'green' : 'red'} />
                  <Text style={styles.requirementText}>Pelo menos um número</Text>
                </View>
                <View style={styles.requirementItem}>
                  <MaterialIcons name={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(values.password) ? 'check' : 'close'} size={16} color={/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(values.password) ? 'green' : 'red'} />
                  <Text style={styles.requirementText}>Pelo menos um caractere especial</Text>
                </View>
              </View>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <Text style={styles.footerText}>
        Já tem uma conta?{' '}
        <Text style={styles.link} onPress={() => router.replace('/login')}>
          Entrar
        </Text>
      </Text>
    </View>
  );
}
