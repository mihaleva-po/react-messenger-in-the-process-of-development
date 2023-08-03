import React from "react";
import Profile from "./Profile";
import {getProfileUser, setUserProfile} from "../../redux/profilePageReducer";
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfileUser(this.props.params.userId);
    }
    render () {
        return(
            <Profile {...this.props}  profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,
    {setUserProfile, getProfileUser
}) (WithUrlDataContainerComponent);
