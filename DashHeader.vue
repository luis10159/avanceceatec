<template>
  <a-layout-header style="padding: 0" class="barra">
    <!-- buscador -->

    <a-row class="buscador" align="middle">
      <a-select placeholder="Seleccione una empresa" v-model:value="value" show-search style="width: 200px"
        :options="options" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
        @change="handleChange"></a-select>
    </a-row>
    <a-row class="avatar" :span="10" align="middle" justify="end">
      <a-switch checked-children="Oscuro" un-checked-children="Claro" class="color" />
      <!-- Menú de opciones del usuario -->
      <a-dropdown-button class="space">
        Hector Luis
        <template #overlay>
          <a-menu @click="handleMenuClick" theme="dark">
            <a-menu-item key="1">
              <EditOutlined />
              Editar perfil
            </a-menu-item>
            <a-menu-item key="2">
              <SettingOutlined />
              Ajustes
            </a-menu-item>
            <a-menu-item key="3">
              <LogoutOutlined />
              Salir
            </a-menu-item>
          </a-menu>
        </template>
        <template #icon>
          <UserOutlined />
        </template>
      </a-dropdown-button>
    </a-row>
  </a-layout-header>
</template>
<script setup>
import {
  UserOutlined,
  EditOutlined,
  SettingOutlined,
  LogoutOutlined

} from "@ant-design/icons-vue";
import { ref } from "vue";
const value = ref(null);
//select
const options = ref([{
  value: 'empresaa',
  label: 'Empresa A',
}, {
  value: 'empresab',
  label: 'Empresa B',
}, {
  value: 'empresac',
  label: 'Empresa C',
}]);

const handleChange = value => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log('blur');
};
const handleFocus = () => {
  console.log('focus');
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};

//Menú de usuario
const handleMenuClick = e => {
  console.log('click', e);
};

</script>


<style lang="scss" scoped>
.buscador {
  height: 100%;
  margin-left: 20px;
  flex-grow: 1;
}

.color {
  background: rgb(76, 84, 129);
}

.space {
  margin: 0 20px;
}

.avatar {
  flex-grow: 6;
}

.barra {
  display: flex;
}
</style>