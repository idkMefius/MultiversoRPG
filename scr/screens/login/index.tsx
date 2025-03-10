import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

const logo = require('../../assets/imgs/logo.png');

export interface LoginScreenProps {}

export function LoginScreen(props: LoginScreenProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const hasMinLength = (password: string) => password.length >= 8;
  const hasUppercase = (password: string) => /[A-Z]/.test(password);
  const hasLowercase = (password: string) => /[a-z]/.test(password);
  const hasNumber = (password: string) => /\d/.test(password);
  const hasSpecialChar = (password: string) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  const handleLogin = () => {
    if (!email) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail.');
      return;
    } else if (!validateEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    if (!password) {
      Alert.alert('Erro', 'Por favor, insira sua senha.');
      return;
    } else if (
      !hasMinLength(password) ||
      !hasUppercase(password) ||
      !hasLowercase(password) ||
      !hasNumber(password) ||
      !hasSpecialChar(password)
    ) {
      Alert.alert('Erro', 'A senha não atende a todos os requisitos.');
      return;
    }

    Alert.alert('Sucesso', 'Campos válidos!');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.icon} />

      <Text style={styles.title}>Bem-vindo ao MultiversoRPG</Text>
      <Text style={styles.subtitle}>Onde todos os universos se encontram</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
          <MaterialIcons
            name={showPassword ? 'visibility-off' : 'visibility'}
            size={24}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      {password.length > 0 && (
        <View style={styles.requirementsContainer}>
          <Text style={styles.requirementsTitle}>A senha deve conter:</Text>
          <View style={styles.requirementItem}>
            <MaterialIcons
              name={hasMinLength(password) ? 'check' : 'close'}
              size={16}
              color={hasMinLength(password) ? 'green' : 'red'}
            />
            <Text style={styles.requirementText}>Pelo menos 8 caracteres</Text>
          </View>
          <View style={styles.requirementItem}>
            <MaterialIcons
              name={hasUppercase(password) ? 'check' : 'close'}
              size={16}
              color={hasUppercase(password) ? 'green' : 'red'}
            />
            <Text style={styles.requirementText}>Pelo menos uma letra maiúscula</Text>
          </View>
          <View style={styles.requirementItem}>
            <MaterialIcons
              name={hasLowercase(password) ? 'check' : 'close'}
              size={16}
              color={hasLowercase(password) ? 'green' : 'red'}
            />
            <Text style={styles.requirementText}>Pelo menos uma letra minúscula</Text>
          </View>
          <View style={styles.requirementItem}>
            <MaterialIcons
              name={hasNumber(password) ? 'check' : 'close'}
              size={16}
              color={hasNumber(password) ? 'green' : 'red'}
            />
            <Text style={styles.requirementText}>Pelo menos um número</Text>
          </View>
          <View style={styles.requirementItem}>
            <MaterialIcons
              name={hasSpecialChar(password) ? 'check' : 'close'}
              size={16}
              color={hasSpecialChar(password) ? 'green' : 'red'}
            />
            <Text style={styles.requirementText}>Pelo menos um caractere especial</Text>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
      </Text>
    </View>
  );
}