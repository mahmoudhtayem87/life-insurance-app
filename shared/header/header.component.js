import { Header, HeaderProps, Icon } from '@rneui/themed';
import {Text, TouchableOpacity, View} from "react-native";
import HeaderComponentStyle from "./header.component.style";
import CartButton from "../cart-fab/cart-fab.component";
import CartFab from "../cart-fab/cart-fab.component";

const HeaderComponent = ({navigation,title,showBack,showCart=true})=>{
    const onLogout = ()=>{
        navigation.navigate('Login')
    }

    const onBack = ()=>{
        navigation.goBack();
    }

    return (
        <Header
            rightComponent={
            <View style={HeaderComponentStyle.headerButtonsContainer}>
                {showCart && (<CartFab navigation={navigation}></CartFab>)}
                <TouchableOpacity style={HeaderComponentStyle.headerButtonsContainer.button} onPress={onLogout}>
                    <Icon type={'ionicon'} name="log-out-outline" color="white" />
                </TouchableOpacity>
            </View>
        }
            leftComponent={ showBack &&(<TouchableOpacity onPress={onBack}>
                <Icon type={'ionicon'} name="chevron-back-outline" color="white" />
            </TouchableOpacity>)}
            containerStyle={HeaderComponentStyle.mainContainer}
            elevated={true}
            centerComponent={<Text style={HeaderComponentStyle.centerContainer}>{title}</Text>}
        >
        </Header>
    );
}

export default HeaderComponent;
