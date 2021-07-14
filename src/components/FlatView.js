import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import FlatViewHeader from './FlatViewHeader';
import ViewMode from './ViewMode';

export default function FlatView({
  renderGridItem,
  renderListItem,
  ...rest
}) {
  const [viewMode, setViewMode] = useState(ViewMode.LIST);

  const handleToggleViewMode = () => {
    setViewMode(
      (viewMode === ViewMode.GRID)
        ? ViewMode.LIST
        : ViewMode.GRID
    );
  };

  const renderHeader = () => (
    <FlatViewHeader
      viewMode={viewMode}
      onToggleViewMode={handleToggleViewMode}
    />
  )

  return (viewMode === ViewMode.GRID) ? (
    <FlatGrid
      ListHeaderComponent={renderHeader}
      renderItem={renderGridItem}
      style={{ paddingTop: 0 }}
      {...rest}
    />
  ) : (
    <FlatList
      ListHeaderComponent={renderHeader}
      renderItem={renderListItem}
      {...rest}
    />
  );
}
