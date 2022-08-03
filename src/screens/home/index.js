import React, { useEffect, useState } from "react";
import { View, Text, FlatList,StyleSheet } from "react-native";
import requestApi from "../../service/api/request";
import { getData } from "../../service/localStorage";

const Item = ({ item }) => (
  <View style={styles.item}>
    {
      {
        'send': <Text style={{fontSize:20, color:'blue'}}>Trạng thái: Đã gửi</Text>,
        'pending': <Text style={{fontSize:20, color:'orange'}}>Trạng thái: Đang chờ </Text>,
        'handled': <Text style={{fontSize:20, color:'green'}}>Trạng thái: Đã xử lý</Text>
      }[item?.status]
    }
    <Text>Số lượng: {item?.number}</Text>
    <Text>Chủng loại: {item?.device}</Text>
  </View>
);

export const Home = () => {
  const [listRequest, setListRequest] = useState()

  const handleList = async () => {
    await getData('userId')
      .then(data => {
        if (data) {
          getListRequest(data);
        }
      })
      .catch(err => console.log(err));
  };

  const getListRequest = async userId => {
    const response = await requestApi.getAll(userId);
    const {requests} = response;
    if (requests) setListRequest([...requests]);
  };

  const renderItem = ({item}) => (
    <Item item={item} />
  );

  useEffect(() => {
    handleList()
  },[])

  return(
    <View style={{flex:1}}>
      <FlatList
        data={listRequest}
        renderItem={renderItem}
        keyExtractor={item => item?._id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    borderWidth:1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

