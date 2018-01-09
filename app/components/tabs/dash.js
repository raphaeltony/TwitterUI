import React from 'react'
import { Container, Content } from 'native-base';
import { Text } from 'react-native';

import CardTemplate from '../CardTemplate';

const Dashboard = () => (
    <Container>
        <Content style={{ flex: 1 }}>
            <CardTemplate
                dp={require("../../images/dp.png")}
                name="Raphael Tony"
                username="@raph.tony"
                time="20m"
                text="Hey there"
                links="#hastag"
                img={require("../../images/img1.png")}
                comments='15'
                repeats='5'
                hearts='45'
            />
        </Content>
    </Container>
);

export default Dashboard;