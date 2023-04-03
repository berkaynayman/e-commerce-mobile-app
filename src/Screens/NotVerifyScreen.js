import { Box, Center, Image, VStack } from 'native-base';
import _Button from '../Components/_Button';

import favicon from '../../assets/favicon.png';
import Colors from '../color'

function NotVerifyScreen() {
    return(
        <Box flex={1} bg={Colors.main} safeAreaTop>
            <Center w="full" h="300" bgColor={Colors.main}>
                <Image
                    bgColor={Colors.white}
                    source={favicon}
                    rounded="xl"
                    alt="Logo"
                    size="xl"
                />
            </Center>
            <VStack space={6} px={5} alignItems="center">
                <_Button
                    bg={Colors.black}
                    color={Colors.white}
                >
                    REGISTER
                </_Button>
                <_Button
                    bg={Colors.white}
                    color={Colors.black}
                >
                    LOGIN
                </_Button>
            </VStack>
        </Box>
    )
}

export default NotVerifyScreen