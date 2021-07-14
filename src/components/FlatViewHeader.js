import React from 'react';
import { StyleSheet, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { ViewMode } from './FlatView';
import Touchable from './Touchable';

export default function FlatViewHeader({
  onToggleViewMode,
  viewMode
}) {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <ToolbarItem
          icon="sort-by-alpha"
        />
        <ToolbarItem
          icon={(viewMode === ViewMode.GRID) ? 'view-list' : 'grid-view'}
          onPress={onToggleViewMode}
        />
      </View>
    </View>
  );
}

const ToolbarItem = ({ icon, onPress }) => (
  <Touchable onPress={onPress}>
    <View style={styles.toolbarItem}>
      <MaterialIcons
        name={icon}
        style={styles.toolbarItemIcon}
      />
    </View>
  </Touchable>
);

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 10
  },
  toolbar: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  toolbarItem: {
    padding: 5
  },
  toolbarItemIcon: {
    color: 'gray',
    fontSize: 24
  }
});
