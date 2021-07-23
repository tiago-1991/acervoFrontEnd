import React, { Component } from 'react';
import { Row, Button, Container, Form} from 'react-bootstrap';
import DiscoServicos from '../Servicos/DiscoServicos';

class CreateUpdate extends Component {

    constructor(props){
        super(props);
        this.state={
            id_Disco: this.props.match.params.id,
            nomedoDisco:"",
            artista:"",
            genero:""
        }

        this.changeDiscoHandler = this.changeDiscoHandler.bind(this);
        this.changeArtistaHandler = this.changeArtistaHandler.bind(this);
        this.changeGeneroHandler = this.changeGeneroHandler.bind(this);
        this.salvarDisco = this.salvarDisco.bind(this);
        this.cancelar = this.cancelar.bind(this);
    }

    componentDidMount(){
        console.log(this.state.id_Disco);
        if(this.state.id_Disco === "_add"){
            return false
        }else{
        return DiscoServicos.getDiscoById(this.state.id_Disco).then((res)=>{
            let disco = res.data;
            this.setState({
            nomedoDisco: disco.nomedoDisco,
            artista: disco.artista,
            genero: disco.genero
            });
        });
        }
    }

    salvarDisco(){
        
        let disco = {
            nomedoDisco : this.state.nomedoDisco,
            artista : this.state.artista,
            genero : this.state.genero
        };
        if(this.state.id_Disco ==="_add"){
            disco.id ="";
            DiscoServicos.createDisco(disco).then((res)=>{
                alert(res.data);

            });
        }else{
            disco.id_Disco = this.state.id_Disco;
            DiscoServicos.editDisco(disco).then((res)=>{  
                console.log(res.data)
            });
        }
            
        this.props.history.push("/discos");
            
    }
        
    
    

    updateDisco(id){
        this.props.history.push('/Discos/${id}')
    }

    cadastrar(){
        this.props.history.push('/Discos/${id}')
    }
    changeDiscoHandler (event){
        this.setState({nomedoDisco : event.target.value})
    }

    changeArtistaHandler (event){
        this.setState({artista : event.target.value})
    }

    changeGeneroHandler (event){
        this.setState({genero : event.target.value})
    }

    cancelar(){
        this.props.history.push("/discos");
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <h1>Cadastro de Discos</h1>
                </Row>

                <Form>
                    <Form.Group controlId="formDisco">
                        <Form.Control type="text" placeholder="Disco" value={this.state.nomedoDisco} onChange={this.changeDiscoHandler}/>
                        <Form.Text className="text-muted">
                            Digite o Nome do Disco.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formArtista">
                        <Form.Control type="text" placeholder="Artista" value={this.state.artista} onChange={this.changeArtistaHandler}/>
                        <Form.Text className="text-muted">
                            Digite o Nome do Artista.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formGenero">
                        <Form.Control type="text" placeholder="Genero" value={this.state.genero} onChange={this.changeGeneroHandler}/>
                        <Form.Text className="text-muted">
                            Digite o Gênero do Disco.
                        </Form.Text>
                    </Form.Group>
                    <Row className="float-end">
                        <Button variant="success" style={{margin:"10px 0 px 10px 0px"}} className="btnSubmit"
                    onClick={this.salvarDisco}>
                        Inserir
                        </Button>
                        <Button variant="warning" style={{margin:"10px"}} className="btnSubmit"
                    onClick={this.cancelar.bind(this)}>
                        Cancelar
                        </Button>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default CreateUpdate;