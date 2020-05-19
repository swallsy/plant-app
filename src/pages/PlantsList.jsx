import React, { Component } from 'react';
import ReactTable from 'react-table';
import api, { deletePlantById } from '../api';

import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`;

class PlantsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plants: [],
      columns: [],
      isLoading: false,
    }
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    // get all the plants from the server
    await api.getAllPlants().then(plants => {
      this.setState({
        plants: plants.data.data,
        isLoading: false,
      })
    })
  }

  render() {
    const plants = this.state.plants;
    const plantItems = plants.map((plant) => 
    <ul key={plant.id}>
      <li key={plant.name}>{plant.name}</li>
      <li key={plant.light}>{plant.light}</li>
      <li key={plant.zone}>{plant.zone}</li>
      <li key={plant.watered}>{plant.watered}</li>
      <li key={plant.window}>{plant.window}</li>
    </ul>
    );
    // console.log(plants);
    return (
      <Wrapper>
        {plantItems}
      </Wrapper>
    )
  }
}

export default PlantsList;
