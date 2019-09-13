import model from '../models';
import { list, create, remove, modify, listOne } from "../middleware/crud"

const { Book, User } = model;

const Books = (req, res) => {
    let state = {
        req,
        res,
        obj: Book,
    }
    return Object.assign({}, list(state), create(state, User), remove(state), modify(state), listOne(state))
}

export default Books