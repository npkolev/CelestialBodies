import { FC } from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Typography
} from "@material-ui/core";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { ListData } from "../interfaces/types";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        maxWidth: 345,
        margin: '1rem',
        cursor: 'default'
    },
    media: {
        height: 140,
      },
  }),
);

const ResultsList: FC<ListData> = ({data}) => {
    const classes = useStyles();
    const {bodies, count, loading} = data;
    
    if(loading) return <CircularProgress />

    return (
        <>
        <Box mt={1} display='flex' justifyContent="center" flexWrap="wrap">
        {bodies.length ? bodies.map((planet: any) => {
          return (
          <Card className={classes.root} key={planet._id}>
            <CardActionArea disableRipple>
              <CardMedia
                className={classes.media}
                image={planet.img}
                title={planet.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {planet.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {`Planet age: ${planet.age}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {`Mass in kg: ${planet.mass}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>)
        }): <Typography variant='h5'>Sorry, no results found</Typography>}
        </Box>
        <Typography variant='subtitle1' gutterBottom >{`Total: ${count}`}</Typography>
        </>
    );
}

export default ResultsList;
