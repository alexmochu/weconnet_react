import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions/auth';
import './Header.css';

class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
      const { activeItem } = this.state;
      const { isAuthenticated, logout, currentUserId } = this.props;
      let userId = currentUserId?currentUserId:''; 
      return (
          <Menu fixed='top'>
              <Menu.Item
                  name='home'
                  position='left'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                  href='/'
              >
            weConnect
              </Menu.Item>

              <Menu.Menu position='right'>
                  <Menu.Item
                      name='browse-businesses'
                      color='orange'
                      active={activeItem === 'browse-businesses'}
                      onClick={this.handleItemClick}
                      href='/api/v2/business/all'
                  >
            View businesses
                  </Menu.Item>

                  <Menu.Item
                      name='create-business'
                      color='orange'
                      active={activeItem === 'create-business'}
                      onClick={this.handleItemClick}
                      href='/api/v2/business/all'
                  >
            Create businesses
                  </Menu.Item>
                  <Menu.Item
                      name='review'
                      color='orange'
                      active={activeItem === 'review-businesses'}
                      onClick={this.handleItemClick}
                      href='/review/business'
                  >
            Review business
                  </Menu.Item>
                  <Menu.Item
                      name='my-businesses'
                      color='orange'
                      active={activeItem === 'my-businesses'}
                      onClick={this.handleItemClick}
                      href={`/user/${userId}/businesses`}
                  >
            My businesses
                  </Menu.Item>
                  <Menu.Item
                      name='search-events'
                      color='orange'
                      active={activeItem === 'search-businesses'}
                      onClick={this.handleItemClick}
                      href={'/search/businesses'}
                  >
            Search businesses
                  </Menu.Item>
                  { isAuthenticated?
                      <Menu.Item
                          name='logout'
                          color='orange'
                          onClick={() => logout()}
                      >
            Logout
                      </Menu.Item>
                      :
                      <Menu.Item
                          name='login'
                          color='orange'
                          active={activeItem === 'login'}
                          onClick={this.handleItemClick}
                          href='/api/v2/auth/login'
                      >
            Login
                      </Menu.Item>
                  }
              </Menu.Menu>
          </Menu>
      );
  }
}
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.auth_token,
        currentUserId: state.auth.user.sub
    };
}; 
Header.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    currentUserId: PropTypes.number
};
export default connect(mapStateToProps, { logout: actions.logout })(Header);