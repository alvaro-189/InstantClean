import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, DrawerLayoutAndroid, Modal, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BuyMembershipScreen = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const drawerRef = useRef(null);

  const openDrawer = () => {
    drawerRef.current && drawerRef.current.openDrawer();
  };

  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text style={styles.welcomeText}>¡Mejora tu experiencia!</Text>
      <Text style={styles.details}>
        Conviértete en miembro premium y disfruta de beneficios exclusivos.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.navigationText}>Mi Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Empleos")}
      >
        <Text style={styles.navigationText}>Mis Empleos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Configuration")}
      >
        <Text style={styles.navigationText}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.navigationText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );

  const handlePayment = () => {
    // Lógica de pago aquí
    // Después del pago, redirige a la pantalla principal (Home)
    navigation.navigate("Home");
  };

  const renderPaymentModal = () => {
    return (
      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Selecciona el método de pago</Text>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentMethod("credit_card")}
          >
            <Text style={styles.paymentOptionText}>Tarjeta de Crédito/Débito</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.paymentOption}
            onPress={() => setPaymentMethod("paypal")}
          >
            <Text style={styles.paymentOptionText}>PayPal</Text>
          </TouchableOpacity>
          {paymentMethod === "credit_card" && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Número de tarjeta"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Fecha de caducidad (MM/AA)"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Código de seguridad"
                keyboardType="numeric"
              />
            </View>
          )}
          {paymentMethod === "paypal" && (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico de PayPal"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña de PayPal"
                secureTextEntry
              />
            </View>
          )}

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={[styles.payButton, styles.cancelButton]}
                onPress={() => setShowModal(false)}
            >
                <Text style={styles.payButtonText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.payButton}
                onPress={() => {
                handlePayment();
                setShowModal(false);
                }}
            >
                <Text style={styles.payButtonText}>Pagar</Text>
            </TouchableOpacity>
            </View>

        </View>
      </Modal>
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawerRef}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={() => navigationView}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={openDrawer}
            style={styles.menuButton}
          >
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Membresía Premium</Text>
        </View>
        <View style={styles.content}>
          
          <Text style={styles.description}>
            Desbloquea funciones exclusivas con nuestra membresía premium.
          </Text>
          <View style={styles.benefitsContainer}>
            <Text style={styles.benefit}><Text style={styles.bold}>✔ Perfil destacado en búsquedas:</Text> Aumenta la visibilidad de tu perfil para que los empleadores te encuentren más fácilmente.</Text>
            <Text style={styles.benefit}><Text style={styles.bold}>✔ Foto con marco dorado llamativo:</Text> Destaca tu imagen de perfil con un elegante marco dorado para captar la atención.</Text>
            <Text style={styles.benefit}><Text style={styles.bold}>✔ Prioridad en ofertas de empleo:</Text> Recibe notificaciones y acceso exclusivo a las últimas oportunidades laborales.</Text>
            <Text style={styles.benefit}><Text style={styles.bold}>✔ Alertas de Empleo Exclusivas:</Text> Recibe notificaciones instantáneas sobre nuevas oportunidades de empleo antes que los usuarios estándar.</Text>
            <Text style={styles.benefit}><Text style={styles.bold}>✔ Perfil Verificado:</Text> Obtén un distintivo de "Perfil Verificado" para aumentar la confianza de los empleadores.</Text>
            <Text style={styles.benefit}><Text style={styles.bold}>✔ Soporte Prioritario:</Text> Accede a un servicio de atención al cliente prioritario para resolver problemas o recibir ayuda más rápidamente.</Text>
            </View>

          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => setShowModal(true)}
          >
            <Text style={styles.buyButtonText}>Adquirir Membresía</Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderPaymentModal()}
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bold: {
    fontWeight: "bold"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#3498db",
  },
  menuButton: {
    padding: 10,
  },
  menuButtonText: {
    fontSize: 18,
    color: "#fff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  membershipImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  benefitsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  benefit: {
    fontSize: 16,
    marginBottom: 10,
    color: "black",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Ajusta según sea necesario
    gap: 10
  },
  buyButton: {
    backgroundColor: "#2ecc71",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buyButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  paymentOption: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
  },
  paymentOptionText: {
    fontSize: 16,
    color: "#fff",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#ecf0f1",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: "#e74c3c",
  },
  payButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
  },
  welcomeText: {
    fontSize: 20,
    paddingBottom: 20,
  },
  details: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  navigationText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});

export default BuyMembershipScreen;
