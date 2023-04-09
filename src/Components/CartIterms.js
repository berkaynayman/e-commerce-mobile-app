import { Box, Button, Center, HStack, Image, Pressable, Text, VStack } from "native-base"
import { SwipeListView } from "react-native-swipe-list-view"
import { FontAwesome } from "@expo/vector-icons"

import products from "../mockData/Products"
import Colors from "../color"

const Swiper = () => (
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={products}
        renderItem={renderItem}
        renderHiddenItem={hiddenItem}
        showsVerticalScrollIndicator={false}
    />
)

const renderItem = (data) => (
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack alignItems="center" bgColor={Colors.white} shadow={1} rounded={"xl"} overflow={"hidden"}r>
                <Center w="25%" bgColor={Colors.deepGray}>
                    <Image
                        source={{ uri: data.item.image }}
                        alt={data.item.name}
                        w="full"
                        h={24}
                        resizeMode="contain"
                    />
                </Center>
                <VStack w="60%" px={2} space={2}>
                    <Text isTruncated color={Colors.black} bold fontSize={10}>
                        { data.item.name }
                    </Text>
                    <Text bold color={Colors.lightBlack}>
                        ${ data.item.price }
                    </Text>
                </VStack>
                <Center>
                    <Button
                        bgColor={Colors.main}
                        _pressed={{ bg: Colors.main }}
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
)

const hiddenItem = () => (
    <Pressable w={50} roundedTopRight={"xl"} roundedBottomRight={"xl"} h={'88%'} ml="auto" justifyContent={"center"} bgColor={Colors.red}>
        <Center alignItems={"center"} space={2}>
            <FontAwesome name="trash" />
        </Center>
    </Pressable>
)

const CartIterms = () => {
    return(
        <Box mr={6}>
            <Swiper />
        </Box>
    )
}

export default CartIterms