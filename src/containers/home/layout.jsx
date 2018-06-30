import React, {Component} from 'react';
import * as HomeActions from './home.actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Panel from '../../components/panel/panel';
import TableDisplay from '../../components/table-display';

class Home extends Component {
    state = {
        textValue: ''
    }

    componentDidMount(){
        this.defaultFetch();
    }

    defaultFetch= () => {
        this.props.defaultFetchUsers();
    }

    textChanged = ({target}) => {
        this.setState({textValue: target.value});
    }

    fetchUsersForEnteredText = e => {

        this
            .props
            .triggerFetch(this.state.textValue)
    }

    render() {
        return (
            <React.Fragment>
                <h1>Home</h1>
                <input type="text" onChange={this.textChanged} value={this.state.textValue}/>
                <button
                    onClick={this.fetchUsersForEnteredText}
                    disabled={!this.state.textValue}>Click</button>
                <h5>Status : {this.props.isFetching
                        ? 'Fetching'
                        : 'Idle'}</h5>
                <Panel items={this.props.results}/> {this.props.total_count
                    ? `Found ${this.props.total_count} matches`
                    : null}
                {this.props.results.length
                    ? <TableDisplay items={this.props.results}/>
                    : null}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.home
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(HomeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);