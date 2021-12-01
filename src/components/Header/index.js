import './index.css'

const url =
  'https://patoliyainfotech.com/wp-content/uploads/2019/10/one-year-of-react-native.png'

const Header = () => (
  <nav className="header-container">
    <img alt="react-pract" src={url} className="assignment-logo" />
    <div className="title-container">
      <h1 className="challenge-title">React Challenge</h1>
    </div>
  </nav>
)

export default Header
