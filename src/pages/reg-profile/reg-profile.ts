import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { AgendaPage } from '../agenda/agenda';

@Component({
  selector: 'page-reg-profile',
  templateUrl: 'reg-profile.html',
})

export class RegProfilePage {
  country = '';
  countries = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran, Islamic Republic of",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israeli Occupation (Palestine)",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Macedonia, Republic Of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory, Occupied",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French Part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch Part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Virgin Islands, British",
    "Virgin Islands, U.S.",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];
  organization='';
  organizations= [
    "Government",
    "INGO",
    "National NGO/community organization",
    "UN",
    "Institutional donor",
    "Foundation",
    "Private investor",
    "SME/startup",
    "Private sector",
    "Academic",
    "Media",
    "I am a youth representative",
    "Other",
  ];

  NLGCountry= [];
  NLGCountries=[
    "Egypt",
    "Iraq",              
    "Jordan",
    "Lebanon",
    "Syria",
    "Turkey",
    "Other non-NLG country (please specify):"
  ];
  area=[];
  areas=[
    "Employment",
    "Entrepreneurship",
    "Technical and Vocational Education and Training",
    "Higher Education",
    "Participation and Representation of Young People",
    "Gender",
  ];
  emptyFields: boolean = true;
  profile = {
    firstName: null,
    lastName: null,
    age: null,
    position: null,
    description: null,
    country:this.country,
    organization:this.organization,
    NLGCountry:this.NLGCountry,
    area:this.area,
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public FirDB:AngularFireDatabase,
    private _authProvider: AuthProvider) {
  }
  
  checkFields() {
    console.log(this.country);
    //console.log(this.NLGCountry)
    if(
      this.profile.firstName !== null &&
      this.profile.lastName !== null &&
      this.country !== '' &&
      this.organization !== ''&&
      this.profile.position !== null &&
      this.NLGCountry.length !== 0 &&
      this.area.length !== 0 &&
      this.profile.description !== null) {
        this.emptyFields = false;
        

    }
  }

  editProfileInfo() {
    console.log(this.profile);
    let uid = this._authProvider.getUserAuth().uid;
    let email = this._authProvider.getUserAuth().email;
    this.profile['uid'] = uid;
    this.profile['email'] = email;
    this.profile.country = this.country;
    this.profile.organization = this.organization;
    this.profile.NLGCountry = this.NLGCountry;
    this.profile.area= this.area;
    this.profile.firstName = this.profile.firstName.toUpperCase();
    this.profile.lastName = this.profile.lastName.toUpperCase();
    this.profile.position = this.profile.position.toUpperCase();
    this.profile.description = this.profile.description.toUpperCase();
    this.profile.country = this.profile.country.toUpperCase();  
    this.profile.organization = this.profile.organization.toUpperCase();
    //for(var i=0;i<this.profile.NLGCountry.length; i++){
      //this.profile.NLGCountry[i] = this.profile.NLGCountry[i].toUpperCase();
    //}
    //console.log(this.NLGCountry)
    this.FirDB.database.ref('users/'+uid).set(this.profile).then(() => this.navCtrl.setRoot(AgendaPage)).catch( err => console.error(err));
    console.log(this.profile)
  }
}
