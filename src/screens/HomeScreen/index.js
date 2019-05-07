import React, { Component } from 'react'
import {
  StyleSheet, View,
  SafeAreaView, Dimensions,
  ScrollView, 
} from 'react-native'
import Header from "../../commons/Header";
import Items from "./components/ItemsComponent";

const { width, height } = Dimensions.get('window')

const ICON_USER = require('../../resources/icons/user.png')
const ICON_LOGOUT = require('../../resources/icons/logout.png')

const ICON_MAIL = require('../../resources/icons/mail.png')
const ICON_LISTGV = require('../../resources/icons/listGV.png')
const ICON_SENT_MAIL = require('../../resources/icons/sent_mail.png')
const ICON_MICROPHONE = require('../../resources/icons/microphone.png')
const ICON_CAMERA = require('../../resources/icons/camera.png')
const ICON_ALBUM_PHOTO = require('../../resources/icons/album_photo.png')
const ICON_CHECKED = require('../../resources/icons/checked.png')
const ICON_FAIL = require('../../resources/icons/report.png')
const ICON_INFORMATION = require('../../resources/icons/information.png')
const ICON_GUIDE = require('../../resources/icons/guide.png')



export default class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          stickyHeaderIndices={[0]}
        >
          <Header
            leftIcon={ICON_USER}
            rightIcon={ICON_LOGOUT}
            title='ViEdu'
          />
          <View style={styles.viewItem}>
            <Items title="Hòm thư đến" color='rgb(251,202,58)' icons={ICON_MAIL} />
            <Items title="Giáo viên trường" color="rgb(83, 212, 191)" icons={ICON_LISTGV} />
            <Items title="Gửi thông báo" color="rgb(52, 202, 223)" icons={ICON_SENT_MAIL} />
            <Items title="Ghi âm" color="rgb(255, 130, 85)" icons={ICON_MICROPHONE} />
            <Items title="Chụp ảnh" color="rgb(255, 129, 152)" icons={ICON_CAMERA} />
            <Items title="Ảnh" color="rgb(126, 110, 248)" icons={ICON_ALBUM_PHOTO} />
            <Items title="Thông báo đã gửi" color="rgb(0, 239, 127)" icons={ICON_CHECKED} />
            <Items title="Gửi thất bại" color="red" icons={ICON_FAIL} />
            <Items title="Giới thiệu" color="rgb(18, 152, 217)" icons={ICON_INFORMATION} />
            <Items title="Hướng dẫn" color="rgb(111, 204, 47)" icons={ICON_GUIDE} />
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  viewItem: {
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    marginTop: 10
  }
})
