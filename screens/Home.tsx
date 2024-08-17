import { View } from "react-native";
import { ScreenTitle } from "../components/Text";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import { Counter } from "../components/Counter";

interface Props extends NativeStackScreenProps<RootStackParams, "Home"> {}

export const HomeScreen = ({ navigation, route }: Props) => {
    return (
        <View className="flex-1 p-7 dark:bg-slate-800">
            <ScreenTitle>Home Screen</ScreenTitle>
            <Counter />
        </View>
    );
};
