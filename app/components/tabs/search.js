import React from 'react'
import { Container, Header, Item, Icon, Input, Button } from 'native-base';
import { Text } from 'react-native';

const Search = () => (
    <Container>

        <Item>
            <Icon name="md-arrow-back" style={{ color: '#3BB9FF', paddingHorizontal: 15 }} />
            <Input placeholder="Search Twitter" />
        </Item>

    </Container>
);

export default Search;