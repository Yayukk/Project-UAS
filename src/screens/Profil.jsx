import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profil = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/bg.jpeg')}
        style={styles.backgroundImage}
      />
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/user.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Yayuk Oktafiana</Text>
        <Text style={styles.email}>yayukoktafiana@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Icon name="graduation-cap" size={32} color="#007bff" />
          <Text style={styles.infoTitle}>Kelas</Text>
          <Text style={styles.infoContent}>XII IPA 1</Text>
        </View>
        <View style={styles.infoCard}>
          <Icon name="birthday-cake" size={32} color="#007bff" />
          <Text style={styles.infoTitle}>Tanggal Lahir</Text>
          <Text style={styles.infoContent}>25 April 2000</Text>
        </View>
        <View style={styles.infoCard}>
          <Icon name="phone" size={32} color="#007bff" />
          <Text style={styles.infoTitle}>Telepon</Text>
          <Text style={styles.infoContent}>+62 812 3456 7890</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
  },
  backgroundImage: {
    width: '100%',
    height: 200,
    marginBottom: -100,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
  },
  email: {
    fontSize: 16,
    color: '#6c757d',
  },
  infoContainer: {
    padding: 16,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    marginLeft: 16,
  },
  infoContent: {
    fontSize: 16,
    color: '#6c757d',
    marginLeft: 'auto',
  },
});

export default Profil;
