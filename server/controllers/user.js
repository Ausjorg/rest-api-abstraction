import model from '../models';
import { create } from "../middleware/crud"
const { User } = model;

const Users = (req, res) => {
    let state = {
        req,
        res,
        obj: User,
    }
    return Object.assign({}, create(state))
}

export default Users;