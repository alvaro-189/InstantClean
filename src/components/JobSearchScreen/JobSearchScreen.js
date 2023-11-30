import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, DrawerLayoutAndroid, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const JobSearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [originalJobList, setOriginalJobList] = useState([
    {
        id: "1",
        company: "TechSolutions",
        position: "Ingeniero de Software",
        salary: "$70,000 - $80,000",
        schedule: "Tiempo completo",
        description: "TechSolutions está en busca de un Ingeniero de Software apasionado por la innovación y el desarrollo de soluciones tecnológicas. Te unirás a un equipo dinámico para crear software de vanguardia que impulse la transformación digital.",
        requirements: "Requisitos:\n- Licenciatura en Informática o Ingeniería de Software.\n- Experiencia en desarrollo de software y resolución de problemas.\n- Conocimientos sólidos en lenguajes de programación como Java, Python o JavaScript.",
        benefits: "Beneficios:\n- Salario competitivo y bonos por rendimiento.\n- Oportunidades de crecimiento y desarrollo profesional.\n- Ambiente de trabajo colaborativo y flexible."
      },
      {
        id: "2",
        company: "DataInsights",
        position: "Científico de Datos",
        salary: "$80,000 - $90,000",
        schedule: "Tiempo completo",
        description: "DataInsights busca un Científico de Datos entusiasta para unirse a nuestro equipo innovador. Trabajarás en proyectos emocionantes utilizando técnicas avanzadas de análisis de datos para extraer conocimientos valiosos y respaldar decisiones estratégicas.",
        requirements: "Requisitos:\n- Maestría en Ciencias de Datos, Estadísticas o campo relacionado.\n- Experiencia práctica con herramientas y lenguajes como Python, R y SQL.\n- Fuertes habilidades analíticas y de resolución de problemas.",
        benefits: "Beneficios:\n- Salario competitivo y bonificaciones por proyectos destacados.\n- Oportunidades de formación continua y desarrollo.\n- Ambiente de trabajo diverso y colaborativo."
      },
      {
        id: "3",
        company: "InnovaTech",
        position: "Especialista en Seguridad Informática",
        salary: "$75,000 - $85,000",
        schedule: "Tiempo completo",
        description: "InnovaTech busca un Especialista en Seguridad Informática altamente calificado para fortalecer nuestras defensas cibernéticas. Colaborarás en la implementación de estrategias y medidas de seguridad avanzadas para proteger la infraestructura tecnológica de la empresa.",
        requirements: "Requisitos:\n- Experiencia comprobada en seguridad informática.\n- Conocimiento profundo de protocolos de seguridad y herramientas de prevención de amenazas.\n- Certificaciones en seguridad como CISSP o CompTIA Security+ son un plus.",
        benefits: "Beneficios:\n- Salario competitivo con bonificaciones por desempeño.\n- Oportunidades de capacitación y certificación.\n- Ambiente de trabajo desafiante y gratificante."
      },
      {
        id: "4",
        company: "EcoSolutions",
        position: "Desarrollador Full Stack",
        salary: "$65,000 - $75,000",
        schedule: "Tiempo completo",
        description: "EcoSolutions busca un Desarrollador Full Stack apasionado por la sostenibilidad. Únete a nuestro equipo para crear soluciones tecnológicas completas que impulsen prácticas eco-amigables.",
        requirements: "Requisitos:\n- Experiencia en desarrollo full stack.\n- Conocimientos sólidos en tecnologías web como HTML, CSS, JavaScript.\n- Compromiso con la sostenibilidad y la responsabilidad ambiental.",
        benefits: "Beneficios:\n- Salario competitivo y bonificaciones por proyectos eco-amigables.\n- Oportunidades de voluntariado ambiental.\n- Ambiente de trabajo centrado en la responsabilidad social."
      },
      {
        id: "5",
        company: "HealthSoft",
        position: "Analista de Sistemas de Salud",
        salary: "$70,000 - $80,000",
        schedule: "Tiempo completo",
        description: "HealthSoft está en la búsqueda de un Analista de Sistemas de Salud apasionado por mejorar la atención médica. Únete a nuestro equipo para trabajar en soluciones tecnológicas innovadoras que impacten positivamente en el sector de la salud.",
        requirements: "Requisitos:\n- Experiencia en análisis de sistemas de salud.\n- Conocimientos en estándares de interoperabilidad y seguridad de la salud.\n- Colaboración efectiva con profesionales de la salud.",
        benefits: "Beneficios:\n- Salario competitivo y beneficios médicos.\n- Desarrollo profesional en el ámbito de la tecnología sanitaria.\n- Ambiente de trabajo centrado en el bienestar."
      },
    { id: "6", company: "MediaMinds", position: "Estratega de Marketing Digital", salary: "$55,000 - $65,000", schedule: "Medio tiempo" },
    { id: "7", company: "GreenEnergies", position: "Ingeniero de Energías Renovables", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "8", company: "UrbanDesign", position: "Arquitecto de Software", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "9", company: "GlobalTraders", position: "Analista de Mercado Financiero", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "10", company: "SmartLogistics", position: "Especialista en Logística", salary: "$65,000 - $75,000", schedule: "Tiempo completo" },
    { id: "11", company: "TechInnovate", position: "Desarrollador de Aplicaciones Móviles", salary: "$60,000 - $70,000", schedule: "Tiempo completo" },
    { id: "12", company: "DataCrafters", position: "Ingeniero de Datos", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "13", company: "CyberGuard", position: "Analista de Seguridad Cibernética", salary: "$85,000 - $95,000", schedule: "Tiempo completo" },
    { id: "14", company: "CloudInnovations", position: "Arquitecto de Nube", salary: "$90,000 - $100,000", schedule: "Tiempo completo" },
    { id: "15", company: "BioTechSolutions", position: "Científico de Datos Biomédicos", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "16", company: "DesignHub", position: "Diseñador de Experiencia de Usuario", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "17", company: "RenewablePower", position: "Ingeniero en Energías Renovables", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "18", company: "CodeCrafters", position: "Desarrollador Backend", salary: "$65,000 - $75,000", schedule: "Tiempo completo" },
    { id: "19", company: "FinanceInnovate", position: "Analista Financiero", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "20", company: "SupplyChainExperts", position: "Especialista en Cadena de Suministro", salary: "$60,000 - $70,000", schedule: "Tiempo completo" },
    { id: "21", company: "SmartCitiesTech", position: "Ingeniero en Ciudades Inteligentes", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "22", company: "DigitalHealthSolutions", position: "Desarrollador de Aplicaciones de Salud", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "23", company: "EcoFriendlyDesign", position: "Arquitecto Sostenible", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "24", company: "InnoMarketing", position: "Especialista en Marketing Innovador", salary: "$55,000 - $65,000", schedule: "Medio tiempo" },
    { id: "25", company: "SolarEnergyInnovate", position: "Ingeniero Solar", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "26", company: "TechSavvySolutions", position: "Consultor Tecnológico", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "27", company: "FutureFinance", position: "Analista de Inversiones", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "28", company: "LogisticsMasters", position: "Especialista en Logística Internacional", salary: "$65,000 - $75,000", schedule: "Tiempo completo" },
    { id: "29", company: "TechInnovate", position: "Ingeniero de Redes", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "30", company: "DigitalCommerce", position: "Desarrollador de Comercio Electrónico", salary: "$60,000 - $70,000", schedule: "Tiempo completo" },
    { id: "31", company: "HealthTechSolutions", position: "Analista de Tecnología Médica", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "32", company: "GreenBuildingDesign", position: "Arquitecto de Edificios Ecológicos", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "33", company: "InnoDigitalMarketing", position: "Especialista en Marketing Digital Innovador", salary: "$55,000 - $65,000", schedule: "Medio tiempo" },
    { id: "34", company: "RenewableEnergyExperts", position: "Ingeniero en Energía Renovable", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "35", company: "CodeCrafters", position: "Desarrollador de Aplicaciones Web", salary: "$65,000 - $75,000", schedule: "Tiempo completo" },
    { id: "36", company: "FinanceInnovate", position: "Analista de Riesgos Financieros", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "37", company: "SupplyChainMasters", position: "Especialista en Gestión de Cadena de Suministro", salary: "$60,000 - $70,000", schedule: "Tiempo completo" },
    { id: "38", company: "SmartTechSolutions", position: "Ingeniero de Tecnología Inteligente", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "39", company: "DigitalHealthInnovate", position: "Desarrollador de Aplicaciones de Salud Digital", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "40", company: "EcoDesign", position: "Diseñador Ambiental", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "41", company: "InnoAdvisors", position: "Asesor Tecnológico", salary: "$55,000 - $65,000", schedule: "Medio tiempo" },
    { id: "42", company: "SolarPowerInnovate", position: "Ingeniero en Energía Solar", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "43", company: "TechStrategists", position: "Estratega Tecnológico", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "44", company: "FutureInvestments", position: "Analista de Portafolio", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "45", company: "LogisticsInnovate", position: "Especialista en Logística de Última Milla", salary: "$65,000 - $75,000", schedule: "Tiempo completo" },
    { id: "46", company: "TechInnovate", position: "Desarrollador de Aplicaciones Móviles", salary: "$60,000 - $70,000", schedule: "Tiempo completo" },
    { id: "47", company: "DataCrafters", position: "Ingeniero de Datos", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "48", company: "CyberGuard", position: "Analista de Seguridad Cibernética", salary: "$85,000 - $95,000", schedule: "Tiempo completo" },
    { id: "49", company: "CloudInnovations", position: "Arquitecto de Nube", salary: "$90,000 - $100,000", schedule: "Tiempo completo" },
    { id: "50", company: "BioTechSolutions", position: "Científico de Datos Biomédicos", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "51", company: "DesignHub", position: "Diseñador de Experiencia de Usuario", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "52", company: "RenewablePower", position: "Ingeniero en Energías Renovables", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "53", company: "CodeCrafters", position: "Desarrollador Backend", salary: "$65,000 - $75,000", schedule: "Tiempo completo" },
    { id: "54", company: "FinanceInnovate", position: "Analista Financiero", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "55", company: "SupplyChainExperts", position: "Especialista en Cadena de Suministro", salary: "$60,000 - $70,000", schedule: "Tiempo completo" },
    { id: "56", company: "SmartCitiesTech", position: "Ingeniero en Ciudades Inteligentes", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "57", company: "DigitalHealthSolutions", position: "Desarrollador de Aplicaciones de Salud", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "58", company: "EcoFriendlyDesign", position: "Arquitecto Sostenible", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "59", company: "InnoMarketing", position: "Especialista en Marketing Innovador", salary: "$55,000 - $65,000", schedule: "Medio tiempo" },
    { id: "60", company: "SolarEnergyInnovate", position: "Ingeniero Solar", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "61", company: "TechSavvySolutions", position: "Consultor Tecnológico", salary: "$80,000 - $90,000", schedule: "Tiempo completo" },
    { id: "62", company: "FutureFinance", position: "Analista de Inversiones", salary: "$70,000 - $80,000", schedule: "Tiempo completo" },
    { id: "63", company: "LogisticsMasters", position: "Especialista en Logística Internacional", salary: "$65,000 - $75,000", schedule: "Tiempo completo" },
    { id: "64", company: "TechInnovate", position: "Ingeniero de Redes", salary: "$75,000 - $85,000", schedule: "Tiempo completo" },
    { id: "65", company: "DigitalCommerce", position: "Desarrollador de Comercio Electrónico", salary: "$60,000 - $70,000", schedule: "Tiempo completo" },
  ]);
  const [jobList, setJobList] = useState(originalJobList);
  const drawerRef = useRef(null);

  useEffect(() => {
    setJobList(originalJobList);
  }, [originalJobList]);

  const openDrawer = () => {
    drawerRef.current && drawerRef.current.openDrawer();
  };

  const navigationView = (
    <View style={styles.navigationContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.navigationText}>Mi Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Empleos")}>
        <Text style={styles.navigationText}>Buscar Empleo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Configuration")}>
        <Text style={styles.navigationText}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.navigationText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );

  const renderJobCard = ({ item }) => (
    <TouchableOpacity
      style={styles.jobCard}
      onPress={() => navigation.navigate("JobDetails", { jobDetails: item })}
    >
      <Text style={styles.companyName}>{item.company}</Text>
      <Text style={styles.position}>{item.position}</Text>
      <Text style={styles.salary}>{item.salary}</Text>
      <Text style={styles.schedule}>{item.schedule}</Text>
    </TouchableOpacity>
  );

  const handleSearch = () => {
    const filteredJobs = originalJobList.filter(
      (job) =>
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.position.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setJobList(filteredJobs);
  };

  const resetJobList = () => {
    setSearchQuery("");
    setJobList(originalJobList);
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
          <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
            <Text style={styles.menuButtonText}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Buscar Empleo</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar empleo..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetButton} onPress={resetJobList}>
            <Text style={styles.resetButtonText}>Restablecer</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={jobList}
          keyExtractor={(item) => item.id}
          renderItem={renderJobCard}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  // Estilos compartidos con otras vistas

  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 10,
    borderRadius: 5,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resetButton: {
    marginLeft: 10,
    backgroundColor: "#e74c3c",
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  jobCard: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  position: {
    fontSize: 16,
    marginBottom: 5,
  },
  salary: {
    fontSize: 14,
    color: "#27ae60",
    marginBottom: 5,
  },
  schedule: {
    fontSize: 14,
    color: "#3498db",
  },
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
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
  navigationContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    margin: 20,
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

export default JobSearchScreen;
