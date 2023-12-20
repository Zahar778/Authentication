class SingupForm {

    static value = {}

    static validate = (name, value) => {
        return true
    }
    static submit = () => {
        console.log(this.value)
    }
    static chang = (name, value) => {
        console.log(name, value)
        if(this.validate(name, value)) this.value[name] = value
    }

}
window.SingupForm = SingupForm