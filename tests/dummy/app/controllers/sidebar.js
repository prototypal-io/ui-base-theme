import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  queryParams: ['isSidebarCollapsed'],

  isSidebarCollapsed: false,

  menu: {
    items: [
      {
        label: 'Online Support',
        icon: 'life-ring',
        targetRouteName: 'index',
        menu: {
          items: [
            {
              label: 'Billing',
              icon: '',
              targetRouteName: 'index',
              menu: {
                items: [
                  {
                    label: 'Billing',
                    icon: '',
                    targetRouteName: 'index'
                  },
                  {
                    label: 'Reference',
                    icon: '',
                    targetRouteName: 'index'
                  }
                ]
              }
            },
            {
              label: 'Claims',
              icon: '',
              targetRouteName: 'index'
            },
            {
              label: 'Reference',
              icon: '',
              targetRouteName: 'index'
            }
          ]
        }
      },
      {
        label: 'Billing',
        icon: 'usd',
        targetRouteName: 'index'
      },
      {
        label: 'Claims',
        icon: 'pencil',
        targetRouteName: 'index'
      },
      {
        label: 'Reference',
        icon: 'folder-open',
        targetRouteName: 'index'
      },
      {
        label: 'Wrap Up',
        icon: 'pencil',
        targetRouteName: 'index'
      },
      {
        label: 'Additional Tools',
        icon: 'pencil',
        targetRouteName: 'index'
      },
    ]
  }
});
