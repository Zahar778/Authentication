// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

const { User } = require('../class/user')

User.create({
    email: 'test@mail.com',
    password: 123,
    role: 1,
})
// Підключіть файли роутів
router.get('/signup', function (req, res) {
    return res.render ('signup', {
        name: 'signup',

        component: ['back-button', 'field', 'field-password','field-checkbox','field-select' ],

        title: 'Signup page',

        data: {
            role: [
                { value: User.USER_ROLE.USER, text: 'Користувач'},
                {
                    value: User.USER_ROLE.ADMIN,
                    text: 'Админ',
                },
                {
                    value: User.USER_ROLE.DEVELOPER,
                    text: "Розробник",
                },
            ],
        },

    })
})

router.post('/signup', function(req,res) {
    const {email, password, role} = req.body

    console.log(req.body)

    if(!email || !password || !role) {
        return res.status(400).json({
            massage: 'Помилка. Обов`язковi поля вiдсутнi'
        })
    }
    try {
        User.create({email, password, role})


        return res.status(200).json({
            massage: 'Користувач успiшно зарэстрованний',
        })
    }catch(err) {
        return res.status(400).json({
            massage: 'Помилка створення користувача',
        })
    }
   
})
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби

// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
