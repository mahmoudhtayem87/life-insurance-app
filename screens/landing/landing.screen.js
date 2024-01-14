import BottomTabsComponent from "../../shared/bottom-tabs/bottom-tabs.component";
import {Dimensions, ScrollView, Text, View} from "react-native";
import HeaderComponent from "../../shared/header/header.component";
import React from "react";
import SharedStyle from "../../theme/shared.style";
import LandingScreenStyle from "./landing.screen.style";
import LayoutComponent from "../../shared/layout/layout.component";

const LandingScreen = ({navigation, route}) => {


    return (
       <LayoutComponent navigation={navigation} showBottomNav={true} showCart={false} title={'Home'}
       pageContent={
           <View>
               <Text>
                   sample
               </Text>
           </View>
       }
       ></LayoutComponent>
    );
}
export default LandingScreen;
