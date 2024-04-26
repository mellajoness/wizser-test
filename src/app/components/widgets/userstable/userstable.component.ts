import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrl: './userstable.component.scss'
})
export class UserstableComponent implements OnChanges{
  @Input() tableData: any;
  @Input() columns: string[] = [];
  @Input() childInput: string | undefined;

  currentPage = 1;
  itemsPerPage = 5;
  totalItems = String

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