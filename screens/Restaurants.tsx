import { View, Text, ScrollView } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import { ScreenTitle } from "../components/Text";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

interface Props extends NativeStackScreenProps<RootStackParams, "Restaurants"> {}

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
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Pow Pizza" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Burger King" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Novo" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Pow Pizza" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Burger King" />
                <RestaurantCard onPress={(name) => navigation.navigate("Restaurant", { name: name })} name="Novo" />
            </ScrollView>
        </View>
    );
};
