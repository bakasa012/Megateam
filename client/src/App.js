import React, { Component } from 'react';
import MomentUtils from "@date-io/moment";
//material
import { ThemeProvider } from "@material-ui/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
//redux
import { connect, Provider as StoreProvider, useSelector } from "react-redux";
import store from "./store"
import { logout } from "./redux/actions/auth";
import { clearMessage } from "./redux/actions/message";
//theme
import theme from "./theme";
//router
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import { history } from "./helpers/history";
//template 
import { ScrollReset, GoogleAnalytics } from "./components";
//sass
import './assets/scss/index.scss';
//import mock api
import './mock-api';
// const session = useSelector(state=>state.session );
class App extends Component {
  constructor(props) {
    super(props);
    // this.logOut = this.logOut.bind(this);
    // this.state = {
    //   showModeratorBoard: false,
    //   showAdminBoard: false,
    //   currentUser: undefined,
    // };

    // history.listen((location) => {
    //   props.dispatch(clearMessage());
    // })
  }
  componentDidMount() {
    // const user = this.props.user;
    // if (user.user) {
    //   this.setState({
    //     currentUser: user,
    //     showModeratorBoard: user.user.roles.includes("ROLE_MODERATOR"),
    //     showAdminBoard: user.user.roles.includes("ROLE_ADMIN"),
    //   })
    // }

  }
  // logOut() {
  //   this.props.dispatch(logout());
  // }

  render() {
    return (
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Router history={history}>
              <ScrollReset />
              {/* <GoogleAnalytics/> */}
              {renderRoutes(routes)}
            </Router>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </StoreProvider>
    );
  }
}
export default App;






// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import Login from "./components/login.component";
// import Register from "./components/register.component";
// import Home from "./components/home.component";
// import Profile from "./components/profile.component";
// import BoardUser from "./components/board-user.component";
// import BoardModerator from "./components/board-moderator.component";
// import BoardAdmin from "./components/board-admin.component";

// master layout
// import MasterLayout from "./components/sidebar/layoyt-master"
// import DrawerSideBar from "./components/common/Drawer-custom"
// const { currentUser, showModeratorBoard, showAdminBoard} =this.state;

      // <DrawerSideBar/>
      // <MasterLayout/>
    //   <div className="container mt-3">
    //     <Switch>
    //       <Route exact path={["/", "/home"]} component={Home} />
    //       <Route exact path="/login" component={Login} />
    //       <Route exact path="/register" component={Register} />
    //       <Route exact path="/profile" component={Profile} />
    //       <Route path="/user" component={BoardUser} />
    //       <Route path="/mod" component={BoardModerator} />
    //       <Route path="/admin" component={BoardAdmin} />
    //     </Switch>
    //   </div>
    // </div>