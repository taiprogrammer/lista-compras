import { StatusBar } from "expo-status-bar";
import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import { styles } from "@/app/Home/styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "../components/Item";
import { useState } from "react";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

const ITEMS = [
  {
    id: "1",
    status: FilterStatus.PENDING,
    description: "Café",
  },
  {
    id: "2",
    status: FilterStatus.PENDING,
    description: "Arroz",
  },
  {
    id: "3",
    status: FilterStatus.PENDING,
    description: "Feijão",
  },
  {
    id: "4",
    status: FilterStatus.PENDING,
    description: "Tomate",
  },
  {
    id: "5",
    status: FilterStatus.PENDING,
    description: "Alface",
  },
  {
    id: "6",
    status: FilterStatus.PENDING,
    description: "Ração",
  },
];

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>(FilterStatus.PENDING);

  function handleUpdate(value: FilterStatus) {
    setFilter(value);
  }
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" activeOpacity={0.8} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.filters}>
            {FILTER_STATUS.map((status) => (
              <Filter
                key={status}
                status={status}
                isActive={filter === status}
                onPress={() => handleUpdate(status)}
              />
            ))}
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={{
                status: item.status,
                description: item.description,
              }}
              onRemove={() => {
                console.log("Item removido");
              }}
              onStatusChange={() => {
                console.log("Status do item alterado");
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item encontrado.</Text>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
