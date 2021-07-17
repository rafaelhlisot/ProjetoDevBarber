import React from 'react';
import {Container} from './styles';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Api from '../../services/Api';

export default () => {
    const navigation = useNavigation();
    const handleLogoutClick = async () => {
        await Api.logout();
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }
    
    return (

        <Container>
            <Text>
                Profile
            </Text>
            <Button title="Sair" onPress={handleLogoutClick} />
        </Container>
    );
}