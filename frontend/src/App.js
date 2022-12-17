import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LandingPage from './screens/Landing Page/LandingPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MyNotes from './screens/MyNotes/MyNotes'
import LoginScreen from './screens/LoginScreen/LoginScreen'
import RegisterScreen  from './screens/RegisterScreen/RegisterScreen'

const App = () => {
  return (
    <BrowserRouter>
    
      <Header />
      <main>
      
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/register">
          <RegisterScreen />
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
