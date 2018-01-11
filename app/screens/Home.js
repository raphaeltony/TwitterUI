
import React, { Component } from 'react';
import { Container, Header, Left, Thumbnail, Body, Title, Right, Tab, Tabs, TabHeading, Icon, Footer, FooterTab, Button, Text, Fab } from 'native-base';
import styles from '../styles';

import Dashboard from '../components/tabs/dash';
import Search from '../components/tabs/search';
import Notifications from '../components/tabs/notify';
import Messages from '../components/tabs/message';
import { TouchableOpacity } from 'react-native';





export default class App extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs style={styles.header}>
          <Left >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Thumbnail source={require('../images/1.png')} />
            </TouchableOpacity>
          </Left>
          <Body>
            <Title style={{ color: 'black', alignContent: 'flex-start' }}>Home</Title>
          </Body>
          <Right />
        </Header>


        <Tabs tabBarUnderlineStyle={styles.tabUnder}>
          <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Icon name='home' style={styles.tab} /></TabHeading>}><Dashboard /></Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Icon name='search' style={styles.tab} /></TabHeading>}><Search /></Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Icon name='notifications' style={styles.tab} /></TabHeading>}><Notifications /></Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Icon name='mail' style={styles.tab} /></TabHeading>}><Messages /></Tab>
        </Tabs>

        <Footer style={{ backgroundColor: 'white' }}>
          <FooterTab style={{ backgroundColor: 'white' }}>
            <Left style={{ flexDirection: 'row' }}>
              <Button transparent>
                <Text style={{ color: '#3BB9FF', fontSize: 16, fontWeight: 'bold' }}>All</Text>
              </Button>

              <Button transparent>
                <Text style={{ color: 'grey', fontSize: 16, fontWeight: 'bold' }}>Mentions</Text>
              </Button>
            </Left>

            <Right>
              <Button transparent>
                <Icon name='settings' style={{ backgroundColor: 'white', marginRight: 10, color: '#3BB9FF' }} />
              </Button>
            </Right>

          </FooterTab>
        </Footer>

        <Fab position='bottomRight' containerStyle={{ padding: 30 }} style={{ backgroundColor: '#3BB9FF', marginBottom: 40 }}>
          <Icon name='create' />
        </Fab>


      </Container>
    );
  }
}

