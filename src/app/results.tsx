import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

const results = [
  {
    code: "CSC 2101",
    course: "Data Structures",
    credit: 3,
    score: 78,
    grade: "A",
  },
  {
    code: "CSC 2102",
    course: "Database Systems",
    credit: 3,
    score: 72,
    grade: "A",
  },
  {
    code: "CSC 2103",
    course: "Computer Networks",
    credit: 3,
    score: 65,
    grade: "B",
  },
  {
    code: "MAT 2101",
    course: "Statistics",
    credit: 3,
    score: 61,
    grade: "B",
  },
  {
    code: "ICT 2102",
    course: "Web Development",
    credit: 3,
    score: 74,
    grade: "A",
  },
];

export default function Results() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Academic Results
      </Text>
      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>
          2025/2026 Academic Session
        </Text>
        <Text>Semester: Second Semester</Text>
        <Text style={styles.gpa}>
          GPA: 3.42
        </Text>
      </View>
      {results.map((item) => (
        <View
          key={item.code}
          style={styles.card}
        >
          <View style={styles.row}>
            <View style={styles.courseInfo}>
              <Text style={styles.code}>
                {item.code}
              </Text>
              <Text style={styles.course}>
                {item.course}
              </Text>
              <Text>
                Credit: {item.credit}
              </Text>
            </View>
            <View style={styles.gradeBox}>
              <Text style={styles.score}>
                {item.score}
              </Text>
              <Text style={styles.grade}>
                {item.grade}
              </Text>
            </View>
          </View>
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
    marginBottom: 15,
  },
  summary: {
    backgroundColor: "#1b5e20",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  summaryTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  gpa: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseInfo: {
    flex: 1,
  },
  code: {
    fontWeight: "bold",
    fontSize: 15,
  },
  course: {
    fontSize: 16,
    marginVertical: 5,
  },
  gradeBox: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
  },
  grade: {
    fontSize: 16,
    marginTop: 3,
  },
});
