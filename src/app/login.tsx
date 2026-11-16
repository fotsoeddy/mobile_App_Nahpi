import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";

export default function Login() {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!matricule || !password) {
      Alert.alert(
        "Authentication Error",
        "Please enter your matriculation number and password."
      );
      return;
    }
    // Navigate to dashboard
    router.replace("/dashboard");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>NAHPI</Text>
        </View>

        <Text style={styles.title}>NAHPI Student Portal</Text>
        <Text style={styles.subtitle}>
          National Higher Polytechnic Institute Bamenda (NAHPI)
        </Text>
        <Text style={styles.university}>The University of Bamenda</Text>

        <View style={styles.lecturerCard}>
          <Text style={styles.lecturerTitle}>Course Lecturer</Text>
          <Text style={styles.lecturerName}>Fotso Eddy Steve</Text>
          <Text style={styles.lecturerDept}>
            Department of Computer & Software Engineering
          </Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.label}>Matriculation Number</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. NAHPI21CSC042"
            value={matricule}
            onChangeText={setMatricule}
            autoCapitalize="characters"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your portal password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>LOGIN TO PORTAL</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 National Higher Polytechnic Institute Bamenda (NAHPI)
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#f4f7f5",
  },
  badgeContainer: {
    alignSelf: "center",
    backgroundColor: "#1b5e20",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    marginBottom: 12,
  },
  badgeText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 2,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1b5e20",
    marginBottom: 4,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 2,
  },
  university: {
    textAlign: "center",
    fontSize: 13,
    color: "#666666",
    marginBottom: 20,
  },
  lecturerCard: {
    backgroundColor: "#e8f5e9",
    borderColor: "#c8e6c9",
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  lecturerTitle: {
    fontSize: 11,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#2e7d32",
    letterSpacing: 1,
  },
  lecturerName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1b5e20",
    marginTop: 2,
  },
  lecturerDept: {
    fontSize: 12,
    color: "#4e7d52",
    marginTop: 2,
    textAlign: "center",
  },
  formCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 14,
    marginBottom: 16,
    fontSize: 15,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: "#1b5e20",
    padding: 16,
    borderRadius: 8,
    marginTop: 5,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    marginTop: 25,
    alignItems: "center",
  },
  footerText: {
    fontSize: 11,
    color: "#888888",
    textAlign: "center",
  },
});

