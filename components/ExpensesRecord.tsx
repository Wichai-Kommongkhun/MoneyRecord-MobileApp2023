import React from "react";

import { 
    View , Dimensions, Text, 
    ScrollView, SafeAreaView, 
    TextInput, Button, StyleSheet} from "react-native";

const { height, width } = Dimensions.get('window');

export default function Expenses({navigation}: any){
    var [prodectName, setProductNmae] = React.useState('');
    var [amount, setAmount] = React.useState('');
    var [unit, setUnit] = React.useState('')
    var [price, setPrice] = React.useState('');
    var [note, setNote] = React.useState('');
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.title}>บันทึกรายจ่าย</Text>
            </View>
            <View style={[styles.form]}>
                <ScrollView style={[{

                }]} horizontal={false}
                    contentContainerStyle={[{
                        padding: 15
                    }]}
                >
                    <SafeAreaView>
                        <Text style={[styles.label]}>ชื่อสินค้า/รายการจ่าย:</Text>
                        <TextInput placeholder="ตัวอักษรไม่เกิน 100 ตัว" style={[styles.input, { marginTop: 0 }]}
                            maxLength={100} value={prodectName} onChangeText={setProductNmae}
                        ></TextInput>
                    </SafeAreaView>

                    <View style={[{
                        marginTop: 5
                    }]}>
                        <Text style={[styles.label]}>จำนวน/ปริมาณ:</Text>
                    </View>
                    <SafeAreaView style={[styles.rowUint]}>
                        <View style={[{ flex: 1 }]}>
                            <TextInput placeholder="กรอก จำนวน/ปริมาณ" keyboardType="numeric"
                                value={amount} onChangeText={setAmount}
                                style={[styles.textInput]}></TextInput>
                        </View>
                        <View style={[{ flex: 1 }]}>
                            <TextInput placeholder="หน่วย" style={[{
                                borderWidth: 1,
                                marginLeft: 25,
                                width: 90,
                                height: 30,
                                textAlign: 'center', fontSize: 20
                            }]} maxLength={20} value={unit} onChangeText={setUnit}></TextInput>
                        </View>
                    </SafeAreaView>

                    <SafeAreaView style={[{ marginTop: 10 }]}>
                        <Text style={[styles.label]}>ราคา / {unit}</Text>
                        <TextInput style={[styles.input, { marginTop: 10 }]} placeholder="ราคา"
                            value={price} keyboardType="numeric"
                            onChangeText={setPrice}></TextInput>
                    </SafeAreaView>

                    <SafeAreaView>
                        <Text style={styles.label}>Note.</Text>
                        <TextInput style={[styles.textArea]} value={note} onChangeText={setNote}
                            maxLength={150} placeholder="ตัวอัการไม่เกิน 150 ตัว" multiline={true} numberOfLines={3} textAlignVertical='top' />
                    </SafeAreaView>

                    <View style={[styles.summary]}>
                        <Text style={[styles.textSummary]}>สรุปรายจ่าย:</Text>
                        <Text style={{
                            fontSize: 20,
                            marginTop: 5
                        }}>จำนวน/ปริมาณ: {amount} {unit}</Text>
                        <Text style={{
                            fontSize: 20,
                        }}>ราคา: {price} บาท.</Text>
                    </View>

                    <View style={[{
                        marginBottom: 50
                    }, styles.button]}>
                        {/* <Button title="SAVE" color={'#E6E6E6'} onPress={submit}></Button> */}
                    </View>
                </ScrollView>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        padding: 5,
        marginTop: 0
    },
    title: {
        fontSize: 32,
        fontWeight: '600'
    },
    form: {
        flex: 5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 10,
        marginLeft: 10,
    },
    label: {
        fontSize: 21,
        fontWeight: '400',
        marginTop: 5
    },
    rowUint: {
        flex: 0.1,
        flexDirection: 'row',
        marginTop: 5,
    },
    textInput: {
        borderWidth: 1,
        height: 30,
        padding: 5,
        fontSize: 20,
        width: 170
    },
    input: {
        borderWidth: 1,
        fontSize: 20,
        height: 30,
        padding: 5,
        width: 240
    },
    button: {
        marginTop: 10,
        width: 150,
        backgroundColor: '#C96508',
    },
    textArea: {
        height: 84,
        width: width / 1.2,
        fontSize: 20,
        textAlign: 'left',
        borderWidth: 1,
    },
    summary: {
        marginTop: 10,
        marginBottom: 10
    },
    textSummary: {
        fontSize: 28
    }
})