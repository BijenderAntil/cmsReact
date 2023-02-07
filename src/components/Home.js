import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import './style.css';
function Home() {
const [movies, setMovies] = useState({});
const [data] = useState(["name","age", "amit","rahul","aman","sagar","sanjeeve","rajiv"]);
const [deleveryData, seDeleveryDat] = useState({});
useEffect(()=>{
    const moviesData = [];
    for(let i=1; i<=20;i++){
        moviesData.push({'name': `First Movie ${i}`, 'rating':3, 'released_date':`${i}-02-2023`});
    }
    setMovies(moviesData);
}, [null])
const handleClickOutside = (event) => {
  console.log("sds");
 // if (ref.current && !ref.current.contains(event.target)) {
    seDeleveryDat({});
  //}
};
useEffect(() => {
  console.log(deleveryData.length);
  document.addEventListener('click', handleClickOutside, true);
  return () => {
      document.removeEventListener('click', handleClickOutside, true);
  };
}, [deleveryData.length]);
  const handleOnPress=(e)=>{
    const {name, value} = e.target;
    let regex = new RegExp(value, 'i'); 	// Create a regex object (a constructor).
    const fData = data.filter(r=>regex.test(r));
    fData ? seDeleveryDat(data.filter(r=>regex.test(r))): seDeleveryDat(["No Records"]);
  }
  return (
    <Container>
        {movies && Object.entries(movies).map(([k, row])=>{
          return (<Row key={k}>
                <Col>{row.name}</Col>
                <Col xs={6}>
                    *****</Col>
                <Col>{row.released_date}</Col>
              </Row>)
        })}
    
    <Row>
      <Col>1 of 3</Col>
      <Col xs={5}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row>
    <form>

    <div>
      <input type='text' name='name' onKeyUp={handleOnPress}/>value:{deleveryData.length}
      {deleveryData.length && (
      <ul className='autosuggestUl'>
        {deleveryData && deleveryData.map((r)=><li key={r}>{r}</li>)} 
        </ul>)}
        
      </div>
    </form>
  </Container>
  );
}

export default Home;