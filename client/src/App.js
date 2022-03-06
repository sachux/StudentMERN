import logo from './logo.svg';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import Student from './components/showStudent/showStudent.js'
import CreateStudent from './components/createStudent/createStudent.js'
import useStyle from "./styles"

function App() {
  const classes = useStyle()
  return (
    <div className="App">
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color='inherit'>
          <Typography variant="h2" align="center">Student Create and Show</Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems='strect'>

              <Grid items xs={12} sm={7}>
                  <Student />
              </Grid>

              <Grid items xs={12} sm={7}>
                <div  className={classes.appBar} postition="static" color='inherit'>
                  <CreateStudent />
                </div>
              </Grid>
            </Grid>
          </Container>

        </Grow>

      </Container>
    </div>
  );
}

export default App;
