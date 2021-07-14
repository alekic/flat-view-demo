import React from 'react';
import { SafeAreaView } from 'react-native';

import FlatView from '../components/FlatView';
import GridItem from '../components/GridItem';
import ListItem from '../components/ListItem';

const data = [
  { id: 1,  name: 'Documents',                            modified: new Date(), icon: 'folder'         },
  { id: 2,  name: 'Downloads',                            modified: new Date(), icon: 'folder'         },
  { id: 3,  name: 'Music',                                modified: new Date(), icon: 'folder'         },
  { id: 4,  name: 'Pictures',                             modified: new Date(), icon: 'folder'         },
  { id: 5,  name: 'Videos',                               modified: new Date(), icon: 'folder'         },
  { id: 6,  name: 'Eloquent JavaScript',                  modified: new Date(), icon: 'picture-as-pdf' },
  { id: 7,  name: 'Rediscovering JavaScript',             modified: new Date(), icon: 'picture-as-pdf' },
  { id: 8,  name: 'Test-Driving JavaScript Applications', modified: new Date(), icon: 'picture-as-pdf' },
  { id: 9,  name: 'Understanding ECMAScript 6',           modified: new Date(), icon: 'picture-as-pdf' },
  { id: 10, name: 'Effective Java',                       modified: new Date(), icon: 'picture-as-pdf' },
];

const keyExtractor = item => item.id.toString();

const renderGridItem = ({ item }) => (
  <GridItem
    icon={item.icon}
    title={item.name}
    subtitle={item.modified.toLocaleDateString()}
  />
);

const renderListItem = ({ item }) => (
  <ListItem
    icon={item.icon}
    title={item.name}
  />
);

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FlatView
        data={data}
        keyExtractor={keyExtractor}
        renderGridItem={renderGridItem}
        renderListItem={renderListItem}
      />
    </SafeAreaView>
  );
}
