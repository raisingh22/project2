import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Course")} >
                {/* <Text style={styles.textStyle}>  Course </Text> */}
                <Image style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/stickers/90/000000/training.png",
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("About")} >
                {/* <Text style={styles.textStyle}>  About </Text>*/}
                <Image style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/stickers/100/000000/about.png",
                    }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("Contact")} >
                {/* <Text style={styles.textStyle}>  Contact </Text> */}
                <Image style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/stickers/90/000000/phone.png",
                    }} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("UserData")} >
                {/* <Text style={styles.textStyle}>  UserData </Text> */}
                <Image style={styles.iconStyle}
                    source={{
                        uri: "https://img.icons8.com/stickers/90/000000/conference.png",
                    }} />
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",

    },
    textStyle: {
        textTransform: "uppercase",
        fontfamily: "Roboto, sans- serif",

    },
    iconStyle: {
        width: "100%",
        height: 50,
        aspectRatio: 1,

    }
})
export default Menu;