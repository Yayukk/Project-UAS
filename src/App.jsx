// src/AppNavigator.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beranda from './screens/Beranda';
import Profil from './screens/Profil';
import MataPelajaran from './screens/MataPelajaran';
import Pengumuman from './screens/Pengumuman';
import Kontak from './screens/Kontak';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Beranda" component={Beranda} />
        <Tab.Screen name="Profil" component={Profil} />
        <Tab.Screen name="Mata Pelajaran" component={MataPelajaran} />
        <Tab.Screen name="Pengumuman" component={Pengumuman} />
        <Tab.Screen name="Kontak" component={Kontak} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
