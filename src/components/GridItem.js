import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Touchable from './Touchable';

export default function GridItem({
  icon,
  iconStyle,
  onPress,
  style,
  subtitle,
  subtitleStyle,
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
        {!!subtitle && (
          <Text
            numberOfLines={1}
            style={[styles.subtitle, subtitleStyle]}
          >
            {subtitle}
          </Text>
        )}
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10
  },
  icon: {
    color: 'lightblue',
    fontSize: Platform.select({
      web: 96,
      default: 128
    })
  },
  subtitle: {
    color: 'gray',
    fontSize: Platform.select({
      web: 12,
      default: 14
    })
  },
  title: {
    fontSize: Platform.select({
      web: 14,
      default: 18
    }),
    marginBottom: 5
  }
});
