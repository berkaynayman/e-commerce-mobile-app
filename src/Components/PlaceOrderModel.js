import { Button, Center, HStack, Modal, Text, VStack } from "native-base";
import _Button from "./_Button";
import Colors from "../color";
import { useState } from "react";

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

const PlaceOrderModel = () => {
    const [showModel, setShowModel] = useState(false);

    return (
        <Center>
            <_Button
                onPress={() => setShowModel(true)}
                bg={Colors.black}
                color={Colors.white}
                mt={5}
            >
                SHOW TOTAL
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
                        <Button
                            flex={1}
                            bgColor={Colors.main}
                            h={55}
                            _text={{
                                color: Colors.white,
                                fontWeight: "bold"
                            }}
                            onPress={() => setShowModel(false)}
                            _pressed={{
                                bg: Colors.main
                            }}
                            rounded="xl"
                        >
                            PLACE AN ORDER
                        </Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </Center>
    );
};

export default PlaceOrderModel;