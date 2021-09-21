import { Component, ViewChild } from '@angular/core';
import { Log } from '@angular/core/testing/src/logger';
import { MatPaginator, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  // displayedColumns = ['financialYear', 'quarterName', ];
  displayedColumns = [
    'financialYear',
    'quarterName',
    'district',
    'proposedYear',
    'suggestedUnit',
    'action',
  ];
  // instituteType: 'string', proposedYear: 'string', suggestedUnit:
  spans = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() {}

  ngOnInit() {
    console.log('dataSource:::', this.dataSource);
    this.cacheSpan('financialYear', (d) => d.financialYear);
    this.cacheSpan('quarterName', (d) => d.quarterName);
    console.log('spans', this.spans);
  }
  add(i) {
    console.log(i);
    console.log(this.getRowSpan('quarterName', i));
    console.log('this.dataSource', this.dataSource);
  
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */
  cacheSpan(key, accessor) {
    for (let i = 0; i < DATA2.length; ) {
      let currentValue = accessor(DATA2[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < DATA2.length; j++) {
        if (currentValue != accessor(DATA2[j])) {
          break;
        }

        count++;
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }

  getRowSpan(col, index) {
    return this.spans[index] && this.spans[index][col];
  }
}


const originalData2 = [
  {
    financialYear: 1945,
    quarterName: 'string',
    child: [
      {
        district: 1,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
      {
        district: 1,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
    ],
  },
  {
    financialYear: 1945,
    quarterName: 'string',
    child: [
      {
        district: 2,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
      {
        district: 2,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
    ],
  },
  {
    financialYear: 1946,
    quarterName: 'string2',
    child: [
      {
        district: 3,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
      {
        district: 3,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
    ],
  },
  {
    financialYear: 1947,
    quarterName: 'string3',
    child: [
      {
        district: 3,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
      {
        district: 3,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
    ],
  },
  {
    financialYear: 1946,
    quarterName: 'string2',
    child: [
      {
        district: 3,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
      {
        district: 3,
        instituteType: 'string',
        proposedYear: 'string',
        suggestedUnit: 0,
      },
    ],
  },
];


const DATA2 = originalData2.reduce((current, next) => {
  next.child.forEach((b) => {
    current.push({
      financialYear: next.financialYear,
      quarterName: next.quarterName,
      child: b,
    });
  });
  return current;
}, []);


console.log('final', DATA2);

const ELEMENT_DATA: any[] = DATA2;
