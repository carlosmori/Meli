import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProductDetails from './components/product-details/product-details'
import SearchBox from './components/search-box/search-box'
import SearchResults from './components/search-results/search-results'
import {createBrowserHistory} from 'history'
import {Provider} from 'react-redux'
import configureStore from './state/store'
import WithBreadcrumb from './hocs/withBreadcrumb'
function App() {
  const history = createBrowserHistory()

  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Router history={history}>
          <Route path="/" component={SearchBox} />
          <Route exact path="/items" component={SearchResults} />
          <Route path="/items/:id" component={ProductDetails} />
        </Router>
      </div>
    </Provider>
  )
}

export default App
