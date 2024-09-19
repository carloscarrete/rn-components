import { View, Text } from 'react-native'
import React from 'react'
import { AirplaneIcon } from '../../icons/icons'
import { globalStyles } from '../../../config/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import Title from '../../components/ui/Title';
import MenuItem from '../../components/ui/MenuItem';

const animationMenuItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },

]

export const menuItems = [
  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiMenuitems = [
  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
]

const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text='Opciones del menú' safe />
          {
            menuItems.map(({ name, icon, component }, index) => (
              <MenuItem key={name} name={name} icon={icon} component={component} isFirst={index === 0} isLast={index === menuItems.length - 1} />
            ))
          }
          <View style={{ marginTop: 30 }} />
          {
            uiMenuitems.map(({ name, icon, component }, index) => (
              <MenuItem key={name} name={name} icon={icon} component={component} isFirst={index === 0} isLast={index === uiMenuitems.length - 1} />
            ))
          }
          <View style={{ marginTop: 30 }} />
          {
            animationMenuItems.map(({ name, icon, component }, index) => (
              <MenuItem key={name} name={name} icon={icon} component={component} isFirst={index === 0} isLast={index === animationMenuItems.length - 1} />
            ))
          }
          <View style={{ marginTop: 30 }} />
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen