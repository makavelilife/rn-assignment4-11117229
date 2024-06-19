import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// LoginScreen Component
const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Jobizz</Text>
      <Text style={styles.welcome}>
        Welcome Back <Text style={styles.emoji}>👋</Text>
      </Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orContinueWith}>Or continue with</Text>
      
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="apple" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/google.png')} style={styles.google} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
      </View>

      <Text style={styles.registerText}>
        Haven’t an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  google: {
    size: 24,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A', // Dark Blue
    textAlign: 'left',
    marginBottom: 10,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937', // Dark Gray
    textAlign: 'left',
    marginBottom: 5,
  },
  emoji: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280', // Gray
    textAlign: 'left',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#D1D5DB', // Light Gray
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1D4ED8', // Blue
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orContinueWith: {
    fontSize: 14,
    color: '#9CA3AF', // Gray
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
    marginTop: 30
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#F3F4F6', // Light Gray
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  registerText: {
    fontSize: 14,
    color: '#9CA3AF', // Gray
    textAlign: 'center',
    marginTop: 30
  },
  registerLink: {
    color: '#1D4ED8', // Blue
    fontWeight: 'bold',
  },
});

export default LoginScreen;
