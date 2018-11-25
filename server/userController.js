const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    createNewUser: (req, res) => {
        const db = req.app.get('db');
        const { username, password, email } = req.body
        db.check_existing_username({
            username: username
        }).then(users => {
            // console.log('users', users)
            if (users.length) {
                res.json({message: "Username is unavailable"})
            }else {
                bcrypt.hash(password, saltRounds).then(hash => {
                    db.create_new_user({
                        username: username,
                        password: hash,
                        email: email
                    }).then(user => {
                        res.status(200).json(user)
                    })
                })
            }
        }) 
    },

    loginUser: (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        db.find_user({username: username}).then(user => {
            if (user.length) {
                bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                    if (passwordsMatch) {
                        res.json(user)
                    } else {
                        res.json({ message: 'Username and Password do not match' })
                    }
                })
            } else {
                res.json({message: 'Username Does Not Exist. Please Click Register To Create an Account.'})
                // res.json({message: 'Username Does Not Exist in Database'})
            }
        })
    },

    updateUser: (req, res) => {
        const { id } = req.params;
        const { weight, fat } = req.body 
        req.app.get('db').update_user_info({
            id: id,
            weight: weight,
            fat: fat
        }).then(user => {
            res.status(200).json(user[0])
        }).catch(error => {
            console.log('Something went wrong in updateUser', error)
        })
        // console.log('body', req.body)
        // console.log('params', req.params)
    }

}


// app.post('/login', (req, res) => {
//     const db = app.get('db');
//     const { username, password } = req.body;
//       db.find_user([username]).then(users => {
//         if (users.length) {
//           bcrypt.compare(password, users[0].password).then(passwordsMatch => {
//             if (passwordMatch) {
//               req.session.user = { username: users[0].username };
//               res.json({ user: req.session.user });
//             } else {
//               res.status(403).json({ message: 'Wrong password' })
//             }
//    else {
  
//           })
  
  
//           res.status(403).json({ message: "That user is not registered" })
//         }
//       });
//     });
  
// app.post('/register', (req, res) => {
//     const db = app.get('db');
//     const { username, password } = req.body;
//     bcrypt.hash(password, saltRounds).then(hash => {
//       db.create_user([username, hash]).then(() => {
//         req.session.user = { username };
//         res.json({ user: req.session.user })
//       }).catch(error => {
//         console.log('error', error);
//         res.status(500).json({ message: 'Something bad happened! '})
//       });
//     });
//   })
  