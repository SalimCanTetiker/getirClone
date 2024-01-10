import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor:'#7849F7',
        height: height * 0.065
    }
})
export default styles