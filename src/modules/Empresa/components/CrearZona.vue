<template>
    <a-row class="row-btn">
        <a-col :span="24" class="flex">
            <a-button type="primary" @click="showDrawer" class="btn-margin">
                <template #icon>
                    <PlusOutlined />
                </template>
                Crear Zona
            </a-button>
        </a-col>
        <!-- Formulario para editar -->
        <a-drawer title="Crear zona" :width="520" :open="visible" :body-style="{ paddingBottom: '80px' }"
            :footer-style="{ textAlign: 'right' }" @close="onClose">
            <a-form :model="form" :rules="rules" layout="vertical" class="row-btn">
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Descripción corta" name="descCorta">
                            <a-input v-model:value="form.descCorta" placeholder="Descripción corta" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="Descripción Larga" name="descLarga">
                            <a-input v-model:value="form.descLarga" placeholder="Descripción larga" />
                        </a-form-item>
                    </a-col>
                </a-row>

            </a-form>
            
            <template #extra>
                <a-space>
                    <a-button @click="onClose">Cancelar</a-button>
                    <a-button type="primary" @click="onClose">Crear</a-button>
                </a-space>
            </template>
        </a-drawer>
    </a-row>
</template>

<script setup>
import { PlusOutlined } from '@ant-design/icons-vue';

import { reactive, ref } from 'vue';


// Objeto reactivo que va a capturar los campos en el formulario
const form = reactive({
    descCorta: '',
    descLarga: '',
});
// detalle de los campos
const rules = {
    descCorta: [{
        required: true,
        message: 'Ingrese la descripción corta',
    }],
    descLarga: [{
        required: true,
        message: 'Ingrese la descripción larga',
    }]
};

const visible = ref(false);
// Mostrar crear zona
const showDrawer = () => {
    visible.value = true;
};
// Cerrar crear zona
const onClose = () => {
    visible.value = false;
};

</script>

<style lang="scss" scoped>
.btn-margin {
    margin-right: 15px;

}

.row-btn {
    margin-bottom: 20px;
}

.flex {
    display: flex;
    justify-content: space-between;
}
</style>