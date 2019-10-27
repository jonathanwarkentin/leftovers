import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class SenderScreen extends React.Component {
    static navigationOptions = {
        title: 'Sender',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>This is the sender screen.</Text>
                <Button
                    title="Sender Secondary"
                    onPress={() => navigate('Sender2')}
                />
            </View>
        );
    }
}

export default SenderScreen;