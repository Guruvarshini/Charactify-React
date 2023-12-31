import React,{useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
function App(){
    const [character,setCharacter]=useState([]);
  const [charac,setCharac]=useState({id:-1,charac:"",mydesp:""});
  function added(event){
    setCharac((prev,index)=>{
      if(event.target.name==="title"){
        return {id:index,charac:event.target.value,mydesp:prev.mydesp};
      }
      else{
        return {id:index,charac:prev.charac,mydesp:event.target.value};
      }
    });
  }
  function arred(event){
    setCharacter([
      ...character,
      charac
    ]);
    event.preventDefault();
    setCharac({id:-1,charac:"",mydesp:""});
  }
  function deleted(ind){
    setCharacter((prev)=>{
      return prev.filter((value,index)=>{
        return index!==ind;
      });
    })
  }
    return <div>
    <Header />
    <CreateArea create={added} title={charac.charac} descrip={charac.mydesp} arr={arred} val={charac}/>
    <div class="notes-container">
    {character.map((inf,index) => (
          <Note
            key={index}
            id={index}
            title={inf.charac}
            des={inf.mydesp}
            del={deleted}
          />
        ))}
</div>
    <Footer />
    </div>;
}
export default App;