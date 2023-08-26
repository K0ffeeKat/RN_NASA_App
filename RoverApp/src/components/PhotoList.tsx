import { StyleSheet, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { MainStore } from '../stores/mainStore'
import { observer } from 'mobx-react'

export const PhotoList = observer((): JSX.Element => {
  const { allPhotos } = MainStore

  return (
    <FlatList
      data={allPhotos}
      numColumns={3}
      keyExtractor={photo => photo.id}
      renderItem={
        ({ item }) => (
          <Pressable>
            <Image
              source={{uri: item.img_src}}
              style={styles.image}
              />
          </Pressable>
        )
      }
    />
  )
})

const styles = StyleSheet.create({
  image: {
    width: 115,
    aspectRatio: 1 / 1,
    borderRadius: 8,
    margin: 4
  }
})