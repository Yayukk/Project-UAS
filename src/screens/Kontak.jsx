import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Kontak = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kontak Sekolah</Text>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="info-circle" size={24} color="#007bff" />
          <Text style={styles.cardTitle}>Informasi Kontak</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="map-marker" size={24} color="#007bff" />
          <Text style={styles.contactText}>
            Jl. Pendidikan No. 123, Jakarta
          </Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="phone" size={24} color="#007bff" />
          <Text style={styles.contactText}>+62 21 12345678</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="envelope" size={24} color="#007bff" />
          <Text style={styles.contactText}>info@sekolah.ac.id</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="globe" size={24} color="#007bff" />
          <Text style={styles.contactText}>www.sekolah.ac.id</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Icon name="clock-o" size={24} color="#28a745" />
          <Text style={styles.cardTitle}>Jam Operasional</Text>
        </View>
        <View style={styles.operationalHours}>
          <Text style={styles.operationalText}>
            Senin - Jumat: 08.00 - 16.00
          </Text>
          <Text style={styles.operationalText}>Sabtu: 08.00 - 12.00</Text>
          <Text style={styles.operationalText}>Minggu: Tutup</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    width: '90%',
    maxWidth: 400,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
    marginLeft: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  contactText: {
    fontSize: 18,
    color: '#495057',
    marginLeft: 12,
  },
  operationalHours: {
    marginTop: 16,
  },
  operationalText: {
    fontSize: 18,
    color: '#495057',
    marginBottom: 8,
  },
});

export default Kontak;
