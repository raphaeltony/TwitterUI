import React from 'react';
import { Text, Image } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Icon, Button } from 'native-base';

const CardTemplate = (props) => {
    const { dp, name, username, time, text, links, img, comments, repeats, hearts } = props;

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={dp} />
                    <Body>
                        <Text>
                            <Text>{name} </Text>
                            <Text>{username} </Text>
                            <Text>{time} <Icon name='arrow-dropdown' /></Text>
                        </Text>
                        <Text>
                            <Text>{text}</Text>
                            <Text>{links}</Text>
                        </Text>
                    </Body>
                </Left>
            </CardItem>

            <CardItem>
                <Body>
                    <Image style={{ flex: 1 }} source={img} />
                </Body>
            </CardItem>

            <CardItem>
                <Left>
                    <Button transparent>
                        <Icon name="chatboxes" style={{ color: '#3BB9FF' }} />
                        <Text>{comments}</Text>
                    </Button>
                    <Button transparent>
                        <Icon name="repeat" style={{ color: '#3BB9FF' }} />
                        <Text>{repeats}</Text>
                    </Button>
                    <Button transparent>
                        <Icon name="heart" style={{ color: '#3BB9FF' }} />
                        <Text>{hearts}</Text>
                    </Button>
                    <Button transparent>
                        <Icon name="mail" style={{ color: '#3BB9FF' }} />
                    </Button>
                </Left>
            </CardItem>
        </Card>
    );

};


export default CardTemplate;