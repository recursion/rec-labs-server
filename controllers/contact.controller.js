module.exports = (req, res, next) => {
    console.log('contact controller called with: ', req.body);
    res.status(200);
    res.send('Ok');
};