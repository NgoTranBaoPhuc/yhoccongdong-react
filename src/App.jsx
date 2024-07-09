
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomHeader from './assets/components/Header';
import HomePage from './assets/pages/HomePage';
import ProjectsPage from './assets/pages/ProjectsPage';
import LibraryPage from './assets/pages/LibraryPage';
import JoinPage from './assets/pages/LibraryPage';

function App() {
  return (
    <Router>
      <CustomHeader />
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/library" component={LibraryPage} />
        <Route path="/join" component={JoinPage} />

      </Switch>
    </Router>
  );
}

export default App;
