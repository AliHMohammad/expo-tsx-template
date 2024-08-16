import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    return (
        <View className="flex-1 bg-red-500 items-center justify-center">
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />
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
