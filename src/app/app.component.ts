import { Component } from '@angular/core';
import { PinnedOptions } from './shared/enums/PinnedOptions';
import { TypeName } from './shared/enums/TypeName';
import { CellClicked } from './shared/models/CellClicked';
import { CellValueChanged } from './shared/models/CellValueChanged';
import { ColumnDefinition } from './shared/models/ColumnDefinition';
import { ColumnSorted } from './shared/models/ColumnSorted';
import { DefaultOptions } from './shared/models/DefaultOptions';
import { RowResized } from './shared/models/RowResized';
import { TableApi } from './shared/models/TableApi';
import { TableConfiged } from './shared/models/TableConfiged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tableApi: TableApi;

  // columnDefinitions: ColumnDefinition[] = [
  //   {
  //     propertyKey: 'sku',
  //     pinnedOption: PinnedOptions.Left,
  //   },
  //   {
  //     propertyKey: 'customer',
  //     sortable: true,
  //     width: 125,
  //     pinnedOption: PinnedOptions.Left,
  //   },
  //   {
  //     propertyKey: 'price',
  //     type: TypeName.Number,
  //     sortable: true,
  //   },
  //   {
  //     headerName: 'Weight KG',
  //     propertyKey: 'weight',
  //     type: TypeName.Number,
  //     width: 100,
  //     editable: true,
  //   },
  //   {
  //     headerName: 'Hidden data',
  //     propertyKey: 'hidden',
  //     sortable: true,
  //     width: 125,
  //     hidden: true,
  //   },
  // ];

  columnDefinitions: ColumnDefinition[] = [
    {
      propertyKey: 'student',
      sortable: true,
      pinnedOption: PinnedOptions.Left,
      width: 100
    },
    {
      propertyKey: 'group',
      headerName: 'University gorup',
      sortable: true,
      pinnedOption: PinnedOptions.Left,
      width: 150
    },
    {
      propertyKey: 'markMath',
      headerName: 'Math',
      type: TypeName.Number,
      sortable: true,
    },
    {
      propertyKey: 'markProgramming',
      headerName: 'Programming',
      type: TypeName.Number,
      sortable: true,
      width: 150
    },
    {
      propertyKey: 'markPhilosophy',
      headerName: 'Philosophy',
      type: TypeName.Number,
      sortable: true,
      width: 120
    },
    {
      propertyKey: 'average',
      headerName: 'Mark',
      type: TypeName.Number,
      pinnedOption: PinnedOptions.Right,
      sortable: true,
      editable: true
    },
    {
      headerName: 'Hidden data',
      propertyKey: 'hidden',
      sortable: true,
      width: 125,
      hidden: true,
    },
  ];

  rowData: any[] = [
    {
      student: 'Ben Yurii',
      group: 'AMi-45',
      markMath: 80,
      markProgramming: 75,
      markPhilosophy: 91,
      average: 81,
      hidden: 'pa$$word1',
    },
    {
      student: 'Serdiuk Nazar',
      group: 'AMi-32',
      markMath: 75,
      markProgramming: 100,
      markPhilosophy: 55,
      average: 55,
      hidden: 'pa$$word2',
    },
    {
      student: 'Libik Oleksandr',
      group: 'AMi-21',
      markMath: 100,
      markProgramming: 90,
      markPhilosophy: 85,
      average: 90,
      hidden: 'pa$$word3',
    },
    {
      student: 'Riabii Oleksii',
      group: 'AMi-11',
      markMath: 54,
      markProgramming: 88,
      markPhilosophy: 67,
      average: 68,
      hidden: 'pa$$word4',
    },
  ];


  // rowData: any[] = [
  //   {
  //     sku: 'KA777',
  //     weight: 700,
  //     price: 450.2,
  //     customer: 'Julie Robert',
  //     hidden: 'pa$$word1',
  //   },
  //   {
  //     sku: 'KA1044',
  //     weight: 10,
  //     price: 5,
  //     customer: 'Bob Lee Swagger',
  //     hidden: 'pa$$word2',
  //   },
  //   {
  //     sku: 'KA490',
  //     weight: 20,
  //     price: 100,
  //     customer: 'Oleksa Solotov',
  //     hidden: 'pa$$word3',
  //   },
  //   {
  //     sku: 'KA144',
  //     weight: 12,
  //     price: 540,
  //     customer: 'Nadine Memphis',
  //     hidden: 'pa$$word4',
  //   },
  // ];

  defaultOptions: DefaultOptions = {
    resizable: false,
  };

  onTableReady(event: TableConfiged) {
    this.tableApi = new TableApi(event.rowData, event.columnDefinitions);
  }

  onCellValueChanged(event: CellValueChanged) {
    console.log('cell value changed', event);
  }

  onCellClicked(event: CellClicked) {
    console.log('cell clicked', event);
  }

  onRowResized(event: RowResized) {
    console.log('row resized', event);
  }

  onColumnSorted(event: ColumnSorted) {
    console.log('column sorted', event);
  }

  exportToCsv() {
    const fileName = 'ProfitData';
    this.tableApi.exportDataToCsv(fileName);
  }
}
