import { Button, Center, HStack, Image, Modal, Pressable, Text, VStack } from "native-base";
import _Button from "./_Button";
import Colors from "../color";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const OrdersInfos = [
    {
        title: "Products",
        price: 125,
        color: "black"
    },
    {
        title: "Shipping",
        price: 34,
        color: "black"
    },
    {
        title: "Tax",
        price: 23.34,
        color: "black"
    },
    {
        title: "Total Amount",
        price: 3458,
        color: "main"
    }
]

const OrderModel = () => {
    const [showModel, setShowModel] = useState(false);
    const navigation = useNavigation();
    return (
        <Center>
            <_Button
                onPress={() => setShowModel(true)}
                bg={Colors.main}
                color={Colors.white}
                mt={5}
            >
                SHOW PAYMENT & TOTAL
            </_Button>
            <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
                <Modal.Content maxWidth={350}>
                    <Modal.CloseButton />
                    <Modal.Header>Order</Modal.Header>
                    <Modal.Body>
                        <VStack space={7}>
                            {
                                OrdersInfos.map((info, index) => (
                                    <HStack
                                        key={index}
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Text fontWeight="medium">{info.title}</Text>
                                        <Text
                                            color={Colors[info.color]}
                                            bold
                                        >
                                            ${info.price}
                                        </Text>
                                    </HStack>
                                ))
                            }
                        </VStack>
                    </Modal.Body>
                    <Modal.Footer>
                        <Pressable
                            w="full"
                            justifyContent="center"
                            bgColor={Colors.paypal}
                            h={55}
                            onPress={() => setShowModel(false)}
                            rounded="xl"
                            overflow="hidden"
                        >
                            <Image
                                source={require("../../assets/paypal.png")}
                                alt="paypal"
                                resizeMode="contain"
                                w="full"
                                h={34}
                            />
                        </Pressable>
                        <Button
                            w="full"
                            mt={2}
                            bgColor={Colors.black}
                            h={55}
                            _text={{
                                color: Colors.white,
                                fontWeight: "bold"
                            }}
                            onPress={() => {
                                navigation.navigate("Home");
                                setShowModel(false);
                            }}
                            _pressed={{
                                bg: Colors.black
                            }}
                            rounded="xl"
                        >
                            PAY LATER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default OrderModel;