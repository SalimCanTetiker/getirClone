import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        height: height * 0.12,
        paddingHorizontal: "4%",
        width: "100%",
        backgroundColor: "#f8f8f8",
        position: 'absolute',
        bottom: 0
    },
    pressContainer: {
        flex: 3,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor: "#5D3EBD",
        height: height * 0.06,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -10
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    priceContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        height: height * 0.06,
        marginTop: -10,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    priceText: {
        color: "#5D3EBD",
        fontWeight: "bold",
        fontSize: 15
    }
})
export default styles