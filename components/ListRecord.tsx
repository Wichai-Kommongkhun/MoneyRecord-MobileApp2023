import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { NavigationContainer, Route, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import globalstyles from "../globalStyle";
import Receipt from "./ReceiptRecord";
import Expenses from "./ExpensesRecord";
import globalStyleHeader from "../globalStyleHeader";

const Stack = createNativeStackNavigator();

function HomeList({ navigation }: any) {
    const navigations = useNavigation()
    return (
        <View style={[globalstyles.container]}>
            <View style={[globalstyles.NavView, , { justifyContent: 'center' }]}>
            </View>
            <View style={[styles.container]}>
                <View>
                    <Text style={[styles.title]}>บันทึกรายการ</Text>
                </View>
                <View style={[styles.buttonReceipt]}>
                    <Button title="บันทึกรายรับ" color={'black'} onPress={() => navigation.navigate('Receipt')}></Button>
                </View>
                <View style={[styles.buttonBuy]}>
                    <Button title="บันทึกรายจ่าย" color={'black'} onPress={() => navigation.navigate('Expenses')}></Button>
                </View>
                <View style={[styles.buttonBlack]}>
                    <Button title="กลับไปหน้าแรก" color={'black'} onPress={() => {
                        navigations.goBack();
                    }}></Button>
                </View>
            </View>
        </View>

    )
}

export default function ListRecord({ navigation }: any) {

    return (
        <>
            <Stack.Navigator initialRouteName="HomeList" screenOptions={
                { headerShown: false, }
                }>
                <Stack.Screen name="HomeList" component={HomeList}></Stack.Screen>
                <Stack.Screen name="Receipt" component={Receipt} options={globalStyleHeader} ></Stack.Screen>
                <Stack.Screen  name="Expenses" component={Expenses} options={globalStyleHeader}></Stack.Screen>
            </Stack.Navigator>
        </>
    )
};



const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: '#EEFDFC',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: "center",
        paddingTop: 10,
        marginTop: 20
    },
    buttonReceipt: {
        width: 200,
        backgroundColor: '#80CDF8',
        padding: 4,
        marginTop: 20,
    },
    buttonBuy: {
        width: 200,
        backgroundColor: '#FD7B7B',
        padding: 4,
        marginTop: 20,
    },
    buttonBlack: {
        backgroundColor: '#D9D9D9',
        width: 200,
        padding: 4,
        marginTop: 20,
    }
});
