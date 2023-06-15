import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function OverviewCard({ id, title, date_for_gig, convertDateFormat }) {

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_GIG',
      payload: id
    });
};

  return (

    <Card variant="outlined" sx={{
        border: '2.5px solid black',
        maxWidth: { xs: 300, sm: 400, md: 500 },
        minWidth: 300,
        margin: 'auto',
        marginBottom: '1rem'
    }}>
        <CardContent>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h5">{convertDateFormat(date_for_gig)}</Typography>
            {/* Other card content */}
            <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
            </Button>
        </CardContent>
    </Card>

  );
}

export default OverviewCard;