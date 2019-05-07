import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'

import Header from "../../commons/Header";
import dataListAlbumPhoto from "../../datas/dataListAlbumPhoto";
import ItemsAlbumPhoto from "./components/ItemsAlbumPhoto";

const { width, height } = Dimensions.get('window')
const ICON_BACK = require('../../resources/icons/back.png')
const ICON_ADD = require('../../resources/icons/add.png')

export default class AlbumPhotosScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          leftIcon={ICON_BACK}
          title="Album ảnh"
        />
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={dataListAlbumPhoto}
          horizontal={false}
          numColumns={2}
          extraData={dataListAlbumPhoto}
          keyExtractor={(item, index) => item.id}

          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator} />
            )
          }}
          renderItem={({ item, index }) => {
            return (
              <ItemsAlbumPhoto item={item} index={index} />
            )
          }}
        />
        <TouchableOpacity
          style={styles.buttonAdd}
          >
          <Image
            source={ICON_ADD}
            style={styles.iconAdd}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  listContainer: {
    alignItems: 'center'
  },
  separator: {
    marginTop: 10,
  },
  buttonAdd: {
    width: 56,
    height: 56,
    position: 'absolute',
    borderRadius: 28,
    backgroundColor: 'rgb(255, 152, 42)',
    justifyContent: 'center',
    alignItems: 'center',
    top: height - 90,
    left: width - 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  iconAdd: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    tintColor: 'white'
  }
});  