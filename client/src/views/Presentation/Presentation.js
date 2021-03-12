import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Page } from 'components';
import {
  Header,
  FAQ,
  PluginsSupport,
  SourceFiles,
  UserFlows
} from './components';
import userService from 'services/user.service';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Presentation = () => {
  const classes = useStyles();
  useEffect(()=>{
    userService.getListUser().then(res=>{
      console.log(1232,res)
    },
    err=>{
      console.log(1232,err);
    });
  },[])
  return (
    <Page
      className={classes.root}
      title="Presentation"
    >
      <Header />
      <UserFlows />
      <PluginsSupport />
      <SourceFiles />
      <FAQ />
    </Page>
  );
};

export default Presentation;
