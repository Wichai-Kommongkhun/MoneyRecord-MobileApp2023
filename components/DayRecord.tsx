import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { openDatabase } from "react-native-sqlite-storage";

const db = openDatabase({
    name: 'app'
});

const mockUp = [
    {
        title: 'Test1', data: [
        ], sum: 0
    }
];

export default function DayRecord({ navigation, route }: any) {
    var day = route.params.day;
    var month = route.params.month;
    var year = route.params.year;
    const record: any = []

    return (
        <SafeAreaView style={[styles.container]}>
            
        </SafeAreaView>
    )
}

const getRecord = async (day: any, month: any, year: any) => {

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
})
