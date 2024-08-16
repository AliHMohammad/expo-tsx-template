import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    const [count, setCount] = React.useState(0);

    return (
        <View className="flex-1 flex-column items-center justify-around ">
            <Text className="text-3xl text-center ">Hello Ali</Text>
            <View className="flex-column items-center justify-around space-y-5">
                <View>
                    <Text className="text-xl">Count: {count}</Text>
                </View>
                <View className="flex-row ">
                    <Button color="red" title="Decrease" onPress={() => setCount((prev) => prev - 1)} />
                    <Button title="Increase" onPress={() => setCount((prev) => prev + 1)} />
                </View>
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
