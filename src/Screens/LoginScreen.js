import { Box, Image, VStack, Input, Button, Text, Pressable } from 'native-base';
import { AntDesign  } from '@expo/vector-icons';

import coverImg from '../../assets/cover.png';
import Colors from '../color';

function LoginScreen({ navigation }) {
    return(
        <Box flex={1} bg={Colors.black}>
            <Image
                flex={1}
                alt="Logo"
                resizeMode='cover'
                size="lg"
                w="full"
                source={coverImg}
            />
            <Box
                w="full"
                h="full"
                position="absolute"
                top="0"
                px="6"
                justifyContent="center"
            >
                <VStack space="4" w="60%">
                    <Input
                        fontSize={16}
                        InputLeftElement={
                            <AntDesign name="mail" size={20} color={Colors.main} />
                        }
                        variant="underlined"
                        placeholder='user@mail.com'
                        pl="2"
                        color={Colors.main}
                        borderBottomColor={Colors.underline}
                    />
                    <Input
                        fontSize={16}
                        InputLeftElement={
                            <AntDesign name="eye" size={20} color={Colors.main} />
                        }
                        type='password'
                        variant="underlined"
                        placeholder='******'
                        pl="2"
                        color={Colors.main}
                        borderBottomColor={Colors.underline}
                    />
                    <Button
                        _pressed={{
                            bg: "#48B100"
                        }}
                        rounded="8"
                        bg={Colors.main}
                    >
                        <Text
                            fontSize="16" fontWeight="bold"
                            color={Colors.white}
                            onPress={() => navigation.navigate("Bottom")}
                        >
                            LOGIN
                        </Text>
                    </Button>
                    <Pressable>
                        <Text
                            color={Colors.deepestGray}
                            fontWeight="bold"
                            onPress={() => navigation.navigate("Register")}
                        >
                            SIGN UP
                        </Text>
                    </Pressable>
                </VStack>
            </Box>
        </Box>
    )
}

export default LoginScreen