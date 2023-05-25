import { View, Text, Box, ScrollView, VStack, FormControl, Input } from "native-base";
import Colors from "../../color";
import _Button from "../_Button";

const Inputs = [
    {
        label: "USERNAME",
        type: "text"
    },
    {
        label: "EMAIL",
        type: "text"
    },
    {
        label: "PASSWORD",
        type: "password"
    },
    {
        label: "CONFIRM PASSWORD",
        type: "password"
    }
]

const Profile = () => {
    return (
        <Box h="full" bgColor={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    {
                        Inputs.map((input, index) => (
                            <FormControl key={index}>
                                <FormControl.Label
                                    _text={{
                                        fontSize: "12px",
                                        fontWeight: "bold"                                
                                    }}
                                >
                                    { input.label }
                                </FormControl.Label>
                                <Input
                                    type={input.type}
                                    borderWidth={0.2}
                                    borderColor={Colors.main}
                                    bgColor={Colors.subGreen}
                                    py={4}
                                    color={Colors.main}
                                    fontSize={16}
                                    _focus={{
                                        bg: Colors.subGreen,
                                        borderColor: Colors.main,
                                        borderWidth: 1
                                    }}
                                />
                            </FormControl>
                        ))
                    }
                    <_Button
                        bg={Colors.main}
                        color={Colors.white}
                    >
                        UPDATE PROFILE
                    </_Button>
                </VStack>
            </ScrollView>
        </Box>
    )
}

export default Profile