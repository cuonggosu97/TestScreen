import React, { Component } from "react";
import {
    View, Image, Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
class Header extends Component {
    render() {
        let { leftIcon, rightIcon, title, onLeftPress, onRightPress } = this.props;
        return (
            <View style={styles.viewHeader}>
                <View style={styles.viewIcon}>
                    <TouchableOpacity
                        onPress={onLeftPress}
                    >
                        <Image
                            source={leftIcon}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewLogo}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <View style={styles.viewIcon}>
                    <TouchableOpacity
                        onPress={onRightPress}
                    >
                        <Image
                            source={rightIcon}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewHeader: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        backgroundColor: 'white',
    },
    viewIcon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        tintColor: 'grey',
        backgroundColor: 'transparent'
    },
    viewLogo: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title:{
        fontSize: 16
    }
})

export default Header
