<template id="registrationForm">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <header class="card-header">
            <a href class="float-right btn btn-outline-primary mt-1">Log in</a>
            <h4 class="card-title mt-2">Sign up</h4>
          </header>
          <article class="card-body">
            <form>
              <div class="form-row">
                <div class="col form-group">
                  <label>First name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Enter first name"
                    name="firstName"
                    v-model="firstName"
                    minlength="2"
                    maxlength="50"
                  />
                </div>
                <!-- form-group end.// -->
                <div class="col form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=" Enter last name"
                    name="lastName"
                    v-model="lastName"
                    minlength="2"
                    maxlength="50"
                    required
                  />
                </div>
                <!-- form-group end.// -->
              </div>
              <!-- form-row end.// -->
              <div class="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter valid email address"
                  name="email"
                  maxlength="100"
                  required
                />
                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                <span v-if="msg.email">{{msg.email}}</span>
              </div>
              <!-- form-group end.// -->
              <div class="form-group">
                <label class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" v-model="picked" value="Male" />
                  <span class="form-check-label">Male</span>
                </label>
                <label class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" v-model="picked" value="Female" />
                  <span class="form-check-label">Female</span>
                </label>
              </div>
              <!-- form-group end.// -->
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label>City</label>
                  <input type="text" class="form-control" v-model="city" required />
                </div>
                <!-- form-group end.// -->
                <div class="form-group col-md-6">
                  <label>Country</label>
                  <select id="inputState" class="form-control" v-model="selected" required>
                    <option disabled value>Choose...</option>
                    <option>Uzbekistan</option>
                    <option>Russia</option>
                    <option selected>United States</option>
                    <option>India</option>
                    <option>Afganistan</option>
                  </select>
                </div>
                <!-- form-group end.// -->
              </div>
              <!-- form-row.// -->
              <div class="form-group">
                <label>Create password</label>
                <input
                  class="form-control"
                  type="password"
                  name="password"
                  v-model="password"
                  minlength="5"
                  maxlength="16"
                  required
                />
                <span v-if="msg.email">{{msg.password}}</span>
              </div>
              <div class="form-group">
                <label>Confirm password</label>
                <input
                  class="form-control"
                  type="password"
                  name="confirmPassword"
                  v-model="confirmPassword"
                  minlength="5"
                  maxlength="16"
                  required
                />
                <span v-if="msg.email">{{msg.confirmPassword}}</span>
              </div>

              <!-- form-group end.// -->
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  :disabled="disableSubmitButton"
                  @submit.prevent="handleSubmit"
                >Register</button>
              </div>
            </form>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  template: "#registrationForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      picked: true,
      selected: "",
      checked: false,
      email: "",
      password: "",
      confirmPassword: "",
      city: "",
      msg: [],
      submitted: false,
      disableSubmitButton: true
    };
  },
  watch: {
    email(value) {
      this.eventName();
      this.email = value;
      this.check_email(value);
    },
    password(value) {
      this.eventName();
      this.password = value;
      this.checkPassword(value);
    },
    confirmPassword(value) {
      this.eventName();
      this.confirmPassword = value;
      this.checkConfirmPassword(value);
    }
  },

  methods: {
    check_email(value) {
      if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value)) {
        this.msg[name] = "";
      } else {
        this.msg[name] = "Keep Typing... We are waiting for correct Email";
      }
    },
    checkPassword(value) {
      this.passwordLengthCheck(value);
    },
    checkConfirmPassword(value) {
      if (this.passwordLengthCheck(value)) {
        if (value == this.password) {
          this.msg[name] = "";
          this.disableSubmitButton = false;
        } else {
          this.msg[name] = "Password does not match, please try again";
        }
      }
    },
    passwordLengthCheck(passwordToCheck) {
      var remainingChars = 6 - passwordToCheck.length;
      if (passwordToCheck.length < 6) {
        this.msg[name] =
          "Password must contain 6 characters. " +
          remainingChars +
          " more to go...";
      } else {
        this.msg[name] = "";
        return true;
      }
    },
    eventName() {
      this.email = this.email,
      this.confirmPassword = this.confirmPassword,
      this.password = this.password
    },
    submit() {
      alert("Great you have completed this project, keep learning.");
    }
  }
};
</script>

<style>
.error {
  color: red;
}
</style>