import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: height * 0.25,
        backgroundColor: 'white',
        paddingTop: 15
    },
    flatList: {
        width: width * 0.5,
        height: height * 0.18
    },
    image: {
        width: width * 0.5,
        height: height * 0.21,
        resizeMode: "stretch"
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 20,
        marginVertical:2,
        marginHorizontal:5
    },
    dots: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:15
    }
})
export default styles