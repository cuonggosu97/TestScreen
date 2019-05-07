import React, { Component } from 'react'
import {
    Text, StyleSheet, View,
    TouchableOpacity, Image
} from 'react-native'

export default class ItemsAlbumPhoto extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.cardImage} source={{ uri: this.props.item.image }} />
                </View>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>{this.props.item.title}</Text>
                    <Text style={styles.count}>({this.props.item.count})</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 8,
        backgroundColor: "white",
        flexBasis: '45%',
        marginHorizontal: 10,
    },
    cardContent: {
        paddingVertical: 17,
        justifyContent: 'space-between',
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },
    imageContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    title: {
        fontSize: 18,
        flex: 1,
        color: "#778899"
    },
    count: {
        fontSize: 18,
        flex: 1,
        color: "#B0C4DE"
    },
})
