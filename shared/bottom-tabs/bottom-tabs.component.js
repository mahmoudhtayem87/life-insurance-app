import {ScrollView, Touchable, Text, View, TouchableOpacity} from "react-native";
import {Icon} from "@rneui/base";
import BottomTabsComponentStyle from "./bottom-tabs.component.style";
import TabButtonComponent from "./tab-button/tab-button.component";

const BottomTabsComponent = ({navigation, route}) => {


    return (
        <ScrollView style={BottomTabsComponentStyle.footer} contentContainerStyle={BottomTabsComponent.footerContent} horizontal={true} showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
            <TabButtonComponent title={'News'} icon={'newspaper-outline'} iconType={'ionicon'} navigation={navigation} route={route} navigateTo={'News'}></TabButtonComponent>
            <TabButtonComponent title={'Marketplace'} icon={'cart-outline'} iconType={'ionicon'} navigation={navigation} route={route} navigateTo={'Store'}></TabButtonComponent>

        </ScrollView>
    );

}

export default BottomTabsComponent;
