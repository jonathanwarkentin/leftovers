import * as React from "react";
import { Button, Platform, Text } from "react-native";
import styled from "styled-components/native";
import * as firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { Welcome } from "../components/Welcome";

let safeMargin;

if (Platform.OS == "ios") {
    safeMargin = 65;
} else if ((Platform.OS = "android")) {
    safeMargin = 0;
}

export default function ProfileScreen({ navigation, route }) {
    const { email } = useSelector(
        (state) => state.auth
    );

    const onLogoutPress = () => {
        firebase.auth().signOut();
    };

    return (
        <Container>
            <Welcome email={email} />
            <Button title="Logout" onPress={() => onLogoutPress()} />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </Container>
    );
}

const Container = styled.SafeAreaView`
  flex: 1;
  backgroundColor: #fff;
  alignItems: center;
  justifyContent: space-evenly;
`;