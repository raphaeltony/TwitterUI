import React from 'react'
import { Container, Content } from 'native-base';
import { Text } from 'react-native';

import CardTemplate from '../CardTemplate';

const Dashboard = () => (
    <Container>
        <Content style={{ flex: 1 }}>
            <CardTemplate
                dp={require("../../images/1.png")}
                name="Raphael Tony"
                username="@raph.tony"
                time="1m"
                text="Finally completed Twitter UI"
                links="#task1"
                img={require("../../images/img1.png")}
                comments='15'
                repeats='5'
                hearts='45'
            />

            <CardTemplate
                dp={require("../../images/2.png")}
                name="All India Radio News‏"
                username="@airnewsalerts"
                time="8m"
                text="Class 10, 12 board exams to begin from March 5."
                links="#CBSE"
                img={require("../../images/img2.png")}
                comments='0'
                repeats='4'
                hearts='8'
            />

            <CardTemplate
                dp={require("../../images/3.png")}
                name="Sachin Tendulkar"
                username="@sachin_rt"
                time="Jan 6"
                text="One of the greatest all rounders and the man who lead our country to it's maiden World cup victory. Wishing @therealkapildev, a very happy birthday."
                links=""
                img={require("../../images/img3.png")}
                comments='514'
                repeats='2.6K'
                hearts='30K'
            />

            <CardTemplate
                dp={require("../../images/4.png")}
                name="CoinDesk"
                username="@coindesk"
                time="21h"
                text="Kodak Is Launching a Cryptocurrency for Photographers"
                links="http://bit.ly/2CYnJvU "
                img={require("../../images/img4.png")}
                comments='62'
                repeats='361'
                hearts='668'
            />
        </Content>
    </Container>
);

export default Dashboard;