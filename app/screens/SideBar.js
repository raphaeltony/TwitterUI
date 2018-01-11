import React from 'react';
import {
    Header,
    Footer,
    Left,
    Right,
    Card, CardItem,
    Text, Body,
    Container,
    Thumbnail,
    List,
    ListItem,
    Content,
    View,
    Icon
} from "native-base";

const listData = [{ name: "Profile", icon: 'contact' }, { name: "Lists", icon: 'list-box' }, { name: "Moments", icon: 'flash' }, { name: 'Highlights', icon: 'pricetags' }];

export default class SideBar extends React.Component {


    render() {
        return (
            <Container>
                <Content style={{ backgroundColor: 'white' }}>
                    <Card >
                        <CardItem >
                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>

                                <Thumbnail source={require('../images/1.png')} />
                                <Text style={{ fontWeight: 'bold' }}>Raphael Tony</Text>
                                <Text note>@raphaeltony</Text>


                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{ color: 'grey' }}><Text style={{ fontWeight: 'bold', color: 'black' }}>343</Text> Following   </Text>
                                    <Text style={{ color: 'grey' }}><Text style={{ fontWeight: 'bold', color: 'black' }}>361</Text> Followers   </Text>
                                </View>
                            </View>
                        </CardItem>


                        <CardItem style={{ elevation: 0, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'grey' }}>

                            <List
                                dataArray={listData}
                                renderRow={data => {
                                    return (
                                        <ListItem
                                            button noborder
                                            icon

                                        >
                                            <Left>
                                                <Icon name={data.icon} style={{ color: 'grey' }} />
                                            </Left>
                                            <Body>
                                                <Text>{data.name}</Text>
                                            </Body>
                                            <Right />


                                        </ListItem>
                                    );
                                }}
                            />
                        </CardItem>
                        <CardItem >
                            <List>
                                <ListItem>
                                    <Text>Settings and Privacy</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Help Center</Text>
                                </ListItem>
                            </List>
                        </CardItem>
                    </Card>
                    <Footer style={{ backgroundColor: 'white' }}>
                        <Left>
                            <Icon style={{ marginLeft: 10, color: '#3BB9FF' }} name='moon'></Icon>
                        </Left>
                        <Right>
                            <Icon style={{ marginRight: 10, color: '#3BB9FF' }} name='qr-scanner'></Icon>
                        </Right>
                    </Footer>
                </Content>
            </Container>
        );
    }
}