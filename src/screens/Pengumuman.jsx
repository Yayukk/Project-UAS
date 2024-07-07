import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Pengumuman = () => {
  const announcements = [
    {
      title: 'Libur Sekolah',
      description:
        'Sekolah akan libur pada tanggal 17 Agustus untuk memperingati Hari Kemerdekaan.',
      date: '15 Juli 2024',
    },
    {
      title: 'Ujian Akhir Semester',
      description:
        'Ujian akhir semester akan dilaksanakan mulai tanggal 1 Desember.',
      date: '20 Juli 2024',
    },
    {
      title: 'Ekstra Kulikuler',
      description:
        'Ekstra Kulikuler futsal akan diadakan pada akhir pekan ini, harap mendaftar di kantor.',
      date: '25 Juli 2024',
    },
    {
      title: 'Kehilangan',
      description:
        'Barang siapa yang menemukan Uang sebesar Rp ..... harap melapor ke pihak BK',
      date: '25 Juli 2024',
    },
    {
      title: 'Classmeeting',
      description:
        'Pelaksanaan Classmeeting akan di adakan 1 hari setelah Ujian Akhir Semester Selesai. Persiapkan diri anda!!',
      date: '28 Juli 2024',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pengumuman</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableHeaderText, styles.tableHeaderTitle]}>
            Judul
          </Text>
          <Text style={[styles.tableHeaderText, styles.tableHeaderDescription]}>
            Deskripsi
          </Text>
          <Text style={[styles.tableHeaderText, styles.tableHeaderDate]}>
            Tanggal
          </Text>
        </View>
        {announcements.map((announcement, index) => (
          <View
            key={index}
            style={[
              styles.tableRow,
              {backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e9ecef'},
            ]}>
            <Text style={[styles.tableCell, styles.tableCellTitle]}>
              {announcement.title}
            </Text>
            <Text style={[styles.tableCell, styles.tableCellDescription]}>
              {announcement.description}
            </Text>
            <Text style={[styles.tableCell, styles.tableCellDate]}>
              <Icon name="calendar" size={16} color="#6c757d" />{' '}
              {announcement.date}
            </Text>
          </View>
        ))}
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
    color: '#007bff',
    marginBottom: 16,
    textAlign: 'center',
  },
  table: {
    width: '100%',
    maxWidth: 800,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  tableHeaderTitle: {
    flex: 2,
    textAlign: 'left',
  },
  tableHeaderDescription: {
    flex: 3,
    textAlign: 'left',
  },
  tableHeaderDate: {
    flex: 1,
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tableCell: {
    color: '#495057',
    paddingHorizontal: 5,
  },
  tableCellTitle: {
    flex: 2,
    textAlign: 'left',
  },
  tableCellDescription: {
    flex: 3,
    textAlign: 'left',
  },
  tableCellDate: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
  },
});

export default Pengumuman;
