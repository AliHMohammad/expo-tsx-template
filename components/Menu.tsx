import { Text, TouchableOpacity, View } from "react-native";

export const Menu = () => {
    return (
        <>
            <View className="bg-gray-300 mt-3 py-2">
                <TouchableOpacity>
                    <Text className="text-blue-600 font-bold text-lg pl-4">Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-blue-600 font-bold text-lg pl-4">Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-blue-600 font-bold text-lg pl-4">Restaurants</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
