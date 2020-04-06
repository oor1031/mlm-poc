import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBInput, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer, MDBDataTable } from "mdbreact";

import logo from './logo.png';
import SampleAppButtonLaunch from "./SampleAppButtonLaunch";
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0,
      data: {
        columns: [{
          label: 'System/Market',
          field: 'System/Market',
          sort: 'asc',
          width: 120
        }, {
          label: 'ST',
          field: 'ST',
          sort: 'asc',
          width: 150
        }, {
          label: 'TLA',
          field: 'TLA',
          sort: 'asc',
          width: 150
        }, {
          label: 'Facility Code',
          field: 'Facility Code',
          sort: 'asc',
          width: 150
        }, {
          label: 'Tier',
          field: 'Tier',
          sort: 'asc',
          width: 150
        }, {
          label: 'Site Type',
          field: 'Site Type',
          sort: 'asc',
          width: 150
        }, {
          label: 'MTC/HUB_Name',
          field: 'MTC/HUB_Name',
          sort: 'asc',
          width: 150
        }, {
          label: 'Address',
          field: 'Address',
          sort: 'asc',
          width: 150
        }],
        rows: [
          {
            "System/Market": "Orange County",
            "ST": "CA",
            "TLA": "AVJ",
            "Facility Code": "CA-ORG-AVJ",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Aliso Viejo",
            "Address": "17 Journey Street Aliso Viejo, CA 92656"
          },
          {
            "System/Market": "Orange County",
            "ST": "CA",
            "TLA": "CTA",
            "Facility Code": "CA-ORG-CTA",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Cota",
            "Address": "27 East Cota Street Santa Barbara, CA 93101"
          },
          {
            "System/Market": "Orange County",
            "ST": "CA",
            "TLA": "DNP",
            "Facility Code": "CA-ORG-DNP",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Dana Point",
            "Address": "26125 Victoria Blvd Dana Point, CA 92624"
          },
          {
            "System/Market": "Orange County",
            "ST": "CA",
            "TLA": "IRV",
            "Facility Code": "CA-ORG-IRV",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Irvine",
            "Address": "17521 Gillette Way Irvine, CA 92614"
          },
          {
            "System/Market": "Orange County",
            "ST": "CA",
            "TLA": "ORG",
            "Facility Code": "CA-ORG-ORG",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Orange",
            "Address": "9764 Handy Creek Road Orange, CA 92869"
          },
          {
            "System/Market": "Orange County",
            "ST": "CA",
            "TLA": "PAV",
            "Facility Code": "CA-ORG-PAV",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Palos Verdes",
            "Address": "43 Peninsula Center Rolling Hills Estates, CA 90274"
          },
          {
            "System/Market": "Orange County",
            "ST": "CA",
            "TLA": "RSM",
            "Facility Code": "CA-ORG-RSM",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Rancho Santa Margarita",
            "Address": "29947 Avenida De Las Banderas Rancho Santa Margarita, CA 92688"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "ALP",
            "Facility Code": "CA-SAN-ALP",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Alpine",
            "Address": "838 Tavern Road Alpine, CA 91901"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "CHU",
            "Facility Code": "CA-SAN-CHU",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Chula Vista",
            "Address": "400 Third Ave. Chula Vista, CA 91910"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "DWN",
            "Facility Code": "CA-SAN-DWN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Downtown",
            "Address": "220 Elm Street San Diego, CA 92101"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "ELC",
            "Facility Code": "CA-SAN-ELC",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "El Cajon",
            "Address": "1175 North Cuyamaca Street El Cajon, CA 92020"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "ESC",
            "Facility Code": "CA-SAN-ESC",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Escondido",
            "Address": "1942  East Valley Parkway, Escondido, CA 92025"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "FED",
            "Facility Code": "CA-SAN-FED",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Federal",
            "Address": "1441 Euclid Avenue  San Diego, CA 92105"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "OCE",
            "Facility Code": "CA-SAN-OCE",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Oceanside",
            "Address": "623 Garrison Street Oceanside, CA 92054"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "PWY",
            "Facility Code": "CA-SAN-PWY",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Poway",
            "Address": "14016 Midland Ave Poway, CA 92064"
          },
          {
            "System/Market": "San Diego",
            "ST": "CA",
            "TLA": "VST",
            "Facility Code": "CA-SAN-VST",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Vista",
            "Address": "1155 Park Center Drive Vista, CA 92083"
          },
          {
            "System/Market": "Santa Barbara",
            "ST": "CA",
            "TLA": "SAB",
            "Facility Code": "CA-SAB-SAB",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Santa Barbara",
            "Address": "22 S. Fairview Ave Goleta, CA 93117"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "AUG",
            "Facility Code": "CE-KAN-AUG",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Augusta",
            "Address": "1414 Bobbie Augusta, KS  67010"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "CFV",
            "Facility Code": "CE-KAN-CFV",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Coffeyville",
            "Address": "102 W. 11TH, Coffeyville, KS 67337"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "CHV",
            "Facility Code": "CE-KAN-CHV",
            "Tier": 4,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Cherryvale",
            "Address": "305 E. 9TH, Cherryvale, KS 67335"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "CNY",
            "Facility Code": "CE-KAN-CNY",
            "Tier": 4,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Cheney",
            "Address": "38209 W. 15th, Cheney, KS 67025"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "DBY",
            "Facility Code": "CE-KAN-DBY",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Derby",
            "Address": "310 N Water, Derby, KS 67037"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "DCY",
            "Facility Code": "CE-KAN-DCY",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Dodge City",
            "Address": "10851 W. Frontview Building C, Dodge City, KS 67801"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "ELD",
            "Facility Code": "CE-KAN-ELD",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "El Dorado",
            "Address": "101 E. 12th. St, El Dorado, KS 67042"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "FSC",
            "Facility Code": "CE-KAN-FSC",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Fort Scott",
            "Address": "1226  240th St, Fort Scott, KS 66701"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "GBD",
            "Facility Code": "CE-KAN-GBD",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Great Bend",
            "Address": "250 N. Washington, Great Bend, KS 67530"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "GDY",
            "Facility Code": "CE-KAN-GDY",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Garden City",
            "Address": "1109 College Drive, Garden City, KS 67846"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "HUT",
            "Facility Code": "CE-KAN-HUT",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Hutchinson",
            "Address": "214 West. 4th. Ave. Hutchinson, KS 67501"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "JCY",
            "Facility Code": "CE-KAN-JCY",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Junction City",
            "Address": "2323 Old US Highway 40, Junction City, KS 66441"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "JGO",
            "Facility Code": "CE-KAN-JGO",
            "Tier": 1,
            "Site Type": "Colo Backbone",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Jingo",
            "Address": "7670 W 399th St. Lacygne, KS 66040"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "KLY",
            "Facility Code": "CE-KAN-KLY",
            "Tier": 4,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Kinsley",
            "Address": "890 J Rd, Kinsley, KS 67547"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "LYN",
            "Facility Code": "CE-KAN-LYN",
            "Tier": 4,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Lyons",
            "Address": "621 W. 2nd St, Lyons, KS  67554"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "MNT",
            "Facility Code": "CE-KAN-MNT",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Manhattan",
            "Address": "1205 Hostettler Dr, Manhattan, KS  66502"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "MPN",
            "Facility Code": "CE-KAN-MPN",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "McPherson",
            "Address": "1775 East Limestone Road, McPherson, KS 67460"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "NWT",
            "Facility Code": "CE-KAN-NWT",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Newton",
            "Address": "3108 S Ridge Rd, Newton, KS 67114"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "OLA",
            "Facility Code": "CE-KAN-OLA",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Iola",
            "Address": "1541 1800 Rd, Iola, KS 66749"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "PIT",
            "Facility Code": "CE-KAN-PIT",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Pittsburg",
            "Address": "2802 N. Joplin , Pittsburg, KS 66762"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "PRT",
            "Facility Code": "CE-KAN-PRT",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Pratt",
            "Address": "105 N.E. State Rd 61, Pratt, KS 67124"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "PSN",
            "Facility Code": "CE-KAN-PSN",
            "Tier": 4,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Parsons",
            "Address": "1523 22000 Rd, Parsons, KS 67357"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "SAL",
            "Facility Code": "CE-KAN-SAL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Salina",
            "Address": "324 N 8th St, Salina, KS 67401"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "SDN",
            "Facility Code": "CE-KAN-SDN",
            "Tier": 1,
            "Site Type": "OTN",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Sedan",
            "Address": "701 Road 19, Sedan, KS 67361"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "STR",
            "Facility Code": "CE-KAN-STR",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Strotherfield",
            "Address": "22352 D Street, Strotherfield, Winfield, KS 67156."
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "TOP",
            "Facility Code": "CE-KAN-TOP",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Topeka",
            "Address": "1615 SW Washburn, Topeka, KS 66601"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "TOW",
            "Facility Code": "CE-KAN-TOW",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Towanda",
            "Address": "2500 SW River Valley Road, Towanda, KS. 67144"
          },
          {
            "System/Market": "Kansas",
            "ST": "KS",
            "TLA": "WIC",
            "Facility Code": "CE-KAN-WIC",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Wichita",
            "Address": "801 E Douglas Bldg 200 Wichita, KS 67201"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "BER",
            "Facility Code": "CE-NWA-BER",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Berryville",
            "Address": "1000 Saunders Height Rd. Berryville, AR 72616"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "BVL",
            "Facility Code": "CE-NWA-BVL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Bentonville",
            "Address": "1006 NW 11th St. Bentonville, AR 72712"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "DWR",
            "Facility Code": "CE-NWA-DWR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Rogers",
            "Address": "1302 West Dogwood St., Rogers, AR 72758"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "ERS",
            "Facility Code": "CE-NWA-ERS",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Eureka Springs",
            "Address": "1 Tower Rd. Eureka Springs, AR 72632"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "FAY",
            "Facility Code": "CE-NWA-FAY",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Fayetteville",
            "Address": "325 Williams Dr. Fayetteville, AR 72701"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "FTS",
            "Facility Code": "CE-NWA-FSM",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Fort Smith",
            "Address": "3117 State Line Road, Fort Smith, AR 72901"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "FSM",
            "Facility Code": "CE-NWA-FTS",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Fort Smith (New)",
            "Address": "3119 State Line Road, Fort Smith, AR 72901"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "HRN",
            "Facility Code": "CE-NWA-HRN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Harrison",
            "Address": "305 W. Stephenson Ave. Harrison, AR 72601"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "NWA",
            "Facility Code": "CE-NWA-NWA",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Johnson",
            "Address": "4901B S. 48th St. Springdale, AR 72762"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "SSP",
            "Facility Code": "CE-NWA-SSP",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Siloam Springs",
            "Address": "160 E. Hwy. 412 Siloam Springs, AR 72761"
          },
          {
            "System/Market": "NW Arkansas",
            "ST": "AR",
            "TLA": "VBN",
            "Facility Code": "CE-NWA-VBN",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Van Buren",
            "Address": "810 Pernot St. Van Buren, AR 72956"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "BOK",
            "Facility Code": "CE-OKC-BOK",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Bank of Oklahoma",
            "Address": "201 Robert S. Kerr Oklahoma City, OK 73102"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "CCC",
            "Facility Code": "CE-OKC-CCC",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Cox Call Center (OKC)",
            "Address": "11941 N Pennsylvania Ave. Oklahoma, OK 73120"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "CHO",
            "Facility Code": "CE-OKC-CHO",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Choctaw",
            "Address": "133 S. Triple X Rd., Choctaw, OK, 73020"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "CLH",
            "Facility Code": "CE-OKC-CLH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "County Line",
            "Address": "9000 W Memorial Rd, Oklahoma City, OK 73142"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "DSH",
            "Facility Code": "CE-OKC-DSH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Far South (aka Deep South)",
            "Address": "936 SW. 88th St.,Oklahoma City, OK, 73139"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "ELR",
            "Facility Code": "CE-OKC-ELR",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "El Reno",
            "Address": "1816 S. Shepard Ave., El Reno, OK, 73036"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "GUT",
            "Facility Code": "CE-OKC-GUT",
            "Tier": 1,
            "Site Type": "OTN",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Guthrie",
            "Address": "204 Sigma Pl., Guthrie, OK, 73044"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "ILH",
            "Facility Code": "CE-OKC-ILH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Irish Lane",
            "Address": "840 W. Irish Lane, Edmond, OK, 73003"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "MOO",
            "Facility Code": "CE-OKC-MOO",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Moore",
            "Address": "1408 Flicker Ridge, Moore, OK, 73160"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "MWC",
            "Facility Code": "CE-OKC-MWC",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Midwest City",
            "Address": "6817 Eddie Dr., Midwest City, OK, 73110"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "NCH",
            "Facility Code": "CE-OKC-NCH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "North Central",
            "Address": "2807 NW. 62nd St.,Oklahoma City, OK, 73112"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "NEH",
            "Facility Code": "CE-OKC-NEH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "North East",
            "Address": "944 W. Hefner Rd., Oklahoma City, OK, 73114"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "NOR",
            "Facility Code": "CE-OKC-NOR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Norman",
            "Address": "408 W. Hughbert, Norman, OK, 73069"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "NWH",
            "Facility Code": "CE-OKC-NWH",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "North West (OKC)",
            "Address": "9200 N Rockwell Ave., Oklahoma City, OK, 73132"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "OKC",
            "Facility Code": "CE-OKC-OKC",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Oklahoma City (OKC-Main)",
            "Address": "2312 NW 10th Street, Oklahoma City, OK, 73107"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "PAN",
            "Facility Code": "CE-OKC-PAN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Park Ave",
            "Address": "210 W. Park Ave, Oklahoma City, OK, 73102"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "SEH",
            "Facility Code": "CE-OKC-SEH",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "South East",
            "Address": "5619 S. Post Rd., Oklahoma City, OK, 73150"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "SOH",
            "Facility Code": "CE-OKC-SOH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "South (OKC)",
            "Address": "200 SW. 43rd St.,Oklahoma City, OK, 73109"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "SRH",
            "Facility Code": "CE-OKC-SRH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Sara Road",
            "Address": "612 N. Sara Rd., Oklahoma City, OK, 73127"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "WEH",
            "Facility Code": "CE-OKC-WEH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "West (OKC)",
            "Address": "21 N. Council Rd,.Oklahoma City, OK, 73127"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "WLH",
            "Facility Code": "CE-OKC-WLH",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Waterloo",
            "Address": "2655 E Waterloo Rd., Edmond, OK 73034"
          },
          {
            "System/Market": "Oklahoma",
            "ST": "OK",
            "TLA": "WLK",
            "Facility Code": "CE-OKC-WLK",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Walker Hub",
            "Address": "509 SW 59th Street, Oklahoma City, OK 73109"
          },
          {
            "System/Market": "Omaha",
            "ST": "NE",
            "TLA": "BLV",
            "Facility Code": "CE-OMA-BLV",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Bellevue",
            "Address": "9901 Linden Ave Bellevue, NE 68123"
          },
          {
            "System/Market": "Omaha",
            "ST": "NE",
            "TLA": "CBL",
            "Facility Code": "CE-OMA-CBL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Council Bluffs",
            "Address": "1729 McPherson Ave Council Bluffs, NE 51503"
          },
          {
            "System/Market": "Omaha",
            "ST": "NE",
            "TLA": "ELK",
            "Facility Code": "CE-OMA-ELK",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Elkhorn",
            "Address": "730 North 174th Street Omaha, NE 68022"
          },
          {
            "System/Market": "Omaha",
            "ST": "NE",
            "TLA": "FFH",
            "Facility Code": "CE-OMA-FFH",
            "Tier": 1,
            "Site Type": "OTN",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "50th Street Hub",
            "Address": "5014 Dodge St, Omaha, NE 68132"
          },
          {
            "System/Market": "Omaha",
            "ST": "NE",
            "TLA": "OMM",
            "Facility Code": "CE-OMA-OMM",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Omaha",
            "Address": "11505 West Dodge Road Omaha, NE 68154"
          },
          {
            "System/Market": "Omaha",
            "ST": "NE",
            "TLA": "ONA",
            "Facility Code": "CE-OMA-ONA",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "North (OM)",
            "Address": "4901 Ames Ave Omaha, NE 68104"
          },
          {
            "System/Market": "Omaha",
            "ST": "NE",
            "TLA": "SOU",
            "Facility Code": "CE-OMA-SOU",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "South (OM)",
            "Address": "4169 K Street Omaha, NE 68107"
          },
          {
            "System/Market": "Omaha",
            "ST": "NE",
            "TLA": "WES",
            "Facility Code": "CE-OMA-WES",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "West (OM)",
            "Address": "11919 Arbor Street Omaha, NE 68144"
          },
          {
            "System/Market": "Sun Valley",
            "ST": "ID",
            "TLA": "BAM",
            "Facility Code": "CE-SUN-BAM",
            "Tier": 1,
            "Site Type": "TDH",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Bald Mountain Hub",
            "Address": "Bald Mountain Ketchum ID 83340"
          },
          {
            "System/Market": "Sun Valley",
            "ST": "ID",
            "TLA": "SVI",
            "Facility Code": "CE-SUN-SVI",
            "Tier": 2,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Sun Valley",
            "Address": "811 Warm Springs Road  Ketchum, ID 83340"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "BAR",
            "Facility Code": "CE-TUL-BAR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Broken Arrow",
            "Address": "601 South 9th Street, Broken Arrow, OK, 74012"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "BRD",
            "Facility Code": "CE-TUL-BRD",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Braden",
            "Address": "9122 South Braden Ave, Tulsa, OK, 74012"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "CAT",
            "Facility Code": "CE-TUL-CAT",
            "Tier": 1,
            "Site Type": "TDH",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Catoosa",
            "Address": "1595 North 177th East Ave, Catoosa, OK, 74108"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "CLA",
            "Facility Code": "CE-TUL-CLA",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Claremore",
            "Address": "2331 Holly Rd (rear), Claremore, OK, 74017"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "CRK",
            "Facility Code": "CE-TUL-CRK",
            "Tier": 1,
            "Site Type": "TDH",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Creek",
            "Address": "4700 West 117 Hwy, Sapulpa, OK, 74066"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "DTN",
            "Facility Code": "CE-TUL-DTN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Downtown (TUL)",
            "Address": "105 West Easton Street, Tulsa, OK, 74103"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "GAR",
            "Facility Code": "CE-TUL-GAR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Garnett",
            "Address": "2115 South 120th East Avenue, Tulsa, OK, 74129"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "HAR",
            "Facility Code": "CE-TUL-HAR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Harvard",
            "Address": ""
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "IND",
            "Facility Code": "CE-TUL-IND",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Indianapolis",
            "Address": "3605 South Indianapolis Ave, Tulsa, OK, 74105"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "OWA",
            "Facility Code": "CE-TUL-OWA",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Owasso",
            "Address": "10036 North 145th East Ave, Owasso, OK, 74055"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "POC",
            "Facility Code": "CE-TUL-POC",
            "Tier": 1,
            "Site Type": "OTN",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Port of Catoosa",
            "Address": "4891 N. Hwy 167, Catoosa, OK, 74015"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "QNC",
            "Facility Code": "CE-TUL-QNC",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Quincy",
            "Address": "422 West 131 Street S., Jenks, OK, 74008"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "SAP",
            "Facility Code": "CE-TUL-SAP",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Sapulpa",
            "Address": "1815 North 97 Highway, Sapulpa, OK, 74066"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "SSH",
            "Facility Code": "CE-TUL-SSH",
            "Tier": 1,
            "Site Type": "OTN",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Sand Springs",
            "Address": "325 1/2 North McKinley Ave, Sand Springs, OK, 74063"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "TDC",
            "Facility Code": "CE-TUL-TDC",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Tulsa Data Center",
            "Address": "10920 E. 56th St S., Tulsa, OK, 74146"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "TUL",
            "Facility Code": "CE-TUL-TUL",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Tulsa",
            "Address": "6804 East 44th Street, Tulsa, OK, 74145"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "WST",
            "Facility Code": "CE-TUL-WST",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "West (TUL)",
            "Address": "6001 South 33rd West Ave, Tulsa, OK, 74107"
          },
          {
            "System/Market": "Tulsa",
            "ST": "OK",
            "TLA": "YAL",
            "Facility Code": "CE-TUL-YAL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Yale",
            "Address": "1530 N. Yale Ave, Tulsa, OK, 74115"
          },
          {
            "System/Market": "Cleveland",
            "ST": "OH",
            "TLA": "CLV",
            "Facility Code": "NE-CLE-CLV",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Cleveland",
            "Address": "12221 Plaza Drive Pama, OH 44130"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "ENF",
            "Facility Code": "NE-CON-ENF",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Enfield",
            "Address": "5 Niblick Road Enfield, CT 06082"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "GLB",
            "Facility Code": "NE-CON-GLB",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Glastonbury",
            "Address": "1000 Chestnut Hill Rd Glastonbury, CT 06033"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "GRB",
            "Facility Code": "NE-CON-GRB",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Granby",
            "Address": "257 West Granby Rd West Gandby, CT 06035"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "MAN",
            "Facility Code": "NE-CON-MAN",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Manchester",
            "Address": "170 Utopia Rd Manchester, CT 06042"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "MER",
            "Facility Code": "NE-CON-MER",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Meriden",
            "Address": "687 East Main Street Meridan, CT 06450"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "PKR",
            "Facility Code": "NE-CON-PKR",
            "Tier": 2,
            "Site Type": "Colo",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "801 Parker (CB colo)",
            "Address": "801 Parker Street Manchester, CT 06040"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "RKH",
            "Facility Code": "NE-CON-RKH",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Rocky Hill",
            "Address": "106 New Britian Ave Rocky Hill, CT 06067"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "SFD",
            "Facility Code": "NE-CON-SFD",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Stafford",
            "Address": "195 Orcuttville Rd Stafford, CT 06076"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "STF",
            "Facility Code": "NE-CON-STF",
            "Tier": 2,
            "Site Type": "Tower",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Old Stafford Tower",
            "Address": "157 Chestnut Hill Rd. (RTE-190) Stafford, CT 06076"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "STN",
            "Facility Code": "NE-CON-STN",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Southington",
            "Address": "76 Atwater Street Southington, CT 06489"
          },
          {
            "System/Market": "Connecticut",
            "ST": "CT",
            "TLA": "UNT",
            "Facility Code": "NE-CON-UNT",
            "Tier": 2,
            "Site Type": "Tower",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Union Tower",
            "Address": "107 Stickney Hill Rd Union, CT 06076"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "BUR",
            "Facility Code": "NE-RHD-BUR",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Burrillville",
            "Address": "880 Broncos Hwy Burrillville, RI 02830"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "CRN",
            "Facility Code": "NE-RHD-CRN",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Cranston",
            "Address": "113 Comstock Parkway Cranston, RI 02910"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "EXT",
            "Facility Code": "NE-RHD-EXT",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Exeter",
            "Address": "843-A Slocum Rd Exeter, RI 02822"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "LNC",
            "Facility Code": "NE-RHD-LNC",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Lincoln",
            "Address": "1322 Eddie Dowely Hwy Lincoln, RI 02865"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "PAW",
            "Facility Code": "NE-RHD-PAW",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Pawtucket",
            "Address": "630 Beverage Hill Ave. Pawtucket, RI 02861"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "PPM",
            "Facility Code": "NE-RHD-PPM",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Providence Place Mall",
            "Address": "1 Providenne Plane, Providenne, RI 02903"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "PRV",
            "Facility Code": "NE-RHD-PRV",
            "Tier": 1,
            "Site Type": "STC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Providence",
            "Address": "1081 Douglas Ave. ProvidenNE, RI 02903"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "PTH",
            "Facility Code": "NE-RHD-PTH",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Portsmouth (RI)",
            "Address": "1060 West Main Road Portsmouth, RI 02871"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "RMD",
            "Facility Code": "NE-RHD-RMD",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Richmond (RI)",
            "Address": "429 Church Street, Richmond RI 02836"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "SCT",
            "Facility Code": "NE-RHD-SCT",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Scituate",
            "Address": "946 Tunk Hill Road, Scituate RI 02857"
          },
          {
            "System/Market": "Rhode Island",
            "ST": "RI",
            "TLA": "WWK",
            "Facility Code": "NE-RHD-WWK",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "West Warwick",
            "Address": "11 JP Murphy Hwy West Warwick, RI 02893"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "BTR",
            "Facility Code": "SE-BTR-BTR",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Baton Rouge",
            "Address": "7576 Realtors Ave. Baton Rouge, LA 70806"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "DNS",
            "Facility Code": "SE-BTR-DNS",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Denham Springs",
            "Address": "609 Hatchell Ln. Denham Springs, LA 70726"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "DVL",
            "Facility Code": "SE-BTR-DVL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Donaldsonville",
            "Address": "710 Marchand Rd. Donaldsonville, LA 70346"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "ERW",
            "Facility Code": "SE-BTR-ERW",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Erwinville",
            "Address": "12347 HWY 190 W. Erwinville, LA 70767"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "GNZ",
            "Facility Code": "SE-BTR-GNZ",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Gonzales",
            "Address": "41107 HWY 621. Gonzales, LA 70737"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "LGR",
            "Facility Code": "SE-BTR-LGR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Lutcher",
            "Address": "2713 King Ave. Lutcher, LA 70071"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "NTH",
            "Facility Code": "SE-BTR-NTH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Baker",
            "Address": "16453 Plank Rd. Zachary, LA 70714"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "PLQ",
            "Facility Code": "SE-BTR-PLQ",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Plaquemine",
            "Address": "59105 Laurstin Ln. Plaquemine, LA 70764"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "SPC",
            "Facility Code": "SE-BTR-SPC",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Pecue",
            "Address": "8886 Pecue Ln. Baton Rouge, LA 70809"
          },
          {
            "System/Market": "Baton Rouge",
            "ST": "LA",
            "TLA": "STC",
            "Facility Code": "SE-BTR-STC",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "St. Charles",
            "Address": "602 St.Charles St. Baton Rouge, LA 70802"
          },
          {
            "System/Market": "Gainesville",
            "ST": "FL",
            "TLA": "GNS",
            "Facility Code": "SE-GAN-GNS",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Gainesville",
            "Address": "6020 NW 43rd Street, Gainesville, FL 32653"
          },
          {
            "System/Market": "Gainesville",
            "ST": "FL",
            "TLA": "OCL",
            "Facility Code": "SE-GAN-OCL",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Ocala",
            "Address": "2410 SW 27th Avenue,   Ocala, FL 34474"
          },
          {
            "System/Market": "Gulf Coast",
            "ST": "FL",
            "TLA": "CRV",
            "Facility Code": "SE-GCT-CRV",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Crestview",
            "Address": "5559 Old Bethel Road,  Crestview, FL 32536"
          },
          {
            "System/Market": "Gulf Coast",
            "ST": "FL",
            "TLA": "DES",
            "Facility Code": "SE-GCT-DES",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Destin",
            "Address": "1117 South Geronimo, Destin, FL 32541"
          },
          {
            "System/Market": "Gulf Coast",
            "ST": "FL",
            "TLA": "FRP",
            "Facility Code": "SE-GCT-FRP",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Freeport",
            "Address": "16911 Highway 331 S., Freeport, FL 32439"
          },
          {
            "System/Market": "Gulf Coast",
            "ST": "FL",
            "TLA": "FWB",
            "Facility Code": "SE-GCT-FWB",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Ft. Walton Beach",
            "Address": "784 Beale Road,  Fort Walton Beach, FL 32548"
          },
          {
            "System/Market": "Gulf Coast",
            "ST": "FL",
            "TLA": "NCV",
            "Facility Code": "SE-GCT-NCV",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Niceville",
            "Address": "218 North Partin Drive, Niceville, FL 32578"
          },
          {
            "System/Market": "Gulf Coast",
            "ST": "FL",
            "TLA": "PNS",
            "Facility Code": "SE-GCT-PNS",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Pensacola",
            "Address": "2120 - B West Jordan Street, Pensacola, FL 32504"
          },
          {
            "System/Market": "Lafayette",
            "ST": "LA",
            "TLA": "ABV",
            "Facility Code": "SE-LFY-ABV",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Abbeville",
            "Address": "1906 Veterans Memorial Dr. Abbeville, LA 70510"
          },
          {
            "System/Market": "Lafayette",
            "ST": "LA",
            "TLA": "CRW",
            "Facility Code": "SE-LFY-CRW",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Crowley",
            "Address": "3353 Standard Mill Rd. Crowley, LA 70526"
          },
          {
            "System/Market": "Lafayette",
            "ST": "LA",
            "TLA": "FRK",
            "Facility Code": "SE-LFY-FRK",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Franklin",
            "Address": "196 Sterling Bridge Approach Road. Franklin, LA 70538"
          },
          {
            "System/Market": "Lafayette",
            "ST": "LA",
            "TLA": "LFY",
            "Facility Code": "SE-LFY-LFY",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Lafayette",
            "Address": "105 April St. Lafayette, LA 70506"
          },
          {
            "System/Market": "Lafayette",
            "ST": "LA",
            "TLA": "NIB",
            "Facility Code": "SE-LFY-NIB",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "New Iberia",
            "Address": "1017 Progress St. New Iberia, LA 70560"
          },
          {
            "System/Market": "Lafayette",
            "ST": "LA",
            "TLA": "STM",
            "Facility Code": "SE-LFY-STM",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "St. Martinville",
            "Address": "5512 Main Hwy. Parks, LA 70582"
          },
          {
            "System/Market": "Middle Georgia",
            "ST": "GA",
            "TLA": "GRY",
            "Facility Code": "SE-MGA-GRY",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Gray",
            "Address": "2576 Old Grey Hwy Macon, GA 31201"
          },
          {
            "System/Market": "Middle Georgia",
            "ST": "GA",
            "TLA": "HLT",
            "Facility Code": "SE-MGA-HLT",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Holt",
            "Address": "260 Holt Ave Macon, GA 31201"
          },
          {
            "System/Market": "Middle Georgia",
            "ST": "GA",
            "TLA": "MCN",
            "Facility Code": "SE-MGA-MCN",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Macon",
            "Address": "6601-B Hawkinsville Road Macon, GA 31216"
          },
          {
            "System/Market": "Middle Georgia",
            "ST": "GA",
            "TLA": "WRB",
            "Facility Code": "SE-MGA-WRB",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Warner Robins",
            "Address": "99 Glenn Drive Warner Robins, GA 31088"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "ALG",
            "Facility Code": "SE-NOR-ALG",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Algiers",
            "Address": "3501 Kabel Dr. Algiers, LA 70131"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "ALN",
            "Facility Code": "SE-NOR-ALN",
            "Tier": 1,
            "Site Type": "Admin",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Airline",
            "Address": "2121 Airline Dr, Metairie, LA 70001"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "CLR",
            "Facility Code": "SE-NOR-CLR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Metairie",
            "Address": "4417 York St. Metairie, LA 70001"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "DST",
            "Facility Code": "SE-NOR-DST",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Destrehan",
            "Address": "4 Storehouse Ln. Bldg. \"B\", Destrehan, LA 70047"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "ELM",
            "Facility Code": "SE-NOR-ELM",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Elmwood",
            "Address": "340 Edwards Ave. Harahan, LA 70123"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "KNN",
            "Facility Code": "SE-NOR-KNN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Kenner",
            "Address": "2742 Phoenix St. Kenner, LA 70062"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "LPL",
            "Facility Code": "SE-NOR-LPL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Lapalco",
            "Address": "1925 Industrial Blvd. Harvey, LA 70058"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "LUL",
            "Facility Code": "SE-NOR-LUL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Luling",
            "Address": "13479 Hwy. 90 Boutte, LA 70039"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "MCY",
            "Facility Code": "SE-NOR-MCY",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Mid-City",
            "Address": "1910 - 22 Canal St. New Orleans, LA 70112"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "NOE",
            "Facility Code": "SE-NOR-NOE",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "New Orleans East",
            "Address": "11086 Chef Menteur Hwy New Orleans, LA 70127"
          },
          {
            "System/Market": "New Orleans",
            "ST": "LA",
            "TLA": "STB",
            "Facility Code": "SE-NOR-STB",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "St. Bernard",
            "Address": "7509 E. St. Bernard Hwy. Bldg \"B\" Violet, LA 70092"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "BEL",
            "Facility Code": "SW-ARZ-BEL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Bell",
            "Address": "1101 E Bell Rd Phoenix, AZ 85022"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "BEN",
            "Facility Code": "SW-ARZ-BEN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Benson",
            "Address": "290 West 5th Street Benson, AZ 85635"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "BUK",
            "Facility Code": "SW-ARZ-BUK",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Buckeye",
            "Address": "21805 W Yuma Rd Buckeye, AZ 85326"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "CHD",
            "Facility Code": "SW-ARZ-CHD",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Chandler",
            "Address": "100 N 79th St Chandler, AZ 85224"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "CSG",
            "Facility Code": "SW-ARZ-CSG",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Casa Grande",
            "Address": "Old: 122 East Cottonwood Lane Casa Grande, AZ 85222\nNew: 1395 E Colorado Loop Casa Grande, AZ 85122"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "DGL",
            "Facility Code": "SW-ARZ-DGL",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Douglas",
            "Address": "1119 F Avenue Douglas, AZ 85635"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "FRH",
            "Facility Code": "SW-ARZ-FRH",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Festival Ranch",
            "Address": ""
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "FWL",
            "Facility Code": "SW-ARZ-FWL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Fowler",
            "Address": "6610 W Van Buren Phoenix, AZ 85043"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "GVA",
            "Facility Code": "SW-ARZ-GVA",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Green Valley",
            "Address": "1910 N. La Canada Dr. Green Valley, AZ. 85614"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "JMX",
            "Facility Code": "SW-ARZ-JMX",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Jomax",
            "Address": "Lake Pleasant/Jomax  (NEW)"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "MCD",
            "Facility Code": "SW-ARZ-MCD",
            "Tier": 1,
            "Site Type": "STC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "McDowell",
            "Address": "1626 N 24th St Phoenix ,AZ 85008"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "MSA",
            "Facility Code": "SW-ARZ-MSA",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Mesa",
            "Address": "4437 E Holmes Mesa, AZ 85204"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "NSC",
            "Facility Code": "SW-ARZ-NSC",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "North Scottsdale",
            "Address": "28213 N 64th St Cave Creek, AZ 85331"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "PEO",
            "Facility Code": "SW-ARZ-PEO",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Peoria",
            "Address": "9534 W Peoria Ave Peoria, AZ  85345"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "PNL",
            "Facility Code": "SW-ARZ-PNL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Pinal County",
            "Address": "6461 N Mitchell Trail FlorenNE, AZ 85132"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "SSC",
            "Facility Code": "SW-ARZ-SSC",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "South Scottsdale",
            "Address": "9009 E Via Linda Scottsdale, AZ 85258"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "SVA",
            "Facility Code": "SW-ARZ-SVA",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Sierra Vista",
            "Address": "1026 North Ave Sierra Vista, AZ 85635"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "TAR",
            "Facility Code": "SW-ARZ-TAR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Tartesso",
            "Address": ""
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "TUC",
            "Facility Code": "SW-ARZ-TUC",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Tucson",
            "Address": "4777 East 29th Street Tucson, AZ 85711"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "VAL",
            "Facility Code": "SW-ARZ-VAL",
            "Tier": 3,
            "Site Type": "OTN",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Vail",
            "Address": "9300 S. Rita Rd. Tucson, AZ 85747"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "VRD",
            "Facility Code": "SW-ARZ-VRD",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Verrado",
            "Address": ""
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "VSA",
            "Facility Code": "SW-ARZ-VSA",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Vistancia",
            "Address": "27890 El Mirage Rd Peoria, AZ 85383"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "WCG",
            "Facility Code": "SW-ARZ-WCG",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Wickenburg",
            "Address": "200 Flying E Ranch Road Wickenburg, AZ 85390"
          },
          {
            "System/Market": "Arizona",
            "ST": "AZ",
            "TLA": "WKB",
            "Facility Code": "SW-ARZ-WKB",
            "Tier": 2,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Wickenburg",
            "Address": "1020 Wickenburg Way Wickenburg, AZ 85390"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "ANM",
            "Facility Code": "SW-ARZ-ANM",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Anthem (OTN-14)",
            "Address": "2575 Reunion , Henderson,�NV 89052"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "SPV",
            "Facility Code": "SW-ARZ-SPV",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Spring Valley (OTN-8)",
            "Address": "6685 W Flamingo Road Las Vegas, NV 89103"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "ALI",
            "Facility Code": "SW-LAS-ALI",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Aliante",
            "Address": "2770 West Ann Road Las Vegas, NV 89031"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "AMI",
            "Facility Code": "SW-LAS-AMI",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Amigo",
            "Address": "11095 Amigo Street Las Vegas, NV 89052"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "BLU",
            "Facility Code": "SW-LAS-BLU",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Blue Diamond",
            "Address": "9235 Montesory Street Las Vegas, NV 89178"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "BOC",
            "Facility Code": "SW-LAS-BOC",
            "Tier": 3,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Boulder City",
            "Address": "1000 Industrial Road Boulder City, NV 89005"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "CEN",
            "Facility Code": "SW-LAS-CEN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Central",
            "Address": "2451 Ernest May Lane Las Vegas, NV 89106"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "ERN",
            "Facility Code": "SW-LAS-ERN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Ernest May",
            "Address": "2453 Ernest May Lane Las Vegas, NV 89106"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "HEN",
            "Facility Code": "SW-LAS-HEN",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Henderson",
            "Address": "180 Pacific Center Drive Henderson NV 89074"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "OSB",
            "Facility Code": "SW-LAS-OSB",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Oso Blanca",
            "Address": "8525 Oso Blanca Road Las Vegas, NV 89149"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "TEN",
            "Facility Code": "SW-LAS-TEN",
            "Tier": 1,
            "Site Type": "STC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Tenaya",
            "Address": "3850 N. Tenaya Way Las Vegas NV 89147"
          },
          {
            "System/Market": "Las Vegas",
            "ST": "NV",
            "TLA": "VLY",
            "Facility Code": "SW-LAS-VLY",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Valley",
            "Address": "7315 Vegas Valley Las Vegas NV. 89142"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "ALX",
            "Facility Code": "VA-HRD-ALX",
            "Tier": 1,
            "Site Type": "OLT/CEC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Alexandria CEC",
            "Address": "5700 Magnolia Chase Way Virginia Beach, VA 23464"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "CHS",
            "Facility Code": "VA-HRD-CHS",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Chesapeake",
            "Address": "701 Butler St. Chesapeake, VA 23323"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "CYP",
            "Facility Code": "VA-HRD-CYP",
            "Tier": 1,
            "Site Type": "OLT/CEC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Cypress Point CEC",
            "Address": "5201 Deford Rd. Virginia Beach, VA 23462"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "FET",
            "Facility Code": "VA-HRD-FET",
            "Tier": 1,
            "Site Type": "OTN",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Fort Eustis CEC",
            "Address": "1387 Jackson Ave. Fort Eustis, VA 23604"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "GBR",
            "Facility Code": "VA-HRD-GBR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Greenbrier",
            "Address": "1964 North Battlefield Blvd. Chesapeake, VA 23324"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "GLO",
            "Facility Code": "VA-HRD-GLO",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Gloucester",
            "Address": "5950 Cranny Creek Dr. Gloucester, VA 23061"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "HCK",
            "Facility Code": "VA-HRD-HCK",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Hickory",
            "Address": "112 Hickory Rd. Chesapeake, VA 23322"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "JCC",
            "Facility Code": "VA-HRD-JCC",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "James City County",
            "Address": "112 New Quarter Rd. Williamsburg, VA 23188"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "JEF",
            "Facility Code": "VA-HRD-JEF",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Jefferson Ave",
            "Address": "5987 Jefferson Ave. Newport News, VA 23601"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "LTF",
            "Facility Code": "VA-HRD-LTF",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Lightfoot",
            "Address": "6489 Richmond Rd. Williamsburg, VA 23188"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "NKT",
            "Facility Code": "VA-HRD-NKT",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "New Kent",
            "Address": "10600 New Kent Hwy. New Kent, VA 23124"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "NRF",
            "Facility Code": "VA-HRD-NRF",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Norfolk",
            "Address": "4585 Village Ave. Norfolk, VA 23502"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "NWP",
            "Facility Code": "VA-HRD-NWP",
            "Tier": 1,
            "Site Type": "MTC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Newport News",
            "Address": "179 Louise Dr. Newport News, VA 23601"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "OAK",
            "Facility Code": "VA-HRD-OAK",
            "Tier": 1,
            "Site Type": "OLT/CEC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Oakdale CEC",
            "Address": "118 Birmingham Ave. Norfolk, VA 23503"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "OAR",
            "Facility Code": "VA-HRD-OAR",
            "Tier": 1,
            "Site Type": "OLT/CEC",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "Ocean Air CEC",
            "Address": "540 East Mariners Way Norfolk, VA 23506"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "OCN",
            "Facility Code": "VA-HRD-OCN",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Oceana",
            "Address": "2045 Virginia Beach Blvd. Virginia Beach, VA 23454"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "PRA",
            "Facility Code": "VA-HRD-PRA",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Princess Anne",
            "Address": "2346 Princess Anne Rd. Virginia Beach, VA 23456"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "PTM",
            "Facility Code": "VA-HRD-PTM",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Portsmouth (VA)",
            "Address": "1001 Virginia Ave. Portsmouth, VA 23707"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "STP",
            "Facility Code": "VA-HRD-STP",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "St Paul's",
            "Address": "125 St. Paul's Blvd. Norfolk, VA 23501"
          },
          {
            "System/Market": "Hampton Roads",
            "ST": "VA",
            "TLA": "VBC",
            "Facility Code": "VA-HRD-VBC",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Virginia Beach",
            "Address": "5200 Cleveland St. Virginia Beach, VA 23462"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "DRA",
            "Facility Code": "VA-NVA-DRA",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Dranesville",
            "Address": "11504 Leesburg Pike Great Falls, VA 22066"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "FBG",
            "Facility Code": "VA-NVA-FBG",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Fredericksburg",
            "Address": "138 Brickert St. Fredericksburg, VA 22401"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "FLK",
            "Facility Code": "VA-NVA-FLK",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Fair Lakes",
            "Address": "12805 Fair Lakes Pkwy. Fairfax, VA 22033"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "FST",
            "Facility Code": "VA-NVA-FST",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Fairfax Station",
            "Address": "9574 Gallows Rd. Burke, VA 22015"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "GCR",
            "Facility Code": "VA-NVA-GCR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Gunston",
            "Address": "8220 Fleenor Ln. Lorton, VA 22079"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "MCB",
            "Facility Code": "VA-NVA-MCB",
            "Tier": 1,
            "Site Type": "Colo",
            "Owned/ Leased": "",
            "MTC/HUB_Name": "Merrifield County Colo",
            "Address": "2917-T Eskridge Rd. Fairfax, VA 22031"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "MFD",
            "Facility Code": "VA-NVA-MFD",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Merrifield",
            "Address": "2917 Eskridge Rd. Fairfax, VA 22031"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "RHL",
            "Facility Code": "VA-NVA-RHL",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Rose Hill",
            "Address": "6410 Highland Dr. Alexandria, VA 22310"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "TCR",
            "Facility Code": "VA-NVA-TCR",
            "Tier": 1,
            "Site Type": "STC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Tysons Corner",
            "Address": "2128 Gallows Rd. Vienna, VA 22181"
          },
          {
            "System/Market": "NOVA",
            "ST": "VA",
            "TLA": "WOX",
            "Facility Code": "VA-NVA-WOX",
            "Tier": 1,
            "Site Type": "Colo",
            "Owned/ Leased": "Leased",
            "MTC/HUB_Name": "West Ox Colo",
            "Address": "4618 West Ox Rd. Fairfax, VA 22033"
          },
          {
            "System/Market": "Roanoke",
            "ST": "VA",
            "TLA": "RON",
            "Facility Code": "VA-ROA-RON",
            "Tier": 1,
            "Site Type": "MTC/RDC",
            "Owned/ Leased": "Owned",
            "MTC/HUB_Name": "Roanoke",
            "Address": "220 20th St. Roanoke, VA 24016"
          }
        ]

      }

    };
  }


  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };

  render() {
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };

    const mainStyle = {
      margin: "0 6%",
      paddingTop: "5.5rem",
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };

    return (
      <Router>
        <div className="fixed-sn navy-blue-skin">
          <MDBSideNav
            logo={logo}
            triggerOpening={this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
            mask="strong"
            fixed
          >
            <MDBInput
              type="text"
              hint="Search"
              style={{
                color: "#fff",
                padding: "0 10px 8px 30px",
                boxSizing: "border-box"
              }}
            />
            <MDBSideNavNav>
              <MDBSideNavCat
                name="Master List"
                id="submit-blog-cat"
                icon="chevron-right"
              >
                <MDBSideNavItem>EMO Programs</MDBSideNavItem>
                <MDBSideNavItem>Equipment List</MDBSideNavItem>
                <MDBSideNavItem>Cox Facilitties</MDBSideNavItem>
                <MDBSideNavItem>Colo Facilitties</MDBSideNavItem>
                <MDBSideNavItem>3rd Party Facilitties</MDBSideNavItem>
              </MDBSideNavCat>
              <MDBSideNavCat
                iconRegular
                name="POR"
                id="instruction-cat"
                icon="hand-pointer"
              >
                <MDBSideNavItem>2019</MDBSideNavItem>
                <MDBSideNavItem>2020</MDBSideNavItem>
              </MDBSideNavCat>
              <MDBSideNavItem>Regional View</MDBSideNavItem>
              <MDBSideNavItem>Detailed Phase Report</MDBSideNavItem>
              <MDBSideNavItem>Equipment Order History</MDBSideNavItem>
              <MDBSideNavItem>Risk & Issues</MDBSideNavItem>

              <MDBSideNavItem>EPS Status Report</MDBSideNavItem>
              {/* <MDBSideNavCat name="About" id="about-cat" icon="eye">
                <MDBSideNavItem>Instruction</MDBSideNavItem>
                <MDBSideNavItem>Monthly meetings</MDBSideNavItem>
              </MDBSideNavCat> */}
              {/* <MDBSideNavCat
                name="Contact me"
                id="contact-me-cat"
                icon="envelope"
              >
                <MDBSideNavItem>FAQ</MDBSideNavItem>
                <MDBSideNavItem>Write a message</MDBSideNavItem>
              </MDBSideNavCat> */}
            </MDBSideNavNav>
          </MDBSideNav>
          <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
            <MDBNavbarNav left>
              <MDBNavItem>
                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: "32px",
                    marginRight: "1em",
                    verticalAlign: "middle"
                  }}
                >
                  <MDBIcon icon="bars" color="white" size="2x" />
                </div>
              </MDBNavItem>
              {/* <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
                RePS React Material Design
              </MDBNavItem> */}
            </MDBNavbarNav>
            <MDBNavbarNav right style={specialCaseNavbarStyles}>
              <MDBNavItem active>
                <MDBNavLink to="#!">
                  <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Contact</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
                  <div className="d-none d-md-inline">Support</div>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">
                  <MDBIcon icon="user" className="d-inline-inline" />{" "}
                  <SampleAppButtonLaunch />
                </MDBNavLink>
              </MDBNavItem>
              {/* <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>*/}
            </MDBNavbarNav>
          </MDBNavbar>
          <main style={mainStyle}>
            <MDBContainer className="mt-5">
              <h2>
                Master List Management POC : Cox Facilitties
              </h2>
              <MDBDataTable className="nowrap"
                exportToCSV
                scrollX={true}
                paging
                searching
                striped
                bordered
                hovered
                small
                data={this.state.data}
              />
            </MDBContainer>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;