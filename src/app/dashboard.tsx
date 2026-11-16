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
        <Text style={styles.headerTitle}>
          NAHPI Student Portal
        </Text>
        <Text style={styles.headerSubtitle}>
          Welcome, steve eddy
        </Text>
      </View>
      <View style={styles.studentCard}>
        <Text style={styles.studentName}>
          steve eddy
        </Text>
        <Text>
          Matriculation No: uba22E0288
        </Text>
        <Text>
          Programme: M.Eng
        </Text>
        <Text>
          Level: 300
        </Text>
        <Text>
          Lecturer: fotso eddy steve
        </Text>
      </View>
      <Text style={styles.sectionTitle}>
        Student Services
      </Text>
      <View style={styles.grid}>
        <MenuButton
          title="Courses"
          onPress={() => router.push("/courses")}
        />
        <MenuButton
          title="Results"
          onPress={() => router.push("/results")}
        />
        <MenuButton
          title="Fees"
          onPress={() => router.push("/fees")}
        />
        <MenuButton
          title="Timetable"
          onPress={() => router.push("/timetable")}
        />
        <MenuButton
          title="Profile"
          onPress={() => router.push("/profile")}
        />
        <MenuButton
          title="Announcements"
          onPress={() => router.push("/announcements")}
        />
      </View>
    </ScrollView>
  );
}

function MenuButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={onPress}
    >
      <Text style={styles.menuText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#1b5e20",
    padding: 25,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerSubtitle: {
    color: "white",
    marginTop: 8,
  },
  studentCard: {
    backgroundColor: "white",
    margin: 15,
    padding: 20,
    borderRadius: 12,
  },
  studentName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginBottom: 5,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  menuButton: {
    width: "42%",
    backgroundColor: "white",
    margin: 10,
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
