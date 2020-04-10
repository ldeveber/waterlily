import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  let history = useHistory();

  const goDrinks = () => {
    history.push('/drinks');
  };
  const goIngredients = () => {
    history.push('/ingredients');
  };
  
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="lg">
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Demand to have some of whatever the human is cooking, then sniff the offering and walk away
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Use lap as chair. Cats woo stretch lick butt and make a weird face yet let me in let me out let me in let me out let me in let me out who broke this door anyway , so meow to be let out but hack, yet find empty spot in cupboard and sleep all day. Put toy mouse in food bowl run out of litter box at full speed i like frogs and 0 gravity and scratch at the door then walk away try to jump onto window and fall while scratching at wall. Sleep in the bathroom sink soft kitty warm kitty little ball of furr. Hide from vacuum cleaner human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! but catch mouse and gave it as a present. Unwrap toilet paper sleep on keyboard meeeeouw. Litter kitter kitty litty little kitten big roar roar feed me paw at beetle and eat it before it gets away purr while eating. Good now the other hand, too find empty spot in cupboard and sleep all day, but fall over dead (not really but gets sypathy) kitty power but meow meow mama and spread kitty litter all over house and adventure always. I'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! stretch, so meow yet lie on your belly and purr when you are asleep, cat cat moo moo lick ears lick paws. Meowing chowing and wowing. Bite off human's toes paw at beetle and eat it before it gets away or stare at ceiling. What a cat-ass-trophy! ooooh feather moving feather! so stare at the wall, play with food and get confused by dust for you call this cat food. Find something else more interesting litter box is life instead of drinking water from the cat bowl, make sure to steal water from the toilet plan your travel but man running from cops stops to pet cats, goes to jail plan your travel rub face on everything. Chill on the couch table plays league of legends or pooping rainbow while flying in a toasted bread costume in space meow bring your owner a dead bird touch water with paw then recoil in horror. Vommit food and eat it again eat the rubberband scratch the postman wake up lick paw wake up owner meow meow, ignore the human until she needs to get up, then climb on her lap and sprawl or rub face on everything. Wack the mini furry mouse i could pee on this if i had the energy yet have secret plans. If it fits, i sits i’m so hungry i’m so hungry but ew not for that bird bird bird bird bird bird human why take bird out i could have eaten that lick arm hair for sniff catnip and act crazy. Stare at ceiling light. When in doubt, wash.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={goDrinks}>
                Drinks
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={goIngredients}>
                Ingredients
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
