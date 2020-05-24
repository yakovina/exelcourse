import './scss/index.scss'
import {Excel} from '@/components/excel/Excel';
import {Header} from '@/components/header/Header';
import {ToolBar} from '@/components/toolbar/ToolBar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';

const excel = new Excel('#app', {
  components: [Header, ToolBar, Formula, Table]
})

excel.render()
