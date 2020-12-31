import api from "../../../api";

export default function updateById({sportbookId}, sportbook) {
    return api.put(`/sportsbooks/${sportbookId}`, sportbook);
}