import { Center, Pressable } from "native-base";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../Screens/ProfileScreen";
import CartScreen from "../Screens/CartScreen";

import Colors from "../color";
import { StyleSheet } from "react-native-web";
import StackNav from "./StackNav";

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress }) => (
    <Pressable
        onPress={onPress}
        h={70}
        w={70}
        rounded="full"
        bg={Colors.main}
        top={-30}
        shadow={2}
    >
        { children }
    </Pressable>
)

const BottomNav = () => {
    return (
        <Tab.Navigator
            backBehavior="Main"
            initialRouteName="Main"
            screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {...styles.tab},
            headerShown: false,
            tabBarHideOnKeyboard: true
        }}>
            {/* Main */}
            <Tab.Screen name="Main" component={StackNav}
                options={{
                    tabBarIcon:({focused}) => (
                        <Center>
                            <Entypo name="home" size={24} color={focused ? Colors.main : Colors.black} />
                        </Center>
                    )
                }}
            />
            {/* Cart */}
            <Tab.Screen name="Cart" component={CartScreen}
                options={{
                    tabBarButton: (props) => <CustomTab {...props} />,
                    tabBarIcon:({focused}) => (
                        <Center>
                            <FontAwesome name="shopping-basket" size={24} color={focused ? Colors.deepGray : Colors.black} />
                        </Center>
                    )
                }}
            />
            {/* Profile */}
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon:({focused}) => (
                        <Center>
                            <FontAwesome name="user" size={24} color={focused ? Colors.main : Colors.black} />
                        </Center>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: Colors.white,
        height: 60
    }
})

export default BottomNav;