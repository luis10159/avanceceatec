<template>
  <a-row justify="center">
    <a-col>
      <a-typography-title>Empresa</a-typography-title>
    </a-col>
  </a-row>
  <crearEmpresa></crearEmpresa>

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
            <a-button class="btn-margin" type="danger"><template #icon>
                <DeleteOutlined />
              </template> Eliminar</a-button>

          </a-popconfirm>
          <a-popconfirm v-if="data.length" title="¿Seguro de editar?" ok-text="Sí" cancel-text="No" @confirm="showEditar">
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
import { SearchOutlined, PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons-vue';
import { reactive, ref, toRefs, defineAsyncComponent } from 'vue';
const crearEmpresa = defineAsyncComponent(() => import('@/modules/Empresa/components/crearEmpresa.vue'));

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
  onFilterDropdownVisibleChange: visible => {
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
  onFilterDropdownVisibleChange: visible => {
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

</script>
<style lang="scss" scoped>
.btn-margin {
  margin-right: 15px;

}
.row-btn {
  margin-bottom: 20px;
}
</style>