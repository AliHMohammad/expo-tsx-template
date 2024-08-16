import { Button, StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { Counter } from "./components/Counter";
NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    return (
        <View className="flex-1 bg-slate-100">
            <Counter />
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
