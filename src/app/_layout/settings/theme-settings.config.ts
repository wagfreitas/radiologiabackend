// Default theme settings configurations

export const ThemeSettingsConfig = {
  colorTheme: 'dark', // light, semi-light, semi-dark, dark
  layout: {
    style: 'vertical', // style: 'vertical', horizontal,
    pattern: 'fixed' // fixed, boxed, static
  },
  menuColor: 'menu-dark', // Vertical: [menu-dark, menu-light] , Horizontal: [navbar-dark, navbar-light]
  navigation: 'menu-collapsible', // menu-collapsible, menu-accordation
  menu: 'expand', // collapse, expand
  header: 'fix', // fix, static
  footer: 'static', // fix, static
  customizer: 'on', // on,off
  brand: {
    brand_name: 'IMAGE Admin',
    logo: {
      type: 'internal', // internal, url
      value: 'assets/custom/images/logo.jpg' // recommended location for custom images
      // type:'url',
      // value:'http://evolvision.com/wp-content/uploads/2018/01/envelope4-green.png'
    },
  },
  defaultTitleSuffix: 'IMAGE Admin'
};
