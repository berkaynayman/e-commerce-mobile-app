import { View, Text, Box, ScrollView, Pressable, HStack, Button } from "native-base"
import Colors from "../../color";
import _Button from "../_Button";

const Orders = () => {
    return (
        <Box h="full" bgColor={Colors.white} pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                { /* Paid Order */}
                <Pressable>
                    <HStack
                        space={4}
                        justifyContent="space-between"
                        alignItems="center"
                        bgColor={Colors.deepGray}
                        py={5}
                        px={2}
                    >
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            879435879342
                        </Text>
                        <Text fontSize={12} bold color={Colors.black} isTruncated>
                            PAID
                        </Text>
                        <Text fontSize={11} italic color={Colors.black} isTruncated>
                            May 25 2023
                        </Text>
                        <Button px={7} py={1.5} rounded="xl" bgColor={Colors.main}
                            _text={{
                                color: Colors.white
                            }}
                            _pressed={{
                                bg: Colors.main
                            }}    
                        >
                            $120
                        </Button>
                    </HStack>
                </Pressable>
                { /* Not Paid */}
                <Pressable>
                    <HStack
                        space={4}
                        justifyContent="space-between"
                        alignItems="center"
                        py={5}
                        px={2}
                    >
                        <Text fontSize={9} color={Colors.blue} isTruncated>
                            879435879342
                        </Text>
                        <Text fontSize={12} bold color={Colors.black} isTruncated>
                            NOT PAID
                        </Text>
                        <Text fontSize={11} italic color={Colors.black} isTruncated>
                            May 01 2023
                        </Text>
                        <Button px={7} py={1.5} rounded="xl" bgColor={Colors.red}
                            _text={{
                                color: Colors.white
                            }}
                            _pressed={{
                                bg: Colors.red
                            }}    
                        >
                            $20
                        </Button>
                    </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    )
}

export default Orders