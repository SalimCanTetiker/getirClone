import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: height * 0.1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white'
    },
    viewContainer: {
        backgroundColor: '#5D39C1',
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.06,
        justifyContent: 'center',
        width: '88%',
        marginHorizontal: '6%',
        borderRadius: 10
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white'
    }
})
export default styles