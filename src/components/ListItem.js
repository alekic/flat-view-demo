import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Touchable from './Touchable';

export default function ListItem({
  icon,
  iconStyle,
  onPress,
  style,
  title,
  titleStyle
}) {
  return (
    <Touchable onPress={onPress}>
      <View style={[styles.container, style]}>
        <MaterialIcons
          name={icon}
          style={[styles.icon, iconStyle]}
        />
        <Text
          numberOfLines={1}
          style={[styles.title, titleStyle]}
        >
          {title}
        </Text>
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%'
  },
  icon: {
    color: 'lightblue',
    fontSize: Platform.select({
      web: 36,
      default: 48
    }),
    marginRight: 15
  },
  title: {
    fontSize: Platform.select({
      web: 14,
      default: 18
    })
  }
});
