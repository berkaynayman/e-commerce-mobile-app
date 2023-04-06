import { Box } from 'native-base';
import Colors from '../color';
import HomeSearch from '../Components/HomeSearch';
import HomeProducts from '../Components/HomeProducts';

function HomeScreen() {
    return(
        <Box flex={1} bgColor={Colors.subGreen}>
            <HomeSearch />
            <HomeProducts />
        </Box>
    )
}

export default HomeScreen