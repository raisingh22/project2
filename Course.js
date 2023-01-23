import { StyleSheet, Image, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from "../api/Courses";
const Course = ({ navigation }) => {

    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>

                <View style={styles.courseConTainer}>
                    <View>
                        <Image style={styles.cardImage}
                            source={item.image}
                            resizeMode="contain"

                        />
                    </View>
                    <Text style={styles.mainHeader}> {item.title}
                    </Text>
                    <Text style={styles.descriptionStyle}>   {item.discription}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => {
                                navigation.navigate("CourseDetails"
                                    , {
                                    courseId: item.id,
                                })
                            }}>
                            <Text style={styles.buttonText}> Course Details</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    };


    return (<FlatList
        keyExtractor={(item) => item.id}
        data={Courses}
        renderItem={courseCard}
        // horizontal={true}
        

    />


    )
}



const styles = StyleSheet.create({
    cardImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
    },
    mainContainer: {
        paddingHorizontal: 20,
    },
    courseConTainer: {
        padding: 30,
        backgroundColor: "rgba(255,255,255,0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "black",
        shadowOffset: { width: 10, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
    },
    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center",
    },
    descriptionStyle: {
        padding: 30,
        backgroundColor: "rgba(255,255,255,0.90)",
        textAlign: "center",
        borderRadius: 5,
        shadowColor: "grey",
        shadowOffset: { width: 10, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30,
        textAlign:"left",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonStyle: {
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#8092ff",

    },
    buttonText: {
        fontSize: 20,
        color: "#eee",
        textTransform: "capitalize",
    },


});
export default Course