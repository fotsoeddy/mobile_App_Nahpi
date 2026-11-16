import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

const courses = [
  {
    code: "CSC 3101",
    name: "Database Systems",
    credit: 3,
    lecturer: "fotso eddy steve",
  },
  {
    code: "CSC 3102",
    name: "Operating Systems",
    credit: 3,
    lecturer: "fotso eddy steve",
  },
  {
    code: "CSC 3103",
    name: "Computer Networks",
    credit: 3,
    lecturer: "fotso eddy steve",
  },
  {
    code: "CSC 3104",
    name: "Software Engineering",
    credit: 3,
    lecturer: "fotso eddy steve",
  },
];

export default function Courses() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Registered Courses
      </Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.code}>
              {item.code}
            </Text>
            <Text style={styles.name}>
              {item.name}
            </Text>
            <Text>
              Credit: {item.credit}
            </Text>
            <Text>
              Lecturer: {item.lecturer}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
  },
  code: {
    fontWeight: "bold",
    fontSize: 16,
  },
  name: {
    fontSize: 16,
    marginVertical: 5,
  },
});
