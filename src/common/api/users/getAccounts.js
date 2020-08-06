import api from "../../../api";

export default function getAcounts(userId) {
  return api.get(`/users/${userId}/accounts`);
}
