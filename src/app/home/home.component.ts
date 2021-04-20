import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service'
import { Flight } from '../flight.model'

@Component({
  selector: 'router-outlet',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights: Flight[]

  constructor(private flightService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.flightService.getFlights()
  }

  getFlights() {

  }

}
