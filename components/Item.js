import * as React from 'react'
import { RectButton } from "react-native-gesture-handler";
import { StyleSheet, Image, View, Text } from "react-native";

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = props.onPress;
        this.state = {
            thumbnail: props.thumbnail,
            description: props.description,
            itemCost: props.itemCost,
            shippingCost: props.shippingCost,
            quantity: props.quantity
        }
    }
    render() {
        return (
            <RectButton
                style={styles.option}
                onPress={this.onPress}
            >
                <View style={{ flexDirection: "row", }}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: this.state.thumbnail }}
                            style={styles.logo}
                        />
                    </View>
                    <View style={{ flexDirection: "column", marginLeft: 12 }}>
                        <View style={styles.descriptionContainer}>
                            <Text>{this.state.description}</Text>
                        </View>
                        <View style={styles.itemCostContainer}>
                            <Text>
                                {"Price : " + this.state.itemCost + " TL"}
                            </Text>
                        </View>
                        <View style={styles.shippingCostContainer}>
                            <Text>
                                {"Shipping : " + this.state.shippingCost + " TL"}
                            </Text>
                        </View>
                        <View style={styles.quantityContainer}>
                            <Text>
                                {"Qty : " + this.state.quantity }
                            </Text>
                        </View>
                    </View>
                </View>
            </RectButton>
        )
    }
}

const styles = StyleSheet.create({
    option: {
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: 0,
        borderColor: '#a0a0a0',
    },
    logo: {
        width: 100,
        height: 100,
    },
    imageContainer: {
        marginLeft: 12
    },
    descriptionContainer: {
        marginTop: 10,
        height: 50,
    }
})