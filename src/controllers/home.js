const ctrl = {};
ctrl.index = (req, res) => {
    // res.send('Index page');
    res.render('index')
};

module.exports = ctrl;