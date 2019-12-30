import React, { Component } from "react"
// add any needed imports here
import { connect } from "react-redux"
class Users extends Component {
  render() {
    console.log(this.props.userCount)
    let users = this.props.users.map((user, index) => {
      return (
        <li user={user.username} key={index}>
          {user.username}
        </li>
      )
    })
    return (
      <div>
        <ul>
          Users!
          {users}
          <br />
          Number of Users: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users, userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
