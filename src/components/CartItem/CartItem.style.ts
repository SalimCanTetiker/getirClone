import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    container2: {
        height: height * 0.13,
        width: width * 0.92,
        marginHorizontal: width * 0.04,
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 0.4,
        borderBottomColor: "lightgrey"
    },
    imageContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: height * 0.09,
        width: height * 0.09,
        borderRadius: 8,
        borderWidth: 0.4,
        borderColor: "lightgray"
    },
    container3: {
        marginLeft: 8
    },
    nameText: {
        fontWeight: "500",
        fontSize: 13,
        maxWidth: width * 0.44
    },
    miktarText: {
        color: "#848897",
        fontWeight: "600",
        fontSize: 12,
        marginTop: 3
    },
    fiyatText: {
        color: "#5D3EBD",
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 6
    },
    bodyContainer: {
        width: width * 0.22,
        height: height * 0.04,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 0.5,
        borderColor: "lightgrey",
        shadowOpacity: 0.4,
        shadowColor: "gray",
    },
    minusContainer: {
        flex: 1,
        alignItems: "center"
    },
    quantityContainer: {
        flex: 1,
        backgroundColor: "#5D3EBD",
        height: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    plusContainer: {
        flex: 1,
        alignItems: "center" 
    },
    minusText: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#5D3EBD"
    },
    quantityText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold"
    },
    plusText: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#5D3EBD" 
    }
})
export default styles