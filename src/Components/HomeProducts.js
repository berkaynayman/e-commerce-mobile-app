import { Box, Flex, Heading, Image, Pressable, ScrollView, Text } from "native-base"
import Rating from "./Rating"

import Colors from "../color"
import products from "../mockData/Products"

function HomeProducts(){
    return(
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex
                flexWrap="wrap"
                direction="row"
                justifyContent="space-between"
                px="6"
            >
                {
                    products.map(product => (
                        <Pressable
                            key={product._id}
                            w="47%"
                            bgColor={Colors.white}
                            rounded="xl"
                            shadow="4"
                            pt="0.3"
                            my={3}
                            pb={2}
                            overflow="hidden"
                        >
                            <Image
                                source={{uri: product.image}}
                                alt={product.name}
                                w="full"
                                h="24"
                                resizeMode="contain"
                            />
                            <Box px="4" pt="1">
                                <Heading size="sm" bold>
                                    ${product.price}
                                </Heading>
                            </Box>
                            <Text fontSize={10} mt={1} isTruncated w="full">
                                {product.name}
                            </Text>
                            <Rating value={product.rating} />
                        </Pressable>
                    ))
                }
            </Flex>
        </ScrollView>
    )
}

export default HomeProducts