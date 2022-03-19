import React from 'react';

import {Card, CardImg,  CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Breadcrumb, BreadcrumbItem, Label, Col, Row  } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Link} from 'react-router-dom';
import {Component} from 'react';


const required = (val) => val && val.length;
const maxLength = (len) => val => !val || (val.length <= len);
const minLength = (len) => val => val && (val.length >= len);




function RenderCampsite({campsite}) {
    return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            
        );
    }
function RenderComments({comments}) {
        if(comments) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(c => <div key={c.id}>{c.text}<br/> -- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</div>)}
                    <br />
                    <CommentForm />
                    
                </div>
            )
        }
    }

    // commentForm class component

    
    
    export  class CommentForm extends Component {
        constructor(props){
            super(props);

            this.state = {
                modal: false,
                author: "",
                text: ""
            };
            this.toggle = this.toggle.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        toggle(){
            this.setState({
                modal: !this.state.modal
            });
        }
        handleSubmit(values) {
            console.log("Current state is: " + JSON.stringify(values));
            alert("Current state is: " + JSON.stringify(values));
            
        }
      render() {
        return (
          <div>
              <Button outline color="secondary" onClick={this.toggle}>
                <i class="fa fa-pencil" aria-hidden="true"> Submit Comment</i>
              </Button>
              
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
       <ModalHeader toggle={this.toggle}>Submit Comment</ModalHeader>
            <ModalBody>
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                    <Label htmlFor="rating" >Rating</Label>
                        <Control.select model='.rating' name="rating"
                            className='form-control'>   
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            
                        </Control.select>
                            <br />
                            <Label htmlFor="firstName" >Your Name</Label>
                            
                                <Control.text model=".firstName" id="firstName" name="firstName"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                    required, 
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".firstName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                    required: 'Required',
                                    minLength: 'Must be at least 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                    }}
                                 />
                                 <br />
                                <Label htmlFor="comment" >Comment</Label>
                                
                                    <Control.textarea model='.comment' id="comment" name="comment"
                                     rows="6"
                                    className='form-control'/>
                                    <br />
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                </LocalForm>
            </ModalBody>
        <ModalFooter>
                        
        </ModalFooter>
    </Modal>

                </div>
                )
            }
            }
            




        function CampsiteInfo(props) {
            if (props.campsite){
                return (
                    <div className='container'>
                    <div className="row">
                        <div className="col">
                                <Breadcrumb>
                                    <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                    <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                                </Breadcrumb>
                                <h2>{props.campsite.name}</h2>
                                <hr />
                        </div>
                    </div>
                        <div className='row'>
                            <RenderCampsite campsite={props.campsite} />
                            <RenderComments comments={props.comments} />
                        </div>
                
                
                
            </div>
          );
      }else {
          return <div />
      }
          
      
    
  }


export default CampsiteInfo