import api from '../../../api'

export default function sessionStop() {
  return api.post(`/sessionEnd`);
}
