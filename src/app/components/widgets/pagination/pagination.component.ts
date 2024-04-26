import { Component, Input, Output, EventEmitter, OnInit, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnChanges{
  @Input() totalItems: any;
  @Input() currentPage: any;
  @Input() itemsPerPage: any;
  @Output() pageChanged:EventEmitter<number>= new EventEmitter();
  totalPages=0;
  pages:number[]=[];
  active = true;
  totalPageSize: any;


  constructor() {}
  // ngOnInit(): void {
  //   if(this.totalItems)
  //     this.totalPages=Math.ceil(this.totalItems / this.itemsPerPage);
  //     this.pages=Array.from({length:this.totalPages},(_, i)=>i + 1)
  //     console.log('pages',this.pages)
  //  }  

   ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if(this.totalItems.length)
        this.totalPageSize=this.totalItems.length
        this.totalPages=Math.ceil(this.totalItems.length / this.itemsPerPage);
        this.pages=Array.from({length:this.totalPages},(_, i)=>i + 1)
        console.log('pages',this.pages)
        console.log('currentPage',this.currentPage)
        console.log('itemsPerPage',this.itemsPerPage)
    }
  }
  
    

  onPageChange(pageNumber: number): void {
    console.log(pageNumber)
    this.pageChanged.emit(pageNumber);
  }
}