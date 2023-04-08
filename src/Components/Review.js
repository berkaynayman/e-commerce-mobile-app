import { Box, FormControl, Heading, Text, TextArea, VStack } from "native-base"

import Colors from "../color"
import Rating from "./Rating";
import Message from "./Message";
import _Button from "./_Button";
import { useState } from "react";

function Review(){
    const [ratings, setRatings] = useState("")
    return(
        <Box my={9}>
            <Heading bold fontSize={15} mb={2}>
                REVIEW
            </Heading>
            <Message
                color={Colors.main}
                bg={Colors.deepGray}
                size={12}
                bold
                children={
                    "NO REVIEW"
                }
            />
            <Box p={3} bg={Colors.deepGray} mt={5} rounded={"xl"}>
                <Heading fontSize={15} color={Colors.black}>
                    Berkay Nayman
                </Heading>
                <Rating value={4} />
                <Text my={2} fontSize={11}>April 08 2023</Text>
                <Message
                    color={Colors.black}
                    bg={Colors.white}
                    size={12}
                    children={
                        "aliquip aliquip occaecat labore pariatur. aliquip aliquip occaecat labore pariatur."
                    }
                />
            </Box>
            <Box mt={6}>
                <Heading fontSize={15} bold mb={4}>
                    REVIEW THIS PRODUCT
                </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: "12px",
                                fontWeight: "bold"
                            }}
                        >
                            Rating
                        </FormControl.Label>
                        {/*<Select
                            bg={Colors.subGreen}
                            borderWidth={0}
                            rounded={"xl"}
                            py={3}
                            placeholder="Choose Rate"
                            _selectedItem={{
                                bg: Colors.subGreen,
                                endIcon: <CheckIcon size={2} />
                            }}
                            selectedValue={ratings}
                            onValueChange={(e) => setRatings(e)}
                        >
                            <Select.Item label="1 - Poor" value="1" />
                            <Select.Item label="2 - Fair" value="2" />
                            <Select.Item label="3 - Good" value="3" />
                        </Select>*/}
                    </FormControl>
                    <FormControl>
                        <FormControl.Label
                            _text={{
                                fontSize: "12px",
                                fontWeight: "bold"
                            }}
                        >
                            Comment
                        </FormControl.Label>
                            <TextArea
                                h={20}
                                w="full"
                                rounded={"xl"}
                                placeholder="This product is good ..."
                                borderWidth={0}
                                bgColor={Colors.subGreen}
                            />
                    </FormControl>
                    <_Button bg={Colors.main} color={Colors.white}>
                            SUBMIT
                    </_Button>
                    <Message
                        color={Colors.white}
                        bg={Colors.black}
                        size={12}
                        bold
                        children={
                            "Please 'Login' to write a review."
                        }
                    />
                </VStack>
            </Box>
        </Box>
    )
}

export default Review