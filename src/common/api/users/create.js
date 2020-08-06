import api from "../../../api";

export default function create(user) {
  return api.post(`/users`, user);
}
