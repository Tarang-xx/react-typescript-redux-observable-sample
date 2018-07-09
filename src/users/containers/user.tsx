import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import axios from '../axios-user';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import TopFilter from '../components/TopFilter';
import UserDetail from '../components/UserDetail';
import { StoreState } from '../types/index';

class User extends React.Component<any, any> {
    public userId: string;
    public handleClear: any;

    constructor(props: any) {
        super(props);
        this.handleClear = this.handleClearButton.bind(this)
        this.state =
            {
                departmentsList: this.props.departments.map((dep: any) => dep.departmentsName),
                selectedDepName: this.props.departments.map((dep: any) => dep.departmentsName)[0],
                userIds: this.props.departments[0].userId,
                selectedUserId: this.props.departments[0].userId[0]
            };

    }
    componentDidMount() {
        //default user data
        this.props.onFetchUser(this.state.selectedUserId);
    }
    handleDepartmentChange = (event: any) => {
        const ids = this.props.departments.filter((dep: any) => dep.departmentsName === event.target.value)[0].userId;
        this.setState({
            selectedDepName: event.target.value,
            userIds: ids,
            selectedUserId: ids[0]
        });
    };
    handleUserChange = (event: any) => {
        this.setState({ selectedUserId: event.target.value });
    };
    handleClearButton = (event: any) => {
        this.setState({
            departmentsList: this.props.departments.map((dep: any) => dep.departmentsName),
            selectedDepName: this.props.departments.map((dep: any) => dep.departmentsName)[0],
            userIds: this.props.departments[0].userId,
            selectedUserId: this.props.departments[0].userId[0]
        }, () => this.props.onFetchUser(this.state.selectedUserId));

    };
    handleGetDetails = (event: any) => {
        this.props.onFetchUser(this.state.selectedUserId);
    };
    render() {
        let spinner = <Spinner />;
        return (
            <div>
                <TopFilter
                    departmentsList={this.state.departmentsList}
                    handleDepartmentChange={this.handleDepartmentChange}
                    handleUserChange={this.handleUserChange}
                    selectedDepName={this.state.selectedDepName}
                    userIds={this.state.userIds}
                    selectedUserId={this.state.selectedUserId}
                    handleGetDetails={this.handleGetDetails}
                    handleClear={this.handleClear}
                />
                {this.props.isLoading ? spinner : this.props.selectedUser.id && <UserDetail selectedUser={this.props.selectedUser} />}
            </div>
        );
    }
}
const mapStateToProps = (state: StoreState) => {
    return {
        selectedUser: state.selectedUser,
        departments: state.departments,
        users: state.users,
        isLoading: state.isLoading,

    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onFetchUser: (userId: any) => dispatch(actions.getUser(userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(User, axios));