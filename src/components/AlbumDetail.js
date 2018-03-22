import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.headerImageContainer}>
          <Image style={styles.headerImage} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTextTitle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image resizeMode='cover' style={styles.albumImage} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy now</Button>
      </CardSection>
    </Card>
  );
};


const styles = {
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextTitle: {
    fontSize: 18,
  },
  headerImage: {
    height: 50,
    width: 50,
  },
  headerImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumImage: {
    flex: 1,
    height: 300,
    width: null,
  },
};


export default AlbumDetail;
