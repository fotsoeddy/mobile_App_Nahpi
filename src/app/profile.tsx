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
      {/* Student Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>EU</Text>
        </View>
        <Text style={styles.name}>Emmanuel Uwazie</Text>
        <Text style={styles.matricule}>Matriculation: NAHPI21CSC042</Text>
        <Text style={styles.institution}>
          National Higher Polytechnic Institute Bamenda (NAHPI)
        </Text>
      </View>

      {/* Lecturer & Supervisor Information Section */}
      <View style={styles.lecturerSection}>
        <View style={styles.lecturerHeaderRow}>
          <View style={styles.lecturerAvatar}>
            <Text style={styles.lecturerAvatarText}>FE</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.lecturerTag}>Course Lecturer & Academic Advisor</Text>
            <Text style={styles.lecturerName}>Fotso Eddy Steve</Text>
            <Text style={styles.lecturerRole}>
              Lecturer in Computer & Software Engineering
            </Text>
          </View>
        </View>

        <View style={styles.lecturerDivider} />

        <Info label="Lecturer Email" value="fotso.eddy@nahpi.cm" />
        <Info label="Lecturer Office" value="Office 204, NAHPI Complex, Bambili" />
        <Info
          label="Institution"
          value="National Higher Polytechnic Institute Bamenda (NAHPI)"
        />
        <Info label="Consultation Hours" value="Tue & Thu: 10:00 AM - 12:00 PM" />
      </View>

      {/* Student Academic Information */}
      <Text style={styles.sectionHeading}>Student Academic Records</Text>
      <View style={styles.card}>
        <Info
          label="Institution"
          value="National Higher Polytechnic Institute (NAHPI)"
        />
        <Info label="University" value="The University of Bamenda" />
        <Info label="Programme" value="B.Eng. Computer Engineering" />
        <Info label="Level" value="300" />
        <Info
          label="Department"
          value="Computer & Software Engineering"
        />
        <Info label="Academic Session" value="2026/2027" />
        <Info label="Student Email" value="student@nahpi.cm" />
        <Info label="Phone" value="+237 670 000 042" />
        <Info label="Assigned Lecturer" value="Fotso Eddy Steve" />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            "NAHPI Profile Services",
            "Student bio-data update is open at the NAHPI Registry Office."
          )
        }
      >
        <Text style={styles.buttonText}>UPDATE PROFILE INFORMATION</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpacer} />
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
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f5",
    padding: 16,
  },
  profileHeader: {
    alignItems: "center",
    backgroundColor: "#1b5e20",
    paddingVertical: 26,
    paddingHorizontal: 16,
    borderRadius: 14,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1b5e20",
  },
  name: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
  matricule: {
    color: "#c8e6c9",
    marginTop: 3,
    fontSize: 13,
  },
  institution: {
    color: "#a5d6a7",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 6,
    textAlign: "center",
  },
  lecturerSection: {
    backgroundColor: "#ffffff",
    marginTop: 14,
    padding: 18,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#2e7d32",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  lecturerHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  lecturerAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#e8f5e9",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2e7d32",
  },
  lecturerAvatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1b5e20",
  },
  lecturerTag: {
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#2e7d32",
    letterSpacing: 0.5,
  },
  lecturerName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1b5e20",
    marginTop: 1,
  },
  lecturerRole: {
    fontSize: 12,
    color: "#555555",
  },
  lecturerDivider: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginVertical: 12,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1b5e20",
    marginTop: 16,
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  info: {
    marginBottom: 14,
  },
  label: {
    color: "#777777",
    fontSize: 12,
    fontWeight: "500",
  },
  value: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222222",
    marginTop: 2,
  },
  button: {
    backgroundColor: "#1b5e20",
    padding: 16,
    borderRadius: 10,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    letterSpacing: 0.5,
  },
  bottomSpacer: {
    height: 30,
  },
});

