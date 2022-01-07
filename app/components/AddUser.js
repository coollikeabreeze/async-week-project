import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import usersReducer, { addUser } from '../redux/users';

import history from '../history'
//const history = createBrowserHistory();

import {
  Breadcrumb, BreadcrumbItem, Button, Col, Form, FormGroup, FormText, FormFeedback, Label, Input, Select, Row
} from "reactstrap";

const countries = [
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
  "Bolivia (Plurinational State of)",
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
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Cocos (Keeling) Islands",
  "Colombia",
  "Comoros",
  "Congo (the Democratic Republic of the)",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czech Republic",
  "Côte d'Ivoire",
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
  "Eswatini",
  "Ethiopia",
  "Falkland Islands (the) [Malvinas]",
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
  "Holy See",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
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
  "Micronesia (Federated States of)",
  "Moldova (the Republic of)",
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
  "Palestine, State of",
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
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation (the)",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin (French part)",
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
  "Sint Maarten (Dutch part)",
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
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan (Province of China)",
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
  "United States Minor Outlying Islands",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela (Bolivarian Republic of)",
  "Viet Nam",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

const ages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
  86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101
]


export class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      username: "",
      email: "",
      country: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    for (let key in this.state) {
      if (!this.state[key]) {
        alert("All fields are required.");
      }
    }

    const emails = this.props.users.map(user => {
      user.email
    })

    if (emails.includes(this.state.email)) {
      alert("This user already exists")
    }
    this.props.addUser({ ...this.state });
    location.reload(history.push('/users'))
  }

  render() {

    return (
      <div>
        <div>
          <Breadcrumb listTag="div">
            <BreadcrumbItem>
              <Link to="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/users">
                Users
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem
              active
              tag="span"
            >
              Add User
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

      <Form onSubmit={this.handleSubmit}>
        <h2 id='form-title'>Add New User</h2>
        <FormGroup row>
          <Label
            sm={2}
          >
            First Name
          </Label>
          <Col sm={10}>
            <Input
              name="firstName"
              type="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label
            sm={2}>
            Last Name
          </Label>
          <Col sm={10}>
            <Input
              name="lastName"
              type="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label
            for="exampleSelect"
            sm={2}
          >
            Age
          </Label>
          <Col sm={10}>
            <Input
              name="age"
              type="select"
              onChange={this.handleChange}>
              <option></option>
              {ages.map((age, idx) => {
                return (
                  <option key={idx} value={age}>
                    {age}
                  </option>
                )})
              }
            </Input>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label
            sm={2}>
            Username
          </Label>
          <Col sm={10}>
            <Input
              name="username"
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label
            for="examplePassword"
            sm={2}
          >
            Email
          </Label>
          <Col sm={10}>
            <Input
              name="email"
              placeholder="ex: email@domain.com"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label
            for="exampleSelect"
            sm={2}
          >
            Country
          </Label>
          <Col sm={10}>
            <Input
              name="country"
              type="select"
              onChange={this.handleChange}>
              <option></option>
              {countries.map((country, idx) => {
                return (
                  <option key={idx} value={country}>
                    {country}
                  </option>
                )})
              }
            </Input>
          </Col>
        </FormGroup>

        <Button>
              Submit
            </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    addUser: (added) => dispatch(addUser(added, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
