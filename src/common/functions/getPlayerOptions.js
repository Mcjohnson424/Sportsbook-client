import getOptionsFromVideoConfig from "./getOptionsFromVideoConfig";

export default function getPlayerOptions(config, svgLink, template, videoUrl) {
  let options = { ...getOptionsFromVideoConfig(config || {}, videoUrl) };
  options.controls =
    template && template.controls
      ? template.controls
      : [
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "fullscreen",
          "play-large",
        ];
  if (svgLink) {
    options.iconUrl = svgLink;
  }
  return options;
}
