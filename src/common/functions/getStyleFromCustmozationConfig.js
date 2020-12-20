export default function getStyleFromCustomizationConfig(
  customizationConfig,
  iconConfig = {}
) {
  //main window
  let newFormattedStyle = `
  .fancify{
      border-radius: ${customizationConfig.windowConfig.borderRadius}px;
     
  }.fancify__video-wrapper--fixed-ratio:{
     padding-bottom:57.44%;
  }
  .fancify-custom{
   position: relative;
      overflow: visible;
      width: 100%;
      height: 100%;
      padding-top: 0px;
      padding-bottom: 0%;
      }
`;

  //big play button
  newFormattedStyle += `.custom__control--play--big {
    background: ${
      iconConfig.playIcon
        ? "rgba(0,0,0,0) !important;"
        : `rgba(${customizationConfig.playButtonConfig.background.r},${customizationConfig.playButtonConfig.background.g},${customizationConfig.playButtonConfig.background.b},${customizationConfig.playButtonConfig.background.a}) !important;`
    }
    padding:${customizationConfig.playButtonConfig.circleSize}px !important;
    }
    .custom__control--play--big svg{
      margin-left:${iconConfig.playIcon ? "-2px" : 0} !important;
      width:${customizationConfig.playButtonConfig.buttonSize}px !important;
      height:${customizationConfig.playButtonConfig.buttonSize}px !important;
    }
    button.fancify__control.fancify__control--overlaid.custom__control--play--big:hover {
    background: rgba(${
      customizationConfig.playButtonConfig.hoverBackground.r
    },${customizationConfig.playButtonConfig.hoverBackground.g},${
    customizationConfig.playButtonConfig.hoverBackground.b
  },${customizationConfig.playButtonConfig.hoverBackground.a}) !important;
    }
    .custom__control--play--big svg{
    color:rgba(${customizationConfig.playButtonConfig.color.r},${
    customizationConfig.playButtonConfig.color.g
  },${customizationConfig.playButtonConfig.color.b},${
    customizationConfig.playButtonConfig.color.a
  }) !important;
    }
    `;

  //small play button
  newFormattedStyle += `.custom__control--play--small svg{
   width:${customizationConfig.smallPlayButtonConfig.size} !important;
   height:${customizationConfig.smallPlayButtonConfig.size} !important;
   color:rgba(${customizationConfig.smallPlayButtonConfig.color.r},${customizationConfig.smallPlayButtonConfig.color.g},${customizationConfig.smallPlayButtonConfig.color.b},${customizationConfig.smallPlayButtonConfig.color.a}) !important;
  } 
  button.fancify__controls__item.fancify__control.custom__control--play--small{
    background:rgba(${customizationConfig.smallPlayButtonConfig.background.r},${customizationConfig.smallPlayButtonConfig.background.g},${customizationConfig.smallPlayButtonConfig.background.b},${customizationConfig.smallPlayButtonConfig.background.a}) !important;
  }
  button.fancify__controls__item.fancify__control.custom__control--play--small:hover{
    background:rgba(${customizationConfig.smallPlayButtonConfig.hoverBackground.r},${customizationConfig.smallPlayButtonConfig.hoverBackground.g},${customizationConfig.smallPlayButtonConfig.hoverBackground.b},${customizationConfig.smallPlayButtonConfig.hoverBackground.a}) !important;
  }`;

  //volume
  newFormattedStyle += `.custom__control--volume svg {
    width:${customizationConfig.volumeConfig.size};
    height:${customizationConfig.volumeConfig.size};
    color:rgba(${customizationConfig.volumeConfig.color.r},${customizationConfig.volumeConfig.color.g},${customizationConfig.volumeConfig.color.b},${customizationConfig.volumeConfig.color.a});
    }
  button.fancify__control.custom__control--volume{
    background:rgba(${customizationConfig.volumeConfig.background.r},${customizationConfig.volumeConfig.background.g},${customizationConfig.volumeConfig.background.b},${customizationConfig.volumeConfig.background.a});
  }
  button.fancify__control.custom__control--volume:hover{
    background:rgba(${customizationConfig.volumeConfig.hoverBackground.r},${customizationConfig.volumeConfig.hoverBackground.g},${customizationConfig.volumeConfig.hoverBackground.b},${customizationConfig.volumeConfig.hoverBackground.a});
  }`;

  //fullscreen
  newFormattedStyle += `.custom__control--fullscreen svg {
    width:${customizationConfig.fullscreenConfig.size} !important;
    height:${customizationConfig.fullscreenConfig.size} !important;
    color:rgba(${customizationConfig.fullscreenConfig.color.r},${customizationConfig.fullscreenConfig.color.g},${customizationConfig.fullscreenConfig.color.b},${customizationConfig.fullscreenConfig.color.a}) !important;
    }
  button.fancify__control.custom__control--fullscreen{
    background:rgba(${customizationConfig.fullscreenConfig.background.r},${customizationConfig.fullscreenConfig.background.g},${customizationConfig.fullscreenConfig.background.b},${customizationConfig.fullscreenConfig.background.a}) !important;
  }
   button.fancify__control.custom__control--fullscreen:hover{
    background:rgba(${customizationConfig.fullscreenConfig.hoverBackground.r},${customizationConfig.fullscreenConfig.hoverBackground.g},${customizationConfig.fullscreenConfig.hoverBackground.b},${customizationConfig.fullscreenConfig.hoverBackground.a}) !important;
  }`;

  //time progress bar
  newFormattedStyle += `.custom__progressbar--time input[type=range] {
    color:rgba(${customizationConfig.timeProgressBarConfig.color.r},${customizationConfig.timeProgressBarConfig.color.g},${customizationConfig.timeProgressBarConfig.color.b},${customizationConfig.timeProgressBarConfig.color.a}) !important;
  }`;

  //volume progress bar
  newFormattedStyle += `.custom__progressbar--volume input[type=range] {
    color:rgba(${customizationConfig.volumeProgressBarConfig.color.r},${customizationConfig.volumeProgressBarConfig.color.g},${customizationConfig.volumeProgressBarConfig.color.b},${customizationConfig.volumeProgressBarConfig.color.a}) !important;
  }`;
  return newFormattedStyle;
}
