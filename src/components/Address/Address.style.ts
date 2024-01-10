import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        height: height * 0.064,
        backgroundColor: '#F7D102',
        flexDirection: 'row',
    },
    headerOne: {
        height: height * 0.064,
        width: '80%',
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: '8%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    },
    headerOneView: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    },
    headerTwo: {
        height: height * 0.064,
        width: '20%',
        justifyContent: 'center',
        paddingLeft: 10
    }
})
export default styles