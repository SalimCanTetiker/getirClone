import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        height: height * 0.072,
        flexDirection: 'row',
        paddingVertical: height * 0.014,
        paddingHorizontal: 12,
        borderColor: 'lightgray',
        borderBottomWidth: 1
    }
})
export default styles