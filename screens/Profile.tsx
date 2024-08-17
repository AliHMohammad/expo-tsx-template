import { View, Text, TouchableOpacity } from "react-native";
import { ScreenTitle } from "../components/Text";

export const ProfileScreen = () => {
    return (
        <View className="flex-1 p-7">
            <ScreenTitle>Profile Screen</ScreenTitle>
            <TouchableOpacity>
                <Text>Name: John Doe</Text>
            </TouchableOpacity>
        </View>
    );
};
