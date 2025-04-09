import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../../assets/styles/login.styles';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';

const logo = require('../../assets/imgs/logo.png');

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('Por favor, insira seu e-mail.'),
  password: Yup.string()
    .required('Por favor, insira sua senha.'),
});

export default function LoginScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.icon} />
      <Text style={styles.title}>Bem-vindo ao MultiversoRPG</Text>
      <Text style={styles.subtitle}>Onde todos os universos se encontram</Text>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const { email, password } = values;
          if (email === 'admin@multiversorpg.com' && password === '@dminMult1verso') {
            router.replace('(tabs)/main');
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

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
            {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <Text style={styles.footerText}>
        Não tem uma conta?{' '}
        <Text style={styles.link} onPress={() => router.replace('/register')}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
}