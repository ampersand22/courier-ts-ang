import { Component, OnInit,OnDestroy } from '@angular/core';
import {faClose,faUser,faBell,faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { ParcelService } from '../Services/parcel.service';
import {Parcel} from '../../interfaces/Parcel'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Marker } from 'src/interfaces/Marker';
import { Router } from '@angular/router';