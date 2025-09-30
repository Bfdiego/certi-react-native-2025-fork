import { Children, ReactNode, useState } from "react";
import { SectionSkills } from "./components/Section";
import { CardProfile } from "./components/Profile";
import { Hobbies } from "./components/Hobbies";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ListRenderItem,
  FlatList,
} from "react-native";
import { Task } from "./components/Task";
import { Skills } from "./components/Skills";

const getGreeting = (): string => {
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  if (hour < 6) return `${hour}:${minutes} No molestes`;
  if (hour < 12) return `${hour}:${minutes} Buenos días`;
  if (hour < 18) return `${hour}:${minutes} Buenas tardes`;
  return `${hour}:${minutes} Buenas noches`;
};


export default function App() {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.greeting}>{getGreeting()},</Text>
          <Text style={styles.heroTitle}>Paul Landaeta</Text>
          <Text style={styles.heroSubtitle}>
            Docente de ISC y desarrollador de software full-stack.
          </Text>
        </View>
        <CardProfile />
        <Skills />
        <Hobbies />
        <Task />
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  safeArea: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: { padding: 20 },
  header: { marginBottom: 24 },
  greeting: { fontSize: 16, color: "#475569", fontWeight: "600" },
  heroTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#0f172a",
    marginTop: 4,
  },
  heroSubtitle: {
    marginTop: 10,
    color: "#475569",
    lineHeight: 20,
  },
  skillGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    paddingHorizontal: 10,
    backgroundColor: "#2563eb",
    marginHorizontal: 3,
    paddingVertical: 4,
    borderRadius: 15,
  },
  textSkill: {
    color: "white",
    fontWeight: 600,
  },
});
