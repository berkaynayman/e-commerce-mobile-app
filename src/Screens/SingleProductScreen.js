import { Box, HStack, Heading, Image, ScrollView, Spacer, Text } from 'native-base';
import NumericInput from 'react-native-numeric-input';
import Rating from "../Components/Rating"
import _Button from "../Components/_Button"
import Review from '../Components/Review';
import Colors from "../color"
import { useState } from 'react';

function SingleProductScreen() {
    const [numericValue, setNumericValue] = useState(0)
    return(
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image
                    source={require("../../assets/shoes.png")}
                    alt='Image'
                    w={"full"}
                    h={300}
                    resizeMode='contain'
                />
                <Heading bold fontSize={15} mb={2} lineHeight={22}>
                    New Shoes Gray Comfortale
                </Heading>
                <Rating value={4} />
                <HStack space={2} alignItems="center" my={5}>
                    <NumericInput
                        value={numericValue}
                        totalWidth={140}
                        totalHeight={30}
                        iconSize={25}
                        step={1}
                        maxValue={15}
                        minValue={0}
                        borderColor={Colors.deepGray}
                        rounded
                        textColor={Colors.black}
                        iconStyle={{ color: Colors.white}}
                        rightButtonBackgroundColor={Colors.main}
                        leftButtonBackgroundColor={Colors.main}
                    />
                    <Spacer />
                    <Heading bold color={Colors.black} fontSize={19}>
                        $400
                    </Heading>
                </HStack>
                <Text lineHeight={24} fontSize={14}>
                    Minim amet aliquip aliquip consequat occaecat labore pariatur.
                    amet aliquip aliquip consequat occaecat labore pariatur. 
                    Minim amet aliquip aliquip consequat occaecat pariatur.
                    Minim amet aliquip aliquip consequat labore pariatur.
                    Minim amet aliquip aliquip occaecat labore pariatur.
                    Minim amet aliquip aliquip consequat occaecat labore.
                    Minim amet aliquip aliquip consequat occaecat labore pariatur.
                    Minim amet aliquip aliquip consequat occaecat labore pariatur.
                    Minim amet aliquip aliquip consequat labore pariatur.
                    Minim amet aliquip aliquip occaecat labore pariatur.
                </Text>
                <_Button bg={Colors.main} color={Colors.white} mt={10}>
                    ADD TO CART
                </_Button>
                <Review />
            </ScrollView>
        </Box>
    )
}

export default SingleProductScreen