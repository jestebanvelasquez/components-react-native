import {MenuItem} from '../interfaces/MenuInterface';
export const menuItems: MenuItem[] = [
  {
    name: 'animation-01',
    icon: 'cube-outline',
    components: 'Animation101Screen',
    row: 'caret-forward-outline',
  },
  {
    name: 'animation-02',
    icon: 'star-outline',
    components: 'Animation102Screen',
    row: 'caret-forward-outline',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    components: 'SwitchScreen',
    row: 'caret-forward-outline',
  },

  {
    name: 'AlertScreen',
    icon: 'alert-circle-outline',
    components: 'AlertScreen',
    row: 'caret-forward-outline',
  },
  {
    name: 'Text Inputs ',
    icon: 'document-text-outline',
    components: 'TextInputsScreen',
    row: 'caret-forward-outline',
  },
  {
    name: 'Pull To Refresh',
    icon: 'reload-outline',
    components: 'PullToRefreshScreen',
    row: 'caret-forward-outline',
  },
  {
    name: 'Section List',
    icon: 'albums-outline',
    components: 'SectionListScreen',
    row: 'caret-forward-outline',
  },
  {
    name: 'Modals',
    icon: 'browsers-outline',
    components: 'ModalScreen',
    row: 'caret-forward-outline',
  },
  {
    name: 'Infinity Scroll',
    icon: 'infinite-outline',
    components: 'InfinityScrollScreen',
    row: 'caret-forward-outline',
  },
];
