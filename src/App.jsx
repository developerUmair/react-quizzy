import Main from './components/Main.jsx';
import Header from './Header.jsx';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className="main">
        <Main />
      </main>
    </div>
  );
};

export default App;
