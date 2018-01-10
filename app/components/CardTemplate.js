import React from 'react';
import { Text, Image } from 'react-native';
import { Card, CardItem, Left, Thumbnail, Body, Icon, Button, Right } from 'native-base';
import styles from './cardStyles';

const CardTemplate = (props) => {
    const { dp, name, username, time, text, links, img, comments, repeats, hearts } = props;

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={dp} />
                    <Body>
                        <Text>
                            <Text style={styles.name}>{name}  </Text>
                            <Text style={styles.username}>{username}  </Text>
                            <Text style={styles.username}>{time}    <Icon name='arrow-dropdown' /></Text>
                        </Text>
                        <Text>
                            <Text style={styles.text}>{text} </Text>
                            <Text style={styles.links}>{links}</Text>
                        </Text>
                    </Body>
                </Left>
            </CardItem>

            <CardItem cardBody>
                <Image resizeMode='contain' style={styles.img} source={img} />
            </CardItem>

            <CardItem style={{ paddingLeft: 80 }}>
                <Left>
                    <Button transparent>
                        <Icon name="chatboxes" style={{ color: '#3BB9FF', paddingRight: 5 }} />
                        <Text>{comments}</Text>
                    </Button>
                </Left>

                <Left>
                    <Button transparent>
                        <Icon name="repeat" style={{ color: '#3BB9FF', paddingRight: 5 }} />
                        <Text>{repeats}</Text>
                    </Button>
                </Left>

                <Left>
                    <Button transparent>
                        <Icon name="heart" style={{ color: '#3BB9FF', paddingRight: 5 }} />
                        <Text>{hearts}</Text>
                    </Button>
                </Left>

                <Left>
                    <Button transparent>
                        <Icon name="mail" style={{ color: '#3BB9FF' }} />
                    </Button>
                </Left>

            </CardItem>
        </Card>
    );

};


export default CardTemplate;