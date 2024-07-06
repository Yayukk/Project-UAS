import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Beranda = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/tut.jpeg')} style={styles.banner} />
      <Text style={styles.title}>Selamat Datang di Aplikasi Sekolah</Text>
      <Text style={styles.description}>
        Aplikasi Sekolah kami menyediakan informasi terbaru tentang kegiatan,
        pengumuman, dan berbagai hal penting lainnya terkait sekolah.
      </Text>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/kegiatan.jpeg')}
            style={styles.cardImage}
          />
          <View style={styles.cardOverlay}>
            <Icon
              name="calendar"
              size={32}
              color="#fff"
              style={styles.cardIcon}
            />
          </View>
          <Text style={styles.cardTitle}>Kegiatan Terbaru</Text>
          <Text style={styles.cardContent}>
            - Upacara Bendera setiap hari Senin
          </Text>
          <Text style={styles.cardContent}>- Lomba Kebersihan Kelas</Text>
          <Text style={styles.cardContent}>- Seminar Pendidikan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/pengumuman.jpeg')}
            style={styles.cardImage}
          />
          <View style={styles.cardOverlay}>
            <Icon
              name="bullhorn"
              size={32}
              color="#fff"
              style={styles.cardIcon}
            />
          </View>
          <Text style={styles.cardTitle}>Pengumuman</Text>
          <Text style={styles.cardContent}>
            - Libur Nasional pada tanggal 17 Agustus
          </Text>
          <Text style={styles.cardContent}>
            - Pendaftaran Ekstrakurikuler dibuka hingga akhir bulan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/informasi.jpeg')}
            style={styles.cardImage}
          />
          <View style={styles.cardOverlay}>
            <Icon
              name="info-circle"
              size={32}
              color="#fff"
              style={styles.cardIcon}
            />
          </View>
          <Text style={styles.cardTitle}>Informasi</Text>
          <Text style={styles.cardContent}>
            - Jadwal Pelajaran Semester Baru
          </Text>
          <Text style={styles.cardContent}>
            - Buku Pegangan Siswa dapat diunduh di website
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../assets/lainnya.jpg')}
            style={styles.cardImage}
          />
          <View style={styles.cardOverlay}>
            <Icon name="info" size={32} color="#fff" style={styles.cardIcon} />
          </View>
          <Text style={styles.cardTitle}>Lainnya</Text>
          <Text style={styles.cardContent}>
            Dapatkan Informasi lainnya disini
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 24,
    textAlign: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '48%',
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  cardContent: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Beranda;
