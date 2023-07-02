import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

import { NavigationContainer, Route, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import globalstyles from "../globalStyle";

const date = new Date();



export default function HomePage({ navigation }: { navigation: any }) {
    return (
        <View style={[globalstyles.container]}>
            <View style={[globalstyles.NavView, , { justifyContent: 'center' }]}>
            </View>
            <View style={[styles.container]}>
                <TouchableOpacity>
                    <Text style={[{ fontSize: 37, textAlign: 'center', padding: 10, fontWeight: '600' },]}>
                        BIG MONEY
                    </Text>
                    <View style={[styles.button]}>
                        <Button title="บันทึกรายการ" color={'black'} onPress={() => navigation.navigate('ListRecord')}></Button>
                    </View>
                    <View style={[styles.button]}>
                        <Button title="รายการของวันนี้" color={'black'} onPress={() => navigation.navigate('DayRecord', {
                            day: date.getDate(),
                            month: date.getMonth(),
                            year: date.getFullYear()
                        })} ></Button>
                    </View>
                    <View style={[styles.button]}>
                        <Button title="รายการทั้งหมด" color={'black'} onPress={() => navigation.navigate('History')} ></Button>
                    </View>
                    <View style={[styles.button]}>
                        <Button title="ข้อมูลเกี่ยวกับแอพลิเคชั่นและช่วยเหลือ" color={'black'}></Button>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection: 'column',
        marginTop: 0,
        alignItems: 'center',
        backgroundColor: '#EEFDFC'
    },
    button: {
        width: 230,
        backgroundColor: '#D9D9D9',
        padding: 10,
        marginTop: 10,
        marginBottom: 10
    },
    footerView: {
        backgroundColor: '#A8EA91',
        height: 90,
        padding: 0
    },
})