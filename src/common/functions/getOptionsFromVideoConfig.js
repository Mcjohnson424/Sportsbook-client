import get from "lodash/get";
import cloneDeep from "lodash/cloneDeep";

const getOptionsFromVideoConfig = (values, youtubeId) => {
  const result = cloneDeep(values);
  if (get(result, "youtube.vh") === true) {
    result.youtube.vh = "hd1080";
  } else if (get(result, "youtube.vh") === false) {
    delete result.youtube.vh;
  }
  if (get(result, "youtube.loop") === true) {
    result.youtube.loop = 1;
    result.youtube.playlist = youtubeId;
  } else if (get(result, "youtube.loop") === false) {
    delete result.youtube.loop;
  }
  if (get(result, "youtube.rel") === true) {
    result.youtube.rel = 1;
  } else if (get(result, "youtube.rel") === false) {
    result.youtube.rel = 0;
  }
  if (get(result, "youtube.modestbranding") === true) {
    result.youtube.modestbranding = 1;
  } else if (get(result, "youtube.modestbranding") === false) {
    result.youtube.modestbranding = 0;
  }
  if (get(result, "youtube.show_info") === true) {
    result.youtube.show_info = 1;
  } else if (get(result, "youtube.show_info") === false) {
    result.youtube.show_info = 0;
  }
  if (get(result, "captions") === true) {
    result.captions = { active: true, language: "auto", update: false };
  } else if (get(result, "captions") === false) {
    result.captions = {
      active: false,
    };
  }
  if (get(result, "youtube.iv_load_policy") === true) {
    result.youtube.iv_load_policy = 1;
  } else if (get(result, "youtube.iv_load_policy") === false) {
    result.youtube.iv_load_policy = 3;
  }
  if (get(result, "fullscreen") === true) {
    result.fullscreen = {
      enabled: true,
      fallback: true,
      iosNative: false,
      container: null,
    };
  } else if (get(result, "fullscreen") === false) {
    result.fullscreen = {
      enabled: false,
      fallback: true,
      iosNative: false,
      container: null,
    };
  }
  return result;
};

export default getOptionsFromVideoConfig;
