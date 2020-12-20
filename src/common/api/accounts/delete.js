import api from "../../../api";

export default function deleteByid(accountId) {
    return api.delete(`/accounts/${accountId}`);
}