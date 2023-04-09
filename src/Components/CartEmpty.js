import { Box, Center, Text } from "native-base"
import _Button from "../Components/_Button"
import { FontAwesome } from "@expo/vector-icons"

import Colors from "../color"

const CartEmpty = () => {
    return(
        <Box flex={1} px={4}>
            <Center h="40%" mb={4}>
                <Center w={200} h={200} bgColor={Colors.white} rounded={"full"}>
                    <FontAwesome name="shopping-basket" size={64} color={Colors.main} />
                </Center>
                <Text color={Colors.main} bold mt={5} fontSize={20}>
                    CART IS EMPTY
                </Text>
            </Center>
            <_Button bg={Colors.black} color={Colors.white}>
                START SHOPPING
            </_Button>
        </Box>
    )
}

export default CartEmpty