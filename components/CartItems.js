import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Item from './Item';

export default class CartItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    thumbnail: 'https://productimages.hepsiburada.net/s/36/80/10503883554866.jpg',
                    description: "Samsung LC27JG54QQMXUF 27\"",
                    itemCost: "1.999,90",
                    shippingCost: "9,90",
                    quantity: "1",
                    link: "https://www.hepsiburada.com/samsung-lc27jg54qqmxuf-27-144hz-display-hdmi-2k-qhd-freesync-cercevesiz-curved-va-oyuncu-monitor-p-HBV00000K2I2O?magaza=Hepsiburada"
                },
                {
                    thumbnail: 'https://m.media-amazon.com/images/I/71kFgqlhSCL._AC_AA180_.jpg',
                    description: "ADIMLab Updated Gantry Pro 3D Printer",
                    itemCost: "3.156,90",
                    shippingCost: "19,90",
                    quantity: "1",
                    link: "https://www.amazon.com/gp/product/B07CPQQ57D/ref=ox_sc_act_title_1?smid=A1D3DHZ8FTU3RZ&psc=1"
                }
            ]
        }
    }

    createItemList = () => {
        return this.state.items.map((item, index) => {
            return (
                <Item
                    key={index}
                    thumbnail={item.thumbnail}
                    description={item.description}
                    onPress={() => { WebBrowser.openBrowserAsync(item.link)}}
                    itemCost={item.itemCost}
                    shippingCost={item.shippingCost}
                    quantity={item.quantity}
                />
            )
        });
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                {this.createItemList()}
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});