// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[]
  };
  vertical_menu: {
    items: Partial<MenuItem>[]
  };
}

export const MenuSettingsConfig: MenuConfig = {
  horizontal_menu: {
    items: [
      {
        title: 'Posição do Menu',
        icon: 'la-television',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Horizontal',
              page: 'null'
            },
            {
              title: 'Vertical',
              page: 'null'
            },
          ]
        }
      },

      {
        title: 'Cadastros Gerais',
        icon: 'la-desktop',
        page: '/cadastros',
      },
      {
        title: 'Listagem ',
        icon: 'la-desktop',
        page: '/app',
      },
      {
        title: 'Estatísticas',
        icon: 'la-pie-chart',
        page: ''
      },
      {
        title: 'Calendários',
        icon: 'la-calendar',
        page: ''
      }
    ]
  },


  vertical_menu: {
    items: [
      {
        title: 'Posição do Menu',
        icon: 'la-television',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Horizontal',
              page: 'null'
            },
            {
              title: 'Vertical',
              page: 'null'
            },

          ]
        }
      },
      { section: 'GERAL' },
      {
        title: 'Cadastros',
        icon: 'la-plus',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Exames',
              page: '/cadastros/exames'
            },
            {
              title: 'Máscaras',
              page: '/cadastros/mascaras'
            },

            {
              title: 'Máscaras2',
              page: '/cadastros/mascaras2'
            },

          ]
        }
      },
      

      { section: 'REGISTROS' },
      {
        title: 'Listagem',
        icon: 'la-plus',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Laudos',
              page: '/app/listCirur'
            }

          ]
        }
      },

      { section: 'Graficos' },
      {
        title: 'Estatísticas',
        icon: 'la-pie-chart',
        page: '/dashboard/painel'
      },
      { section: 'Aplicações' },
      {
        title: 'Calendários',
        icon: 'la-calendar',
        page: ''
      }
    ]
  }

};





