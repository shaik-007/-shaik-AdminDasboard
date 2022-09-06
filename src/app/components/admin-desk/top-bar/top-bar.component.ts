import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  @Output() toggleSideBarForMe : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  toggleSideBar(){
    this.toggleSideBarForMe.emit();

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

  }

}
