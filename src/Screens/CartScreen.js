import { Box, Button, Center, HStack, Text } from 'native-base';
import CartEmpty from '../Components/CartEmpty';
import _Button from '../Components/_Button';
import CartIterms from '../Components/CartIterms';
import { ScrollView } from 'react-native-virtualized-view'
import { useNavigation } from '@react-navigation/native';


import Colors from "../color"

function CartScreen() {
    const navigation = useNavigation();
    return(
        <Box flex={1} safeAreaTop bgColor={Colors.subGreen}>
            <Center w={'full'} py={5}>
                <Text color={Colors.black} fontSize={20} bold>
                    Cart
                </Text>
            </Center>
            {/*<CartEmpty />*/}
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <CartIterms />

                {/* Total */}
                <Center mt={5}>
                    <HStack
                        rounded={'xl'}
                        justifyContent={"space-between"}
                        bgColor={Colors.white}
                        w={"90%"}
                        pl={5}
                        h={55}
                        alignItems={'center'}
                    >
                        <Text>Total</Text>
                        <Button
                            px={10}
                            h={45}
                            rounded={'xl'}
                            bgColor={Colors.main}
                            _text={{
                                color: Colors.white,
                                fontWeight: "bold"
                            }}
                            _pressed={{
                                bgColor: Colors.main
                            }}
                        >
                            $300
                        </Button>
                    </HStack>
                </Center>

                <Center p={5}>
                    <_Button
                        onPress={() => navigation.navigate("Shipping")}
                        bg={Colors.black}
                        color={Colors.white}
                    >
                        CHECKOUT
                    </_Button>
                </Center>
            </ScrollView>
        </Box>
    )
}

export default CartScreen