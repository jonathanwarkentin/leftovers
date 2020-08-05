import React, { useEffect, useState } from "react";
import { Alert, Button, Dimensions, Platform, Text, TextInput } from "react-native";
import styled from "styled-components/native";
import * as firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { addFoodDonation, createFoodDonationReset, fetchFoodDonations } from "../../slices/postReducer";

let safeMargin;

if (Platform.OS == "ios") {
    safeMargin = 65;
} else if ((Platform.OS = "android")) {
    safeMargin = 0;
}

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function DonatedFoodScreen({ navigation, route }) {
    const { email } = useSelector(
        (state) => state.auth
    );
    const { createFoodDonationError, createFoodDonationStatus, newDonationId } = useSelector(
        (state) => state.post
    );
    const [newPostDesc, setNewPostDesc] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (newDonationId) {
            console.log('New donation confirmed in NewOfferScreen: ', newDonationId);
            setNewPostDesc("");
            dispatch(createFoodDonationReset());
            navigation.navigate("Donated Food");
        }
    }, [newDonationId]);

    useEffect(() => {
        if (createFoodDonationError) {
            Alert.alert(createFoodDonationError);
        }
    }, [createFoodDonationError]);

    return (
        <Container>
            <Text>Offer some food!</Text>
            <TextInput placeholder="Post Description" style={{ width: screenWidth * .8, height: 40, borderWidth: 1 }} value={newPostDesc} onChangeText={(text) => { setNewPostDesc(text) }} />
            {(createFoodDonationStatus === 'loading') ?
                <Text>Loading...</Text>
                :
                <Button title="Create Post" onPress={() => dispatch(addFoodDonation(email, newPostDesc))} />
            }
        </Container>
    );
}

const Container = styled.SafeAreaView`
  flex: 1;
  backgroundColor: #fff;
  alignItems: center;
  justifyContent: space-evenly;
`;