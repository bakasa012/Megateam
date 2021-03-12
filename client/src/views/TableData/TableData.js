import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/styles";

import axios from 'utils/axios';
import { Page } from "components";
import { Header, Results } from "./components";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
    },
    Results: {
        marginTop: theme.spacing(3)
    }
}));

const TableData = (props) => {
    const classes = useStyles();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let mounted = true;
    
        const fetchOrders = () => {
            axios.get('/api/orders').then(response => {
                if (mounted) {
                    setOrders(response.data.orders);
                }
            });
        };
    
        fetchOrders();
    
        return () => {
            mounted = false;
        };
    }, []);
    return (
        <Page
            className={classes.root}
            title="Table Data"
        >
            <Header />
            <Results
                className={classes.Results}
                orders={orders}
            />
        </Page>
    );
};

export default TableData;