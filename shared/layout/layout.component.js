import HeaderComponent from "../header/header.component";
import {ScrollView, Text, View} from "react-native";
import LandingScreenStyle from "../../screens/landing/landing.screen.style";
import BottomTabsComponent from "../bottom-tabs/bottom-tabs.component";
import React from "react";
import LayoutComponentStyle from "./layout.component.style";

const LayoutComponent = ({navigation, route,showBottomNav,showCart,showBack,title,pageContent}) => {

    return (
        <>
            <HeaderComponent navigation={navigation} showCart={showCart} showBack={showBack} title={title.length > 20? title.substring(0,20)+"...":title}></HeaderComponent>
            <View  style={showBottomNav?LayoutComponentStyle.scrollViewStyle:LayoutComponentStyle.scrollViewStyleNoFooter}>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    {pageContent}
                </ScrollView>
            </View>
            {showBottomNav && (<BottomTabsComponent route={route} navigation={navigation}></BottomTabsComponent>)}
        </>
    );

};

export default LayoutComponent;
