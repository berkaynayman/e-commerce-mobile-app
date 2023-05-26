import { Box, Center, Text, ScrollView, VStack, FormControl, Input } from 'native-base';
import _Button from '../Components/_Button';
import Colors from '../color';


const ShippingInputs = [
    {
        label: "ENTER CITY",
        type: "text"
    },
    {
        label: "ENTER COUNTRY",
        type: "text"
    },
    {
        label: "ENTER POSTAL CODE",
        type: "text"
    },
    {
        label: "ENTER ADDRESS",
        type: "text"
    },
]

function ShippingScreen() {
    return(
        <Box flex={1} safeAreaTop bgColor={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    DELIVERY ADDRESS
                </Text>
            </Center>
            {/* Inputs */}
            <Box h="full" bgColor={Colors.white} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {
                            ShippingInputs.map((input, index) => (
                                <FormControl key={index}>
                                    <FormControl.Label
                                        _text={{
                                            fontSize: "12px",
                                            fontWeight: "bold"
                                        }}
                                    >
                                        {input.label}
                                    </FormControl.Label>
                                    <Input
                                        type={input.text}
                                        borderWidth={0.2}
                                        borderColor={Colors.main}
                                        bgColor={Colors.subGreen}
                                        py={4}
                                        color={Colors.main}
                                        _focus={{
                                            bgColor: Colors.subGreen,
                                            borderWidth: 1,
                                            borderColor: Colors.main
                                        }}
                                    />
                                </FormControl>
                            ))
                        }
                        <_Button bg={Colors.main} color={Colors.white}>
                            CONTINUE
                        </_Button>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default ShippingScreen