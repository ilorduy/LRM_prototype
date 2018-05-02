import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './template.html',
  providers: [MenuService]
})
export class MenuComponent {

  constructor(private menuService: MenuService, private route: ActivatedRoute, private router: Router) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    // this.router.navigate(['app-lrm-report']);
  }

}
