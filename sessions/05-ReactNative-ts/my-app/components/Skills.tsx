import { Children, ReactNode, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SectionSkills } from "./Section";

type Skill = {
  id: string;
  name: string;
};

const skills: Skill[] = [
  { id: "1", name: "JavaScript" },
  { id: "2", name: "TypeScript" },
  { id: "3", name: "React" },
];

export const Skills = () => {
    return (
        <SectionSkills
                  title="Habilidades"
                  description="Mis habilidades que dicen que se"
                >
                  <View style={styles.skillGroup}>
                    {skills.map((skill) => {
                      return (
                        <View style={styles.skill}>
                          <Text style={styles.textSkill}>{skill.name}</Text>
                        </View>
                      );
                    })}
                  </View>
                </SectionSkills>
    );
}

const styles = StyleSheet.create({  
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
