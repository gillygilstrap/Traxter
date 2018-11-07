

module.exports = {
    createNewUser: (req, res) => {
        console.log('Meeeeeeeeeeeeeeeeeeeee', req.body)
        const { username, password, email } = req.body
         req.app.get('db').create_new_user({
                username: username,
                password: password,
                email: email
         }).then(user => {
                res.status(200).json(user)
         })
    }
}