// src/components/Hello.tsx

import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const cssClasses = require('./UserDetail.css');

const styles = {};

function UserDetails(props: any) {debugger;
    const backgroundColor=props.selectedUser && props.selectedUser.color;
    var style = {
        backgroundColor: backgroundColor,
      };
    const { classes } = props;
   
    return (
        <div className={cssClasses.flexContainer}>
            <Card className={classes.card} style={style}>

                <CardContent>
                    <Typography variant="headline" component="h2">
                       ID :  {props.selectedUser && props.selectedUser.id}
                    </Typography> <Divider />
                    <Typography variant="headline" component="h2">
                        Name :  {props.selectedUser && props.selectedUser.name}
                    </Typography> <Divider />
                    <Typography variant="headline" component="h2">
                        YEAR :   {props.selectedUser && props.selectedUser.year}
                    </Typography> <Divider />
                    <Typography variant="headline" component="h2">
                        PANTONE :    {props.selectedUser && props.selectedUser.pantone_value}
                    </Typography>
                </CardContent>

            </Card>
        </div>

    );
}


export default withStyles(styles)(UserDetails);

