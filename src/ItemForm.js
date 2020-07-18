import React from 'react';
import useFields from './hooks/useFields';
import SnackOrBooze from './Api';
import { Card, CardBody, CardTitle, Form, Input, Button} from "reactstrap";

const ItemForm = ({title}) =>{
  const [formData, handleChange, resetForm] = useFields(
    { 
      "id": "",
      "name": "",
      "description": "",
      "recipe": "",
      "serve": ""
    });

    const handleSubmit = e =>{
      e.preventDefault();
      SnackOrBooze.postItem(title, formData);
      resetForm();
    }

  return(
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            Add {title}
          </CardTitle>
            <Form onSubmit={handleSubmit}>
            <Input 
              type="text"
              id="id"
              name="id"
              value={formData.id}
              placeholder="id"
              onChange={handleChange}
            /> <br/>

            <Input 
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="name"
              onChange={handleChange}
            /> <br/>

            <Input 
              type="text"
              id="description"
              name="description"
              value={formData.description}
              placeholder="description"
              onChange={handleChange}
            /> <br/>

            <Input 
              type="text"
              id="recipe"
              name="recipe"
              value={formData.recipe}
              placeholder="recipe"
              onChange={handleChange}
            /> <br/>

            <Input 
              type="text"
              id="serve"
              name="serve"
              value={formData.serve}
              placeholder="serve"
              onChange={handleChange}
            /> <br/>
            <Button >Add item</Button> 
          </Form>
        </CardBody>
      </Card>
    
    </section>
  )
}

export default ItemForm;