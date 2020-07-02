//solarized light
const sol_backgroundColor = '#fdf6e3'
const sol_foregroundColor =  '#000000'
const sol_cursorColor = 'rgba(211, 54, 130, 0.6)'
const sol_borderColor = 'rgba(38, 139, 210, 0.3)'

const sol_colors = [
  sol_backgroundColor,
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#657b83', // light gray
  '#586e75', // medium gray
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#6c71c4', // violet
  '#2aa198', // cyan
  '#ffffff', // white
  sol_foregroundColor
]

SolarizedLight = {
  foregroundColor: sol_foregroundColor,
  backgroundColor: sol_backgroundColor,
  borderColor: sol_borderColor,
  cursorColor: sol_cursorColor,
  colors: sol_colors,
  termCSS: '',
  css:  `
  * {
    -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
    text-rendering: optimizeLegibility !important;
  }
  .hyperterm_main {
    border: transparent !important;
  }
  .tabs_list {
    border-color: transparent !important;
  }
  .tab_tab {
    border: transparent !important;
    color: ${sol_foregroundColor} !important;
    background-color: #e6dfcb;
  }
  .tabs_title {
    color: ${sol_foregroundColor} !important;
  }
  .tab_tab.tab_active:before {
    border-bottom: transparent !important;
  }
  .tab_tab.tab_active {
    color: ${sol_foregroundColor} !important;
    background-color: ${sol_backgroundColor};
    border-bottom: none !important;
    font-weight: bold;
  }
  .tabs_nav {
    background-color: #e6dfcb !important;
  }
  .tabs_borderShim {
    border: transparent;
  }
  .splitpane_divider {
    background-color: #e6dfcb !important;
  }
  .header_shape
  {
    color: #657b83;
  }
  .header_appTitle
  {
    color: #657b83;
  }
`
}
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////





/*
 * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2017-present Sven Greb <code@svengreb.de>
 *
 * Project:    Nord Hyper
 * Version:    0.5.0
 * Repository: https://github.com/arcticicestudio/nord-hyper
 * License:    MIT
 */
//nord
const nord = {
  nord0: "#2E3440",
  nord1: "#3B4252",
  nord2: "#434C5E",
  nord3: "#4C566A",
  nord4: "#D8DEE9",
  nord5: "#E5E9F0",
  nord6: "#ECEFF4",
  nord7: "#8FBCBB",
  nord8: "#88C0D0",
  nord9: "#81A1C1",
  nord10: "#5E81AC",
  nord11: "#BF616A",
  nord12: "#D08770",
  nord13: "#EBCB8B",
  nord14: "#A3BE8C",
  nord15: "#B48EAD"
};

const nord_backgroundColor = nord.nord0;
const nord_foregroundColor = nord.nord4;
const nord_cursorColor = nord.nord4;
const nord_borderColor = nord_backgroundColor;

const colors = {
  black: nord.nord1,
  red: nord.nord11,
  green: nord.nord14,
  yellow: nord.nord13,
  blue: nord.nord9,
  magenta: nord.nord15,
  cyan: nord.nord8,
  white: nord.nord5,
  lightBlack: nord.nord3,
  lightRed: nord.nord11,
  lightGreen: nord.nord14,
  lightYellow: nord.nord13,
  lightBlue: nord.nord9,
  lightMagenta: nord.nord15,
  lightCyan: nord.nord7,
  lightWhite: nord.nord6,
  colorCubes: nord.nord6,
  grayscale: nord_foregroundColor
};


currentTime = new Date()
console.log(currentTime.getHours(), currentTime.getMinutes())

//determine theme according to time
startHour = 7;
endHour = 22;
if (currentTime.getHours()>=startHour && currentTime.getHours()<=endHour){
  console.log("light")
  finalTheme = {
    foregroundColor:SolarizedLight.foregroundColor,
    backgroundColor:sol_backgroundColor,
    borderColor:sol_borderColor,
    cursorColor:sol_cursorColor,
    colors:sol_colors,
    css:  SolarizedLight.css,
  }
}
else{
  console.log("dark")
  finalTheme = 
 {
    foregroundColor: nord_foregroundColor,
    backgroundColor: nord_backgroundColor,
    borderColor: nord_borderColor,
    cursorColor: nord_cursorColor,
    colors: colors,
    cursorShape:  "BEAM",

    termCSS: `
      .terminal .xterm-selection div {
        background: rgba(67, 76, 94, 0.8) !important;
      }
      .terminal-cursor {
        border-left-width: 2px;
      }
    `,
    css: `
      * {
        text-rendering: optimizeLegibility !important;
      }
      .header_header {
        background-color: ${nord_backgroundColor} !important;
        top: 0 !important;
        right: 0 !important;
        left: 0 !important;
      }
      .terminal .xterm-selection div {
        background: rgba(67, 76, 94, 0.8) !important;
      }
      .tab_first {
        margin-left: 0 !important;
        padding: 0 !important;
      }
      .tabs_list,
      .tab_tab {
        border: 0 !important;
      }
      .tab_tab {
        color: ${nord_foregroundColor} !important;
        transition: color 400ms ease, background 400ms ease;
      }
      .tab_tab.tab_active,
      .tab_tab:hover {
        background-color: ${nord.nord1};
      }
      .splitpane_divider {
        background-color: rgba(67, 76, 94, 0.8) !important;
      }
      /*+---------------+
       + Plugin Support +
       +----------------+*/
      /*+--- hyper-statusline ---+*/
      .footer_footer {
        background-color: ${nord.nord1};
        transition: opacity 400ms ease;
      }
      .footer_footer .item_item {
        color: ${nord.nord4};
      }
      .footer_footer .item_icon.icon_dirty {
        background-color: ${nord.nord13};
      }
      .footer_footer .item_icon.icon_pull,
      .footer_footer .item_icon.icon_push {
        background-color: ${nord.nord7};
      }
    `
  };
}


exports.decorateConfig = config => {


  return Object.assign({}, config, {
    foregroundColor:finalTheme.foregroundColor,
    backgroundColor:finalTheme.backgroundColor,
    borderColor:finalTheme.borderColor,
    cursorColor:finalTheme.cursorColor,
    colors:finalTheme.colors,
    selectionColor: 'rgba(31, 188, 210,0.5)',
    css: config.css ? config.css + finalTheme.css : finalTheme.css,
    termCSS: config.termCSS ? config.termCSS + finalTheme.termCSS : finalTheme.termCSS
  })
}


//reference
//https://github.com/Ghosh/hyper-solarized-light.git
//https://github.com/arcticicestudio/nord-hyper