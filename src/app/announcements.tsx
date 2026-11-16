import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

interface Announcement {
  title: string;
  date: string;
  author: string;
  priority: "High" | "Normal";
  message: string;
}

const announcements: Announcement[] = [
  {
    title: "Mobile App Development Practical Assignment",
    date: "14 November 2026",
    author: "Lecturer: Fotso Eddy Steve",
    priority: "High",
    message:
      "All Level 300 Computer Engineering students must complete and submit the React Native Expo mobile portal application. Ensure all screens display and your lecturer details are verified.",
  },
  {
    title: "NAHPI Continuous Assessment (CA) Test Schedule",
    date: "10 November 2026",
    author: "Fotso Eddy Steve • Dept. of Computer & Software Engineering",
    priority: "High",
    message:
      "The mid-semester Continuous Assessment tests for CEN 3101 and CEN 3102 will be conducted in Computer Lab 1. Please adhere strictly to your timetable slots.",
  },
  {
    title: "NAHPI Engineering Innovation & Robotics Exhibition",
    date: "28 October 2026",
    author: "National Higher Polytechnic Institute Administration",
    priority: "Normal",
    message:
      "NAHPI will host its annual Engineering Innovation Exhibition at Bambili Campus. Computer Engineering student projects will be evaluated by faculty panels.",
  },
  {
    title: "Library Digital Resource Access",
    date: "15 October 2026",
    author: "NAHPI Library & ICT Directorate",
    priority: "Normal",
    message:
      "Students can now access IEEE Xplore, ACM Digital Library, and Springer engineering journals using their NAHPI student portal credentials.",
  },
];

export default function Announcements() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.institution}>
          National Higher Polytechnic Institute Bamenda (NAHPI)
        </Text>
        <Text style={styles.title}>Campus Notices & Announcements</Text>
        <Text style={styles.subtitle}>
          Department of Computer & Software Engineering
        </Text>
      </View>

      {/* Lecturer Notice */}
      <View style={styles.lecturerCard}>
        <Text style={styles.lecturerTag}>Course Lecturer & Coordinator</Text>
        <Text style={styles.lecturerName}>Fotso Eddy Steve</Text>
        <Text style={styles.lecturerDept}>
          National Higher Polytechnic Institute Bamenda (NAHPI)
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Recent Notifications</Text>

      {announcements.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.heading}>{item.title}</Text>
            {item.priority === "High" && (
              <View style={styles.priorityBadge}>
                <Text style={styles.priorityText}>URGENT</Text>
              </View>
            )}
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.date}>📅 {item.date}</Text>
            <Text style={styles.author}>✍️ {item.author}</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.message}>{item.message}</Text>
        </View>
      ))}

      <View style={styles.footerNote}>
        <Text style={styles.footerText}>
          NAHPI University of Bamenda • Official Notice Board
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f5",
    padding: 16,
  },
  banner: {
    backgroundColor: "#1b5e20",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  institution: {
    color: "#a5d6a7",
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 4,
  },
  subtitle: {
    color: "#c8e6c9",
    fontSize: 13,
    marginTop: 2,
  },
  lecturerCard: {
    backgroundColor: "#e8f5e9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#2e7d32",
  },
  lecturerTag: {
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#2e7d32",
    letterSpacing: 0.5,
  },
  lecturerName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#1b5e20",
    marginTop: 2,
  },
  lecturerDept: {
    fontSize: 12,
    color: "#4e7d52",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1b5e20",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
    flex: 1,
    marginRight: 8,
  },
  priorityBadge: {
    backgroundColor: "#ffebee",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  priorityText: {
    color: "#c62828",
    fontSize: 10,
    fontWeight: "bold",
  },
  metaRow: {
    marginTop: 6,
    marginBottom: 8,
  },
  date: {
    color: "#777777",
    fontSize: 11,
  },
  author: {
    color: "#1b5e20",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    lineHeight: 21,
    color: "#333333",
  },
  footerNote: {
    paddingVertical: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 11,
    color: "#888888",
  },
});

