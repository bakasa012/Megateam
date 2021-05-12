import React, { Suspense, useState } from "react";
import { renderRoutes } from "react-router-config";
import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import routes from "../../routes";

const useStyle = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  topBar: {
    zIndex: 2,
    position: "relative",
  },
  container: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: "0 0 auto",
  },
  content: {
    overflowY: "auto",
    flex: "1 1 auto",
  },
}));
interface Props {}
const Dashboard = (props: any) => {
  const { router } = props;

  const classes = useStyle();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  /**set open || close navbar */
  const handleNavBarMobileOpent = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(routes)}
        </Suspense>
      </main>
    </div>
  );
};

export default Dashboard;
