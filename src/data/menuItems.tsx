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
];
