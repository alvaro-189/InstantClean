import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, StatusBar,TouchableOpacity, DrawerLayoutAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
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
  const navigationView=(
    <View style={styles.navigationContainer}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Empleos')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
      >
        <Text style={styles.navigationText}>Mis empleos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Configuration')} // Reemplaza 'Settings' con el nombre de la pantalla de configuración
      >
        <Text style={styles.navigationText}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SingIn')} // Reemplaza 'Login' con el nombre de la pantalla de inicio de sesión
      >
        <Text style={styles.navigationText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  )
  const [data,setData]=useState(null);
const navigation = useNavigation();
let drawer;
const openDrawer=()=>{
  drawer.openDrawer();
}

  return (
    <DrawerLayoutAndroid
    ref={_drawer => (drawer = _drawer)}
    drawerWidth={300}
    drawerPosition={"left"}
    renderNavigationView={() => navigationView}
    >
    <View style={{width:300, height:60}}>
    <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>Menu</Text>
      </TouchableOpacity>
    </View>
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
    </DrawerLayoutAndroid>
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
  menuButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 1,
  },
  menuButtonText: {
    fontSize: 18,
    color: 'blue',
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    margin:20
  },
  navigationText: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ConfigurationScreen;
