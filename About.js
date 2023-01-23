import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const About = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.mainHeader}> Harjinder Singh </Text>
            <Text style={styles.paraStyle}> I am a Full Stack Developer </Text>
            <View>
                <Image
                    style={styles.imgStyle}
                    resizeMode="contain"
                    source={require("../../assets/h.jpg")
                    }
                />
            </View>
            <View style={styles.aboutLayout}>
                <Text style={styles.aboutSubHeader}>About me</Text>
                <Text style={[styles.paraStyle, styles.aboutPara]}> This includes working with languages such as HTML, CSS, JavaScript for the front-end, and languages such as Python, Ruby, or Java for the back-end. .</Text>
            </View>
            <Text style={styles.mainHeader}>Follow me on a social network</Text>
            <View style={[styles.menuContainer, styles.mainH1]}>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL(
                        "https://www.instagram.com/_https.harryrai/"

                    )}
                >
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
                        }}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL(
                        "https://www.youtube.com/channel/UCADPJIrQLYIo4qmIffvMgDA"

                    )}
                >
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL(
                        "https://discord.gg/BCjZyVMQvV",
                    )}
                >
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
                        }}
                    />

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => Linking.openURL(
                        "https://wa.me/+918570951151"

                    )}
                >
                    <Image
                        style={styles.iconStyle}
                        source={{
                            uri: "https://img.icons8.com/ios/250/000000/whatsapp--v5.png",
                        }}
                    />

                </TouchableOpacity>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    aboutContainer: {
        display: "flex",
        alignItems: "center",

    },
    mainHeader: {
        fontSize: 18,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 50,
        marginBottom: 10,
        
        
        // fontFamily: "JosefinSans_700Bold",
        // fontSize: 22,
        // color: "#344055",
        // textTransform: "uppercase",
        // paddingTop: 15,
        // paddingBottom: 15,
        // textAlign: "center",
        // fontWeight:"400",
    },
    paraStyle: {
        fontSize: 15,
        color: "#7d7d7d",
        paddingBottom: 30,
    },
    iconStyle: {
        width: "100%",
        height: 40,
        // marginTop:60,
        // marginVertical: 34,
        // paddingVertical: 30,
        aspectRatio: 1,
    },
    imgStyle: {
        width: 150,
        height: 150,
        borderRadius: 100,
       
    },
    aboutLayout: {
        backgroundColor: "#4c5dab",
        paddingHorizontal: 30,
        marginVertical:30,
    },
    aboutPara: {
        color:"#fff",
    },
    menuContainer: {
        width:"100%",
        flexDirection: "row",
        
        
    },
    aboutSubHeader: {
        fontSize: 18,
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginVertical: 15,
        fontFamily: "JosefinSans_700Bold",
        alignSelf: "center",
    },
    menuContainer: {
        width: "100%",
        // display: "flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    mainH1: {
      //  padding: 30,
      paddingVertical: 10,
        backgroundColor: "rgba(255,255,255,0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        // fontFamily: "JosefinSans_400Regular",
        marginVertical: 30,
    }
})
export default About;