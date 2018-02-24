import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types'

class MusicFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      disabled: false,
      stayOpen: false,
      artistValue: [],
      rtl: false
    }
  }

  propTypes: {
    label: PropTypes.string,
  }

  handleSelectChange(artistValue) {
    console.log('You have selected', artistValue)
    // const { artistValue } = this.state;
    this.setState({ artistValue });
  }

  toggleRtl(e) {
    let rt1 = e.target.checkd;
    this.setState({ rt1 });
  }

  componentDidMount() {
    this.props.fetchAllArtists()
  }

  render() {
    const artistFilters = this.props.filterArtists //PULLED FROM REDUCER
    let artistLabels = []
    if (artistFilters) {
      artistFilters.forEach(artist => {
        artistLabels.push({ label: artist.name, value: artist._id })
      })
    }
    const { disabled, stayOpen, artistValue } = this.state;
    return (
      <div className="col s3">
        <Select
          closeOnSelect={false}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange.bind(this)}
          options={artistLabels}
          placeholder="Select Artists"
          removeSelected={this.state.removeSelected}
          rt1={this.state.rt1}
          simpleValue
          value={artistValue}
        />
        <button type="button" onClick={() => this.props.filterByArtists(artistValue)}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps({ filterArtists }) {
  return { filterArtists }
}

export default connect(mapStateToProps, actions)(MusicFilter);
