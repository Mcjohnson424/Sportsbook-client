import omit from "lodash/omit";

const pickUser = (data) =>
  omit(data, [
    "profileImageUrl",
    "password",
    "confirmPassword",
  ]);

export default pickUser;
