import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Menu from '../Components/Menu';

const Home = (props) => {
    const description = "The best code is no code at all.";
    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <Image
                    style={styles.headerImage}
                    resizeMode="contain"
                    source={require("../../assets/c.png")
                    }
                />
                <Text style={[styles.mainHeader,
                {
                    fontSize: 24,
                    color: "#4c5dab",
                    marginTop: 30,

                }
                ]}>
                    Welcome to
                </Text>
                <Text style={[styles.mainHeader, {
                    fontSize: 33,
                    marginTop: 0,
                    color: "red",
                }]}>
                    {props.channelName}
                </Text>
                <Text style={[styles.paraStyle,
                {
                }]}>
                    {description}
                </Text>
            </View>
            <View>
                <View style={[styles.lineStyle, {



                }]}>

                </View>
                <Menu />
                <View style={[styles.lineStyle, {
                    marginVertical: 10,

                }]}></View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#ffff",
        textAlign: "center",
    },
    homeTop: {
        // height:"100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    headerImage: {
        height: undefined,
        width: "100%",
        aspectRatio: 1.5,
        display: "flex",
        alignItems: "space-between",
        marginTop: 0,
        borderRadius: 20,
        
    },
    mainHeader: {
        fontSize: 30,
        color: "#353432",
        textTransform: "uppercase",

        fontFamily: "Nunito_600SemiBold",
    },
    paraStyle: {
        padding: 30,
        marginTop: 90,
        backgroundColor: "rgba(255,255,255,0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        fontFamily: "JosefinSans_400Regular",
        marginVertical: 30,
    },
    lineStyle: {
        marginBottom: 0,
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 20,


    }
});

export default Home;