import api from "../../../api";

export default function sessionPlanCheck() {
  return api.get(`/sessionPlanCheck`);
}
