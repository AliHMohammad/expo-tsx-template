import { View, Text, TouchableOpacity } from "react-native";
import { ScreenTitle } from "../components/Text";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

interface Props extends NativeStackScreenProps<RootStackParams, "Profile"> {}

export const ProfileScreen = ({ navigation, route }: Props) => {
    return (
        <View className="flex-1 p-7">
            <ScreenTitle>Profile Screen</ScreenTitle>
            <TouchableOpacity>
                <Text>Name: John Doe</Text>
            </TouchableOpacity>
        </View>
    );
};
