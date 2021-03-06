import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../image-results/ImageResutls';

class Search extends Component {
state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '10659375-0adc3d99e35d93e197c8a31f0',
    images: []
}

onTextChange = e => {
    const val = e.target.value;
    this.setState({[e.target.name]: val}, () => {
        if(val === '') {
            this.setState({images: []});
        } else {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then(res => this.setState({ images: res.data.hits }))
            .catch(err => console.log(err));
        }
        
    });
};

onAmountChange = (e, index, value) => this.setState({ amount: value })

    render () {
        console.log(this.state.images)

        const styles = {
            floatingLabelStyle: {
                color: '#FF9800',
              },
              floatingLabelFocusStyle: {
                color: '#FF9800',
              },
              underlineStyle: {
                borderColor: '#FF9800',
              },
        }
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search For Images..."
                    fullWidth={true}
                    style={{padding: 5}}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineFocusStyle={styles.underlineStyle}
                />
                <br/>
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    style={{padding: 5}}>
                <MenuItem value={5} primaryText="5" />
                <MenuItem value={10} primaryText="10" />
                <MenuItem value={15} primaryText="15" />
                <MenuItem value={30} primaryText="30" />
                <MenuItem value={60} primaryText="60" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) : null}
            </div>
        )
    };
};

export default Search;