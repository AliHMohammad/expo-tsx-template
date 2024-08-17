import { Text, View } from "react-native";
import { ScreenTitle } from "../components/Text";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

interface Props extends NativeStackScreenProps<RootStackParams, "Restaurant"> {}

export const RestaurantScreen = ({ navigation, route }: Props) => {
    return (
        <View>
            <ScreenTitle>{route.params.name}</ScreenTitle>
        </View>
    );
};
