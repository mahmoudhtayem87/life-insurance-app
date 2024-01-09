import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./app-navigator.component";

export default function App() {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
