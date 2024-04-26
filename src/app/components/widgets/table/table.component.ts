import { Component ,Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit, OnChanges{
  @Input() tableData: any ;
  @Input() comments: any[] = [];
  @Input() childInput: string | undefined;
  totalItems = String

  currentPage = 1;
  itemsPerPage = 50;
  constructor() {
  }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.totalItems=this.tableData.length
    }
  }
  handlePageChanged(pageNumber: number): void {
    this.currentPage = pageNumber;
    // Fetch data for the new page based on pageNumber
    // Example: this.fetchData();
  }

  get paginationData() {
    const start = (this.currentPage -1) * (this.itemsPerPage)
    const end =start + this.itemsPerPage 
    return this.tableData.slice(start,end)
  }
}
