import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
    return (
      <div>
        <h3>Pets Page</h3>
        <PetsList pets={this.props.pets}/>
        <Switch>
          <Route exact path="/pets/new" component={PetsNew}/>
          <Route exact path="/pets/:petId" component={PetsShow}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
