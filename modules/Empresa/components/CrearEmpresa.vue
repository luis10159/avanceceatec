<template>
    <a-row class="row-btn">
        <a-col :span="24" class="flex">
            <a-button type="primary" @click="showDrawer" class="btn-margin">
                <template #icon>
                    <PlusOutlined />
                </template>
                Crear Empresa
            </a-button>
            <a-button type="primary" @click="showModal"><template #icon>
                    <CheckCircleOutlined />
                </template> Asignar empresa</a-button>
        </a-col>
        <!-- Modal asignar empresa -->

        <a-modal v-model:open="open" title="Asignar Empresa" @ok="handleOk" width="720px" ok-text="Aceptar"
            cancel-text="Cancelar">
            <a-form-item label="Usuario" class="margen-user">
                <a-select  placeholder="Selecciona el usuario">
                    <a-select-option value="sanmartin">San Martín</a-select-option>
                    <a-select-option value="lima">Lima</a-select-option>
                </a-select>
            </a-form-item>
            <a-row class="margen-title">
                <a-col :span="13">
                    <a-typography-text strong>Empresas disponibles</a-typography-text>
                </a-col>
                <a-col :span="11">
                    <a-typography-text strong>Empresas asigandas actualmente</a-typography-text>
                </a-col>
            </a-row>
            <a-transfer v-model:target-keys="targetKeysModel" :data-source="mockDataModel" show-search
                :filter-option="filterOptionModel" :list-style="{
                    width: '360px',
                    height: '300px',
                }" :render="item => item.title" @change="handleChangeModel" @search="handleSearchModel" />
        </a-modal>
        <!-- Formulario para crear -->
        <a-drawer title="Crear una empresa" :width="520" :open="visible" :body-style="{ paddingBottom: '80px' }"
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
                        <a-form-item label="Actividad" name="rubro">
                            <a-input v-model:value="form.rubro" placeholder="Ingrese la actividad" />
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
                    <a-col :span="12" class="columnas">
                        <a-form-item label="Ciudad" name="ciudad">
                            <a-input v-model:value="form.direccion" placeholder="Ingrese la Ciudad" />
                        </a-form-item>
                    </a-col>
                    <a-col :span="12" class="columnas">

                        <a-row>
                            <a-col :span="14">
                                <a-form-item label="Regimen" name="regimen">
                                    <a-select v-model:value="form.regimen" placeholder="Ingrese el regimen">
                                        <a-select-option value="regimena">Regimen A</a-select-option>
                                        <a-select-option value="regimenb">Regimen B</a-select-option>
                                        <a-select-option value="regimenc">Regimen C</a-select-option>
                                    </a-select>
                                </a-form-item>
                            </a-col>
                            <a-col :span="5" class="margen">
                                <a-input-number v-model:value="value2" :min="0" :max="100" :formatter="value => `${value}%`"
                                    :parser="value => value.replace('%', '')" />
                            </a-col>
                        </a-row>

                    </a-col>
                    <a-col :span="12" class="columnas">
                        <a-row>
                            <a-col :span="12">
                                <a-form-item label="Año inicio" name="ano">

                                    <a-input-number style="width: 100%" id="inputNumber" v-model:value="form.ano" :min="1"
                                        :max="10" />
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="%Part. Trab" name="participacion">
                                    <a-input-number style="width: 100%" v-model:value="form.participacion" :min="0"
                                        :max="100" :formatter="value => `${value}%`"
                                        :parser="value => value.replace('%', '')" />
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-col>
                    <a-col :span="24" class="row-btn border">
                        <a-typography-title :level="5">Plan de cuentas</a-typography-title>
                        <a-radio-group v-model:value="form.planes" button-style="solid">
                            <a-radio-button value="a">Plan Básico a 5 digitos</a-radio-button>
                            <a-radio-button value="b">Plan bäsico a 7 digitos</a-radio-button>
                            <a-radio-button value="c">Importar desde</a-radio-button>
                        </a-radio-group>
                    </a-col>
                    <a-col :span="12" v-if="form.planes == 'c'">
                        <a-select v-model:value="valor" label-in-value style="width: 120px" :options="opciones"
                            @change="handleChange"></a-select>
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
import { PlusOutlined, CheckCircleOutlined } from '@ant-design/icons-vue';

import { reactive, ref, onMounted } from 'vue';

// Objeto reactivo que va a capturar los campos en el formulario
const form = reactive({
    ruc: '',
    razonSocial: '',
    direccion: '',
    telefono: '',
    rubro: '',
    ciudad: '',
    regimen: '',
    ano: '',
    planes: '',
    impOpciones: '',
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
        message: 'Ingrese el rubro',
    }],
    ciudad: [{
        required: true,
        message: 'Ingrese la ciudad',
    }],
    regimen: [{
        required: true,
        message: 'Selecione el regimen',
    }],
    ano: [{
        required: true,
        message: 'Selecione el ano',
    }],
    participacion: [{
        required: true,
        message: 'Selecione el % de Partici. Trab.',
    }],
    planes: [{
        required: true,
        message: 'Selecione el el plan',
    }],
    impOpciones: [{
        required: true,
        message: 'Selecione las opciones',
    }]

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
// select

const opciones = ref([{
    value: 'opciona',
    label: 'Opción A',
}, {
    value: 'opcionb',
    label: 'Opción B',
}]);
const handleChange = value => {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
};

const valor = ref('Seleccione');


const value2 = ref(0)

//modal

const open = ref(false);

const showModal = () => {
    open.value = true;
};

const handleOk = (e) => {
    console.log(e);
    open.value = false;
};
//tranferencia de elementos
const mockDataModel = ref([]);
const targetKeysModel = ref([]);
onMounted(() => {
    getMock();
});
const getMock = () => {
    const keys = [];
    const mData = [];
    for (let i = 0; i < 10; i++) {
        const data = {
            key: i.toString(),
            title: `Empresa ${i + 1}`,
            description: `Descripción de contenido${i + 1}`,
            chosen: Math.random() * 2 > 1,
        };
        if (data.chosen) {
            keys.push(data.key);
        }
        mData.push(data);
    }
    mockDataModel.value = mData;
    targetKeysModel.value = keys;
};
const filterOptionModel = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
};
const handleChangeModel = (keys, direction, moveKeys) => {
    console.log(keys, direction, moveKeys);
};
const handleSearchModel = (dir, value) => {
    console.log('search:', dir, value);
};

</script>

<style lang="scss" scoped>
.btn-margin {
    margin-right: 15px;

}

.row-btn {
    margin-bottom: 20px;
}

.columnas {
    padding: 0 15px 0 0;
}

.margen {
    margin-top: 30px;
}

.margen-title {
    margin-top: 25px;
    margin-bottom: 15px;
}
.margen-user {
    margin-top: 25px;
}

.border {
    border-top: 2px solid rgba(5, 63, 117, 0.308);
    padding-top: 10px;
}

.flex {
    display: flex;
    justify-content: space-between;
}
</style>