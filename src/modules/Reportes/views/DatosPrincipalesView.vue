<template>
    <div>
        <a-button type="primary" @click="showModal">Abrir</a-button>
        <a-modal ok-text="Iniciar Proceso" cancel-text="Cancelar" v-model:open="open" width="700px"
            title="Datos principales" @ok="handleOk">
            <a-form :model="form" :rules="rules" layout="vertical">
                <a-row :gutter="16">
                    <a-col :span="14"  class="color">
                        <a-row :gutter="16">
                            <a-col :span="24">
                                <a-form-item label="Sucursal" name="sucursal">
                                    <a-select placeholder="Seleccione la sucursal" v-model:value="form.sucursal" show-search
                                        :options="optSucur" :filter-option="filterOption" @focus="handleFocus"
                                        @blur="handleBlur" @change="handleChange"></a-select>
                                </a-form-item>
                            </a-col>
                            <a-col :span="24">
                                <a-form-item label="Departamento/Oficina" name="oficina">
                                    <a-select placeholder="Seleccione el Departamento/Oficina" v-model:value="form.oficina" show-search
                                        :options="optDepar" :filter-option="filterOptionDepar" @focus="handleFocusDepar"
                                        @blur="handleBlurDepar" @change="handleChangeDepar"></a-select>
                                </a-form-item>
                            </a-col>
                        </a-row>

                    </a-col>
                    <a-col :span="10">
                        <a-row :gutter="16">
                            <a-col :span="12">
                                <a-form-item label="Año" name="ctaConta">
                                    <a-select v-model:value="province"
                                        :options="provinceData.map(pro => ({ value: pro, label: pro }))"></a-select>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="Mes" name="ctaConta">
                                    <a-select v-model:value="secondCity"
                                        :options="cities.map(city => ({ value: city, label: city }))"></a-select>
                                </a-form-item>
                            </a-col>
                            <a-col :span="16">
                                <a-typography-text strong>Mostrar Periodos</a-typography-text>
                            </a-col>
                            <a-col :span="8">
                                <a-switch v-model:checked="checked1" checked-children="Activos" un-checked-children="Cerrados" />
                            </a-col>
                        </a-row>
                    </a-col>
                </a-row>
            </a-form>
        </a-modal>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
const open = ref(false);

const showModal = () => {
    open.value = true;
};

const handleOk = (e) => {
    console.log(e);
    open.value = false;
};


//datos modal
const form = reactive({
    sucursal: null,
    oficina: null,
});

const rules = {
    sucursal: [{
        required: true,
        message: 'Ingrese la sucursal',
    }],
    oficina: [{
        required: true,
        message: 'Ingrese el Departamento/Oficina',
    }],
}

// select
const provinceData = ['2023', '2022'];
const cityData = {
    2023: ['enero', 'febrero', 'marzo'],
    2022: ['Julio', 'Agosto', 'Diciembre'],
};
const province = ref(provinceData[0]);
const secondCity = ref(cityData[province.value][0]);
const cities = computed(() => {
    return cityData[province.value];
});
watch(province, val => {
    secondCity.value = cityData[val][0];
});


//select sucursal
const optSucur = ref([{
    value: '6311',
    label: 'Sucursal a',
}, {
    value: '43111',
    label: 'Sucursal b',
}, {
    value: '6312',
    label: 'Sucursal c',
}, {
    value: '6361',
    label: 'Sucursal d',
}]);

const handleChange = value => {
    console.log(`Seleccionado ${form.sucursal}`);
};
const handleBlur = () => {
    console.log('blur');
};
const handleFocus = () => {
    console.log('focus');
};
const filterOption = (input, option) => {
    const inputValue = input.toLowerCase();
    return option.value.toLowerCase().indexOf(inputValue) >= 0 || option.label.toLowerCase().indexOf(inputValue) >= 0;
};



//select departamento
const optDepar = ref([{
    value: '6311',
    label: 'Departamento a',
}, {
    value: '43111',
    label: 'Departamento b',
}, {
    value: '6312',
    label: 'Departamento c',
}, {
    value: '6361',
    label: 'Departamento d',
}]);

const handleChangeDepar = value => {
    console.log(`Seleccionado ${form.oficina}`);
};
const handleBlurDepar = () => {
    console.log('blur');
};
const handleFocusDepar = () => {
    console.log('focus');
};
const filterOptionDepar = (input, option) => {
    const inputValue = input.toLowerCase();
    return option.value.toLowerCase().indexOf(inputValue) >= 0 || option.label.toLowerCase().indexOf(inputValue) >= 0;
};

const checked1 = ref(false)

</script>

<style lang="scss" scoped>
.color {
  border: 2px solid rgba(0, 89, 255, 0.080);
  background-color: rgba(5, 170, 247, 0.024);
  border-radius: 10px
}
</style>