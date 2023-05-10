<template>
  <!-- editar -->

  <a-row class="row-btn">

    <!-- Formulario para editar -->
    <a-drawer title="Editar empresa" :width="520" :open="visibleE" :body-style="{ paddingBottom: '80px' }"
      :footer-style="{ textAlign: 'right' }" @close="onCloseE">
      <a-form :model="formEditar" :rules="rulesE" layout="vertical" class="row-btn">
        <a-row>
          <a-col :span="12" class="columnas">
            <a-form-item label="RUC" name="ruc">
              <a-input v-model:value="formEditar.ruc" placeholder="Ingrese el ruc" />
            </a-form-item>
          </a-col>
          <a-col :span="12" class="columnas">
            <a-form-item label="Razón Social" name="razonSocial">
              <a-input v-model:value="formEditar.razonSocial" placeholder="Ingrese la razón social" />
            </a-form-item>
          </a-col>

          <a-col :span="12" class="columnas">
            <a-form-item label="Actividad" name="rubro">
              <a-input v-model:value="formEditar.rubro" placeholder="Ingrese la actividad" />
            </a-form-item>
          </a-col>

          <a-col :span="12" class="columnas">
            <a-form-item label="Teléfono" name="telefono">
              <a-input v-model:value="formEditar.telefono" placeholder="Ingrese el teléfono" />
            </a-form-item>
          </a-col>

          <a-col :span="12" class="columnas">
            <a-form-item label="Dirección" name="direccion">
              <a-input v-model:value="formEditar.direccion" placeholder="Ingrese la dirrección" />
            </a-form-item>
          </a-col>
          <a-col :span="12" class="columnas">
            <a-form-item label="Ciudad" name="ciudad">
              <a-input v-model:value="formEditar.direccion" placeholder="Ingrese la Ciudad" />
            </a-form-item>
          </a-col>
          <a-col :span="12" class="columnas">
            <a-row>
              <a-col :span="14">
                <a-form-item label="Regimen" name="regimen">
                  <a-select v-model:value="formEditar.regimen" placeholder="Ingrese el regimen">
                    <a-select-option value="regimena">Regimen A</a-select-option>
                    <a-select-option value="regimenb">Regimen B</a-select-option>
                    <a-select-option value="regimenc">Regimen C</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col :span="5" class="margen">
                <a-input-number :min="0" :max="100" :formatter="value => `${value}%`"
                  :parser="value => value.replace('%', '')" />
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="12" class="columnas">
            <a-row>
              <a-col :span="12">
                <a-form-item label="Año inicio" name="ano">

                  <a-input-number style="width: 100%" id="inputNumber" v-model:value="formEditar.ano" :min="1"
                    :max="10" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="%Part. Trab" name="participacion">
                  <a-input-number style="width: 100%" v-model:value="formEditar.participacion" :min="0" :max="100"
                    :formatter="value => `${value}%`" :parser="value => value.replace('%', '')" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="24" class="row-btn border">
            <a-typography-title :level="5">Plan de cuentas</a-typography-title>
            <a-radio-group v-model:value="formEditar.planes" button-style="solid">
              <a-radio-button value="a">Plan Básico a 5 digitos</a-radio-button>
              <a-radio-button value="b">Plan bäsico a 7 digitos</a-radio-button>
              <a-radio-button value="c">Importar desde</a-radio-button>
            </a-radio-group>
          </a-col>
          <a-col :span="12" v-if="formEditar.planes == 'c'">
            <a-select v-model:value="valorE" label-in-value style="width: 120px" :options="opcionesE"
              @change="handleChangeE"></a-select>
          </a-col>
        </a-row>

      </a-form>
      <template #extra>
        <a-space>
          <a-button @click="onCloseE">Cancelar</a-button>
          <a-button type="primary" @click="onCloseE">Editar</a-button>
        </a-space>
      </template>
    </a-drawer>
  </a-row>

  <!-- tabla -->
  <a-table bordered :data-source="data" :columns="columns" :pagination="{ pageSize: 5 }">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'ruc'">
        <span style="color: #1890ff">RUC</span>

      </template>

    </template>

    <template #customFilterDropdown="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }">
      <div style="padding: 8px">
        <a-input ref="searchInput" :placeholder="`Buscar ${column.dataIndex}`" :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)" />
        <a-button type="primary" size="small" style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)">
          <template #icon>
            <SearchOutlined />
          </template>
          Buscar
        </a-button>
        <a-button size="small" style="width: 90px" @click="handleReset(clearFilters)">
          Reiniciar
        </a-button>
      </div>
    </template>
    <template #customFilterIcon="{ filtered }">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template #bodycell="{ text, column }">
      <span v-if="stateAsRefs.searchText && stateAsRefs.searchedColumn === column.dataIndex">
        <template v-for="(fragment, i) in text
          .toString()
          .split(new RegExp(`(?<=${stateAsRefs.searchText})|(?=${stateAsRefs.searchText})`, 'i'))">
          <mark v-if="fragment.toLowerCase() === stateAsRefs.searchText.toLowerCase()" :key="i" class="highlight">
            {{ fragment }}
          </mark>

          <template v-else>{{ fragment }}</template>
        </template>

      </span>

    </template>
    <template #bodyCell="{ column, record }">

      <template v-if="column.dataIndex === 'operation'">
        <a-row>
          <a-popconfirm v-if="data.length" title="¿Seguro de eliminar?" ok-text="Sí" cancel-text="No"
            @confirm="onDelete(record.key)">
            <a-button class="btn-margin" type="primary" danger><template #icon>
                <DeleteOutlined />
              </template> Eliminar</a-button>

          </a-popconfirm>
          <a-popconfirm v-if="data.length" title="¿Seguro de editar?" ok-text="Sí" cancel-text="No"
            @confirm="showDrawerE">
            <a-button class="btn-margin" type="primary"><template #icon>
                <EditOutlined />
              </template> Editar</a-button>
          </a-popconfirm>
        </a-row>

      </template>
    </template>
  </a-table>
</template>

<script setup>
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons-vue';
import { reactive, ref, toRefs } from 'vue';

const data = ref([{
  key: '1',
  ruc: '001',
  razonsocial: 'Importa SAC',
  rubro: 'Comercial',
  telefono: '92353573',
  direccion: 'Jr. Dirección xxxxx',
}, {
  key: '2',
  ruc: '002',
  razonsocial: 'Genios SAC',
  rubro: 'Comercial',
  telefono: '934574573',
  direccion: 'Jr. Dirección xxxxx',
}, {
  key: '3',
  ruc: '003',
  razonsocial: 'RUNA Fundarion',
  rubro: 'Fundasion',
  telefono: '95757353',
  direccion: 'Jr. Dirección xxxxx',
}, {
  key: '4',
  ruc: '004',
  razonsocial: 'Emprea A',
  rubro: 'Comercial',
  telefono: '93485327',
  direccion: 'Jr. Dirección xxxxx',
}, {
  key: '5',
  ruc: '005',
  razonsocial: 'Emprea B',
  rubro: 'Comercial',
  telefono: '93485327',
  direccion: 'Jr. Dirección xxxxx',
}, {
  key: '6',
  ruc: '004',
  razonsocial: 'Emprea C',
  rubro: 'Comercial',
  telefono: '93485327',
  direccion: 'Jr. Dirección xxxxx',
}, {
  key: '7',
  ruc: '004',
  razonsocial: 'Emprea D',
  rubro: 'Comercial',
  telefono: '93485327',
  direccion: 'Jr. Dirección xxxxx',
}]);


const state = reactive({
  searchText: '',
  searchedColumn: '',
  selectedRowKeys: [],

  loading: false,
});
const searchInput = ref();
const columns = [{
  title: 'ruc',
  dataIndex: 'ruc',
  key: 'ruc',
  customFilterDropdown: true,
  onFilter: (value, record) => record.ruc.toString().toLowerCase().includes(value.toLowerCase()),
  onFilterDropdownOpenChange: visible => {
    if (visible) {
      setTimeout(() => {
        searchInput.value.focus();
      }, 100);
    }
  },
}, {
  title: 'Razón social',
  dataIndex: 'razonsocial',
  key: 'razonsocial',
  customFilterDropdown: true,
  onFilter: (value, record) => record.razonsocial.toString().toLowerCase().includes(value.toLowerCase()),
  onFilterDropdownOpenChange: visible => {
    if (visible) {
      setTimeout(() => {
        searchInput.value.focus();
      }, 100);
    }
  },
}, {
  title: 'Rubro',
  dataIndex: 'rubro',
  key: 'rubro',
}, {
  title: 'Teléfono',
  dataIndex: 'telefono',
  key: 'telefono',
}, {
  title: 'Dirección',
  dataIndex: 'direccion',
  key: 'direccion',
}, {
  title: 'Operaciones',
  dataIndex: 'operation',
}];
const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  state.searchText = selectedKeys[0];
  state.searchedColumn = dataIndex;
};
const handleReset = clearFilters => {
  clearFilters({
    confirm: true,
  });
  state.searchText = '';
};

const stateAsRefs = toRefs(state)

const onDelete = key => {
  data.value = data.value.filter(item => item.key !== key);

};


// ----------------------editar



// Objeto reactivo que va a capturar los campos en el formulario
const formEditar = reactive({
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
const rulesE = {
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

const visibleE = ref(false);
// Mostrar crear cuenta
const showDrawerE = () => {
  visibleE.value = true;
};
// Cerrar crear cuenta
const onCloseE = () => {
  visibleE.value = false;
};
// select

const opcionesE = ref([{
  value: 'opciona',
  label: 'Opción A',
}, {
  value: 'opcionb',
  label: 'Opción B',
}]);
const handleChangeE = value => {
  console.log(value); // { key: "lucy", label: "Lucy (101)" }
};

const valorE = ref('Seleccione');


</script>
<style lang="scss" scoped>
.btn-margin {
  margin-right: 15px;

}

.row-btn {
  margin-bottom: 20px;
}


.btn-margin {
  margin-right: 15px;

}

.margen {
    margin-top: 30px;
}

.columnas {
  padding: 0 15px 0 0;
}

.border {
  border-top: 2px solid rgba(5, 63, 117, 0.308);
  padding-top: 10px;
}
</style>