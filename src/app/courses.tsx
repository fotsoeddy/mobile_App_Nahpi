import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

interface Course {
  code: string;
  name: string;
  credit: number;
  lecturer: string;
  department: string;
  semester: string;
}

const courses: Course[] = [
  {
    code: "CEN 3101",
    name: "Mobile Application Development",
    credit: 4,
    lecturer: "Fotso Eddy Steve",
    department: "Computer & Software Engineering",
    semester: "First Semester",
  },
  {
    code: "CEN 3102",
    name: "Database Systems & Administration",
    credit: 3,
    lecturer: "Fotso Eddy Steve",
    department: "Computer & Software Engineering",
    semester: "First Semester",
  },
  {
    code: "CEN 3103",
    name: "Computer Networks & Security",
    credit: 3,
    lecturer: "Fotso Eddy Steve",
    department: "Computer & Software Engineering",
    semester: "First Semester",
  },
  {
    code: "CEN 3104",
    name: "Software Engineering & Architecture",
    credit: 3,
    lecturer: "Fotso Eddy Steve",
    department: "Computer & Software Engineering",
    semester: "First Semester",
  },
];

export default function Courses() {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.institution}>
          National Higher Polytechnic Institute Bamenda (NAHPI)
        </Text>
        <Text style={styles.pageTitle}>Registered Courses</Text>
        <Text style={styles.pageSubtitle}>
          B.Eng. Computer Engineering • Level 300
        </Text>
      </View>

      {/* Lecturer Notice */}
      <View style={styles.lecturerBanner}>
        <Text style={styles.lecturerBadge}>Course Instructor</Text>
        <Text style={styles.lecturerName}>Lecturer: Fotso Eddy Steve</Text>
        <Text style={styles.lecturerInfo}>
          NAHPI Bamenda • Dept. of Computer & Software Engineering
        </Text>
      </View>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.code}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.codeBadge}>
                <Text style={styles.codeText}>{item.code}</Text>
              </View>
              <Text style={styles.creditText}>{item.credit} Credits</Text>
            </View>

            <Text style={styles.courseName}>{item.name}</Text>

            <View style={styles.divider} />

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Lecturer:</Text>
              <Text style={styles.detailValue}>{item.lecturer}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Department:</Text>
              <Text style={styles.detailValue}>{item.department}</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Semester:</Text>
              <Text style={styles.detailValue}>{item.semester}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7f5",
  },
  banner: {
    backgroundColor: "#1b5e20",
    padding: 16,
  },
  institution: {
    color: "#a5d6a7",
    fontSize: 12,
    fontWeight: "bold",
  },
  pageTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
  },
  pageSubtitle: {
    color: "#e8f5e9",
    fontSize: 13,
    marginTop: 2,
  },
  lecturerBanner: {
    backgroundColor: "#e8f5e9",
    marginHorizontal: 16,
    marginTop: 12,
    padding: 12,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#2e7d32",
  },
  lecturerBadge: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
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
  listContent: {
    padding: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  codeBadge: {
    backgroundColor: "#1b5e20",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  codeText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
  creditText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555555",
  },
  courseName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
    marginVertical: 4,
  },
  divider: {
    height: 1,
    backgroundColor: "#eeeeee",
    marginVertical: 8,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  detailLabel: {
    width: 85,
    fontSize: 12,
    color: "#777777",
  },
  detailValue: {
    flex: 1,
    fontSize: 12,
    fontWeight: "600",
    color: "#333333",
  },
});

