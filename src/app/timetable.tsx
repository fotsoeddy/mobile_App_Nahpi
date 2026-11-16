import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const timetable = [
  {
    day: "Monday",
    time: "08:00 - 10:00",
    course: "Database Systems",
    room: "AN8",
    lecturer: "fotso eddy steve",
  },
  {
    day: "Monday",
    time: "10:00 - 12:00",
    course: "Computer Networks",
    room: "Lab 1",
    lecturer: "fotso eddy steve",
  },
  {
    day: "Tuesday",
    time: "08:00 - 10:00",
    course: "Software Engineering",
    room: "AN6",
    lecturer: "fotso eddy steve",
  },
  {
    day: "Wednesday",
    time: "10:00 - 12:00",
    course: "Web Development",
    room: "Software Lab",
    lecturer: "fotso eddy steve",
  },
  {
    day: "Thursday",
    time: "08:00 - 10:00",
    course: "Operating Systems",
    room: "AN8",
    lecturer: "fotso eddy steve",
  },
  {
    day: "Friday",
    time: "10:00 - 12:00",
    course: "Computer Security",
    room: "Lab 2",
    lecturer: "fotso eddy steve",
  },
];

export default function Timetable() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Class Timetable
      </Text>
      <Text style={styles.session}>
        Second Semester — 2026/2027
      </Text>
      {timetable.map((item, index) => (
        <View
          key={index}
          style={styles.card}
        >
          <Text style={styles.day}>
            {item.day}
          </Text>
          <Text style={styles.course}>
            {item.course}
          </Text>
          <Text>
            Time: {item.time}
          </Text>
          <Text>
            Venue: {item.room}
          </Text>
          <Text>
            Lecturer: {item.lecturer}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  session: {
    marginTop: 5,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
  },
  day: {
    fontSize: 18,
    fontWeight: "bold",
  },
  course: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 8,
  },
});
