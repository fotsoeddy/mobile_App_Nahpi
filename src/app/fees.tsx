import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

interface Payment {
  date: string;
  description: string;
  amount: string;
  status: string;
  reference: string;
}

const payments: Payment[] = [
  {
    date: "12/09/2026",
    description: "First Installment Tuition",
    amount: "250,000 FCFA",
    status: "Paid",
    reference: "NAHPI-PAY-2026-0042",
  },
  {
    date: "15/09/2026",
    description: "Annual Registration & Matriculation",
    amount: "25,000 FCFA",
    status: "Paid",
    reference: "NAHPI-REG-2026-1108",
  },
  {
    date: "20/09/2026",
    description: "Polytechnic Engineering Lab Fee",
    amount: "35,000 FCFA",
    status: "Paid",
    reference: "NAHPI-LAB-2026-0891",
  },
  {
    date: "25/09/2026",
    description: "Library & Computing Facilities",
    amount: "15,000 FCFA",
    status: "Paid",
    reference: "NAHPI-LIB-2026-0422",
  },
];

export default function Fees() {
  const handlePayment = () => {
    Alert.alert(
      "NAHPI Payment Portal",
      "Mobile Money (MTN MoMo & Orange Money) and Bank Transfer gateway will open for the second installment soon."
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Institution Banner */}
      <View style={styles.banner}>
        <Text style={styles.institution}>
          National Higher Polytechnic Institute Bamenda (NAHPI)
        </Text>
        <Text style={styles.title}>School Fees & Payments</Text>
        <Text style={styles.subtitle}>B.Eng. Computer Engineering</Text>
      </View>

      {/* Lecturer & Department verification */}
      <View style={styles.deptCard}>
        <Text style={styles.deptLabel}>Department & Course Oversight</Text>
        <Text style={styles.lecturerName}>Lecturer: Fotso Eddy Steve</Text>
        <Text style={styles.deptInfo}>
          NAHPI Bamenda • Academic Session 2026/2027
        </Text>
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.label}>Outstanding Balance</Text>
        <Text style={styles.balance}>75,000 FCFA</Text>
        <Text style={styles.session}>2nd Installment Due: 15 January 2027</Text>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>PAY FEES ONLINE</Text>
      </TouchableOpacity>

      {/* Payment History */}
      <Text style={styles.sectionTitle}>Payment Receipts</Text>
      {payments.map((payment, index) => (
        <View key={index} style={styles.paymentCard}>
          <View style={styles.paymentHeader}>
            <Text style={styles.description}>{payment.description}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{payment.status}</Text>
            </View>
          </View>
          <Text style={styles.paymentMeta}>Ref: {payment.reference}</Text>
          <View style={styles.paymentFooter}>
            <Text style={styles.paymentDate}>📅 {payment.date}</Text>
            <Text style={styles.paymentAmount}>{payment.amount}</Text>
          </View>
        </View>
      ))}

      <View style={styles.footerNote}>
        <Text style={styles.footerText}>
          University of Bamenda • NAHPI Bursary Office
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
  deptCard: {
    backgroundColor: "#e8f5e9",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#2e7d32",
  },
  deptLabel: {
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
  deptInfo: {
    fontSize: 12,
    color: "#4e7d52",
    marginTop: 2,
  },
  balanceCard: {
    backgroundColor: "#2e7d32",
    padding: 22,
    borderRadius: 12,
    marginBottom: 12,
  },
  label: {
    color: "#c8e6c9",
    fontSize: 14,
    fontWeight: "600",
  },
  balance: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 6,
  },
  session: {
    color: "#e8f5e9",
    fontSize: 12,
  },
  payButton: {
    backgroundColor: "#1565c0",
    padding: 16,
    borderRadius: 10,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  payText: {
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1b5e20",
  },
  paymentCard: {
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
  paymentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  description: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222222",
    flex: 1,
  },
  statusBadge: {
    backgroundColor: "#e8f5e9",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  statusText: {
    color: "#1b5e20",
    fontWeight: "bold",
    fontSize: 11,
  },
  paymentMeta: {
    fontSize: 11,
    color: "#777777",
    marginBottom: 8,
  },
  paymentFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 8,
  },
  paymentDate: {
    fontSize: 12,
    color: "#555555",
  },
  paymentAmount: {
    fontSize: 15,
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

