import './style.css';
import myPhoto from './imgInSRC.jpg';


function App() {
  return (
    <div className="App">
      <div className='parent' style={{border:"solid 1px black" , maxWidth:"100vw"}}>
        <h1 className='title red'>ALA EDDINE BENNA</h1>
        <div className='photoInSRC'>
          <img src={myPhoto} alt='imgInSRC' />
        </div>
        <div className='photoInPUB'>
          <img src="/imgInPUB.png" alt='imgInPUB'/>
        </div>
        <div className='vid'>
          <iframe width="100%" height="480" src="https://www.youtube.com/embed/aSp7CyM5LIc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>  
      </div>
    </div>
  );
}

export default App;
