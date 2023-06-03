import { Box, Heading, ScrollView } from 'native-base';
import OrderInfo from "../Components/OrderInfo";
import OrderIterm from "../Components/OrderIterm";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "../color";

function PlaceOrderScreen() {
    return(
        <Box bgColor={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView
                    horizontal={true}
                    showsVerticalScrollIndicator={false}                
                >
                    <OrderInfo
                        title="CUSTOMER"
                        subTitle="Admin Doe"
                        text="admin@example.com"
                        icon={<Ionicons name="person" color={Colors.white} size={30} />}
                    />
                    <OrderInfo
                        title="SHIPPING INFO"
                        subTitle="Shipping: Tanzania"
                        text="Pay Method: PayPal"
                        icon={<FontAwesome5 name="shipping-fast" color={Colors.white} size={30} />}
                    />
                    <OrderInfo
                        title="DELIVER TO"
                        subTitle="Address:"
                        text="Banana, Carrot Street, P.O BOX 44"
                        icon={<Ionicons name="location-sharp" color={Colors.white} size={30} />}
                    />
                </ScrollView>
            </Box>
            {/* Order Item */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                    PRODUCTS
                </Heading>
                <OrderIterm />
                { /* Total */}
                <PlaceOrderModel />
            </Box>
        </Box>
    )
}

export default PlaceOrderScreen