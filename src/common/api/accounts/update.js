import api from "../../../api";

export default function updateById({accountId}, account) {
    return api.put(`/accounts/${accountId}`, account);
}