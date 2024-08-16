import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { DarkModeSwitch } from "./components/Switch";
import { Counter } from "./components/Counter";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    return (
        <View className="flex-1 items-center justify-center dark:bg-slate-800 ">
            <View className="flex-1">
                <Text className="mt-24 text-3xl text-center ">Hello Ali</Text>
            </View>
            <View className="flex-1 space-y-5 items-center">
                <Text>Toggle Dark-mode</Text>
                <DarkModeSwitch />
            </View>
            <View className="flex-1">
                <Counter />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
