const connection = require('../config/database');

const getHomepage = (req, res) => {

    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send('check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    console.log(">>> email = ", email, 'name = ', name, ' city = ', city)

    //INSERT INTO Users (email, name, city)
    //VALUES ("test", "eric vaf hoi danit", "nam dinh");

    // let { email, name, city } = req.body;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city]
    );

    console.log(">>> check results: ", results);

    res.send('Created user succeed !')
}


const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage
}