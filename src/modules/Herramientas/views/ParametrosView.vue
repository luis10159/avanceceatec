<template>
  <a-row justify="center">
    <a-col>
      <a-typography-title :level="3">Administración de parámetros</a-typography-title>
    </a-col>
  </a-row>
  <!-- modal -->

  <a-modal v-model:open="open" title="Asistente de selección" @ok="handleOk" width="720px" ok-text="Aceptar"
    cancel-text="Cancelar">

    <a-row class="margen-title">
      <a-col :span="24">
        <div>
          <div style="margin-bottom: 16px">
            <a-button type="primary" :disabled="!hasSelected" :loading="state.loading" @click="start">
              Reiniciar
            </a-button>
            <span style="margin-left: 8px">
              <template v-if="hasSelected">
                {{ `Seleccionado ${state.selectedRowKeys.length} items` }}
              </template>
            </span>
          </div>
          <a-table :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
            :columns="columns" :data-source="data" :pagination="{ pageSize: 5 }" :scroll="{ x: 1000 }" />
        </div>
      </a-col>
    </a-row>

  </a-modal>

  <!-- modal2 -->

  <a-modal v-model:open="open2" title="Asistente de selección" @ok="handleOk2" width="720px" ok-text="Aceptar"
    cancel-text="Cancelar">

    <a-row class="margen-title">
      <a-col :span="24">
        <div>
          <div style="margin-bottom: 16px">
            <a-button type="primary" :disabled="!hasSelected2" :loading="state2.loading" @click="start2">
              Reiniciar
            </a-button>
            <span style="margin-left: 8px">
              <template v-if="hasSelected2">
                {{ `Seleccionado ${state2.selectedRowKeys.length} items` }}
              </template>
            </span>
          </div>
          <a-table :row-selection="{ selectedRowKeys: state2.selectedRowKeys, onChange: onSelectChange2 }"
            :columns="columns2" :data-source="data2" :pagination="{ pageSize: 5 }" :scroll="{ x: 1000 }" />
        </div>
      </a-col>
    </a-row>

  </a-modal>

  <!-- contenido -->

  <div class="card-container">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="Parametros de Cuentas">
        <a-form :model="form" :rules="rules" layout="vertical" class="row-btn">
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cuenta IGV" name="cuentaIGV">
                <a-input-number class="ancho" v-model:value="form.cuentaIGV" placeholder="Ingrese cuenta IGV" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">IGV - Cuenta propia</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cuenta ISC" name="cuentaISC">
                <a-input-number class="ancho" v-model:value="form.cuentaISC" placeholder="Ingrese la cuenta ISC" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">Impuesto Selectivo al Consumo</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cuenta IES" name="cuentaIES">
                <a-input-number class="ancho" v-model:value="form.cuentaIES" placeholder="Ingrese cuenta IES" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success"></a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Percepciones" name="percepciones">
                <a-input-number class="ancho" v-model:value="form.percepciones" placeholder="Ingrese percepciones" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">IGV - Regimen de Percepciones</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Detracciones" name="detracciones">
                <a-input-number class="ancho" v-model:value="form.detracciones" placeholder="Ingrese detracciones" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">Efectivo y equivales de efectivo</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cierre Compras" name="cierreCompras">
                <a-input-number class="ancho" v-model:value="form.cierreCompras" placeholder="Ingrese cierre compras" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">No emitidas</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cierre ventas" name="cierreVentas">
                <a-input-number class="ancho" v-model:value="form.cierreVentas" placeholder="Ingrese cierre ventas" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">Terceros</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Difer. Cambio (+)" name="diferCambioP">
                <a-input-number class="ancho" v-model:value="form.diferCambioP" placeholder="Ingrese Difer. Cambio (+)" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success"></a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Difer. Cambio (-)" name="diferCambioN">
                <a-input-number class="ancho" v-model:value="form.diferCambioN" placeholder="Ingrese Difer. Cambio (-)" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">Descuentos Procedidos por Pronto Pago</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cuenta Reten. 4ta" name="cuentaReten">
                <a-input-number class="ancho" v-model:value="form.cuentaReten" placeholder="Ingrese Cuenta Reten. 4ta" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">Impuesto a la renta</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cuenta IVAP" name="cuentaIVAP">
                <a-input-number class="ancho" v-model:value="form.cuentaIVAP" placeholder="Ingrese cierre ventas" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success"></a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cuenta Auxiliar" name="cuentaAuxiliar">
                <a-input-number class="ancho" v-model:value="form.cuentaAuxiliar" placeholder="Ingrese cuenta axiliar" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success"></a-typography-text>
            </a-col>
          </a-row>
        </a-form>
        <a-button type="primary" @click="consola">Datos en consola</a-button>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Cancelaciones Aut.">
        <a-row class="margen-cancelacion">
          <a-col :span="8">
            <a-image src="https://aliyuncdn.antdv.com/logo.png" />
          </a-col>
          <a-col :span="16" class="padding-izq">
            <a-typography-text> Las cancelaciones Automatica son movimientos que el sistema genera sin necesidad de la
              intervención del usuario. A pesar de representar un considerable ahorro de tiempo, su uso debe ser
              constantemente monitoriado por personal capacitado</a-typography-text>

          </a-col>
        </a-row>
        <a-form :model="form" :rules="rulesC" layout="vertical" class="row-btn">
          <a-row class="margen-abajo">
            <a-checkbox v-model:checked="cancelacion.checked">Cancelación automática</a-checkbox>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cta. destino Compras" name="destCompras">
                <a-input-number class="ancho" v-model:value="cancelacion.destCompras"
                  placeholder="Ingrese Cta. destino compras" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">Caja</a-typography-text>
            </a-col>
          </a-row>
          <a-row align="middle" justify="center">
            <a-col :span="5">
              <a-form-item label="Cta. destino Ventas" name="destVentas">
                <a-input-number class="ancho" v-model:value="cancelacion.destVentas"
                  placeholder="Ingrese Cta. destino Ventas" />
              </a-form-item>
            </a-col>
            <a-col :span="6" class="padding-izq">
              <a-typography-text type="success">Caja</a-typography-text>
            </a-col>
          </a-row>
        </a-form>
        <a-button type="primary" @click="pruebaC">Datos en consola</a-button>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Porcentajes, Montos y Longitudes">
        <a-form :model="form" layout="vertical" class="row-btn">
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Porcentaje IGV" name="porcIGV">
                <a-input-number class="ancho" v-model:value="porcentajes.porcIGV" :min="0" :max="100"
                  :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Porcentaje ISC" name="porcISC">
                <a-input-number class="ancho" v-model:value="porcentajes.porcISC" :min="0" :max="100"
                  :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Porcentaje Retención IGV" name="porcRIGV">
                <a-input-number class="ancho" v-model:value="porcentajes.porcISC" :min="0" :max="100"
                  :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Porcentaje Retención 4ta" name="porcR4ta">
                <a-input-number class="ancho" v-model:value="porcentajes.porcISC" :min="0" :max="100"
                  :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Valor minimo para Retención 4ta" name="ValorMinR4ta">
                <a-input-number class="ancho" v-model:value="porcentajes.ValorMinR4ta"
                  placeholder="Ingrese Cta. destino Ventas" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Remuneración minima vital" name="remuMinVi">
                <a-input-number class="ancho" v-model:value="porcentajes.remuMinVi"
                  placeholder="Ingrese Cta. destino Ventas" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Valor de la UIT (S/)" name="valorUIT">
                <a-input-number class="ancho" v-model:value="porcentajes.valorUIT"
                  placeholder="Ingrese Cta. destino Ventas" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Longitud de las series de los documentos" name="LongSerDoc">
                <a-input-number class="ancho" v-model:value="porcentajes.LongSerDoc"
                  placeholder="Ingrese Cta. destino Ventas" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item label="Longitud de los números de documentos" name="LongNumDoc">
                <a-input-number class="ancho" v-model:value="porcentajes.LongNumDoc"
                  placeholder="Ingrese Cta. destino Ventas" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" align="middle">
            <a-col :span="4">
              <a-form-item label="Docuemntos en serie" name="DocSerie">
                <a-input-number class="ancho" v-model:value="porcentajes.DocSerie"
                  placeholder="Ingrese Cta. destino Ventas" />
              </a-form-item>
            </a-col>
            <a-col :span="1">

              <a-button class="derecha" type="primary" @click="showModal"><template #icon>
                  <DropboxOutlined />
                </template></a-button>

            </a-col>
          </a-row>
          <a-row justify="center" align="middle">
            <a-col :span="4">
              <a-form-item label="Cuentas con IGV" name="DocSerie">
                <a-input-number class="ancho" v-model:value="porcentajes.cuentasIGV"
                  placeholder="Seleccione las cuentas con IGV" />
              </a-form-item>
            </a-col>
            <a-col :span="1">

              <a-button class="derecha" type="primary" @click="showModal2"><template #icon>
                  <DropboxOutlined />
                </template></a-button>

            </a-col>
          </a-row>
          <a-row justify="center" class="margen-arriba">
            <a-col :span="24">
              <a-divider>CUENTAS INCLUIDAS PARA EL CIERRE CONTABLE</a-divider>
            </a-col>

            <a-col :span="5">
              <a-form-item>
                <a-checkbox v-model:checked="checked" v-if="checked == true">Habilitado</a-checkbox>
                <a-checkbox v-model:checked="checked" v-else>Deshabilitado</a-checkbox>

              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center" class="margen-arriba2">
            <a-col :span="5">
              <a-form-item name="cuentasCierre">
                <a-input class="ancho" v-model:value="porcentajes.cuentasCierre" placeholder="entrada" />

              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">

            <a-col :span="5">
              <a-form-item label="Nro. Dig. Cierre" name="cuentasCierre">
                <a-input v-model:value="porcentajes.cuentasCierre" placeholder="entrada2" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row justify="center">
            <a-col :span="5">
              <a-form-item name="cuentasCierre">
                <a-checkbox v-model:checked="checked">Inc Reparo en Cierre</a-checkbox>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        <a-button type="primary" @click="pruebaP">Datos en consola</a-button>
      </a-tab-pane>
      <a-tab-pane key="4" tab="Apariencia">
        <a-form layout="vertical" class="row-btn">
          <a-row justify="center">
            <a-col :span="10">
              <a-form-item label="Opciones de apariencia" name="opciones">
                <a-select v-model:value="opciones" mode="multiple" style="width: 100%"
                  placeholder="Seleccione las opciones" max-tag-count="responsive" :options="options"></a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>

        <!-- imagen -->
        <a-row justify="center">
          <a-col>
            <p>Previsualización</p>
            <div class="clearfix">
              <a-upload v-model:file-list="fileList" action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                list-type="picture-card" @preview="handlePreview">
                <div v-if="fileList.length < 1">
                  <PlusOutlined />
                  <div style="margin-top: 8px">Subir imagen</div>
                </div>
              </a-upload>
              <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
                <img alt="example" style="width: 100%" :src="previewImage" />
              </a-modal>
            </div>
          </a-col>
        </a-row>

      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { DropboxOutlined, PlusOutlined } from '@ant-design/icons-vue';
const activeKey = ref('3');
// Parámetros de cuentas
const form = reactive({
  cuentaIGV: '',
  cuentaISC: '',
  cuentaIES: '',
  percepciones: '',
  detracciones: '',
  cierreCompras: '',
  cierreVentas: '',
  diferCambioP: '',
  diferCambioN: '',
  cuentaReten: '',
  cuentaIVAP: '',
  cuentaAuxiliar: '',

});
// detalle de los campos
const rules = {
  cuentaIGV: [{
    required: true,
    message: 'Ingrese la cuenta IGV',
  }],
  cuentaISC: [{
    required: true,
    message: 'Ingrese la cuenta ISC',
  }],
  cuentaIES: [{
    required: true,
    message: 'Ingrese la cuenta IES',
  }],
  percepciones: [{
    required: true,
    message: 'Ingrese las percepciones',
  }],
  detracciones: [{
    required: true,
    message: 'Ingrese las detracciones',
  }],
  cierreCompras: [{
    required: true,
    message: 'Ingrese el cierre de compras',
  }],
  cierreVentas: [{
    required: true,
    message: 'Ingrese el cierre de ventas',
  }],
  diferCambioP: [{
    required: true,
    message: 'Ingrese la Difer. Cambio (+)',
  }],
  diferCambioN: [{
    required: true,
    message: 'Ingrese la Difer. Cambio (-)',
  }],
  cuentaReten: [{
    required: true,
    message: 'Ingrese la cuenta Reten. 4ta',
  }],
  cuentaIVAP: [{
    required: true,
    message: 'Ingrese la cuenta IVAP',
  }],
  cuentaAuxiliar: [{
    required: true,
    message: 'Ingrese la cuenta Auxiliar',
  }]
};
// Pruebas - Parametros de cuentas

const consola = () => {
  console.log(form)
}

// -------------------------Cancelación
const cancelacion = reactive({
  destCompras: '',
  destVentas: '',
  checked: false,

});
const rulesC = {
  destCompras: [{
    required: true,
    message: 'Ingrese el distino de compras',
  }],
  destVentas: [{
    required: true,
    message: 'Ingrese el destino de ventas',
  }],

};
// pruebas- cancelación

const pruebaC = () => {
  console.log(cancelacion)
}


// ---------------------Porcentajes

const porcentajes = reactive({
  porcIGV: undefined,
  porcISC: undefined,
  porcRIGV: undefined,
  porcR4ta: undefined,
  ValorMinR4ta: undefined,
  remuMinVi: undefined,
  valorUIT: undefined,
  LongSerDoc: undefined,

  LongNumDoc: undefined,
  DocSerie: undefined,
  cuentasIGV: undefined,
  cuentasCierre: undefined,
  valorUIT: undefined,
  LongSerDoc: undefined,
});


// pruebas- porcentajes

const pruebaP = () => {
  console.log(porcentajes)
}


//-----------------------------Modal

const open = ref(false);
const open2 = ref(false);

const showModal = () => {
  open.value = true;
};
const showModal2 = () => {
  open2.value = true;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
const handleOk2 = (e) => {
  console.log(e);
  open2.value = false;
};
//-----------------------tabla modal

const columns = [{
  title: 'Codigo',
  dataIndex: 'codigo',
}, {
  title: 'Descripción',
  dataIndex: 'descripcion',
}, {
  title: 'Columna A',
  dataIndex: 'columnaA',
}];
const data = [];
for (let i = 0; i < 11; i++) {
  data.push({
    key: i,
    codigo: `0${i}`,
    descripcion: 'Descripción ....',
    columnaA: `Columna de la fila ${i}`,
  });
}
const state = reactive({
  selectedRowKeys: [],
  loading: false,
});
const hasSelected = computed(() => state.selectedRowKeys.length > 0);
const start = () => {
  state.loading = true;
  setTimeout(() => {
    state.loading = false;
    state.selectedRowKeys = [];
  }, 1000);
};
const onSelectChange = selectedRowKeys => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};
//-----------------------tabla modal2

const columns2 = [{
  title: 'Codigo',
  dataIndex: 'codigo',
}, {
  title: 'Descripción',
  dataIndex: 'descripcion',
}, {
  title: 'Columna A',
  dataIndex: 'columnaA',
}];
const data2 = [];
for (let i = 0; i < 11; i++) {
  data2.push({
    key: i,
    codigo: `0${i}`,
    descripcion: 'Descripción2 ....',
    columnaA: `Columna n de la fila ${i}`,
  });
}
const state2 = reactive({
  selectedRowKeys: [],
  loading: false,
});
const hasSelected2 = computed(() => state2.selectedRowKeys.length > 0);
const start2 = () => {
  state2.loading = true;
  setTimeout(() => {
    state2.loading = false;
    state2.selectedRowKeys = [];
  }, 1000);
};
const onSelectChange2 = selectedRowKeys => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state2.selectedRowKeys = selectedRowKeys;
};

// check
const checked = ref(false);

// selección multiple

const opciones = ref([])
const options = ref([]);
for (let i = 1; i < 5; i++) {
  const value = i.toString(10) + i;
  options.value.push({
    label: `Opción: ${value}`,
    value,
  });
}


// imagen pariencia

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');
const fileList = ref([{
  uid: '-1',
  name: 'image.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}]);
const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};
const handlePreview = async file => {
  if (!file.url && !file.preview) {
    file.preview = await getBase64(file.originFileObj);
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};

</script>

<style scoped>
/* imagen pariencia */

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

/* menu superior */
.card-container p {
  margin: 0;
}

.card-container>.ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container>.ant-tabs-card .ant-tabs-content>.ant-tabs-tabpane {
  padding: 16px;
  background: #fff;
}

.card-container>.ant-tabs-card>.ant-tabs-nav::before {
  display: none;
}

.card-container>.ant-tabs-card .ant-tabs-tab,
[data-theme='compact'] .card-container>.ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}

.card-container>.ant-tabs-card .ant-tabs-tab-active,
[data-theme='compact'] .card-container>.ant-tabs-card .ant-tabs-tab-active {
  background: #fff;
  border-color: #fff;
}

#components-tabs-demo-card-top .code-box-demo {
  padding: 24px;
  overflow: hidden;
  background: #f5f5f5;
}

[data-theme='compact'] .card-container>.ant-tabs-card .ant-tabs-content {
  height: 120px;
  margin-top: -8px;
}

[data-theme='dark'] .card-container>.ant-tabs-card .ant-tabs-tab {
  background: transparent;
  border-color: transparent;
}

[data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
  background: #000;
}

[data-theme='dark'] .card-container>.ant-tabs-card .ant-tabs-content>.ant-tabs-tabpane {
  background: #141414;
}

[data-theme='dark'] .card-container>.ant-tabs-card .ant-tabs-tab-active {
  background: #141414;
  border-color: #141414;
}

/* ----------------- */
.padding-izq {
  padding-left: 15px;

}

.ancho {
  width: 100%;
}

.margen-abajo {
  margin-bottom: 30px;
}

.margen-cancelacion {
  margin: 0 10vw 30px;
}

.derecha {
  margin-left: 50%;
}

.centrar-texto {
  text-align: center;
}

.margen-arriba {
  margin-top: 40px;
}

.margen-arriba2 {
  margin-top: 0;
}
</style>