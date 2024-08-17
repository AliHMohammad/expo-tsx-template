import { View, Text } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import { ScreenTitle } from "../components/Text";

export const ExploreScreen = () => {
    return (
        <View className="flex-1 p-7">
            <ScreenTitle>Restaurants</ScreenTitle>
            <View>
                <Text className="text-xl mt-4">Restaurants Near You</Text>
                <View className="space-y-3 mt-2">
                    <RestaurantCard name="Alis Bageri" />
                    <RestaurantCard name="RizRaz" />
                    <RestaurantCard name="Novo" />
                </View>

                <Text className="text-xl mt-4">Most Popular Restaurants</Text>
                <View className="space-y-3 mt-2">
                    <RestaurantCard name="Pow Pizza" />
                    <RestaurantCard name="Burger King" />
                    <RestaurantCard name="Novo" />
                </View>
            </View>
        </View>
    );
};
