import { View, Text, ScrollView } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import { ScreenTitle } from "../components/Text";


export const RestaurantsScreen = () => {
    return (
        <View className="flex-1 p-7">
            <ScreenTitle>Restaurants Screen</ScreenTitle>
            <ScrollView className="space-y-3">
                <RestaurantCard name="Pow Pizza" />
                <RestaurantCard name="Burger King" />
                <RestaurantCard name="Novo" />
                <RestaurantCard name="Pow Pizza" />
                <RestaurantCard name="Burger King" />
                <RestaurantCard name="Novo" />
            </ScrollView>
        </View>
    );
};
