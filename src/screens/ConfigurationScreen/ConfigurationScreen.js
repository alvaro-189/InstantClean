import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ConfigurationScreen = () => {
  const [modoOscuro, setModoOscuro] = useState(false);
  const [notificaciones, setNotificaciones] = useState(true);

  useEffect(() => {
    cargarConfiguraciones();
  }, []);

  useEffect(() => {
    aplicarModoOscuro();
  }, [modoOscuro]);

  const cargarConfiguraciones = async () => {
    try {
      const modoOscuroSave = await AsyncStorage.getItem('modoOscuro');
      const notificacionesSave = await AsyncStorage.getItem('notificaciones');
      if (modoOscuroSave !== null) {
        setModoOscuro(JSON.parse(modoOscuroSave));
      }
      if (notificacionesSave !== null) {
        setNotificaciones(JSON.parse(notificacionesSave));
      }
    } catch (error) {
      console.error('Error al obtener la configuración con AsyncStorage', error);
    }
  };

  const guardarConfiguracion = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error al guardar la configuración en AsyncStorage', error);
    }
  };

  const aplicarModoOscuro = () => {
    StatusBar.setBarStyle(modoOscuro ? 'light-content' : 'dark-content');
  };

  const toggleModoOscuro = (value) => {
    guardarConfiguracion('modoOscuro', value);
    setModoOscuro(value);
  };

  const toggleNotificaciones = (value) => {
    guardarConfiguracion('notificaciones', value);
    setNotificaciones(value);
  };

  return (
    <View style={[styles.container, { backgroundColor: modoOscuro ? '#333' : '#fff' }]}>
      <Text style={styles.sectionTitle}>Configuración</Text>
      <View style={styles.configItem}>
        <Text style={styles.configText}>Modo Oscuro</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={modoOscuro ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleModoOscuro}
          value={modoOscuro}
        />
      </View>
      <View style={styles.configItem}>
        <Text style={styles.configText}>Notificaciones</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificaciones ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={toggleNotificaciones}
          value={notificaciones}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  configItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 20,
  },
  configText: {
    fontSize: 20,
  },
});

export default ConfigurationScreen;
