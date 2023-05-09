<template>
    <!-- tabla con los datos -->
    <a-table bordered :data-source="data" :columns="columns" :pagination="{ pageSize: 5 }">
        <template #headerCell="{ column }">
            <template v-if="column.key === 'codigo'">
                <span style="color: #1890ff">Código</span>
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
            <!-- Operaciones -->
            <template v-if="column.dataIndex === 'operation'">
                <a-row>
                    <a-popconfirm v-if="data.length" title="¿Seguro de eliminar?" ok-text="Sí" cancel-text="No"
                        @confirm="onDelete(record.key)">
                        <a-button class="btn-margin" type="danger"><template #icon>
                                <DeleteOutlined />
                            </template> Eliminar</a-button>

                    </a-popconfirm>
                    <a-popconfirm v-if="data.length" title="¿Seguro de editar?" ok-text="Sí" cancel-text="No"
                        @confirm="$emit('button-clicked')">
                        <a-button class="btn-margin" type="primary"><template #icon>
                                <EditOutlined />
                            </template> Editar</a-button>
                    </a-popconfirm>
                </a-row>

            </template>
        </template>
        <p>{{ message }}</p>
    </a-table>
</template>

<script setup>
import { SearchOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons-vue';
import { reactive, ref, toRefs } from 'vue';



//tabla con los datos
const data = ref([{
    key: '1',
    codigo: '001',
    cuentacontable: 'Cajan A',
    columnaa: '32',
    columnab: 'Columna B',
}, {
    key: '2',
    codigo: '002',
    cuentacontable: 'Caja chica',
    columnaa: '42',
    columnab: 'Columna B',
}, {
    key: '3',
    codigo: '003',
    cuentacontable: 'Efectivo y equivalentes de efectivo',
    columnaa: '32',
    columnab: 'Columna B',
}, {
    key: '4',
    codigo: '004',
    cuentacontable: 'Caja D',
    columnaa: '32',
    columnab: 'Columna B',
}, {
    key: '5',
    codigo: '004',
    cuentacontable: 'Caja D',
    columnaa: '32',
    columnab: 'Columna B',
}, {
    key: '6',
    codigo: '004',
    cuentacontable: 'Caja D',
    columnaa: '32',
    columnab: 'Columna B',
}, {
    key: '7',
    codigo: '004',
    cuentacontable: 'Caja D',
    columnaa: '32',
    columnab: 'Columna B',
}]);

const state = reactive({
    searchText: '',
    searchedColumn: '',
    selectedRowKeys: [],

    loading: false,
});
const searchInput = ref();
const columns = [{
    title: 'codigo',
    dataIndex: 'codigo',
    key: 'codigo',
    customFilterDropdown: true,
    onFilter: (value, record) => record.codigo.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
        if (visible) {
            setTimeout(() => {
                searchInput.value.focus();
            }, 100);
        }
    },
}, {
    title: 'Cuenta Contable',
    dataIndex: 'cuentacontable',
    key: 'cuentacontable',
    customFilterDropdown: true,
    onFilter: (value, record) => record.cuentacontable.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
        if (visible) {
            setTimeout(() => {
                searchInput.value.focus();
            }, 100);
        }
    },
}, {
    title: 'Columna A',
    dataIndex: 'columnaa',
    key: 'columnaa',
}, {
    title: 'Columna B',
    dataIndex: 'columnab',
    key: 'columnab',
}, {
    title: 'Operaciones',
    dataIndex: 'operation',
}];

//Buscar
const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    state.searchText = selectedKeys[0];
    state.searchedColumn = dataIndex;
};

//reiniciar
const handleReset = clearFilters => {
    clearFilters({
        confirm: true,
    });
    state.searchText = '';
};

const stateAsRefs = toRefs(state)

//Eliminar
const onDelete = key => {
    data.value = data.value.filter(item => item.key !== key);

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
</style>