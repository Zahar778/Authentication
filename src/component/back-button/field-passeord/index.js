class FieldPassword {
    static toggle = (target) => {
        target.toggleAttribute('show')

        const input = target.previousElementSibling

        const type = input.toggleAttribute('type')

        if(type === 'password') {
            input.setAttribute('type', 'text')
        }else {
            input.setAttribute('type' , 'password')
        }
    }
}
window.FieldPassword = FieldPassword