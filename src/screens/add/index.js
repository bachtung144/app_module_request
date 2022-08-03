import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Picker, TouchableOpacity } from "react-native";
import deviceApi from "../../service/api/device";
import requestApi from "../../service/api/request";
import { getData } from "../../service/localStorage";

export const Add = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [listDevice, setListDevice] = useState('');
  const [number, onChangeNumber] = useState('');

  const getListDevice = async apartId => {
    let params = {
      apartmentId: apartId,
    };
    const response = await deviceApi.getAll(params);
    const {data} = response;
    if (data) {
      setListDevice(data)
    }
  };

  const addRequest = async () => {
    await getData('userId')
      .then(async data => {
        if (data) {
          let params = {
            user_id: data,
            device_id: selectedValue,
            number: number,
          };
          const response = await requestApi.add(params);
          if (response) alert(response?.msg)
        }
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getListDevice()
  },[])

  return(
    <View style={{flex:1}}>
      <View style={{marginTop:30}}>
        <Text style={{fontSize:20, fontWeight:'bold',marginLeft:10}}>
          Nhập số lượng thiết bị
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChangeNumber(value)}
          value={number}
          placeholder="Số lượng"
          keyboardType="numeric"
        />
      </View>
      <View style={{marginTop:20}}>
        <Text style={{fontSize:20, fontWeight:'bold',marginLeft:10}}>
          Chọn chủng loại
        </Text>
        <View style={{borderWidth:1, width:'95%', alignSelf:'center',marginTop:10}}>
          <Picker onValueChange={setSelectedValue}>
            {listDevice?.map(item => (
              <Picker.Item
                label={item?.name}
                value={item?._id}
                key={item?._id}
              />
            ))}
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={{alignItems:'center', justifyContent:'center',
        height:60, width:100, backgroundColor:'blue', alignSelf:'center',
        marginTop:50, borderRadius:10}}
        onPress={() => addRequest()}
      >
        <Text style={{fontSize:20, color:'#FFF'}}>Gửi</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
