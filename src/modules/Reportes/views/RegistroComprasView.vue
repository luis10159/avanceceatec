<template>
  <a-row justify="center">
    <a-col>
      <a-typography-title :level="3">Registro de compras</a-typography-title>
    </a-col>
  </a-row>
  <!-- modal -->
  <div>
    <a-button type="primary" @click="showModal">Abrir modal</a-button>
    <a-modal v-model:open="open" width="1000px" title="Actualización de movimientos" ok-text="Guardar"
      cancel-text="Cancelar" @ok="handleOk">
      <a-form :model="form" :rules="rules" layout="vertical">
        <a-row :gutter="16" justify="space-between">
          <a-col :span="10">
            <a-row :gutter="16">
              <a-col :span="24">
                <a-form-item label="Cuenta contable" name="ctaConta">
                  <a-select placeholder="Seleccione una cuenta contable" v-model:value="form.ctaConta" show-search
                    :options="optCuentaCont" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                    @change="handleChange"></a-select>
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item label="Cta. Abono" name="ctaAbono">
                  <a-select placeholder="Seleccione una cuenta contable" v-model:value="form.ctaAbono" show-search
                    :options="optCuentaAbo" :filter-option="filterOptionAbon" @focus="handleFocusAbon"
                    @blur="handleBlurAbon" @change="handleChangeAbon"></a-select>
                </a-form-item>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="9">
            <a-checkbox v-model:checked="form.aduana" class="margen-check">Aduana</a-checkbox>
            <a-row :gutter="16" class="color">
              <a-col :span="24">
                <a-form-item label="Sede" name="sede">
                  <a-select ref="select" v-model:value="form.sede" :options="optSede" @focus="focusSede"
                    @change="handleChangeSede" placeholder="Seleccione la sede"></a-select>
                </a-form-item>
              </a-col>

              <a-col :span="12">
                <a-form-item label="Fecha" name="fecha">
                  <a-date-picker class="ancho" v-model:value="form.fecha" placeholder="seleccione la fecha" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Hora" name="hora">
                  <a-time-picker class="ancho" placeholder="Seleccione la hora" v-model:value="form.hora" />
                </a-form-item>
              </a-col>

            </a-row>

          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col :span="5">
            <a-form-item label="Proveedor" name="proveedor">
              <a-select placeholder="Seleccione una cuenta contable" v-model:value="form.proveedor" show-search
                :options="optCuentaPro" :filter-option="filterOptionAbon" @focus="handleFocusPro" @blur="handleBlurPro"
                @change="handleChangePro"></a-select>
            </a-form-item>
          </a-col>
          <a-col :span="5">
            <a-form-item label="Tipo de Doc N°" name="tipoDoc">
              <a-select placeholder="Seleccione una cuenta contable" v-model:value="form.tipoDoc" show-search
                :options="optTipoDoc" :filter-option="filterOptionDoc" @focus="handleFocusDoc" @blur="handleBlurDoc"
                @change="handleChangeDoc"></a-select>
            </a-form-item>
          </a-col>
          <a-col :span="5">
            <a-form-item label="Serie" name="serie">
              <a-input v-model:value="form.serie" placeholder="Ingrese la serie" />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="N°" name="numero">
              <a-input v-model:value="form.numero" placeholder="Ingrese el número" />
            </a-form-item>
          </a-col>
          <a-col :span="5">
            <a-form-item label="Fecha de emisión" name="fechaEmision">
              <a-date-picker class="ancho" placeholder="Seleccione la fecha de emisión"
                v-model:value="form.fechaEmision" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16" justify="end">

          <a-col :span="5">
            <a-form-item label="Doc. Cancelación N°" name="docCancel">
              <a-input v-model:value="form.docCancel" placeholder="Ingrese el N° del Doc. Cancelación" />
            </a-form-item>
          </a-col>
          <a-col :span="5">
            <a-form-item label="Serie" name="serieC">
              <a-input v-model:value="form.serieC" placeholder="Ingrese la serie" />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="N°" name="numeroC">
              <a-input v-model:value="form.numeroC" placeholder="Ingrese el número" />
            </a-form-item>
          </a-col>
          <a-col :span="5">
            <a-form-item label="Fecha de vencimiento" name="fechaVenci">
              <a-date-picker class="ancho" placeholder="Seleccione la fecha de vencimiento"
                v-model:value="form.fechaVenci" />
            </a-form-item>
          </a-col>
        </a-row>
        <!-- inferior -->
        <a-row :gutter="16">
          <a-col :span="19">
            <a-row :gutter="16" align="bottom">
              <a-col :span="18">
                <a-form-item label="Glosario" name="glosario">
                  <a-input v-model:value="form.glosario" placeholder="Ingrese el glosario"/>
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-checkbox v-model:checked="form.reparo" class="check">Reparo</a-checkbox>
              </a-col>
              <a-col :span="6">
                <a-form-item label="C. Costos" name="cCostos">
                  <a-input v-model:value="form.cCostos" placeholder="Ingrese los costos" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="Flujo Efec." name="flujoE">
                  <a-input v-model:value="form.flujoE" placeholder="Ingrese el fujo efectivo" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="Moneda" name="moneda">
                  <a-select ref="select" v-model:value="form.moneda" :options="optMone" @focus="focusMone"
                    @change="handleChangeMone" placeholder="Seleccione la moneda"></a-select>
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="Tipo de cambio" name="tipoCambio">
                  <a-input v-model:value="form.cCostos" placeholder="Ingrese el tipo de cambio" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="Tipo de operación" name="optOpe">
                  <a-select ref="select" v-model:value="form.tipoOpe" :options="optOpe" @focus="focusOpe"
                    @change="handleChangeOpe" placeholder="Seleccione el tipo de operación"></a-select>
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="Debe" name="debe">
                  <a-input v-model:value="form.debe" placeholder="Ingrese el debe" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="Haber" name="haber">
                  <a-input v-model:value="form.haber" placeholder="Ingrese el haber" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-checkbox v-model:checked="form.detraccionCheck" class="margen-check">Detracción</a-checkbox>
                <a-row :gutter="16" class="color">
                  <a-col :span="24">
                    <a-form-item label="Detracción" name="detraccion">
                      <a-select ref="select" v-model:value="form.detraccion" :options="optDet" @focus="focusDet"
                    @change="handleChangeDet" placeholder="Seleccione la sede"></a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :span="7">
                    <a-form-item label="Hora" name="horaDetr">
                      <a-time-picker class="ancho" placeholder="Seleccione la hora" v-model:value="form.horaDetr" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="7">
                    <a-form-item label="N°" name="numeroDetr">
                      <a-input v-model:value="form.numeroDetr" placeholder="Ingrese el número" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="10">
                    <a-form-item label="Fecha" name="fechaDetr">
                      <a-date-picker class="ancho" v-model:value="form.fechaDetr" placeholder="seleccione la fecha" />
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-col>
              <a-col :span="12">
                <a-checkbox v-model:checked="form.percepcionCheck" class="margen-check">Percepción</a-checkbox>
                <a-row :gutter="16" class="color">
                  <a-col :span="24">
                    <a-form-item label="Percepción" name="percepcion">
                      <a-select ref="select" v-model:value="form.percepcion" :options="optPer" @focus="focusPer"
                    @change="handleChangePer" placeholder="Seleccione la sede"></a-select>
                    </a-form-item>
                  </a-col>
                  <a-col :span="7">
                    <a-form-item label="Hora" name="horaPer">
                      <a-time-picker class="ancho" placeholder="Seleccione la hora" v-model:value="form.horaPer" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="7">
                    <a-form-item label="N°" name="numeroPer">
                      <a-input v-model:value="form.numeroPer" placeholder="Ingrese el número" />
                    </a-form-item>
                  </a-col>
                  <a-col :span="10">
                    <a-form-item label="Fecha" name="fechaPer">
                      <a-date-picker class="ancho" v-model:value="form.fechaPer" placeholder="seleccione la fecha" />
                    </a-form-item>
                  </a-col>
                </a-row>
              </a-col>

              <a-col :span="6">
                <a-checkbox v-model:checked="form.ctaICBPERaCheck" class="margen-check">Cta. ICBPER</a-checkbox>
                <a-form-item name="ctaICBPERa">
                  <a-input v-model:value="form.ctaICBPERa" placeholder="Ingrese Cta. ICBPER" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="Cuenta ICBPER" name="ctaICBPERb">
                  <a-input v-model:value="form.ctaICBPERb" placeholder="Ingrese la cuenta ICBPER" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-checkbox v-model:checked="form.ctaICBPERbCheck" class="margen-check">Cta. Auxiliar Ajuste</a-checkbox>
                <a-form-item name="ctaAuxAjus">
                  <a-input v-model:value="form.ctaAuxAjus" placeholder="Ingrese la cuenta auxiliar ajuste" />
                </a-form-item>
              </a-col>
              <a-col :span="6">
                <a-form-item label="Cuenta ajuste" name="ctaAjus">
                  <a-input v-model:value="form.ctaAjus" placeholder="Ingrese la cuenta ajuste" />
                </a-form-item>
              </a-col>
            </a-row>

          </a-col>
          <a-col :span="5">
            <a-row class="margen-check">Impuestos</a-row>
            <a-row :gutter="16" align="bottom" class="color">
              <a-col :span="24">
                <a-checkbox v-model:checked="form.costeoIGVCheck" class="margen-check">Costeo IGV</a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-checkbox v-model:checked="form.afectoIGVCheck" class="margen-check">Afecto IGV (19%)</a-checkbox>
              </a-col>
              <a-col :span="24">
                <a-form-item label="IGV" name="IGV">
                  <a-input v-model:value="form.IGV" placeholder="Ingrese el IGV" />
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-checkbox v-model:checked="form.retIGVCheck" class="margen-check">Retención IGV (%)</a-checkbox>
                <a-form-item name="retIGV">
                  <a-input v-model:value="form.retIGV" placeholder="Ingrese la retención IGV (%)" />
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-form-item label="=" name="igual">
                  <a-input v-model:value="form.igual" placeholder="=" />
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-checkbox v-model:checked="form.ret4taCheck" class="margen-check">Ret 4ta (15%)</a-checkbox>
                <a-form-item name="ret4ta">
                  <a-input v-model:value="form.ret4ta" placeholder="=" />
                </a-form-item>
              </a-col>
              <a-col :span="24">
                <a-checkbox v-model:checked="form.iscCheck" class="margen-check">ISC (5%)</a-checkbox>
                <a-form-item name="isc">
                  <a-input v-model:value="form.isc" placeholder="Ingrese el ISC" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </div>

  <!-- contenido -->
  <a-row justify="center">
    <a-col :span="6">
      <a-typography-title class="margen-texto" :level="5">Parámetros</a-typography-title>
      <a-tree-select v-model:value="value" style="width: 100%" :tree-data="treeData" tree-checkable allow-clear
        :show-checked-strategy="SHOW_PARENT" placeholder="Seleccione las sucursales y departamentos/oficinas" />
    </a-col>
  </a-row>
  <a-row justify="center" class="espacio-arriba">
    <a-col :span="6">
      <p class="margen-texto">Seleccione el rango de fechas</p>
      <a-space direction="vertical" :size="12">
        <a-range-picker v-model:value="value1" :placeholder="['Fecha de inicio', 'Fecha Final']" />
      </a-space>
    </a-col>
  </a-row>
  <a-row justify="center" class="espacio-arriba">
    <a-col :span="6">
      <p class="margen-texto">Ordando por</p>
      <a-radio-group v-model:value="valueradio">
        <a-radio :style="radioStyle" :value="1">Fecha - Documento</a-radio>
        <a-radio :style="radioStyle" :value="2">Docuemtno - Fecha</a-radio>
      </a-radio-group>
    </a-col>
  </a-row>
  <a-row justify="center" class="espacio-arriba">
    <a-col :span="6">
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary">Aceptar</a-button>
        <a-button style="margin-left: 10px">Cancelar</a-button>
      </a-form-item>
    </a-col>
  </a-row>
  <a-row justify="center">
    <a-col :span="6">
      <a-radio-group v-model:value="valueradio2">
        <a-radio :style="radioStyle" :value="1">PLE Compras</a-radio>
      </a-radio-group>
    </a-col>
  </a-row>
</template>
<script setup>
import { ref, watch, reactive } from 'vue'
import { TreeSelect } from 'ant-design-vue';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const treeData = [{
  title: 'Todas las sucursales',
  value: '0-0',
  children: [{
    title: 'Sucursal A',
    value: '0-0-0',
  },
  {
    title: 'Sucursal B',
    value: '0-0-1',
  },
  {
    title: 'sucursal C',
    value: '0-0-2',
  }
  ],
}, {
  title: 'Todos los Departamentos/Oficinas',
  value: '0-1',
  children: [{
    title: 'Departamento A',
    value: '0-1-0',
    // disabled: true,
  }, {
    title: 'Departamento B',
    value: '0-1-1',
  }, {
    title: 'Departamento C',
    value: '0-1-2',
  }],
}];
const value = ref([]);
watch(value, () => {
  console.log(value.value);
});
// Parámetros
const value1 = ref();
// selección radio
const valueradio = ref();
const radioStyle = reactive({
  display: 'flex',
  height: '30px',
  lineHeight: '30px',
});

const valueradio2 = ref();

// ---------------Modal

const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = () => {
  console.log(form);
  open.value = false;
};

const form = reactive({
  ctaConta: null,
  sede: null,
  ctaAbono: null,
  serie: null,
  serieC: null,
  proveedor: null,
  tipoDoc: null,
  numero: null,
  numeroC: null,
  aduana: false,
  fecha: null,
  hora: null,
  fechaEmision: null,
  fechaVenci: null,
  docCancel: null,
  glosario: null,
  reparo: false,
  cCostos: null,
  flujoE: null,
  tipoCambio: null,
  tipoOpe: null,
  debe: null,
  haber: null,
  detraccion: null,
  horaDetr: null,
  numeroDetr: null,
  fechaDetr: null,
  percepcion: null,
  numeroPer: null,
  fechaPer: null,
  horaPer: null,
  ctaICBPERa: null,
  ctaICBPERb: null,
  ctaAuxAjus: null,
  ctaAjus: null,
  IGV: null,
  retIGV: null,
  ret4ta: null,
  isc: null,
  igual: null,
  detraccionCheck: false,
  percepcionCheck: false,
  ctaICBPERaCheck: false,
  ctaICBPERbCheck: false,
  costeoIGVCheck: false,
  afectoIGVCheck: false,
  retIGVCheck: false,
  ret4taCheck: false,
  iscCheck: false,

});
const rules = {
  ctaConta: [{
    required: true,
    message: 'Ingrese la cuenta contable',
  }],
  sede: [{
    required: true,
    message: 'Ingresa la sede',
  }],
  ctaAbono: [{
    required: true,
    message: 'Ingrese la Cta. Abono',
  }],
  serie: [{
    required: true,
    message: 'Ingrese la serie',
  }],
  serieC: [{
    required: true,
    message: 'Ingrese la serie',
  }],
  proveedor: [{
    required: true,
    message: 'Ingrese el proveedor',
  }],
  tipoDoc: [{
    required: true,
    message: 'Ingrese el tipo de documento',
  }],
  numero: [{
    required: true,
    message: 'Ingrese el número',
  }],
  numeroC: [{
    required: true,
    message: 'Ingrese el número',
  }],
  fecha: [{
    required: true,
    message: 'seleccione una fecha',
    type: 'object',
  }],
  hora: [{
    required: true,
    message: 'Seleccione la hora',
    type: 'object',
  }],
  fechaEmision: [{
    required: true,
    message: 'Seleccione la fecha de emisión',
    type: 'object',
  }],
  fechaVenci: [{
    required: true,
    message: 'Seleccione la fecha de vencimiento',
    type: 'object',
  }],
  docCancel: [{
    required: true,
    message: 'Ingrese el N° del Doc. Cancelación',
  }],
  glosario: [{
    required: true,
    message: 'Ingrese el glosario',
  }],
  reparo: [{
    required: true,
    message: 'Ingrese el reparo',
  }],
  cCostos: [{
    required: true,
    message: 'Ingrese el N° del Doc. Cancelación',
  }],
  flujoE: [{
    required: true,
    message: 'Ingrese el flujo efectivo',
  }],
  moneda: [{
    required: true,
    message: 'Ingrese la modena',
  }],
  percepcion: [{
    required: true,
    message: 'Ingrese la percepción',
  }],
  tipoOpe: [{
    required: true,
    message: 'Ingrese el tipo de operación',
  }],
  debe: [{
    required: true,
    message: 'Ingrese el debe',
  }],
  haber: [{
    required: true,
    message: 'Ingrese el haber',
  }],
  detraccion: [{
    required: true,
    message: 'Ingrese la detracción',
  }],
  horaDetr: [{
    required: true,
    message: 'Ingrese la hora',
    type: 'object',
  }],
  numeroDetr: [{
    required: true,
    message: 'Ingrese el número',
  }],
  fechaDetr: [{
    required: true,
    message: 'Ingrese la fecha',
    type: 'object',
  }],
  percepcion: [{
    required: true,
    message: 'Ingrese la percepción',
  }],
  horaPer: [{
    required: true,
    message: 'Ingrese la hora',
    type: 'object',
  }],
  numeroPer: [{
    required: true,
    message: 'Ingrese el número',
  }],
  fechaPer: [{
    required: true,
    message: 'Ingrese la fecha',
    type: 'object',
  }],
  ctaICBPERa: [{
    required: true,
    message: 'Ingrese Cta. ICBPER',
  }],
  ctaICBPERb: [{
    required: true,
    message: 'Ingrese la cuenta ICBPER',
  }],
  ctaAuxAjus: [{
    required: true,
    message: 'Ingrese la cuenta auxiliar',
  }],
  ctaAjus: [{
    required: true,
    message: 'Ingrese la cuenta ajuste',
  }],
  IGV: [{
    required: true,
    message: 'Ingrese el IGV',
  }],
  retIGV: [{
    required: true,
    message: 'Ingrese la retención IGV (19%)',
  }],
  ret4ta: [{
    required: true,
    message: 'Ingrese la Ret 4ta (15%)',
  }],
  isc: [{
    required: true,
    message: 'Ingrese el ISC (5%)',
  }],
  igual: [{
    required: true,
    message: 'Ingrese el ISC (5%)',
  }]
};


//select cuenta contable
const optCuentaCont = ref([{
  value: '6311',
  label: 'Transporte',
}, {
  value: '43111',
  label: 'De carga',
}, {
  value: '6312',
  label: 'Correos',
}, {
  value: '6361',
  label: 'Energia electrica',
}]);

const handleChange = value => {
  console.log(`Seleccionado ${form.ctaConta}`);
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

//select cuenta abono
const optCuentaPro = ref([{
  value: '25667891237',
  label: 'Promotora Oriantal S.A.C',
}, {
  value: '29666891237',
  label: 'Shilcayo Grifo S.R.L',
}, {
  value: '21667891237',
  label: 'Empresa de Transporte Picota S.A.C',
}, {
  value: '24967891237',
  label: 'Petro Perú S.A.C',
}]);

const handleChangePro = value => {
  console.log(`Seleccionado ${form.ctaConta}`);
};
const handleBlurPro = () => {
  console.log('blur');
};
const handleFocusPro = () => {
  console.log('focus');
};
const filterOptionPro = (input, option) => {
  const inputValue = input.toLowerCase();
  return option.value.toLowerCase().indexOf(inputValue) >= 0 || option.label.toLowerCase().indexOf(inputValue) >= 0;
};


//select cuenta abono
const optCuentaAbo = ref([{
  value: '4212',
  label: 'Emitidas',
}, {
  value: '4213',
  label: 'Emitidas 2',
}, {
  value: '4413',
  label: 'Emitidas 3',
}, {
  value: '4030',
  label: 'Emitidas 4',
}]);

const handleChangeAbon = value => {
  console.log(`Seleccionado ${form.ctaConta}`);
};
const handleBlurAbon = () => {
  console.log('blur');
};
const handleFocusAbon = () => {
  console.log('focus');
};
const filterOptionAbon = (input, option) => {
  const inputValue = input.toLowerCase();
  return option.value.toLowerCase().indexOf(inputValue) >= 0 || option.label.toLowerCase().indexOf(inputValue) >= 0;
};

// Select Tipo de docuemnto
const optTipoDoc = ref([{
  value: '01',
  label: 'FAC',
}, {
  value: '02',
  label: 'FAC 2',
}, {
  value: '03',
  label: 'FAC 3',
}]);

const handleChangeDoc = value => {
  console.log(`Seleccionado ${form.ctaConta}`);
};
const handleBlurDoc = () => {
  console.log('blur');
};
const handleFocusDoc = () => {
  console.log('focus');
};
const filterOptionDoc = (input, option) => {
  const inputValue = input.toLowerCase();
  return option.value.toLowerCase().indexOf(inputValue) >= 0 || option.label.toLowerCase().indexOf(inputValue) >= 0;
};

// select sede
const optSede= ref([{
  value: '001',
  label: 'Tumbes',
}, {
  value: '002',
  label: 'Tumbes A',
}, {
  value: '003',
  label: 'Tumbes B',
}, {
  value: '004',
  label: 'Tumbes C',
}]);

const focusSede = () => {
  console.log('focus');
};
const handleChangeSede = value => {
  console.log(`Seleccionado ${value}`);
};


// select Moneda
const optMone = ref([{
  value: '001',
  label: 'Euro',
}, {
  value: '002',
  label: 'Soles',
}, {
  value: '003',
  label: 'Moneda A',
}, {
  value: '004',
  label: 'Moneda B',
}]);

const focusMone = () => {
  console.log('focus');
};
const handleChangeMone = value => {
  console.log(`Seleccionado ${value}`);
};


// select Tipo de operación
const optOpe = ref([{
  value: '001',
  label: 'Operación A',
}, {
  value: '002',
  label: 'Operación B',
}, {
  value: '003',
  label: 'Operación C',
}, {
  value: '004',
  label: 'Operación D',
}]);

const focusOpe = () => {
  console.log('focus');
};
const handleChangeOpe = value => {
  console.log(`Seleccionado ${value}`);
};


// select deatracción
const optDet = ref([{
  value: '001',
  label: 'Sede A',
}, {
  value: '002',
  label: 'Sede B',
}, {
  value: '003',
  label: 'Sede C',
}, {
  value: '004',
  label: 'Sede D',
}]);

const focusDet = () => {
  console.log('focus');
};
const handleChangeDet = value => {
  console.log(`Seleccionado ${value}`);
};


// select percepción
const optPer = ref([{
  value: '001',
  label: 'Sede A',
}, {
  value: '002',
  label: 'Sede B',
}, {
  value: '003',
  label: 'Sede C',
}, {
  value: '004',
  label: 'Sede D',
}]);

const focusPer = () => {
  console.log('focus');
};
const handleChangePer = value => {
  console.log(`Seleccionado ${value}`);
};



</script>
<style lang="scss" scoped>
.espacio-arriba {
  margin-top: 30px;
}

.margen-texto {
  margin-bottom: 15px;
}

.ancho {
  width: 100%;
}

.color {
  border: 2px solid rgba(0, 89, 255, 0.080);
  background-color: rgba(5, 170, 247, 0.024);
  border-radius: 10px
}

.margen-check {
  margin-bottom: 10px;
  font-weight: bold;
}

.check {
  margin-bottom: 30px;
  font-weight: bold;
}
</style>