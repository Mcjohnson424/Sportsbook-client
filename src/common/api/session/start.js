import api from "../../../api";

export default function startSession(idToken) {
  return api.post(`/sessionStart`, { idToken });
}
