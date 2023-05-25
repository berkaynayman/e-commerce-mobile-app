import { Center, Heading, Text, View } from 'native-base';
import Tabs from '../Components/Profile/Tabs';
import { EvilIcons } from '@expo/vector-icons';

import Colors from "../color"

function ProfileScreen() {
    return(
        <>
            <Center bgColor={Colors.main} pt={10} pb={6}>
                <EvilIcons name="user" size={144} color="black" />
                <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
                    Berkay Nayman
                </Heading>
                <Text italic fontSize={10} color={Colors.white}>
                    Joined Apr 16 2023
                </Text>
            </Center>
            <Tabs />
        </>
    )
}

export default ProfileScreen