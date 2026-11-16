import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

interface TimetableSlot {
  day: string;
  time: string;
  code: string;
  course: string;
  room: string;
  lecturer: string;
}

const timetable: TimetableSlot[] = [
  {
    day: "Monday",
    time: "08:00 - 10:00",
    code: "CEN 3101",
    course: "Mobile Application Development",
    room: "NAHPI Computer Lab 1",
    lecturer: "Fotso Eddy Steve",
  },
  {
    day: "Monday",
    time: "10:30 - 12:30",
    code: "CEN 3103",
    course: "Computer Networks & Security",
    room: "Amphi 250 - NAHPI",
    lecturer: "Fotso Eddy Steve",
  },
  {
    day: "Tuesday",
    time: "08:00 - 10:00",
    code: "CEN 3104",
    course: "Software Engineering & Architecture",
    room: "NAHPI Block B Room 12",
    lecturer: "Fotso Eddy Steve",
  },
  {
    day: "Wednesday",
    time: "10:00 - 13:00",
    code: "CEN 3101",
    course: "Mobile App Practical Workshop",
    room: "Software Engineering Lab",
    lecturer: "Fotso Eddy Steve",
  },
  {
    day: "Thursday",
    time: "08:00 - 10:00",
    code: "CEN 3102",
    course: "Database Systems & Administration",
    room: "Amphi 150 - NAHPI",
    lecturer: "Fotso Eddy Steve",
  },
  {
    day: "Friday",
    time: "14:00 - 16:00",
    code: "CEN 3102",
    course: "Database Lab & SQL Practical",
    room: "NAHPI Computer Lab 2",
    lecturer: "Fotso Eddy Steve",
  },
];

export default function Timetable() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.institution}>
          National Higher Polytechnic Institute Bamenda (NAHPI)
        </Text>
        <Text style={styles.title}>Lecture & Lab Timetable</Text>
        <Text style={styles.session}>
          First Semester 2026/2027 • B.Eng. Computer Engineering
        </Text>
      </View>

      {/* Lecturer Notice */}
      <View style={styles.lecturerNote}>
        <Text style={styles.lecturerLabel}>Course Lecturer</Text>
        <Text style={styles.lecturerName}>Fotso Eddy Steve</Text>
        <Text style={styles.lecturerInfo}>
          Department of Computer & Software Engineering, NAHPI
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Weekly Class Schedule</Text>

      {timetable.map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.dayBadge}>
              <Text style={styles.dayText}>{item.day}</Text>
            </View>
            <Text style={styles.timeText}>🕒 {item.time}</Text>
          </View>

          <Text style={styles.codeText}>{item.code}</Text>
          <Text style={styles.course}>{item.course}</Text>

          <View style={styles.metaRow}>
            <Text style={styles.venueText}>📍 Venue: {item.room}</Text>
          </View>

          <View style={styles.metaRow}>
            <Text style={styles.lecturerDetail}>
              👨‍🏫 Lecturer: {item.lecturer}
            </Text>
          </View>
        </View>
      ))}

      <View style={styles.footerNote}>
        <Text style={styles.footerText}>
          NAHPI Timetable & Academic Calendar Committee • Bambili
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f7f5",
  },
  header: {
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
  session: {
    color: "#c8e6c9",
    fontSize: 13,
    marginTop: 2,
  },
  lecturerNote: {
    backgroundColor: "#e8f5e9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#2e7d32",
  },
  lecturerLabel: {
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
  lecturerInfo: {
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
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  dayBadge: {
    backgroundColor: "#1b5e20",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
  },
  dayText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
  },
  timeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#444444",
  },
  codeText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2e7d32",
    marginTop: 4,
  },
  course: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222222",
    marginVertical: 4,
  },
  metaRow: {
    marginTop: 3,
  },
  venueText: {
    fontSize: 13,
    color: "#555555",
  },
  lecturerDetail: {
    fontSize: 13,
    color: "#1b5e20",
    fontWeight: "600",
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

