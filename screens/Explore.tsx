import { View, Text } from "react-native";
import { RestaurantCard } from "../components/RestaurantCard";
import { ScreenTitle } from "../components/Text";
import { Menu } from "../components/Menu";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

interface Props extends NativeStackScreenProps<RootStackParams, "Explore"> {}

export const ExploreScreen = ({ navigation, route }: Props) => {
    return (
        <View className="flex-1 p-7">
            <ScreenTitle>Home Screen</ScreenTitle>
            <Menu />
        </View>
    );
};
