import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import React from "react";
import CheckBox from "expo-checkbox";
import { useState } from "react";

//import {  } from 'react-native-web

const Contact = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);
    const submit = () => {
        if (!name && !email && !mobile && !message) {
            Alert.alert("Please enter your name and email");
           
        }
        else {
            Alert.alert(`Thanks for using  ${name} `);
            navigation.navigate("Home");
        }
    };
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Level up your knowledge </Text>
            <Text style={styles.description}> you can reach me</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your name</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"harry"}
                    value={name}
                    onChangeText={(name) => setName(name)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your email</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"abc@gmail.com"}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your Mobile number</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"976556755"}
                    value={mobile}
                    onChangeText={(mobile) => setMobile(mobile)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.labels}> How can we Help you</Text>
                <TextInput
                    style={[styles.inputStyle, styles.multiLineStyle]}
                    placeholder={"Tell us about your self"}
                    value={message}
                    onChangeText={(message) => setMessage(message)}
                    numberOfLines={5}
                    multiline={true}
                />
            </View>
            <View style={styles.wrapper}>
                {/* Checkbox */}
                <CheckBox
                    value={agree}
                    onValueChange={() => setAgree(!agree)} 
                    color={agree ? "#4630EB" : undefined}
                    />
                <Text style={styles.wrapperText}>I have read and agreed with the T&C</Text>
            </View>
            <TouchableOpacity
                style={[styles.buttonStyle, {
                    backgroundColor:agree ? "#4630EB" : "grey",
                },
                ]}
                disabled={!agree}
                onPress={submit}

            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    inputContainer: {
        marginTop: 5,
    },
    mainHeader: {
        fontSize: 20,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        textTransform: "capitalize",
    },
    description: {
        fontSize: 15,
        color: "#344055",
        paddingBottom: 20,
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
    },
    labels: {
        fontWeight: "bold",
        paddingBottom: 10,
        color: "#7d7d7d",
        lineHeight: 25,
    },
    buttonText: {
        color:"#eee",
    },
    multiLineStyle: {
        paddingVertical: 4,
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: "center",
        display: "flex",
        paddingHorizontal: 18,
        marginVertical: 30,
        justifyContent:"center",
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        
    },
    wrapperText: {
        marginLeft: 20,
        color:"black",
    }
});

export default Contact;
