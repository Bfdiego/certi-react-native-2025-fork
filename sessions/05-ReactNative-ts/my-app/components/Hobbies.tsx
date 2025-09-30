import React from "react";
import { View, Text, FlatList, StyleSheet, ListRenderItem } from "react-native";
import { SectionSkills } from "./Section"; 

type Hobby = {
  id: string;
  name: string;
  icon: string;
};

const hobbies: Hobby[] = [
  { id: "1", name: "Run", icon: "🏃‍♂️" },
  { id: "2", name: "Play sports", icon: "⚽" },
  { id: "3", name: "Hang out", icon: "👫" },
];

const renderHobby: ListRenderItem<Hobby> = ({ item }) => {
  return (
    <View style={styles.hobbyyCard}>
      <Text style={styles.iconText}>{item.icon}</Text>
      <Text style={styles.nameText}>{item.name}</Text>
    </View>
  );
};

export const Hobbies = () => {
  return (
    <SectionSkills title="Hobbies" description="Mis hobbies">
      <FlatList data={hobbies} renderItem={renderHobby} horizontal />
    </SectionSkills>
  );
};

const styles = StyleSheet.create({
  hobbyyCard: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: 160,
    height: 100,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  iconText: {
    fontSize: 32,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2929a3ff",
  },
});
