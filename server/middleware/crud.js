function getId(obj) {
    return obj[Object.keys(obj)[0]]
}

function notFound(res) {
    return res.status(400).send({
        message: 'Item Not Found',
    });
}

function itemExists(state, option) {
    return option.findByPk(getId(state.req.params)).then(data => {
        if (data == null) return true
        return false
    }).catch(error => state.res.status(400).send(error))
}

const create = (state, option) => ({
    create: async () => {
        let payload = Object.assign(state.req.body, state.req.params)
        if (await itemExists(state, option)) {
            return notFound(state.res)
        } else {
            return state.obj.create(payload).then(data => {
                return state.res.status(201).send({
                    message: 'finshed',
                    data
                })
            }).catch(error => state.res.status(400).send({
                error: 'The data you entered is incorrect'
            }))
        }
    }
})

const remove = (state) => ({
    delete: () => {
        return state.obj.findByPk(getId(state.req.params)).then(data => {
            if (!data) return notFound(state.res)
            return data.destroy().then(() => state.res.status(200).send({
                message: `Item successfully deleted`
            })).catch(error => state.res.status(400).send(error));
        }).catch(error => state.res.status(400).send(error))
    }
})

const modify = (state) => ({
    update: () => {
        return state.obj.findByPk(getId(state.req.params)).then(data => {
            if (!data) return notFound(state.res)
            data.update(state.req.body).then(update => {
                state.res.status(200).send({
                    message: 'Item updated successfully',
                    data: update
                })
            }).catch(error => state.res.status(400).send(error));
        }).catch(error => state.res.status(400).send(error));
    }
})

const list = (state) => ({
    list: () => {
        return state.obj.findAll().then(data => state.res.status(200).send(data));
    }
})

const listOne = (state) => ({
    listOne: () => {
        return state.obj.findByPk(getId(state.req.params)).then(data => {
            if (!data) return notFound(state.res)
            return state.res.status(200).send(data)
        }).catch(error => state.res.status(400).send(error))
    }
})

export { create, list, remove, modify, listOne }