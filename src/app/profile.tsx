import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            SE
          </Text>
        </View>
        <Text style={styles.name}>
          steve eddy
        </Text>
        <Text style={styles.matricule}>
          Matriculation No: uba22E0288
        </Text>
      </View>
      <View style={styles.card}>
        <Info
          label="Programme"
          value="M.Eng"
        />
        <Info
          label="Level"
          value="300"
        />
        <Info
          label="Department"
          value="Computer Engineering"
        />
        <Info
          label="School"
          value="National Higher Polytechnic Institute bamenda (NAHPI)"
        />
        <Info
          label="Academic Session"
          value="2026/2027"
        />
        <Info
          label="Email"
          value="fotsoeddysteve@nahpi.cm"
        />
        <Info
          label="Phone"
          value="+237 6XX XXX XXX"
        />
        <Info
          label="Lecturer"
          value="fotso eddy steve"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            "Edit Profile",
            "Profile editing will be available soon."
          )
        }
      >
        <Text style={styles.buttonText}>
          EDIT PROFILE
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.info}>
      <Text style={styles.label}>
        {label}
      </Text>
      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  profileHeader: {
    alignItems: "center",
    backgroundColor: "#1b5e20",
    padding: 30,
    borderRadius: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  name: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 12,
  },
  matricule: {
    color: "white",
    marginTop: 5,
  },
  card: {
    backgroundColor: "white",
    marginTop: 15,
    padding: 20,
    borderRadius: 12,
  },
  info: {
    marginBottom: 18,
  },
  label: {
    color: "#666",
    fontSize: 14,
  },
  value: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#1b5e20",
    padding: 16,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
