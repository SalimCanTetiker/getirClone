import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:10,
        borderRadius:6,
        marginRight:12,
        height: height * 0.044
    },
    text: {
        fontSize:12,
        color:'#7849F7',
        fontWeight:'600'
    }
})
export default styles