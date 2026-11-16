import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.institutionTag}>NAHPI • UB</Text>
          <TouchableOpacity
            style={styles.logoutBadge}
            onPress={() => router.replace("/login")}
          >
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>NAHPI Student Portal</Text>
        <Text style={styles.headerSubtitle}>
          National Higher Polytechnic Institute Bamenda
        </Text>
        <Text style={styles.welcomeText}>Welcome, Emmanuel Uwazie</Text>
      </View>

      {/* Lecturer Information Banner */}
      <View style={styles.lecturerCard}>
        <View style={styles.lecturerHeader}>
          <View style={styles.lecturerIconCircle}>
            <Text style={styles.lecturerIconText}>👨‍🏫</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={styles.lecturerRole}>Lecturer In-Charge</Text>
            <Text style={styles.lecturerName}>Fotso Eddy Steve</Text>
            <Text style={styles.lecturerDept}>
              Dept. of Computer & Software Engineering, NAHPI
            </Text>
          </View>
        </View>
        <View style={styles.lecturerDivider} />
        <View style={styles.lecturerDetailsRow}>
          <Text style={styles.lecturerMeta}>
            ✉️ fotso.eddy@nahpi.cm
          </Text>
          <Text style={styles.lecturerMeta}>
            📍 Office 204, NAHPI Bambili
          </Text>
        </View>
      </View>

      {/* Student Profile Card */}
      <View style={styles.studentCard}>
        <View style={styles.studentHeader}>
          <Text style={styles.studentName}>Emmanuel Uwazie</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeLabel}>Level 300</Text>
          </View>
        </View>
        <Text style={styles.studentInfo}>
          Matriculation No: <Text style={styles.infoBold}>NAHPI21CSC042</Text>
        </Text>
        <Text style={styles.studentInfo}>
          School:{" "}
          <Text style={styles.infoBold}>
            National Higher Polytechnic Institute (NAHPI)
          </Text>
        </Text>
        <Text style={styles.studentInfo}>
          Programme: <Text style={styles.infoBold}>B.Eng. Computer Engineering</Text>
        </Text>
        <Text style={styles.studentInfo}>
          Academic Year: <Text style={styles.infoBold}>2026/2027</Text>
        </Text>
      </View>

      {/* Grid of Navigation Buttons */}
      <Text style={styles.sectionTitle}>Portal Services</Text>
      <View style={styles.grid}>
        <MenuButton
          icon="📚"
          title="Courses"
          subtitle="4 Registered"
          onPress={() => router.push("/courses")}
        />
        <MenuButton
          icon="📊"
          title="Results"
          subtitle="GPA 3.42"
          onPress={() => router.push("/results")}
        />
        <MenuButton
          icon="💳"
          title="Fees"
          subtitle="Tuition & Pay"
          onPress={() => router.push("/fees")}
        />
        <MenuButton
          icon="🗓️"
          title="Timetable"
          subtitle="Weekly Schedule"
          onPress={() => router.push("/timetable")}
        />
        <MenuButton
          icon="👤"
          title="Profile"
          subtitle="Student & Staff"
          onPress={() => router.push("/profile")}
        />
        <MenuButton
          icon="📢"
          title="Announcements"
          subtitle="Latest Updates"
          onPress={() => router.push("/announcements")}
        />
      </View>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

function MenuButton({
  icon,
  title,
  subtitle,
  onPress,
}: {
  icon: string;
  title: string;
  subtitle: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <Text style={styles.menuIcon}>{icon}</Text>
      <Text style={styles.menuTitle}>{title}</Text>
      <Text style={styles.menuSubtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f5",
  },
  header: {
    backgroundColor: "#1b5e20",
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  institutionTag: {
    color: "#a5d6a7",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 1.5,
  },
  logoutBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  logoutText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  headerTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "#c8e6c9",
    fontSize: 13,
    marginTop: 2,
  },
  welcomeText: {
    color: "#ffffff",
    marginTop: 12,
    fontSize: 16,
    fontWeight: "600",
  },
  lecturerCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: -12,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#2e7d32",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  lecturerHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  lecturerIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#e8f5e9",
    justifyContent: "center",
    alignItems: "center",
  },
  lecturerIconText: {
    fontSize: 22,
  },
  lecturerRole: {
    fontSize: 11,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#2e7d32",
    letterSpacing: 0.5,
  },
  lecturerName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1b5e20",
  },
  lecturerDept: {
    fontSize: 12,
    color: "#555555",
  },
  lecturerDivider: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginVertical: 10,
  },
  lecturerDetailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 6,
  },
  lecturerMeta: {
    fontSize: 11,
    color: "#444444",
  },
  studentCard: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 12,
    padding: 18,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  studentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  studentName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222222",
  },
  badge: {
    backgroundColor: "#e8f5e9",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeLabel: {
    color: "#1b5e20",
    fontSize: 11,
    fontWeight: "bold",
  },
  studentInfo: {
    fontSize: 13,
    color: "#555555",
    marginBottom: 4,
  },
  infoBold: {
    color: "#222222",
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 8,
    color: "#1b5e20",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  menuButton: {
    width: "48%",
    backgroundColor: "#ffffff",
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  menuIcon: {
    fontSize: 26,
    marginBottom: 8,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222222",
  },
  menuSubtitle: {
    fontSize: 11,
    color: "#777777",
    marginTop: 2,
  },
  bottomSpacer: {
    height: 30,
  },
});

