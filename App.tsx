import React, { useEffect } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { openDatabase } from 'react-native-sqlite-storage';
import type { PropsWithChildren } from 'react';
import { NavigationContainer, Route, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./components/homePage";
import ListRecord from "./components/ListRecord";
import globalstyles from "./globalStyle";
import DayRecord from "./components/DayRecord";

const db = openDatabase({
  name: 'app'
});

const Stack = createNativeStackNavigator();

const createTable = async () => {
  (await db).transaction(sql => {
    sql.executeSql(
      `create table if not exists reciepts(
        id integer primary key AUTOINCREMENT, 
        money real not null,
        note text not null,
        giver varchar(255) not null,
        day integer not null,
        month integer not null,
        year integer not null
      );
      `, [], (sqltnx, res) => {
      console.log(sqltnx);
      console.log(res),
        console.log("Create Table1 successfully");
    }, error => {
      console.log("Error: " + error);
    }
    )
    sql.executeSql(`
      create table if not exists expensess (
        id integer primary key AUTOINCREMENT,
        price real not null,
        note text not null,
        product varchar(255) not null,
        unit varchar(100) not null,
        amount real not null,
        day integer not null,
        month integer not null,
        year interger not null
      );
      `,[], (tx, res) =>{
        console.log("Create Table2 susscessfully");
      }, error =>{
        console.log(error);
    })
    sql.executeSql(`
      create table if not exists save_date (day integer not null, month integer not null, year integer not null)
    `,[], (tx, res)=>{}, error =>{console.log(error);
    })

  })
}; 


async function TestMaster() {
  (await db).transaction(txn => {
    txn.executeSql(`
          SELECT name FROM sqlite_master
      `, [], (tx, res) => {
      console.log('Test master');
      console.log(res.rows);
      for (let i = 0; i < res.rows.length; i++) {
        console.log(i, res.rows.item(i));
      }
    }, error => {
      console.log(error);

    })
  })
}

function TestDatabase() {

}

export default function App({ navigation }: any) {

  useEffect(()=>{
    createTable();
    TestMaster();
  })

  return (
    <View style={[container.container]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage" screenOptions={{
          headerStyle: {
            backgroundColor: '#FAB0F2',
          },
          headerTintColor: '#000',
          headerBackTitleStyle: {
            fontSize: 20
          },
          headerShown: false
        }}>
          <Stack.Screen name="HomePage" options={{ title: '' }} component={HomePage}></Stack.Screen>
          <Stack.Screen name="DayRecord" options={{
            title: 'รายการของวันนี้', headerShown: true, headerBackTitle: 'Back',
            headerStyle: {backgroundColor: '#FFAFFA'}, headerTintColor: '#000'
          }} component={DayRecord}></Stack.Screen>
          <Stack.Screen name="ListRecord" component={ListRecord} options={{
            title: '', headerBackTitle: 'Back',
          }}></Stack.Screen>

        </Stack.Navigator>

      </NavigationContainer>
      <View style={[container.footerView,]}>
        <Text style={{ fontSize: 30, textAlign: 'center', padding: 2, marginTop: 3 }}>
          IT.KMITL & COS.RU
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Wichai Kommongkhun</Text>
      </View>
    </View>
  )
};

const container = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'column',
    marginTop: 0,
  },
  footerView: {
    backgroundColor: '#A8EA91',
    height: 90,
    padding: 0
  },
});
