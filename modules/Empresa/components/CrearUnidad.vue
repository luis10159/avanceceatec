<template>
    <a-row class="row-btn">
        <a-col :span="24" class="flex">
            <a-button type="primary" @click="showDrawer" class="btn-margin">
                <template #icon>
                    <PlusOutlined />
                </template>
                Crear Unidad
            </a-button>
        </a-col>
        <!-- Formulario para editar -->
        <a-drawer title="Crear Unidad" :width="520" :open="visible" :body-style="{ paddingBottom: '80px' }"
            :footer-style="{ textAlign: 'right' }" @close="onClose">
            <a-form :model="form" :rules="rules" layout="vertical" class="row-btn">
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Código" name="codigo">
                            <a-input v-model:value="form.codigo" placeholder="Código" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="Sucursal" name="sucursal">
                            <a-select v-model:value="form.sucursal" placeholder="Ingrese la sucursal">
                                <a-select-option value="sucursala">Sucursal A</a-select-option>
                                <a-select-option value="sucursalb">Sucursal B</a-select-option>
                                <a-select-option value="sucursalc">Sucursal C</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Descripción Corta" name="descCorta">
                            <a-input v-model:value="form.descCorta" placeholder="Descripción Corta" />
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
    codigo: '',
    sucursal: '',
    desCorta: '',
    descLarga: '',
});
// detalle de los campos
const rules = {
    codigo: [{
        required: true,
        message: 'Ingrese el códigp',
    }],
    sucursal: [{
        required: true,
        message: 'Ingrese la sucursal',
    }],
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