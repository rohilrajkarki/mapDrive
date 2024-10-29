import { Redirect } from "expo-router"
import { StyleSheet, Text } from "react-native"

const Home = () => {
    return (
        <Redirect href={"/(auth)/onboarding"} />
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "red"
    },
    text: {
        fontSize: 50
    }
})

export default Home