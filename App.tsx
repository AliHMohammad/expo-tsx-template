import { View, Image, StyleSheet, Dimensions, Text, SafeAreaView } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { ExploreScreen } from "./screens/Explore";
import { ProfileScreen } from "./screens/Profile";
import { RestaurantsScreen } from "./screens/Restaurants";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export default function App() {
    return <RestaurantsScreen />;

    return (
        <SafeAreaView className="flex-1 items-center justify-center dark:bg-slate-800 ">
            <View>
                <Text>Restaurants app</Text>
                <View>
                    <Text>Explore</Text>
                    <Text>Profile</Text>
                    <Text>Restaurants</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
