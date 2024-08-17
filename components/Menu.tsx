import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParams } from "../App";

/*
 ** Hvis du gerne vil navigere til en anden side, men den du befinder dig på, ikke har navigation som prop (da det ikke er en screen)
 ** Så kan du bruge useNavigation() hooken i stedet.
 */
export const Menu = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    return (
        <>
            <View className="bg-gray-300 mt-3 py-2">
                <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
                    <Text className="text-blue-600 font-bold text-lg pl-4">Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                    <Text className="text-blue-600 font-bold text-lg pl-4">Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
                    <Text className="text-blue-600 font-bold text-lg pl-4">Restaurants</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
