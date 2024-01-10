import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        width: width * 0.285,
        height: height * 0.25,
        marginTop: 12,
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 12,
        marginBottom: 10
    },
    image: {
        width: width * 0.285,
        height: width * 0.285,
        borderRadius: 12,
        borderWidth: 0.1,
        borderColor: "gray"
    },
    viewContainer: {
        flexDirection: "row",
        marginTop: 10,
        alignItems: 'center'
    },
    priceText: {
        textDecorationLine: "line-through",
        color: "#747990",
        fontWeight: "bold",
        fontSize: 10,
    },
    discounted: {
        color: "#5D3EBD",
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 4
    },
    name: {
        fontWeight: '600',
        fontSize: 13,
        marginTop: 4
    },
    amount: {
        color: '#747990',
        fontSize: 12,
        marginTop: 4,
        fontWeight: '600'
    },
    iconContainer: {
        position: 'absolute',
        borderWidth: 0.3,
        right: -6,
        top: -6,
        borderRadius: 5,
        shadowRadius: 3.8,
        shadowOpacity: 0.05,
        borderColor: 'lightgrey',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30
    }
})
export default styles