import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './screens/Landing Page/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes'

const App = () => {
  return (
    <BrowserRouter>
    
      <Header />
      <main>
      
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/mynotes">
          <MyNotes />
        </Route>
      </Switch>
       
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
