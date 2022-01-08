import React from 'react';
import { connect } from "react-redux";
import {Line, Bar, Pie} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import { Link } from 'react-router-dom'

import { fetchUsers } from '../redux/users'

import { Breadcrumb, BreadcrumbItem, Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, Button, Image } from "reactstrap"

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
        if (age >= 88)
          agesObj["88-100"] += 1;
        else if (age >= 70)
          agesObj["70-87"] += 1;
        else if (age >= 51)
          agesObj["51-69"] += 1;
        else if (age >= 35)
          agesObj["35-50"] += 1;
        else if (age >= 18)
          agesObj["18-34"] += 1;
        else if (age >= 0)
          agesObj["0-17"] += 1;
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
          backgroundColor: ['rgb(255,173,0)', 'rgb(225, 40, 163)', 'rgb(109, 241, 216)', 'rgb(57,255,20)', 'rgb(73,14,97', 'rgb(21, 108, 219)','rgb(0,0,139)', 'rgb(124, 82, 168)', 'rgb(1, 234, 169)', 'rgb(204, 102, 0)', 'rgb(255, 153, 204)', 'rgb(15,84,65)'],
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
          label: 'Users',
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
        <div>
          <Breadcrumb listTag="div">
            <BreadcrumbItem>
              <Link to="/">
                Home
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem
              active
              tag="span"
            >
              Analytics
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="chart-box">
        <Row>
        <Col>
          <Card body className='chartcard'>
            <CardTitle tag="h2" className="chart-title">
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
                  },
                  plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 12,
                                family: "'Poppins', sans-serif"
                            },
                        }
                    },

                },
                }}
                />
            </Card>
          </Col>

          <Col>
          <Card body className='chartcard'>
            <CardTitle tag="h2" className="chart-title">
              User Age
            </CardTitle>
              <CardText className="text-center">
            </CardText>
                <Bar className="chart"
                data={ages}
                options={{
                  title:{
                    display:false,
                    text:'User age by bracket',
                    fontSize:20
                  },
                  legend:{
                    display:false,
                    position:'right'
                  },
                  }
                }
                />
            </Card>
          </Col>
        </Row>
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
