import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { SectionSkills } from "./Section";

type TaskType = {
  id: string;
  title: string;
  description: string;
};

const tasks: TaskType[] = [
  { id: "1", title: "Hacer la tarea", description: "Hacer la tarea de matemáticas" },
  { id: "2", title: "Estudiar para el examen", description: "Estudiar para el examen de historia" },
  { id: "3", title: "Ir al supermercado", description: "Comprar comida para la semana" },
];

export const Task: React.FC = () => {
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);

  const toggleTask = (id: string) => {
    setCompletedTaskIds(prev =>
      prev.includes(id) ? prev.filter(taskId => taskId !== id) : [...prev, id]
    );
  }; 

  const renderTask: ListRenderItem<TaskType> = ({ item }) => {
    const isCompleted = completedTaskIds.includes(item.id);
    return (
      <TouchableOpacity
        onPress={() => toggleTask(item.id)}
        style={[styles.tasksCard, isCompleted && styles.tasksCardCompleted]}
      >
        <Text style={[styles.taskTitle, isCompleted && styles.taskTitleCompleted]}>
          {item.title}
        </Text>
        <Text style={[styles.taskDescription, isCompleted && styles.taskDescriptionCompleted]}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SectionSkills title="Task" description="Mis tareas">
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
    </SectionSkills>
  );
};

const styles = StyleSheet.create({
  tasksCard: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
  },
  tasksCardCompleted: {
    backgroundColor: "#bbf7d0",
    borderColor: "#22c55e",
    borderWidth: 2,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDescription: {
    fontSize: 14,
    color: "#666",
  },
  taskTitleCompleted: {
    color: "#065f46",
    textDecorationLine: "line-through",
  },
  taskDescriptionCompleted: {
    color: "#047857",
  },
});