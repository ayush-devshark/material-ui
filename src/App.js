import React from 'react';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
    Button,
} from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function App() {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm'>
                        <Typography
                            variant='h2'
                            align='center'
                            color='textPrimary'
                            gutterBottom
                        >
                            Photo Album
                        </Typography>
                        <Typography
                            variant='h5'
                            align='center'
                            color='textSecondary'
                            paragraph
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione, est recusandae! Impedit nam,
                            voluptates soluta assumenda ullam minima beatae,
                            error consequuntur, atque quas veniam? Quod,
                            laboriosam nesciunt? Consequatur, alias incidunt.
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See My Photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {array.map(cardNum => (
                            <Grid item key={cardNum} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image='https://source.unsplash.com/random'
                                        title='Image title'
                                    />
                                    <CardContent
                                        className={classes.cardContent}
                                    >
                                        <Typography gutterBottom variant='h5'>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card, you can use
                                            this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>
                                            View
                                        </Button>
                                        <Button size='small' color='primary'>
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant='subtitle1'
                    align='center'
                    color='textSecondary'
                >
                    Something to give a footer purpose
                </Typography>
            </footer>
        </>
    );
}

export default App;
