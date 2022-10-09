<template>
  <div class="login">
    <a-form-model
      class="login-from"
      ref="loginfrom"
      :model="loginfrom"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="邮箱" prop="email">
        <a-input v-model="loginfrom.email" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input
          v-model="loginfrom.password"
          type="password"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('loginfrom')">
          提交
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('loginfrom')">
          重置
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import api from "../../api/index";
export default {
  data() {
    let emailReg = /^[\w-]+@[\w.-]+.com$/;
    let checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入邮箱"));
      }
      if (emailReg.test(value)) {
        return callback();
      } else {
        return callback(new Error("邮箱格式不正确"));
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      loginfrom: {
        emali: "",
        password: "",
      },
      rules: {
        email: [{ validator: checkEmail, trigger: "change" }],
        password: [{ validator: validatePass, tirgger: "change" }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(this.loginfrom).then((res) => {
              this.$store.dispatch('getUserInfo',res);
              this.$router.push({
                  name: "Home"
              });
          }).catch((error) => {
            this.$message.error(error);
          })
          return true;
        } 
          console.log('error sumit');
          return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="less">
@import "~@/assets/css/login.less";
</style>
