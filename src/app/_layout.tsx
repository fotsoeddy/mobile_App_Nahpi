import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1b5e20",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          title: "Login",
        }}
      />
      <Stack.Screen
        name="dashboard"
        options={{
          title: "NAHPI Dashboard",
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="courses"
        options={{
          title: "Registered Courses",
        }}
      />
      <Stack.Screen
        name="results"
        options={{
          title: "Academic Results",
        }}
      />
      <Stack.Screen
        name="fees"
        options={{
          title: "Fees & Payments",
        }}
      />
      <Stack.Screen
        name="timetable"
        options={{
          title: "Lecture Timetable",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Student & Lecturer Profile",
        }}
      />
      <Stack.Screen
        name="announcements"
        options={{
          title: "NAHPI Announcements",
        }}
      />
    </Stack>
  );
}

