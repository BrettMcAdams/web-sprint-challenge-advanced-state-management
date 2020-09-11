import React, { useEffect } from "react";
import "./App.css";
import SmurfCards from './SmurfCards'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions'
import SmurfForm from "./SmurfForm";


function App({ fetchSmurfs, loadingSmurfs, errorMessage }) {

  useEffect(() => {
    fetchSmurfs();
  }, [])

  return (
    <div className="App">
      <h1>SMURFS!</h1>
      <SmurfForm />
      {!loadingSmurfs ? <SmurfCards /> : <div>... Fetching characters</div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );

}

function mapStateToProps(state) {
  return {
    loadingSmurfs: state.loadingSmurfs,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
