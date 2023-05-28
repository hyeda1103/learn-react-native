import React, { useContext, useState } from "react"
import { KeyboardAvoidingView, StyleSheet, Platform } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import WriteHeader from "../components/WriteHeader"
import WriteEditor from "../components/WrteEditor"
import { useNavigation } from "@react-navigation/native"
import LogContext from "../contexts/LogContext"

function WriteScreen() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigation = useNavigation()

    const { onCreate } = useContext(LogContext)
    const onSave = () => {
        onCreate({
            title,
            body,
            data: new Date().toISOString()
        })
        navigation.pop()
    }

    return (
        <SafeAreaView style={styles.block}>
            <KeyboardAvoidingView
                style={styles.avoidingView}
                behavior={Platform.OS === "ios" ? 'padding' : undefined}
            >
                <WriteHeader onSave={onSave} />
                <WriteEditor title={title} body={body} onChangeTitle={setTitle} onChangeBody={setBody} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    avoidingView: {
        flex: 1
    }
})

export default WriteScreen