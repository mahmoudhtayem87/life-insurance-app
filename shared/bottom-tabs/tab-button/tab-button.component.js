import {Text, TouchableOpacity} from "react-native";
import {Icon} from "@rneui/base";
import TabButtonComponentStyle from "./tab-button.component.style";
import {getData, storeData} from "../../../services/storage.service";
import {useEffect, useState} from "react";
import tabButtonComponentStyle from "./tab-button.component.style";


const TabButtonComponent = ({navigation, route,icon,iconType,title,navigateTo}) => {

    const [btnClass,setBtnClass] = useState(TabButtonComponentStyle.tabButtonContainer);

    const onPress = async ()=>{
        await storeData('selectedTab',navigateTo)
        navigation.navigate(navigateTo);
    }
    useEffect(()=>{
        const isSelected = async ()=>{
            let selectedTab = await getData('selectedTab');
            if (selectedTab == navigateTo) {
                setBtnClass(tabButtonComponentStyle.tabButtonContainerSelected);
            }else
                setBtnClass(tabButtonComponentStyle.tabButtonContainer);
        }
        isSelected();
    },[btnClass ])
    return <>
        <TouchableOpacity style={btnClass} onPress={()=>{
            onPress();
        }}>
            <Icon name={icon}  type={iconType} color={TabButtonComponentStyle.icon.color}
                  containerStyle={TabButtonComponentStyle.icon}/>
            <Text style={TabButtonComponentStyle.tabButtonText}>{title}</Text>
        </TouchableOpacity>
    </>
}

export default TabButtonComponent;
