import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-search-nearest-outlet',
  templateUrl: './search-nearest-outlet.component.html',
  styleUrls: ['./search-nearest-outlet.component.scss']
})
export class SearchNearestOutletComponent implements OnInit {
  title = 'locationserviceui';
  keyword = 'name';
  nearestLocation: string;
  foundFlag: boolean;
  spinnerFlag: boolean;

  constructor(
    private location: LocationService
  ) { }

  public countries = [
    {
      id: 1,
      name: 'Stumpergasse 51, 1060 Vienna',
    },
    {
      id: 2,
      name: 'Ungargasse 17, Vienna, Austria',
    },
    {
      id: 3,
      name: 'Linzer Straße 7, Vienna, Austria',
    },
    {
      id: 4,
      name: 'Maurer Hauptplatz 7, 1230 Wien, Austria',
    },
    {
      id: 5,
      name: 'Bahnhofplatz 1, Linz, Austria',
    },
    {
      id: 6,
      name: 'Quadenstraße 5, 1200 Vienna',
    }
  ];

  ngOnInit() {
  }

  selectEvent(item) {
    // do something with selected item
    console.log(item);
    let obj = {
      address: item.name
    };
    this.spinnerFlag = true;
    setTimeout(() => {
      this.spinnerFlag = false;
      this.foundFlag = true;
    }, 1000);
    this.location.getNearestOutlet(obj).subscribe(res => {
      this.nearestLocation = res.data.loc.name;
      setTimeout(() => {
        this.foundFlag = true;
      }, 1000);
    });
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    console.log("search", search);

  }

  onFocused(e) {
    // do something
  }
}
