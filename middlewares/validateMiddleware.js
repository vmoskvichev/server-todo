   
const middleware = (schema, property) => (req, res, next) => {
    const {error} = schema.validate(req[property]);
    if (error) {
        res.status(403).json(error.details.map(({message}) => message));
        return
    } 
    next();
}

module.exports = middleware;

