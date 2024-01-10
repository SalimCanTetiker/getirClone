import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white'
    },
    type: {
        color:"gray",
        fontWeight:'bold',
        padding:14
    },
    container2: {
        flexDirection:'row',
        alignItems:'center',
        flex: 1,
        flexWrap:'wrap',
        width:'100%',
        backgroundColor:'white',
        paddingVertical:10
    }
})
export default styles