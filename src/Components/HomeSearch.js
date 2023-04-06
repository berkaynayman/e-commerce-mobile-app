import { Box, HStack, Input, Pressable, Text } from "native-base"
import { FontAwesome5 } from '@expo/vector-icons';

import Colors from "../color"

function HomeSearch(){
    return(
        <HStack
            space={3}
            w="full"
            px={6}
            bgColor={Colors.main}
            py={4}
            alignItems="center"
            safeAreaTop
        >
            <Input
                placeholder="Coats, Jacket, Boots, ..."
                w="85%"
                rounded="xl"
                variant="filled"
                bgColor={Colors.white}
                type="search"
                h={12}
            />
            <Pressable ml={3}>
                <FontAwesome5 name="shopping-basket" size={24} color={Colors.white} />
                <Box
                    px={1}
                    rounded="xl"
                    position="absolute"
                    top={-5}
                    left={4}
                    bg={Colors.red}
                    _text={{
                        color: Colors.white,
                        fontSize: "12px",
                        fontWeight: "bold"
                    }}
                >
                    5
                </Box>
            </Pressable>
        </HStack>
    )
}

export default HomeSearch