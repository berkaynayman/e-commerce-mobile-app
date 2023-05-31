import { Box, Center, Text, ScrollView, VStack, HStack, Image } from 'native-base';
import _Button from '../Components/_Button';
import Colors from '../color';
import { FontAwesome } from "@expo/vector-icons";

const paymentMethods = [
    {   
        image: require("../../assets/paypal.png"),
        alt: "paypal",
        icon: "check-circle"
    },
    {
        image: require("../../assets/discover.png"),
        alt: "discover",
        icon: "circle-thin"
    },
    {
        image: require("../../assets/google-pay.jpg"),
        alt: "googlepay",
        icon: "circle-thin"
    }
]

function ShippingScreen() {
    return(
        <Box flex={1} safeAreaTop bgColor={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    PAYMENT METHOD
                </Text>
            </Center>
            {/* Selection */}
            <Box h="full" bgColor={Colors.subGreen} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {
                            paymentMethods.map((payment, index) =>(
                                <HStack
                                    key={index}
                                    alignItems="center"
                                    bgColor={Colors.white}
                                    px={3}
                                    py={1}
                                    justifyContent="space-between"
                                    rounded={10}
                                >
                                    <Box>
                                        <Image
                                            source={payment.image}
                                            alt={payment.alt}
                                            resizeMode='contain'
                                            w={60}
                                            h={50}
                                        />
                                    </Box>
                                    
                                    <FontAwesome
                                        name={payment.icon}
                                        color={payment.icon === 'check-circle' ? Colors.main : Colors.deepGray}
                                        size={30}
                                    />
                                </HStack>
                            ))
                        }
                        <_Button bg={Colors.main} color={Colors.white}>
                            CONTINUE
                        </_Button>
                        <Text italic textAlign="center">
                            Payment method is <Text italic bold>Paypal</Text> by default
                        </Text>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default ShippingScreen