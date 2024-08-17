import { ReactNode } from "react";
import { TextProps, Text } from "react-native";

interface Props extends TextProps {
    children: ReactNode;
}

export const ScreenTitle = (props: Props) => {
    return (
        <Text {...props} className="text-3xl font-bold pt-6">
            {props.children}
        </Text>
    );
};
