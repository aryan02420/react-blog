import Home from '@/pages/Home';
import NewBlog from '@/pages/NewBlog'
import NotFound from '@/pages/NotFound'
import Navbar from '@/components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/new">
              <NewBlog />
            </Route>
            <Route path="/blogs/:id">
              {/* <BlogFull /> */}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;