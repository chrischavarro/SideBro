import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types'

class TagFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      disabled: false,
      stayOpen: false,
      tagValue: [],
      rtl: false
    }
  }

  propTypes: {
    label: PropTypes.string,
  }

  handleSelectChange(tagValue) {
    console.log('You have selected', tagValue)
    this.setState({ tagValue });
  }

  toggleRtl(e) {
    let rt1 = e.target.checkd;
    this.setState({ rt1 });
  }

  componentDidMount() {
    this.props.fetchTags()
  }

  render() {
    const tagFilters = this.props.tags // PULLED FROM REDUCER
    let tagLabels = []
    if (tagFilters) {
      tagFilters.forEach(artist => {
        tagLabels.push({ label: artist.name, value: artist._id })
      })
    }
    const { disabled, stayOpen, tagValue } = this.state;
    return (
      <div className="col s3">
        <Select
          closeOnSelect={false}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange.bind(this)}
          options={tagLabels}
          placeholder="Select Artists"
          removeSelected={this.state.removeSelected}
          rt1={this.state.rt1}
          simpleValue
          value={tagValue}
        />
        <button type="button" onClick={() => this.props.filterByTags(tagValue)}>Submit</button>
      </div>
    )
  }
}

function mapStateToProps({tags}) {
  return { tags }
}

export default connect(mapStateToProps, actions)(TagFilter);
