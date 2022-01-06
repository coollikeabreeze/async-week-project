import React from 'react';
import { connect } from "react-redux";
import {Line, Bar, Pie} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

import { fetchUsers } from '../redux/users'

import { Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, Button, Image } from "reactstrap"


// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

export class Analytics extends React.Component {

  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const countriesArr = this.props.users.map((user) => user.country)
    const agesArr = this.props.users.map((user) => user.age)

    function getCountries () {
      let countriesObj = {};
      countriesArr.forEach(country => {
        if (Object.keys(countriesObj).includes(country)) {
          countriesObj[country] += 1;
        } else {
          countriesObj[country] = 1;
        }
      })
      return countriesObj;
    }

    // function getAges () {
    //   let agesObj = {};
    //   agesArr.forEach(age => {
    //     if (Object.keys(agesObj).includes(age)) {
    //       agesObj[age] += 1;
    //     } else {
    //       agesObj[age] = 1;
    //     }
    //   })
    //   console.log(agesObj)
    //   return agesObj;
    // }

    function getAges () {
      let agesObj = {
        "0-17": 0,
        "18-34": 0,
        "35-50": 0,
        "51-69": 0,
        "70-87": 0,
        "88-100": 0
      };

      agesArr.forEach((age) => {
        switch (age) {
          case age >= 88:
            agesObj["88-100"] += 1;
            break;
          case age >= 70:
            agesObj["70-87"] += 1;
            break;
          case age >= 51:
            agesObj["51-69"] += 1;
            break;
          case age >= 35:
            agesObj["35-50"] += 1;
            break;
          case age >= 18:
            agesObj["18-34"] += 1;
            break;
          case age >= 0:
            agesObj["0-17"] += 1;
            break;
        }
      }
    )
    return agesObj;
  }


    const userCountries = getCountries()
    const userAges = getAges()

    const countries = {
      labels: Object.keys(userCountries),
      datasets: [
        {
          label: '# Users',
          fill: false,
          lineTension: 1,
          backgroundColor: ['rgb(255,173,0)', 'rgb(225, 40, 163)', 'rgb(109, 241, 216)', 'rgb(73,14,97', 'rgb(21, 108, 219)', 'rgb(0,0,139)', 'rgb(124, 82, 168)', 'rgb(1, 234, 169)'],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: Object.values(userCountries)
        }
      ]
    }

    const ages = {
      labels: Object.keys(userAges),
      datasets: [
        {
          label: '# Users',
          fill: false,
          lineTension: 1,
          backgroundColor: ['rgb(255,173,0)', 'rgb(225, 40, 163)', 'rgb(109, 241, 216)', 'rgb(73,14,97', 'rgb(21, 108, 219)', 'rgb(0,0,139)', 'rgb(124, 82, 168)', 'rgb(1, 234, 169)'],
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: Object.values(userAges)
        }
      ]
    }

    return (
      <div>

        <div className="chart-box">
        <Row>
        <Col>
          <Card body>
            <CardTitle tag="h2">
              User Countries
            </CardTitle>
              <CardText className="text-center">
            </CardText>
              <Pie className="chart"
                data={countries}
                options={{
                  title:{
                    display:true,
                    text:'User Countries of Origin',
                    fontSize: 20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
                />
            </Card>
          </Col>

          <Col>
          <Card body>
            <CardTitle tag="h2">
              User Age
            </CardTitle>
              <CardText className="text-center">
            </CardText>
                <Bar className="chart"
                data={ages}
                options={{
                  title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
                />
            </Card>
          </Col>
        </Row>

          {/* <Col>
            <Line
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
            />
            </Col> */}
          </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
