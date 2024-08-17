import { View, Text, ViewProps } from "react-native";

interface Props extends ViewProps {
    name: string;
}

export const RestaurantCard = (props: Props) => {
    return (
        <View {...props} className="bg-red-400 p-4">
            <Text>Restaurant {props.name}</Text>
        </View>
    );
};
