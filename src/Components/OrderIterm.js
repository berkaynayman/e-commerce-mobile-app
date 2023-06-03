import { FlatList, Pressable, Box, HStack, Center, Image, VStack, Text, Button } from "native-base";
import Colors from "../color";
import products from "../mockData/Products";

const OrderIterm = () => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={products}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => (
                <Pressable>
                    <Box mb={3}>
                        <HStack
                            alignItems="center"
                            bgColor={Colors.white}
                            shadow={1}
                            rounded={10}
                            overflow="hidden"
                        >
                            <Center w="25%" bgColor={Colors.deepGray}>
                                <Image
                                    source={{ uri: item.image }}
                                    alt={item.name}
                                    w="full"
                                    h={24}
                                    resizeMode="contain"
                                />
                            </Center>
                            <VStack w="60%" px={2}>
                                <Text isTruncated color={Colors.black} bold fontSize={12}>
                                    { item.name }
                                </Text>
                                <Text color={Colors.lightBlack} bold fontSize={12} mt={1}>
                                    ${ item.price }
                                </Text>
                            </VStack>
                            <Center>
                                <Button
                                    bgColor={Colors.main}
                                    _pressed={{ bgColor: Colors.main }}
                                    _text={{
                                        color: Colors.white
                                    }}
                                >
                                    5
                                </Button>
                            </Center>
                        </HStack>
                    </Box>
                </Pressable>
            )}
        >
        </FlatList>
    )
}

export default OrderIterm;