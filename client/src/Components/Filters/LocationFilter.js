import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types'

class LocationFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      disabled: false,
      stayOpen: false,
      locationValue: [],
      rtl: false
    }
  }

  propTypes: {
    label: PropTypes.string,
  }

  handleSelectChange(locationValue) {
    console.log('You have selected', locationValue)
    this.setState({ locationValue });
  }

  toggleRtl(e) {
    let rt1 = e.target.checkd;
    this.setState({ rt1 });
  }

  componentDidMount() {
    this.props.fetchLocations()
  }

  render() {
    const locationFilters = this.props.locations // PULLED FROM REDUCER
    let locationLabels = []
    if (locationFilters) {
      locationFilters.forEach(artist => {
        locationLabels.push({ label: artist.name, value: artist._id })
      })
    }
    const { disabled, stayOpen, locationValue } = this.state;
    return (
      <div className="col s3">
        <Select
          closeOnSelect={false}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange.bind(this)}
          options={locationLabels}
          placeholder="Select Artists"
          removeSelected={this.state.removeSelected}
          rt1={this.state.rt1}
          simpleValue
          value={locationValue}
        />
        <button type="button" onClick={() => this.props.filterByLocation(locationValue)}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations
  }
}

export default connect(mapStateToProps, actions)(LocationFilter);
