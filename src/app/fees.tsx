import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const payments = [
  {
    date: "12/09/2026",
    description: "Tuition Fees",
    amount: "350,000 FCFA",
    status: "Paid",
  },
  {
    date: "15/09/2026",
    description: "Registration",
    amount: "25,000 FCFA",
    status: "Paid",
  },
  {
    date: "20/09/2026",
    description: "Library Fee",
    amount: "10,000 FCFA",
    status: "Paid",
  },
];

export default function Fees() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Fees & Payments
      </Text>
      <View style={styles.balanceCard}>
        <Text style={styles.label}>
          Outstanding Balance
        </Text>
        <Text style={styles.balance}>
          115,000 FCFA
        </Text>
        <Text style={styles.session}>
          2026/2027 Academic Session
        </Text>
      </View>
      <TouchableOpacity
        style={styles.payButton}
        onPress={() =>
          Alert.alert(
            "Payment",
            "Online payment will be available soon."
          )
        }
      >
        <Text style={styles.payText}>
          PAY FEES
        </Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>
        Payment History
      </Text>
      {payments.map((payment, index) => (
        <View
          key={index}
          style={styles.paymentCard}
        >
          <Text style={styles.description}>
            {payment.description}
          </Text>
          <Text>
            Date: {payment.date}
          </Text>
          <Text>
            Amount: {payment.amount}
          </Text>
          <Text style={styles.status}>
            {payment.status}
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
    marginBottom: 20,
  },
  balanceCard: {
    backgroundColor: "#1b5e20",
    padding: 25,
    borderRadius: 12,
  },
  label: {
    color: "white",
    fontSize: 16,
  },
  balance: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  session: {
    color: "white",
  },
  payButton: {
    backgroundColor: "#1565c0",
    padding: 16,
    borderRadius: 8,
    marginVertical: 15,
  },
  payText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  paymentCard: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 10,
    marginBottom: 10,
  },
  description: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 5,
  },
  status: {
    marginTop: 8,
    fontWeight: "bold",
  },
});
