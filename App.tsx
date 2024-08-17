import { View, Image, StyleSheet, Dimensions, Text, SafeAreaView } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { ExploreScreen } from "./screens/Explore";
import { ProfileScreen } from "./screens/Profile";
import { RestaurantsScreen } from "./screens/Restaurants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantScreen } from "./screens/Restaurant";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export type RootStackParams = {
    Explore: undefined;
    Restaurants: undefined;
    Profile: undefined;
    // Vi angiver, at Restaurant endpoint får en parameter, name, med sig.
    // Det ville under normale omstændigheder være id, som vi senere bruger til at fetch.
    Restaurant: {
        name: string;
    };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

/*
 ** I App har du kun dine routes, hvor du også angiver initialRouteName, som er din startside.
 */

export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Explore">
                <RootStack.Screen name="Explore" component={ExploreScreen} />
                <RootStack.Screen name="Restaurants" component={RestaurantsScreen} />
                <RootStack.Screen name="Profile" component={ProfileScreen} />
                <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}


