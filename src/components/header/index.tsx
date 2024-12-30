import {Pressable, Text, View} from "react-native";
import {Feather, Ionicons} from "@expo/vector-icons";

export function Header() {
    return (
        <View className="w-full flex flex-row items-center justify-between">
            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Ionicons name="menu" size={16} color="#030712"/>
            </Pressable>

            <View className="flex flex-col items-center justify-center">
                <Text className="text-center text-sm text-slate-800">Localização</Text>

                <View className="flex-row items-center justify-center gap-1">
                    <Feather name="map-pin" size={14} color="#FF0000" />
                    <Text className="text-lg font-bold">Porto Velho</Text>
                </View>
            </View>

            <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                <Feather name="bell" size={20} color="#030712"/>
            </Pressable>
        </View>
    )
}