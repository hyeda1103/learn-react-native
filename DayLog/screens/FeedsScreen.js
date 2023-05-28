import React, { useContext } from "react"
import { StyleSheet, View, Text, TextInput } from "react-native"
import LogContext from "../contexts/LogContext"
import FloatingWriteButton from "../components/FloatingWriteButton"

function FeedsScreen() {
    const {logs} = useContext(LogContext)
    console.log(JSON.stringify(logs, null, 2))
    return (
    <View style={styles.block}>
        <FloatingWriteButton />
    </View>)
}

const styles = StyleSheet.create({
    block: {
        flex: 1
    },
})

export default FeedsScreen