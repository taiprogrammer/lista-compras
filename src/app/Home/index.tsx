import { StatusBar } from "expo-status-bar";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { styles } from "@/app/Home/styles";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Filter } from "../components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "../components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export function Home() {
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
              <Filter key={status} status={status} isActive={true} />
            ))}
          </View>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <Item
          data={{
            status: FilterStatus.PENDING,
            description: "Exemplo de item",
          }}
          onRemove={() => {
            console.log("Item removido");
          }}
          onStatusChange={() => {
            console.log("Status do item alterado");
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
