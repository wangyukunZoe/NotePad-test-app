import logo from './logo.svg';
import './App.css';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';
import DogShow from './components/DogShow';
import useMousePosition from './hooks/useMousePosition';
import withLoader from './components/withLoader';

// 不建议使用的 react 高级属性  //也很难实现再次请求图片的操作
const DogShowLoader = ({ isLoading, data }) => {
  const style = {
    width: 200
  }
  return (
    <>
      {isLoading ? <p>🐶Loading ... </p>
        : <img src={data.message} alt="dog" style={style} />
      }
    </>
  )
}

function App() {
  // const position = useMousePosition();
  const DogShowWithLoader = withLoader(DogShowLoader, "https://dog.ceo/api/breeds/image/random")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <h1>{position.x}</h1> */}
        {/* <MouseTracker /> */}

        <DogShow />
        <DogShowWithLoader />
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
