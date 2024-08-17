import { View, Text, ScrollView } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import { ScreenTitle } from "../components/Text";
import { Menu } from "../components/Menu";

export const RestaurantsScreen = () => {
    return (
        <View className="p-7">
            <ScreenTitle>Restaurants Screen</ScreenTitle>
            <ScrollView className="space-y-3">
                <RestaurantCard name="Pow Pizza" />
                <RestaurantCard name="Burger King" />
                <RestaurantCard name="Novo" />
                <RestaurantCard name="Pow Pizza" />
                <RestaurantCard name="Burger King" />
                <RestaurantCard name="Novo" />
            </ScrollView>
            <Menu />
        </View>
    );
};
