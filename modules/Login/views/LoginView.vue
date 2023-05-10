<template>
  <a-row justify="center" class="login">
    <a-col :xs="15" :sm="13" :md="11" :lg="9" :xl="7">
      <a-form :model="formState" name="normal_login" class="login-form" :label-col="{ xs: 9, sm: 8, md: 7, lg: 6, xl: 5 }"
        @finish="onFinish" @finishFailed="onFinishFailed">
        <a-row justify="center" class="avatar">
          <a-avatar :size="{ xs: 75, sm: 80, md: 85, lg: 90, xl: 95, xxl: 100 }">
            <template #icon>
              <UserOutlined />
            </template>
          </a-avatar>
        </a-row>
        <a-row justify="center" class="avatar">
          <h2>Identificación del usuario</h2>
        </a-row>
        <a-form-item label="Gmail" name="username" :rules="[
            { type: 'email', required: true, message: 'No es un correo electrónico válido' },
          ]">
          <a-input v-model:value="formState.username" placeholder="Ingrese su gmail">
            <template #prefix>
              <MailOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
<!-- 
        <a-form-item label="Usuario" name="username" :rules="[
            { type: 'email', required: true, message: 'Por favor, ingresa tu usuario!' },
          ]">
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item> -->

        <a-form-item label="Contraseña" name="password" :rules="[
            { required: true, message: 'Por favor, ingresa tu contraseña!' },
          ]">
          <a-input-password v-model:value="formState.password" placeholder="Ingrese su contraseña">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item label="Plataforma" name="platform">
          <a-select placeholder="Seleccione" v-model:value="formState.platform">
            <a-select-option value="plataformaa" >Plataforma a</a-select-option>
            <a-select-option value="plataforma">Plataforma b</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Año" name="age">
          <a-select placeholder="Por favor, seleccione el año" v-model:value="formState.age">
            <a-select-option value="2022">202x</a-select-option>
            <a-select-option value="2023">202x</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember">Recuérdame</a-checkbox>
          </a-form-item>
          <a class="login-form-forgot" href="">Olvidé mi contraseña</a>
        </a-form-item>

        <a-form-item>
          <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button borde-redondo">
            Iniciar
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script setup>
import { reactive, computed } from "vue";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons-vue";

// variables sincronizadas con las entradas
const formState = reactive({
  username: "",
  password: "",
  platform: "",
  age: "",
  remember: true,
});
// mensaje de envio exitoso en consola
const onFinish = (values) => {
  console.log("Success:", values);
};
// mensaje de éxito en consola
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
// bloqueo del botón iniciar
const disabled = computed(() => {
  return !(
    formState.username &&
    formState.password &&
    formState.platform &&
    formState.age
  );
});
</script>
<style lang="scss" scoped>
.login {
  padding-top: 7%;
  height: 100vh;
}

.login-form {
  padding: 18px;
  border-radius: 10px;
  background-color: #fcfdff98;
  box-shadow:  14px 14px 12px #f0f0f063;
}

.login-form-forgot {
  float: right;
}

.login-form-button {
  width: 100%;
}

.avatar {
  margin-bottom: 30px;
}

</style>
