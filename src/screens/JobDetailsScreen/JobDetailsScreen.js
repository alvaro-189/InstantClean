import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";

const JobDetailsScreen = ({ route }) => {
  const { jobDetails } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.companyName}>{jobDetails.company}</Text>
        <Text style={styles.position}>{jobDetails.position}</Text>
        <Text style={styles.salary}>{jobDetails.salary}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Descripción del trabajo</Text>
        <Text style={styles.jobDescription}>{jobDetails.description}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Requisitos</Text>
        <Text style={styles.requirements}>{jobDetails.requirements}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Beneficios</Text>
        <Text style={styles.benefits}>{jobDetails.benefits}</Text>
      </View>

      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Aplicar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  position: {
    fontSize: 18,
    color: "#555",
  },
  salary: {
    fontSize: 16,
    color: "#555",
  },
  detailsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  jobDescription: {
    fontSize: 16,
    color: "#555",
  },
  requirements: {
    fontSize: 16,
    color: "#555",
  },
  benefits: {
    fontSize: 16,
    color: "#555",
  },
  applyButton: {
    backgroundColor: "#3498db",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  applyButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default JobDetailsScreen;
