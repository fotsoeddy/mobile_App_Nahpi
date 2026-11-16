import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

interface ResultItem {
  code: string;
  course: string;
  credit: number;
  score: number;
  grade: string;
  lecturer: string;
}

const results: ResultItem[] = [
  {
    code: "CEN 3101",
    course: "Mobile Application Development",
    credit: 4,
    score: 82,
    grade: "A",
    lecturer: "Fotso Eddy Steve",
  },
  {
    code: "CEN 3102",
    course: "Database Systems & Admin",
    credit: 3,
    score: 76,
    grade: "A",
    lecturer: "Fotso Eddy Steve",
  },
  {
    code: "CEN 3103",
    course: "Computer Networks & Security",
    credit: 3,
    score: 68,
    grade: "B+",
    lecturer: "Fotso Eddy Steve",
  },
  {
    code: "CEN 3104",
    course: "Software Engineering Architecture",
    credit: 3,
    score: 79,
    grade: "A",
    lecturer: "Fotso Eddy Steve",
  },
  {
    code: "MAT 3101",
    course: "Applied Numerical Analysis",
    credit: 3,
    score: 65,
    grade: "B",
    lecturer: "Fotso Eddy Steve",
  },
];

export default function Results() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerCard}>
        <Text style={styles.institution}>
          National Higher Polytechnic Institute Bamenda (NAHPI)
        </Text>
        <Text style={styles.title}>Academic Statement of Results</Text>
        <Text style={styles.subtitle}>
          B.Eng. Computer Engineering • Level 300
        </Text>
      </View>

      {/* Lecturer Signature Banner */}
      <View style={styles.lecturerNote}>
        <Text style={styles.lecturerTitle}>Course Lecturer & Examiner</Text>
        <Text style={styles.lecturerName}>Fotso Eddy Steve</Text>
        <Text style={styles.lecturerInfo}>
          Department of Computer & Software Engineering, NAHPI
        </Text>
      </View>

      {/* GPA Summary Card */}
      <View style={styles.summary}>
        <View style={styles.summaryHeader}>
          <Text style={styles.summaryTitle}>2025/2026 Academic Session</Text>
          <Text style={styles.semester}>Second Semester Examination</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Total Credits</Text>
            <Text style={styles.statNumber}>16</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Semester GPA</Text>
            <Text style={styles.gpa}>3.58</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Status</Text>
            <Text style={styles.statusPass}>PASS</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionHeading}>Course Breakdown</Text>

      {results.map((item) => (
        <View key={item.code} style={styles.card}>
          <View style={styles.row}>
            <View style={styles.courseInfo}>
              <View style={styles.codeRow}>
                <Text style={styles.code}>{item.code}</Text>
                <Text style={styles.creditBadge}>{item.credit} Credits</Text>
              </View>
              <Text style={styles.course}>{item.course}</Text>
              <Text style={styles.lecturerText}>
                Lecturer: {item.lecturer}
              </Text>
            </View>

            <View style={styles.gradeBox}>
              <Text style={styles.score}>{item.score}%</Text>
              <View
                style={[
                  styles.gradeBadge,
                  item.grade.startsWith("A")
                    ? styles.gradeA
                    : styles.gradeB,
                ]}
              >
                <Text style={styles.gradeText}>{item.grade}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}

      <View style={styles.footerNote}>
        <Text style={styles.footerText}>
          Certified by NAHPI Examination Board • Bamenda
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
  headerCard: {
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
  lecturerNote: {
    backgroundColor: "#e8f5e9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#2e7d32",
  },
  lecturerTitle: {
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
  summary: {
    backgroundColor: "#2e7d32",
    padding: 18,
    borderRadius: 12,
    marginBottom: 16,
  },
  summaryHeader: {
    marginBottom: 12,
  },
  summaryTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  semester: {
    color: "#c8e6c9",
    fontSize: 12,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingVertical: 12,
    borderRadius: 8,
  },
  statBox: {
    alignItems: "center",
  },
  statLabel: {
    color: "#c8e6c9",
    fontSize: 11,
    fontWeight: "600",
  },
  statNumber: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 2,
  },
  gpa: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 2,
  },
  statusPass: {
    color: "#a5d6a7",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1b5e20",
    marginBottom: 10,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseInfo: {
    flex: 1,
    marginRight: 10,
  },
  codeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  code: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#1b5e20",
  },
  creditBadge: {
    fontSize: 11,
    color: "#666666",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  course: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222222",
    marginVertical: 4,
  },
  lecturerText: {
    fontSize: 12,
    color: "#666666",
  },
  gradeBox: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 55,
  },
  score: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555555",
    marginBottom: 4,
  },
  gradeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  gradeA: {
    backgroundColor: "#e8f5e9",
  },
  gradeB: {
    backgroundColor: "#e3f2fd",
  },
  gradeText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1b5e20",
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

