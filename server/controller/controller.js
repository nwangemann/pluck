

module.exports = {
    postVideo: (req, res, next) => {
        res.status(200).send('success')
    },
    getVideo: (req, res, next) => {

        res.status(200).send(testVideo)
    }
}