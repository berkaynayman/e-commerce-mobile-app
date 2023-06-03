import { Box, Heading, ScrollView } from 'native-base';
import OrderInfo from "../Components/OrderInfo";
import OrderIterm from "../Components/OrderIterm";
import OrderModel from "../Components/OrderModel";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "../color";

function OrderScreen() {
    return(
        <Box bgColor={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView
                    horizontal={true}
                    showsVerticalScrollIndicator={false}                
                >
                    <OrderInfo
                        title="SHIPPING INFO"
                        subTitle="Shipping: Tanzania"
                        success
                        text="Pay Method: PayPal"
                        icon={<FontAwesome5 name="shipping-fast" color={Colors.white} size={30} />}
                    />
                    <OrderInfo
                        title="DELIVER TO"
                        subTitle="Address:"
                        danger
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
                <OrderModel />
            </Box>
        </Box>
    )
}

export default OrderScreen