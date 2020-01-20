import Vue from 'vue'
import Router from 'vue-router'
import Form from './components/Form.vue'
import RegistrationForm from './components/RegistrationForm.vue'

Vue.use(Router)

export default new Router ({
    routes : [
        {
            path : '/Form',
            name : 'Form',
            component : Form
        },
        {
            path : '/RegistrationForm',
            name : 'RegistrationForm',
            component : RegistrationForm
        }
    ],
    mode : 'history'
})