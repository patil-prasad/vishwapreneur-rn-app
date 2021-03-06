import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView
} from 'react-native';
import {
  Content,
  Container,
  Button,
  Card,
  Header,
  Icon
} from 'native-base';
import { Constants, Font } from 'expo';
import Sponsors from './sponsors'


export default class Vishwapreneur extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Batmanforever': require('../../fonts/batmfa.ttf'),
      'Raleway': require('../../fonts/Raleway-Bold.ttf'),
      'Ralewaybold': require('../../fonts/Raleway-ExtraBold.ttf')
    });
    // await Font.loadAsync({
    // });
    // await Font.loadAsync({
    // });

    this.setState({ fontLoaded: true });
  }
  static navigationOptions = { header: null };

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#282828',
          flex: 1,
          FlexDirection: 'column',
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight,
        }}>

        <Header style={{ backgroundColor: '#555656', elevation: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar
              barStyle='light-content'
              translucent={false}
            />
            {
              this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'Batmanforever', fontSize: 25, color: 'white' }}>
                  VISHWAPRENEUR
                </Text>
              ) : null
            }
          </View>
        </Header>

        <Content padder style={{ paddingTop: 20 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <Text style={{ fontFamily: 'Batmanforever', fontSize: 35, color: '#fff', textAlign: 'center' }}>
                    MANIFEST THE NEXT WITH VISHWAPRENEUR
                  </Text>
                ) : null
              }
            </View>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text />
            <Text style={styles.venueDetails}>
              8th AND 9th February, 2019
            </Text>
            <Text style={styles.venueDetails}>
              Mahatma Phule Sanskrutik Bhavan, Wanowrie, Pune
            </Text>
          </View>
          <Text>{'\n'}</Text>

          <View
            style={{
              marginHorizontal: 100,
              marginBottom: 30,
            }}>
            <Button
              block
              style={styles.buttons}
              backgroundColor={'rgb(0,140,0)'}
              onPress={() => this.props.navigation.navigate('REGISTER')}>
              <Icon name="ticket" type='FontAwesome' style={{
                fontSize: 22,
                color: 'white',
              }} />
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                }}>
                Book Now!
              </Text>
            </Button>
            <Text />
            <Button
              block
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('OPENFLOOR')}>
              <Icon name="users" type='FontAwesome' style={{
                fontSize: 22,
                color: 'white',
              }} />
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                }}>
                Openfloor
              </Text>
            </Button>
          </View>

          <View style={{ alignItems: 'center', paddingBottom: 15 }}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.inststyle}>
                  About Us
                </Text>
              ) : null
            }
          </View>
          <View style={{ paddingHorizontal: 15, borderBottomColor: '#aaaaaa', borderBottomWidth: 1, alignSelf: 'stretch' }}>
            <Text style={{ fontSize: 18, textAlign: 'center', paddingBottom: 15, color: 'white' }}>
              Vishwapreneur is a National Level Entrepreneurship Convention — an
              event designed to inspire, invigorate and innovate ideas,
              businesses and dreams in all aspects of entrepreneurship. Call it
              passion or just a trend, entrepreneurship is slowly becoming the
              primary career choice for a lot of students. Seeing this changing
              landscape and the hundreds of inquisitive minds, Vishwapreneur was
              introduced. It was formulated in order to bring together
              entrepreneurs, investors, mentors and other successful
              industrialists on the same platform to gain the first-hand
              experience from individuals who are already excelling in their
              fields.
            </Text>
          </View>

          <View style={{ alignItems: 'center', paddingBottom: 15, marginTop: 15 }}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.inststyle}>
                  Sessions
                </Text>
              ) : null
            }
          </View>

          <Card style={{ marginBottom: 20, borderRadius: 8 }}>
            <ImageBackground
              source={require('../../images/keynotes.jpg')} borderRadius={8}
              style={{
                height: 200,
                width: null,
                flex: 1,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.textWithShadow}>
                  {
                    this.state.fontLoaded ? (
                      <Text style={styles.raleway}>
                        KEYNOTES
                      </Text>
                    ) : null
                  }
                </Text>
              </View>
              <Text />
              <View style={{ padding: 10 }}>
                <Text style={styles.contentFont}>
                  An Inspirational Story And A Life Altering Lesson Are What You'll Take Home From Our Prominent Guests.
                  </Text>
              </View>
            </ImageBackground>
          </Card>
          <Card style={{ marginBottom: 20, borderRadius: 8 }}>
            <ImageBackground
              source={require('../../images/panel-discussion.jpg')} borderRadius={8}
              style={{
                height: 200,
                width: null,
                flex: 1,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.textWithShadow}>
                  {
                    this.state.fontLoaded ? (
                      <Text style={styles.raleway}>
                        PANEL DISCUSSIONS
                      </Text>
                    ) : null
                  }
                </Text>
              </View>
              <Text />
              <View style={{ padding: 10 }}>
                <Text style={styles.contentFont}>
                  A Gripping Discussion On A Particular Aspect Of A Start-Up By An Esteemed Panel.
                  </Text>
              </View>
            </ImageBackground>
          </Card>
          <Card style={{ marginBottom: 20, borderRadius: 8 }}>
            <ImageBackground
              source={require('../../images/openfloor.jpg')} borderRadius={8}
              style={{
                height: 200,
                width: null,
                flex: 1,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.textWithShadow}>
                  {
                    this.state.fontLoaded ? (
                      <Text style={styles.raleway}>
                        OPENFLOOR
                      </Text>
                    ) : null
                  }
                </Text>
              </View>
              <Text />
              <View style={{ padding: 10 }}>
                <Text style={styles.contentFont}>
                  A Chance To Interact With CXOs From Unsurpassable Establishments.
                  </Text>
              </View>
            </ImageBackground>
          </Card>
          <Card style={{ marginBottom: 20, borderRadius: 8 }}>
            <ImageBackground
              source={require('../../images/competitions.jpg')} borderRadius={8}
              style={{
                height: 200,
                width: null,
                flex: 1,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.textWithShadow}>
                  {
                    this.state.fontLoaded ? (
                      <Text style={styles.raleway}>
                        COMPETITIONS
                      </Text>
                    ) : null
                  }
                </Text>
              </View>
            </ImageBackground>
          </Card>
          <View style={styles.horiscroll}>
            <View style={{ alignItems: 'center', paddingBottom: 15 }}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.inststyle}>
                    Our Sponsors
                </Text>
                ) : null
              }
            </View>
            <ScrollView horizontal={true}>
              <Sponsors imageUri={require('../../images/sponsors/ims.jpg')} />
              <Sponsors imageUri={require('../../images/sponsors/swiggy.png')} />
              <Sponsors imageUri={require('../../images/sponsors/protons.jpg')} />
              <Sponsors imageUri={require('../../images/sponsors/infinitygate.png')} />
              <Sponsors imageUri={require('../../images/sponsors/budhani.png')} />
              <Sponsors imageUri={require('../../images/sponsors/ktm.jpg')} />
              <Sponsors imageUri={require('../../images/sponsors/educad.png')} />
              <Sponsors imageUri={require('../../images/sponsors/box8.jpg')} />
              <Sponsors imageUri={require('../../images/sponsors/Gateway.png')} />
              <Sponsors imageUri={require('../../images/sponsors/aarnell.jpg')} />
              <Sponsors imageUri={require('../../images/sponsors/chaitanya.png')} />
              <Sponsors imageUri={require('../../images/sponsors/bom.png')} />
              <Sponsors imageUri={require('../../images/sponsors/NIIT.png')} />
            </ScrollView>
          </View>
          <View style={{ alignItems: 'center', paddingBottom: 15 }}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.inststyle}>
                  Our Partners
                </Text>
              ) : null
            }
          </View>
          <View style={styles.horiscroll}>
            <ScrollView horizontal={true}>
              <Sponsors imageUri={require('../../images/sponsors/multi-fit-black.png')} name="Fitness Partner" />
              <Sponsors imageUri={require('../../images/sponsors/the-souled-store.jpg')} name="Gifting Partner" />
              <Sponsors imageUri={require('../../images/sponsors/pune-open-coffee-club.png')} name="Ecosystem Partner" />
              <Sponsors imageUri={require('../../images/sponsors/campus-times1.png')} name="Youth Partner" />
              <Sponsors imageUri={require('../../images/sponsors/elecer.jpg')} name="Startup Partner" />
              <Sponsors imageUri={require('../../images/sponsors/grihneelogo.png')} name="Startup Partner" />
              <Sponsors imageUri={require('../../images/sponsors/avanjas.jpg')} name="Startup Partner" />
              <Sponsors imageUri={require('../../images/sponsors/daftar.jpg')} name="Co-working space Partner" />
            </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  venueDetails: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  textWithShadow: {
    textShadowColor: 'rgba(100, 100, 100, .9)',
    textShadowOffset: { width: 2, height: 2 },
    fontSize: 30,
    color: 'white',
  },
  raleway: {
    fontFamily: 'Ralewaybold'
  },
  contentFont: {
    textShadowColor: 'rgba(60, 60, 60, 1)',
    textShadowOffset: { width: 2, height: 2 },
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttons: {
    backgroundColor: 'rgb(0,40,180)',
    borderRadius: 15,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center'
  },
  horiscroll: {
    marginTop: 20,
    height: 220
  },
  childscroll: {
    width: 220,
    height: 130,
    borderWidth: 1,
    borderColor: '#dddddd'
  },
  sponsor: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  inststyle: {
    fontSize: 25,
    fontFamily: 'Raleway',
    color: 'white'
  },
});