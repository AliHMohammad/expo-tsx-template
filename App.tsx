import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { ExploreScreen } from "./screens/Explore";
import { ProfileScreen } from "./screens/Profile";
import { RestaurantsScreen } from "./screens/Restaurants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantScreen } from "./screens/Restaurant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// For ikoner, så se https://icons.expo.fyi/Index med filtrering på ionicons
import Ionicons from "@expo/vector-icons/Ionicons";

NativeWindStyleSheet.setOutput({
    default: "native",
});

export type RootStackParams = {
    // undefined betyder, at den ikke modtager nogen parameter
    Explore: undefined;
    Profile: undefined;
    // En af vores tabs har en stack. Den skal vi smide i en NavigatorScreenParams
    RestaurantsStack: RestaurantsStackParams;
    Restaurant: {
        name: string;
    };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
    // Vi angiver, at Restaurant endpoint får en parameter, name, med sig.
    // Det ville under normale omstændigheder være id, som vi senere bruger til at fetch.
    Restaurants: undefined;
    Restaurant: {
        name: string;
    };
};

const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

/*
 ** I App har du kun dine routes, hvor du også angiver initialRouteName, som er din startside.
 ** Hvis tabBarLabel og headerTitle deler samme navn, så kan du nøjes med 'title'
 */
export default function App() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName="Explore">
                <RootStack.Screen
                    options={{
                        tabBarLabel: "Home",
                        headerTitle: "Velkommen Ali",
                        tabBarIcon: ({ color, focused, size }) => <Ionicons name="home" size={32} color={color} />,
                    }}
                    name="Explore"
                    component={ExploreScreen}
                />
                <RootStack.Screen
                    options={{
                        title: "Restaurants",
                        // Vi skjuler header på en stack, for ellers får vi en dobbel header.
                        headerShown: false,
                        tabBarIcon: ({ color, focused, size }) => <Ionicons name="restaurant" size={32} color={color} />,
                    }}
                    name="RestaurantsStack"
                    component={RestaurantScreenStack}
                />
                <RootStack.Screen
                    options={{
                        tabBarIcon: ({ color, focused, size }) => <Ionicons name="person" size={32} color={color} />,
                    }}
                    name="Profile"
                    component={ProfileScreen}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

const RestaurantScreenStack = () => {
    return (
        <RestaurantsStack.Navigator initialRouteName="Restaurants">
            <RestaurantsStack.Screen name="Restaurants" component={RestaurantsScreen} />
            <RootStack.Screen name="Restaurant" component={RestaurantScreen} />
        </RestaurantsStack.Navigator>
    );
};
