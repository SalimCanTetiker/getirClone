import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        width: width*0.25,
        height:width*0.24,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: 10
    },
    image: {
        width: width * 0.18,
        height: width * 0.18,
        borderRadius: 10,
    }
})
export default styles