import './App.css';
import {useState} from 'react'
import Lists from './Mock/TrackList.json'
//Component
import PendingSection from './Components/PendingSection'
import ScannedSection from './Components/ScannedSection'
import AddSection from './Components/AddSection'
//bootstrap Section
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [pendingList, setPending]  = useState(Lists.items);
  const [scannedList, setScanned] = useState([]);
  //Function Section
  const AddItem = (id, parcel, amount) =>{
    let tmpItem ;
    for(let i=0;i< pendingList.length;i++){
      if(pendingList[i].trackingNumber === id){
        tmpItem = pendingList[i];
      }
    }
    if(tmpItem.trackingNumber !== undefined){
       tmpItem.scanParcel = parcel;
       tmpItem.scanAmount = amount;
      setScanned(prevItem => {   
        return [...prevItem, tmpItem]
      })
    }
    setPending(prevItem => {
      return prevItem.filter(item => {
        return item.trackingNumber !== id;
      });
    });
  }
 const DeleteItem = (id) =>{
    let deleteItem ;
    for(let i=0;i< scannedList.length;i++){
      if (scannedList[i].trackingNumber === id){
        deleteItem = scannedList[i];
      }
    }
    if(deleteItem.trackingNumber !== undefined){    
      setPending(prevItem => {   
        return [...prevItem, deleteItem]
      })
    }
    setScanned(prevItem => {
      return prevItem.filter(item => {
        return item.trackingNumber !== id;
      });
    });
  }

  return (
    <div className="App">
      <h1 className="header-text">Scan Tracking</h1>
    <Container fluid>
    <Row>
      <Col> 
        <PendingSection 
        pendingList = {pendingList}
        />
      </Col>
      <Col>
        <AddSection 
         AddItem = {AddItem}
         />
      </Col>
      <Col>
        <ScannedSection
        scannedList = {scannedList} 
        onDelete = {DeleteItem}
      />
      </Col>
    </Row>
    </Container>
     
    </div>
  );
}

export default App;
