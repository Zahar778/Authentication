// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

const { User } = require('../class/user')
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
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби

// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
