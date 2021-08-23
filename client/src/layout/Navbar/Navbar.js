import MenuItems from './MenuItems';
import { withRouter } from 'react-router-dom';
import MenuButton from './MenuButton';

const Navbar = withRouter(({ history }) => (
  <nav>
    <MenuButton history={history} />
    <div className='menu-items-container'>
      <div className='logo'>Logo</div>
      <MenuItems history={history} className="links-container_horizontal" />
    </div>
  </nav>
));

export default Navbar;
