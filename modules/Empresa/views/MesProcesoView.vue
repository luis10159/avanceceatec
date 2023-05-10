<template>
    <a-row justify="center" class="margen-abajo">
    <a-col>
      <a-typography-title :level="3">Aperturar mes proceso</a-typography-title>
    </a-col>
  </a-row>
    <a-row justify="center">
        <a-col :span="18">
            <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
                <a-form-item has-feedback label="Mes de proceso" name="mes" v-bind="validateInfos.mes">
                    <a-input-number v-model:value="modelRef.mes" />
                </a-form-item>
                <a-form-item has-feedback label="Año de proceso" name="ano" v-bind="validateInfos.ano">
                    <a-input-number v-model:value="modelRef.ano" />
                </a-form-item>
                <a-form-item label="Sucursal" v-bind="validateInfos.sucursal">
                    <a-select v-model:value="modelRef.sucursal" placeholder="Selecciona la sucursal">
                        <a-select-option value="tarapoto">Tarapoto</a-select-option>
                        <a-select-option value="miraflores">Miraflores</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item label="Departamento/oficina" v-bind="validateInfos.departamento">
                    <a-select v-model:value="modelRef.departamento" placeholder="Selecciona el departamento">
                        <a-select-option value="sanmartin">San Martín</a-select-option>
                        <a-select-option value="lima">Lima</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click.prevent="onSubmit">Asignar</a-button>
                    <a-button style="margin-left: 10px" @click="resetFields">Reiniciar</a-button>
                </a-form-item>
            </a-form>
        </a-col>
    </a-row>
</template>

<script setup>
import { reactive, toRaw } from 'vue';
import { Form } from 'ant-design-vue';
const useForm = Form.useForm;
const labelCol = {
    span: 4,
};
const wrapperCol = {
    span: 14,
};
const modelRef = reactive({
    mes: undefined,
    sucursal: '',
    ano: undefined,
    departamento: '',
});
const rulesRef = reactive({
    mes: [{
        required: true,
        message: 'Por favor, ingrese un mes',
    }],
    region: [{
        required: true,
        message: 'Por favor, ingrese un año',
    }],
    sucursal: [{
        required: true,
        message: 'Por favor, ingrese una sucursal',
    }],
    ano: [{
        required: true,
        message: 'Por favor, ingrese un año',
    }],
    departamento: [{
        required: true,
        message: 'Por favor, ingrese el departamento',
    }],
});
const {
    resetFields,
    validate,
    validateInfos,
} = useForm(modelRef, rulesRef, {
    onValidate: (...args) => console.log(...args),
});
const onSubmit = () => {
    validate().then(() => {
        console.log(toRaw(modelRef));
    }).catch(err => {
        console.log('error', err);
    });
};

</script>

<style lang="scss" scoped>
.margen-abajo {
    margin-bottom: 20px;
}
</style>