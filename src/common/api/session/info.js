import api from '../../../api'

export default function sessionInfo() {
    return api.get(
        `/sessionInfo`
    );
}
