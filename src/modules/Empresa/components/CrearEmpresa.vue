<template>
    <a-row class="row-btn">
        <a-col :span="21">
            <a-button type="primary" @click="showDrawer" class="btn-margin">
                <template #icon>
                    <PlusOutlined />
                </template>
                Crear Empresa
            </a-button>
        </a-col>

        <!-- Formulario para editar -->
        <a-drawer title="Crear una empresa" :width="520" :visible="visible" :body-style="{ paddingBottom: '80px' }"
            :footer-style="{ textAlign: 'right' }" @close="onClose">
            <a-form :model="form" :rules="rules" layout="vertical" class="row-btn">
                <a-row>
                    <a-col :span="12" class="columnas">
                        <a-form-item label="RUC" name="ruc">
                            <a-input v-model:value="form.ruc" placeholder="Ingrese el ruc" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" class="columnas">
                        <a-form-item label="Razón Social" name="razonSocial">
                            <a-input v-model:value="form.razonSocial" placeholder="Ingrese la razón social" />
                        </a-form-item>
                    </a-col>

                    <a-col :span="12" class="columnas">
                        <a-form-item label="Rubro" name="rubro">
                            <a-select v-model:value="form.rubro" placeholder="Please choose the rubro">
                                <a-select-option value="rubroa">Rubro A</a-select-option>
                                <a-select-option value="rubrob">Rubro B</a-select-option>
                                <a-select-option value="rubroc">Rubro C</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>

                    <a-col :span="12" class="columnas">
                        <a-form-item label="Teléfono" name="telefono">
                            <a-input v-model:value="form.telefono" placeholder="Ingrese el teléfono" />
                        </a-form-item>
                    </a-col>

                    <a-col :span="12" class="columnas">
                        <a-form-item label="Dirección" name="direccion">
                            <a-input v-model:value="form.direccion" placeholder="Ingrese la dirrección" />
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
// Importar iconos
import { PlusOutlined } from '@ant-design/icons-vue';

import { reactive, ref } from 'vue';

// Objeto reactivo que va a capturar los campos en el formulario
const form = reactive({
    ruc: '',
    razonSocial: '',
    direccion: '',
    telefono: '',
    rubro: '',
});
// detalle de los campos
const rules = {
    ruc: [{
        required: true,
        message: 'Ingrese el RUC',
    }],
    razonSocial: [{
        required: true,
        message: 'Ingrese la razón social',
    }],
    direccion: [{
        required: true,
        message: 'Seleccione la dirección',
    }],
    telefono: [{
        required: true,
        message: 'Ingrese el teléfono',
    }],
    rubro: [{
        required: true,
        message: 'Selecione el rubro',
    }],
};

const visible = ref(false);
// Mostrar crear cuenta
const showDrawer = () => {
    visible.value = true;
};
// Cerrar crear cuenta
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

.text-rojo {
    color: red;
    font-weight: bold;
}

.ancho-complet {
    width: 100%;
}

.columnas {
    padding: 0 15px 0 0;
}
</style>