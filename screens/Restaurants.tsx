import { View, Text, ScrollView } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import { ScreenTitle } from "../components/Text";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RestaurantsStackParams, RootStackParams } from "../App";

interface Props extends NativeStackScreenProps<RestaurantsStackParams, "Restaurants"> {}

/*
 ** Alle Screens som indgår i din <App/> NativeStack får følgende props:
 ** navigation: Bruges til at navigere til en anden side med navigation.navigate()
 ** route: du kan bruge route til at tilgå endpoint parameter, som du sender afsted som et objekt vha. navigation.navigate. Det er den parameter, som du angiver i din stack definition ovenpå <App/>
 */

export const RestaurantsScreen = ({ navigation, route }: Props) => {
    return (
        <View className="p-7">
            <ScreenTitle>Restaurants Screen</ScreenTitle>
            <ScrollView className="space-y-3">
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="The Gourmet Spot" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Urban Fork" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Savory Bites" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Taste Haven" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Fusion Flavors" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="The Spice Route" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Bistro Bliss" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Harvest Table" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Epicurean Delight" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Culinary Canvas" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Burger King" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Novo" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Pow Pizza" />
            </ScrollView>
        </View>
    );
};
