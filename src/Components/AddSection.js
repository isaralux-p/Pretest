import React,{useState} from 'react'
//Bootstrap Section
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const AddSection = (props) => {
    const [state, setstate] = useState(
        {trackingNumber: '',
         parcel: '', 
         amount: ''});
    //function Section
    const handleChange = (event) =>{
        const { id, value } = event.target;
        console.log(event.target);
        setstate(prevData => {
          return {
            ...prevData,
            [id]: value
          };
        });
    } 
    const handleSubmit = (event) =>{
        alert('A tracking ' +state.trackingNumber+ " " +state.parcel+" "+state.amount+' was submitted: ');
        props.AddItem(state.trackingNumber, state.parcel, state.amount);
        setstate(() => {
            return {
                trackingNumber: '',
                parcel: '', 
                amount: ''
            };
          });
          event.preventDefault();
    } 
    //-----------------------------------------------------------------------------//
    const form = 
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="trackingNumber" >
      <Form.Label>Tracking Number</Form.Label>
      <Form.Control 
         type="text" 
         placeholder="XXXX-XXXX-XXXX" 
         onChange={handleChange} 
         value={state.trackingNumber} 
         required
       />
    </Form.Group>
    <Form.Group controlId="parcel">
        <Form.Label>Parcel Type</Form.Label>
        <Form.Control 
            as="select" 
            onChange={handleChange} 
            custom value={state.parcel} 
            required
        >
        <option hidden value="">Please Select</option>
        <option value="Normal" >Normal</option>
        <option value="Carton"> Carton</option>
        <option value="Frozen" >Frozen</option>
        </Form.Control>
    </Form.Group>
    <Form.Group controlId="amount">
      <Form.Label>Amount</Form.Label>
      <Form.Control 
            type="text" 
            onChange={handleChange} 
            value={state.amount} 
            required/>
    </Form.Group>
    <Button variant="primary" size="lg" block type="submit">
    Add to Scanned List --{`>`}
    </Button>
  </Form>
   //-----------------------------------------------------------------------------//
    return (
        <div>
           {form}
        </div>
    )
}

export default AddSection
