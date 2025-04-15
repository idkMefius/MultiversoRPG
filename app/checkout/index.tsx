import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { styles } from '../../assets/styles/checkout.styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required('Número do cartão é obrigatório')
    .matches(/^\d{16}$/, 'Número do cartão inválido'),
  name: Yup.string().required('Nome é obrigatório'),
  month: Yup.string()
    .required('Mês obrigatório')
    .matches(/^(0?[1-9]|1[0-2])$/, 'Mês inválido'),
  year: Yup.string()
    .required('Ano obrigatório')
    .matches(/^\d{4}$/, 'Ano inválido'),
  cvv: Yup.string()
    .required('CVV obrigatório')
    .matches(/^\d{3,4}$/, 'CVV inválido'),
});

const CheckoutScreen = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedCard, setSelectedCard] = useState('');
  const [formValues, setFormValues] = useState({
    cardNumber: '',
    name: '',
    month: '',
    year: '',
    cvv: '',
  });

  const isNewCard = selectedCard === 'new';

  const isPaymentEnabled =
    (selectedMethod === 'credit' && (selectedCard === 'card1' || selectedCard === 'card2')) ||
    selectedMethod === 'pix' ||
    selectedMethod === 'boleto' ||
    (isNewCard && Object.values(formValues).every(value => value !== ''));

  // Use useEffect to update formValues based on Formik's values
  useEffect(() => {
    if (isNewCard) {
      setFormValues({
        cardNumber: '',
        name: '',
        month: '',
        year: '',
        cvv: '',
      });
    }
  }, [isNewCard]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.title}>Finalizar Compra</Text>

        <View style={styles.paymentMethods}>
          {['pix', 'boleto', 'credit'].map((method) => (
            <TouchableOpacity
              key={method}
              style={[styles.methodButton, selectedMethod === method && styles.methodButtonSelected]}
              onPress={() => {
                setSelectedMethod(method);
                setSelectedCard(''); // Limpa seleção ao trocar método
              }}
            >
              <Text
                style={[styles.methodButtonText, selectedMethod === method && styles.methodButtonTextSelected]}
              >
                {method === 'pix'
                  ? 'PIX'
                  : method === 'boleto'
                  ? 'Boleto Bancário'
                  : 'Cartão de Crédito'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedMethod === 'credit' && (
          <>
            <Text style={styles.sectionTitle}>Selecione um cartão</Text>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'card1' && styles.cardOptionSelected]}
              onPress={() => setSelectedCard('card1')}
            >
              <Text style={[styles.cardText, selectedCard === 'card1' && { color: '#1E1E1E' }]}>
                Cartão com final 1234
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'card2' && styles.cardOptionSelected]}
              onPress={() => setSelectedCard('card2')}
            >
              <Text style={[styles.cardText, selectedCard === 'card2' && { color: '#1E1E1E' }]}>
                Cartão com final 5678
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardOption, selectedCard === 'new' && styles.cardOptionSelected]}
              onPress={() => setSelectedCard('new')}
            >
              <Text style={[styles.cardText, selectedCard === 'new' && { color: '#1E1E1E' }]}>
                Usar novo cartão
              </Text>
            </TouchableOpacity>

            {isNewCard && (
              <>
                <Text style={styles.sectionTitle}>Novo Cartão</Text>
                <Formik
                  initialValues={formValues}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log('Pagamento com novo cartão:', values);
                  }}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <>
                      <TextInput
                        style={styles.input}
                        placeholder="Número do cartão"
                        placeholderTextColor="#888"
                        keyboardType="numeric"
                        maxLength={16}
                        onChangeText={handleChange('cardNumber')}
                        onBlur={handleBlur('cardNumber')}
                        value={values.cardNumber}
                      />
                      {touched.cardNumber && errors.cardNumber && (
                        <Text style={styles.error}>{errors.cardNumber}</Text>
                      )}

                      <TextInput
                        style={styles.input}
                        placeholder="Nome impresso no cartão"
                        placeholderTextColor="#888"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <Text style={styles.error}>{errors.name}</Text>
                      )}

                      <View style={styles.row}>
                        <TextInput
                          style={[styles.input, styles.inputHalf]}
                          placeholder="Mês (MM)"
                          placeholderTextColor="#888"
                          keyboardType="numeric"
                          maxLength={2}
                          onChangeText={handleChange('month')}
                          onBlur={handleBlur('month')}
                          value={values.month}
                        />
                        <TextInput
                          style={[styles.input, styles.inputHalf]}
                          placeholder="Ano (AAAA)"
                          placeholderTextColor="#888"
                          keyboardType="numeric"
                          maxLength={4}
                          onChangeText={handleChange('year')}
                          onBlur={handleBlur('year')}
                          value={values.year}
                        />
                      </View>
                      {touched.month && errors.month && (
                        <Text style={styles.error}>{errors.month}</Text>
                      )}
                      {touched.year && errors.year && (
                        <Text style={styles.error}>{errors.year}</Text>
                      )}

                      <TextInput
                        style={styles.input}
                        placeholder="CVV"
                        placeholderTextColor="#888"
                        keyboardType="numeric"
                        maxLength={4}
                        onChangeText={handleChange('cvv')}
                        onBlur={handleBlur('cvv')}
                        value={values.cvv}
                      />
                      {touched.cvv && errors.cvv && (
                        <Text style={styles.error}>{errors.cvv}</Text>
                      )}

                      <TouchableOpacity
                        style={[styles.payButton, !isPaymentEnabled && { opacity: 0.5 }]}
                        onPress={handleSubmit}
                        disabled={!isPaymentEnabled}
                      >
                        <Text style={styles.payButtonText}>Efetuar Pagamento</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </Formik>
              </>
            )}
          </>
        )}

        {selectedMethod !== 'credit' && (
          <TouchableOpacity
            style={[styles.payButton, !isPaymentEnabled && { opacity: 0.5 }]}
            disabled={!isPaymentEnabled}
            onPress={() => {
              console.log('Pagamento via', selectedMethod);
            }}
          >
            <Text style={styles.payButtonText}>Efetuar Pagamento</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
