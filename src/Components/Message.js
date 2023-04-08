import { Center, Text } from "native-base"

function Message({bg, color, children, size, bold}){
    return(
        <Center bg={bg} p={4} rounded="xl">
            <Text color={color} fontSize={size} bold={bold}>
                { children }
            </Text>
        </Center>
    )
}

export default Message