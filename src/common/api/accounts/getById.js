import api from "../../../api";

export default function getById({accountId}) {
    return api.get(`/accounts/${accountId}`);
}