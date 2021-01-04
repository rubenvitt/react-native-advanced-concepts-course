import {Animated, StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import Animated = Animated.Animated;

const Ball = () => {
    useEffect(() => {
    })

    return <View style={styles.view}></View>
}

const styles = StyleSheet.create({
    view: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black',
    }
});

export default Ball;
