import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-feed-backs',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './feed-backs.component.html',
  styleUrls: ['./feed-backs.component.scss']
})
export class FeedBacksComponent implements OnInit {

  feedBacks: any = [
    {
      id: 1,
      title: 'Title 1',
      jobTitle: 'Job Title 1',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      title: 'Title 2',
      jobTitle: 'Job Title 2',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      title: 'Title 3',
      jobTitle: 'Job Title 3',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
    }
  ];

  responsiveOptions: any[] = [];
  pageSize = 3;
  innerWidth: any;
  products: any[] = []
 constructor(@Inject(PLATFORM_ID) private platformId: any){}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {        
    this.innerWidth = window.innerWidth;
  }
    this.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getProductsData() {
    return [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
        image: 'bamboo-watch.jpg',
        price: 65,
        jobTitle: 'Job Title 2',

      },
      {
        id: '1001',
        code: 'nvklal433',
        name: 'Black Watch',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        quantity: 61,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        jobTitle: 'Job Title 2',

      },
      {
        id: '1002',
        code: 'zz21cz3c1',
        name: 'Blue Band',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        quantity: 2,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        jobTitle: 'Job Title 2',

      },
      {
        id: '1003',
        code: '244wgerg2',
        name: 'Blue T-Shirt',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
        image: 'blue-t-shirt.jpg',
        price: 29,
        category: 'Clothing',
        quantity: 25,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        jobTitle: 'Job Title 2',

      },
      {
        id: '1004',
        code: 'h456wer53',
        name: 'Bracelet',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
        image: 'bracelet.jpg',
        price: 15,
        category: 'Accessories',
        quantity: 73,
        inventoryStatus: 'INSTOCK',
        rating: 4,
        jobTitle: 'Job Title 2',

      },
      {
        id: '1005',
        code: 'av2231fwg',
        name: 'Brown Purse',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
        image: 'brown-purse.jpg',
        price: 120,
        category: 'Accessories',
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        rating: 4,
        jobTitle: 'Job Title 2',

      },
      {
        id: '1006',
        code: 'bib36pfvm',
        name: 'Chakra Bracelet',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
        image: 'chakra-bracelet.jpg',
        price: 32,
        category: 'Accessories',
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        rating: 3,
        jobTitle: 'Job Title 2',

      },
      {
        id: '1007',
        code: 'mbvjkgip5',
        name: 'Galaxy Earrings',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet sed diam. Lorem ipsum dolor sit amet stet et justo. Lorem ipsum dolor sit amet',
        image: 'galaxy-earrings.jpg',
        price: 34,
        category: 'Accessories',
        quantity: 23,
        inventoryStatus: 'INSTOCK',
        rating: 5,
        jobTitle: 'Job Title 2',

      }
    ];
  }

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.innerWidth = window.innerWidth;
  //   if(this.innerWidth <= 750){
  //     this.pageSize = 1;
  //   }
  //   else {
  //     this.pageSize= 3
  //   }
  // }

}
