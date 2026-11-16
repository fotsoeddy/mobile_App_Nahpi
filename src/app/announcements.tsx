import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const announcements = [
  {
    title: "Course Registration",
    date: "03 October 2026",
    message:
      "Students are reminded to complete their course registration for the 2026/2027 academic session.",
  },
  {
    title: "Examination Timetable",
    date: "28 September 2026",
    message:
      "The examination timetable is now available. Students are advised to check their respective schedules.",
  },
  {
    title: "Library Services",
    date: "25 September 2026",
    message:
      "Students can now access additional digital resources through the university library.",
  },
  {
    title: "Student Orientation",
    date: "20 September 2026",
    message:
      "Orientation activities for new students will take place according to the university academic calendar.",
  },
];

export default function Announcements() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Announcements
      </Text>
      {announcements.map((item, index) => (
        <View
          key={index}
          style={styles.card}
        >
          <Text style={styles.heading}>
            {item.title}
          </Text>
          <Text style={styles.date}>
            {item.date}
          </Text>
          <Text style={styles.message}>
            {item.message}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    color: "#666",
    marginTop: 5,
    marginBottom: 10,
  },
  message: {
    fontSize: 15,
    lineHeight: 22,
  },
});
