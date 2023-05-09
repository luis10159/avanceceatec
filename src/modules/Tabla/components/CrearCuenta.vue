<template>
    <a-row class="row-btn">
        <a-col :span="21">
            <a-button type="primary" @click="showDrawer" class="btn-margin">
                <template #icon>
                    <PlusOutlined />
                </template>
                Crear cuenta
            </a-button>
            <button ref="button">Click me!</button>
        </a-col>
        <a-col :span="3">
            <a-select placeholder="Seleccione el año">
                <a-select-option value="2021">2021</a-select-option>
                <a-select-option value="2022">2022</a-select-option>
                <a-select-option value="2023">2023</a-select-option>
            </a-select>
        </a-col>
        <!-- Formulario para editar -->
        <a-drawer title="Crear una cuenta" :width="520" :visible="visible" :body-style="{ paddingBottom: '80px' }"
            :footer-style="{ textAlign: 'right' }" @close="onClose">
            <a-form :model="form" :rules="rules" layout="vertical" class="row-btn">
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Código" name="codigo">
                            <a-input v-model:value="form.codigo" placeholder="Ingrese el código" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="Cuenta contable" name="cuentaContable">
                            <a-input v-model:value="form.cuentaContable" placeholder="Ingrese el nombre de la cuenta" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Nivel de cuenta" name="nivelCuenta">
                            <a-select v-model:value="form.nivelCuenta" placeholder="Please choose the nivelCuenta">
                                <a-select-option value="balance">Balance</a-select-option>
                                <a-select-option value="subCuenta">Sub Cuenta</a-select-option>
                                <a-select-option value="registro">Registro</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>

                    <a-col :span="12">
                        <a-form-item label="Tipo de cuenta" name="tipoCuenta">
                            <a-select v-model:value="form.tipoCuenta" placeholder="Please choose the tipoCuenta">
                                <a-select-option value="private">Activo</a-select-option>
                                <a-select-option value="public">Pasivo</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="12" v-if="form.nivelCuenta == 'registro'">
                        <a-form-item label="Tipo de análisis" name="tipoAnalisis">
                            <a-select v-model:value="form.tipoAnalisis" placeholder="Please a-s an tipoAnalisis">
                                <a-select-option value="xiao">Sin análisis</a-select-option>
                                <a-select-option value="mao">Por documentos</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="24">
                        <a-form-item label="Opciones" name="opciones">
                            <a-select v-model:value="form.opciones" mode="multiple" style="width: 100%"
                                placeholder="Seleccione las opciones" max-tag-count="responsive"
                                :options="options"></a-select>
                        </a-form-item>
                    </a-col>
                </a-row>

                <a-row class="row-btn" v-if="form.nivelCuenta == 'registro' || form.nivelCuenta == 'subCuenta'">
                    <a-col :span="20">
                        <a-col :span="24" class="row-btn"
                            v-if="sum != 100 || (porcentajes[0] || porcentajes[1] || porcentajes[2] || porcentajes[3]) != 0">
                            Cta. (Debe): <a-input-number id="inputNumber" :min="1" /> <a-input-number id="inputNumber"
                                v-on:change="suma" v-model:value="porcentajes[0]" :min="0" :max="100"
                                :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />

                        </a-col>

                        <a-col class="row-btn" :span="24"
                            v-if="(porcentajes[0] != 0 && (sum != 100 && sum < 100)) || (porcentajes[1] || porcentajes[2] || porcentajes[3]) != 0">
                            Cta. (Debe): <a-input-number id="inputNumber" :min="1" /> <a-input-number id="inputNumber"
                                v-on:change="suma" v-model:value="porcentajes[1]" :min="0" :max="100"
                                :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />
                        </a-col>

                        <a-col class="row-btn" :span="24"
                            v-if="(porcentajes[1] != 0 && (sum != 100 && sum < 100)) || (porcentajes[2] || porcentajes[3] != 0)">
                            Cta. (Debe): <a-input-number id="inputNumber" :min="1" /> <a-input-number id="inputNumber"
                                v-on:change="suma" v-model:value="porcentajes[2]" :min="0" :max="100"
                                :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />

                        </a-col>
                        <a-col class="row-btn" :span="24"
                            v-if="(porcentajes[2] != 0 && (sum != 100 && sum < 100)) || (porcentajes[3] != 0)">
                            Cta. (Debe): <a-input-number id="inputNumber" :min="1" /> <a-input-number id="inputNumber"
                                v-on:change="suma" v-model:value="porcentajes[3]" :min="0" :max="100"
                                :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />
                        </a-col>
                    </a-col>
                    <a-col :span="4">
                        Cta. (Haber): <a-input-number class="row-btn" id="inputNumber" :min="1" />
                        Cta. (Cierre): <a-input-number class="row-btn" id="inputNumber" :min="1" />
                        <a-form-item label="Auxiliar" name="auxiliar">
                            <a-input v-model:value="form.auxiliar" placeholder="Por favor, ingrese..." />
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            <a-row v-if="sum > 100" :span="24">
                <a-alert description="El porcentaje total no es valido, excede el 100%" type="error" show-icon
                    class="ancho-complet" />
            </a-row>
            <a-row v-if="sum < 100 && sum != 0">
                <a-alert description="El porcentaje total no es valido, es menor al 100%" type="error" show-icon
                    class="ancho-complet" />
            </a-row>
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

import { reactive, ref, onMounted, onUnmounted } from 'vue';


// Objeto reactivo que va a capturar los campos en el formulario
const form = reactive({
    codigo: '',
    cuentaContable: '',
    tipoAnalisis: '',
    tipoCuenta: '',
    nivelCuenta: '',
    opciones: [],
    auxiliar: '',
});
// detalle de los campos
const rules = {
    codigo: [{
        required: true,
        message: 'Ingrese el código',
    }],
    cuentaContable: [{
        required: true,
        message: 'Ingrese el nombre de la cuenta contable',
    }],
    tipoAnalisis: [{
        required: true,
        message: 'Seleccione el tipo de análisis',
    }],
    tipoCuenta: [{
        required: true,
        message: 'Seleccione el tipo de cuenta',
    }],
    nivelCuenta: [{
        required: true,
        message: 'Selecione el nivel de cuenta',
    }],
    opciones: [{
        required: true,
        message: 'Selecione las opciones que necesite',
        type: 'array',
    }],
    auxiliar: [{
        message: 'Ingresa el auxiliar',
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

//Opciones de selección multiple
const options = ref([]);
for (let i = 1; i < 5; i++) {
    const value = i.toString(10) + i;
    options.value.push({
        label: `Opciones que estaban con casillas selecionables: ${value}`,
        value,
    });
}

//procentajes

const porcentajes = reactive([0, 0, 0, 0]);
let sum = ref(0);
let suma = () => {
    sum.value = 0;
    for (let i = 0; i < 4; i++) {
        sum.value = sum.value + porcentajes[i];
    }
}


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
</style>