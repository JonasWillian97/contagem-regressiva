import Title from './components/Title';
import Contador from './components/Contador';
import NewYear from './assets/newYear.jpg'
import './App.css';
import useContdown from './components/hooks/useContdown';

function App() {

  const [day, hour, minute, second] =useContdown('Jan 1, 2023 00:00:00')
  return (
    <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
    <div className='container'>
      <Title title='Contagem Regressiva para 2023' />
      <div className='contador'>
        <Contador title='Dias' number={day} />
        <Contador title='Horas' number={hour} />
        <Contador title='Minutos' number={minute} />
        <Contador title='Segundos' number={second} />
      </div>

    </div>
    </div>
  );
}

export default App;
