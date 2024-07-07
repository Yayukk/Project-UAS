import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MataPelajaran = () => {
  const subjectsSchedule = [
    {
      day: 'Senin',
      subjects: [
        {
          name: 'Matematika',
          teacher: 'Ibu Anita',
          time: '07:00 - 08:30',
          classroom: 'XII IPA 1',
          image: require('../assets/matematika.jpeg'),
        },
        {
          name: 'Fisika',
          teacher: 'Bapak Budi',
          time: '08:30 - 10:00',
          classroom: 'XII IPA 1',
          image: require('../assets/fisika.jpeg'),
        },
        {
          name: 'Bahasa Indonesia',
          teacher: 'Ibu Sari',
          time: '10:30 - 11:00',
          classroom: 'XII IPA 1',
          image: require('../assets/indo.png'),
        },
        {
          name: 'PKN',
          teacher: 'Bapak Jufri',
          time: '11:00 - 12:30',
          classroom: 'XII IPA 1',
          image: require('../assets/pkn.jpeg'),
        },
      ],
    },
    {
      day: 'Selasa',
      subjects: [
        {
          name: 'Kimia',
          teacher: 'Ibu Citra',
          time: '07:00 - 08:30',
          classroom: 'XII IPA 1',
          image: require('../assets/kimia.jpeg'),
        },
        {
          name: 'Bahasa Indonesia',
          teacher: 'Ibu Sari',
          time: '08:30 - 10:00',
          classroom: 'XII IPA 1',
          image: require('../assets/indo.png'),
        },
        {
          name: 'Biologi',
          teacher: 'Bapak Dodi',
          time: '10:30 - 11:00',
          classroom: 'XII IPA 1',
          image: require('../assets/biologi.jpeg'),
        },
        {
          name: 'Bahasa Inggris',
          teacher: 'Ibu DIni',
          time: '11:00 - 12:30',
          classroom: 'XII IPA 1',
          image: require('../assets/inggris.jpeg'),
        },
      ],
    },
    {
      day: 'Rabu',
      subjects: [
        {
          name: 'Olahraga',
          teacher: 'Bapak Andre',
          time: '07:00 - 08:30',
          classroom: 'XII IPA 1',
          image: require('../assets/olahraga.jpeg'),
        },
        {
          name: 'Akidah Akhlak',
          teacher: 'Bapak Darus',
          time: '08:30 - 10:00',
          classroom: 'XII IPA 1',
          image: require('../assets/akidah.jpeg'),
        },
        {
          name: 'Bahasa Inggris',
          teacher: 'Ibu Dini',
          time: '10:30 - 11:00',
          classroom: 'XII IPA 1',
          image: require('../assets/inggris.jpeg'),
        },
        {
          name: 'Seni Budaya',
          teacher: 'Ibu Emi',
          time: '11:00 - 12:30',
          classroom: 'XII IPA 1',
          image: require('../assets/seni.jpeg'),
        },
      ],
    },
    {
      day: 'Kamis',
      subjects: [
        {
          name: 'Matematika',
          teacher: 'Ibu Anita',
          time: '07:00 - 08:30',
          classroom: 'XII IPA 1',
          image: require('../assets/matematika.jpeg'),
        },
        {
          name: 'PKN',
          teacher: 'Bapak Jufri',
          time: '08:30 - 10:00',
          classroom: 'XII IPA 1',
          image: require('../assets/pkn.jpeg'),
        },
        {
          name: 'Sejarah',
          teacher: 'Bapak Hasan',
          time: '10:30 - 11:00',
          classroom: 'XII IPA 1',
          image: require('../assets/sejarah.jpeg'),
        },
        {
          name: 'Fisika',
          teacher: 'Bapak Budi',
          time: '11:00 - 12:30',
          classroom: 'XII IPA 1',
          image: require('../assets/fisika.jpeg'),
        },
      ],
    },
    {
      day: 'Jumat',
      subjects: [
        {
          name: 'Biologi',
          teacher: 'Bapak Dodi',
          time: '07:00 - 08:30',
          classroom: 'XII IPA 1',
          image: require('../assets/biologi.jpeg'),
        },
        {
          name: 'Akidah Akhlak',
          teacher: 'Bapak Darus',
          time: '08:30 - 10:00',
          classroom: 'XII IPA 1',
          image: require('../assets/akidah.jpeg'),
        },
      ],
    },
    {
      day: 'Sabtu',
      subjects: [
        {
          name: 'Fisika',
          teacher: 'Bapak Dodi',
          time: '07:00 - 08:30',
          classroom: 'XII IPA 1',
          image: require('../assets/fisika.jpeg'),
        },
        {
          name: 'Sejarah',
          teacher: 'Bapak Hasan',
          time: '08:30 - 10:00',
          classroom: 'XII IPA 1',
          image: require('../assets/sejarah.jpeg'),
        },
        {
          name: 'Biologi',
          teacher: 'Bapak Dodi',
          time: '10:30 - 11:00',
          classroom: 'XII IPA 1',
          image: require('../assets/biologi.jpeg'),
        },
        {
          name: 'Seni Budaya',
          teacher: 'Ibu Emi',
          time: '11:00 - 12:30',
          classroom: 'XII IPA 1',
          image: require('../assets/seni.jpeg'),
        },
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Jadwal Mata Pelajaran</Text>
      {subjectsSchedule.map((schedule, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>{schedule.day}</Text>
          {schedule.subjects.map((subject, subIndex) => (
            <View key={subIndex} style={styles.card}>
              <Image source={subject.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{subject.name}</Text>
                <Text style={styles.cardDetail}>
                  <Icon name="user" size={16} color="#6c757d" />{' '}
                  {subject.teacher}
                </Text>
                <Text style={styles.cardDetail}>
                  <Icon name="clock-o" size={16} color="#6c757d" />{' '}
                  {subject.time}
                </Text>
                <Text style={styles.cardDetail}>
                  <Icon name="building-o" size={16} color="#6c757d" />{' '}
                  {subject.classroom}
                </Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 16,
    textAlign: 'center',
  },
  dayContainer: {
    marginBottom: 16,
  },
  dayTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#343a40',
    marginBottom: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  cardDetail: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
});

export default MataPelajaran;
