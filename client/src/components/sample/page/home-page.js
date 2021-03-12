import React, { Component } from 'react';
import Table,{Column,SortOrder } from "react-base-table";
import styled from 'styled-components'
import "react-base-table/styles.css";
import faker from "faker";
import ReactTexty from 'react-texty';
const dataGenerator = () => ({
    id: faker.random.uuid(),
    name: faker.name.findName(),
    gender: faker.random.boolean() ? 'male' : 'female',
    score: {
      math: faker.random.number(70) + 30,
    },
    birthday: faker.date.between(1995, 2005),
    attachments: faker.random.number(5),
    description: faker.lorem.sentence(),
    email: faker.internet.email(),
    country: faker.address.country(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode(),
    },
  })
  const GenderContainer = styled.div`
    background-color: ${props =>
      props.gender === 'male' ? 'lightblue' : 'pink'};
    color: white;
    border-radius: 3px;
    width: 20px;
    height: 20px;
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    text-align: center;
  `
  const Gender = ({ gender }) => (
    <GenderContainer gender={gender}>
      {gender === 'male' ? '♂' : '♀'}
    </GenderContainer>
  )
  const Score = styled.span`
    color: ${props => (props.score >= 60 ? 'green' : 'red')};
  `
  const Attachment = styled.div`
    background-color: lightgray;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 4px;
    color: gray;
  `
  const defaultData = new Array(5000)
    .fill(0)
    .map(dataGenerator)
    .sort((a, b) => (a.name > b.name ? 1 : -1))
  
  const defaultSort = { key: 'name', order: SortOrder.ASC }
class HomePage extends Component {
    state = {
        data: defaultData,
        sortBy: defaultSort,
    }
    columns = [
    {
        key: 'name',
        title: 'Name',
        dataKey: 'name',
        width: 150,
        resizable: true,
        sortable: true,
        frozen: Column.FrozenDirection.LEFT,
    },
    {
        key: 'score',
        title: 'Score',
        dataKey: 'score.math',
        width: 60,
        align: Column.Alignment.CENTER,
        sortable: false,
    },
    {
        key: 'gender',
        title: '♂♀',
        dataKey: 'gender',
        cellRenderer: ({ cellData: gender }) => <Gender gender={gender} />,
        width: 60,
        align: Column.Alignment.CENTER,
        sortable: true,
    },
    {
        key: 'birthday',
        title: 'Birthday',
        dataKey: 'birthday',
        dataGetter: ({ column, rowData }) =>
        rowData[column.dataKey].toLocaleDateString(),
        width: 100,
        align: Column.Alignment.RIGHT,
        sortable: true,
    },
    {
        key: 'attachments',
        title: 'Attachments',
        dataKey: 'attachments',
        width: 60,
        align: Column.Alignment.CENTER,
        headerRenderer: () => <Attachment>?</Attachment>,
        cellRenderer: ({ cellData }) => <Attachment>{cellData}</Attachment>,
    },
    {
        key: 'description',
        title: 'Description',
        dataKey: 'description',
        width: 200,
        resizable: true,
        sortable: true,
        cellRenderer: ({ cellData }) => <ReactTexty>{cellData}</ReactTexty>,
    },
    {
        key: 'email',
        title: 'Email',
        dataKey: 'email',
        width: 200,
        resizable: true,
        sortable: true,
    },
    {
        key: 'country',
        title: 'Country',
        dataKey: 'country',
        width: 100,
        resizable: true,
        sortable: true,
    },
    {
        key: 'address',
        title: 'Address',
        dataKey: 'address.street',
        width: 200,
        resizable: true,
    },
    {
        key: 'action',
        width: 100,
        align: Column.Alignment.CENTER,
        frozen: Column.FrozenDirection.RIGHT,
        cellRenderer: ({ rowData }) => (
        <button
            onClick={() => {
            this.setState({
                data: this.state.data.filter(x => x.id !== rowData.id),
            })
            }}
        >
            Remove
        </button>
        ),
    },
    ]
    
    onColumnSort = sortBy => {
    const order = sortBy.order === SortOrder.ASC ? 1 : -1
    const data = [...this.state.data]
    data.sort((a, b) => (a[sortBy.key] > b[sortBy.key] ? order : -order))
    this.setState({
        sortBy,
        data,
    })
    }
    render() {
        const { data, sortBy } = this.state
        return (
            <div id="content">
                <div id="content-header">
                    <h1>Dashboard</h1>
                </div> {/* #content-header */}

                <div id="content-container">
                    <div>
                        <h4 className="heading-inline">Weekly Sales Stats
                            &nbsp;&nbsp;<small>For the week of Jun 15 - Jun 22, 2011</small>
                            &nbsp;&nbsp;</h4>
                        <div className="btn-group ">
                            <button className="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown">
                            <i className="fa fa-clock-o" />  &nbsp;
                            Change Week <span className="caret" />
                            </button>
                            <ul className="dropdown-menu" role="menu">
                            <li><a href="javascript:;">Action</a></li>
                            <li><a href="javascript:;">Another action</a></li>
                            <li><a href="javascript:;">Something else here</a></li>
                            <li className="divider" />
                            <li><a href="javascript:;">Separated link</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <br />
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <a href="javascript:;" className="dashboard-stat primary">
                            <div className="visual">
                                <i className="fa fa-star" />
                            </div> {/* /.visual */}
                            <div className="details">
                                <span className="content">New Orders</span>
                                <span className="value">1,236</span>
                            </div> {/* /.details */}
                            <i className="fa fa-play-circle more" />
                            </a> {/* /.dashboard-stat */}
                        </div> {/* /.col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <a href="javascript:;" className="dashboard-stat secondary">
                            <div className="visual">
                                <i className="fa fa-shopping-cart" />
                            </div> {/* /.visual */}
                            <div className="details">
                                <span className="content">Abandoned Carts</span>
                                <span className="value">256</span>
                            </div> {/* /.details */}
                            <i className="fa fa-play-circle more" />
                            </a> {/* /.dashboard-stat */}
                        </div> {/* /.col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <a href="javascript:;" className="dashboard-stat tertiary">
                            <div className="visual">
                                <i className="fa fa-clock-o" />
                            </div> {/* /.visual */}
                            <div className="details">
                                <span className="content">Avg. Support Time</span>
                                <span className="value">4:37</span>
                            </div> {/* /.details */}
                            <i className="fa fa-play-circle more" />
                            </a> {/* /.dashboard-stat */}
                        </div> {/* /.col-md-3 */}
                        <div className="col-md-3 col-sm-6">
                            <a href="javascript:;" className="dashboard-stat">
                            <div className="visual">
                                <i className="fa fa-money" />
                            </div> {/* /.visual */}
                            <div className="details">
                                <span className="content">Total Revenue</span>
                                <span className="value">$173K</span>
                            </div> {/* /.details */}
                            <i className="fa fa-play-circle more" />
                            </a> {/* /.dashboard-stat */}
                        </div> {/* /.col-md-9 */}
                        
                        <div>
                        
                        </div>
                    </div> {/* /.row */}
                </div>

            </div>
        );
    }
}

export default HomePage;