import React, { Component } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import DiscoServicos from '../Servicos/DiscoServicos';

class ListaDiscos extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            discos:[]
        }

        this.voltar = this.voltar.bind(this);
        this.editar = this.editar.bind(this);
        this.excluir = this.excluir.bind(this);
        this.novoDisco = this.novoDisco.bind(this);
    }

    componentDidMount(){
        this.getDiscos();
    }

    getDiscos(){
        DiscoServicos.getDiscos().then(
            (resposta) =>
                this.setState({discos:resposta.data})
            );
        
    }
    
    voltar(){
        this.props.history.push("/");
    }

    excluir(id_Disco){
        DiscoServicos.deleteDisco(id_Disco).then(
        res => {alert(res.data)      
        this.getDiscos();
        }); 
    }

    editar(id){
        this.props.history.push("/novoDisco/"+id)
    }

    novoDisco(){
        this.props.history.push("/novoDisco/_add")
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Acervo</h1>
                </Row>
                <Row>
                <Button variant="link" onClick={this.voltar}>Voltar</Button> 
                </Row>
                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    Nome do Disco
                                </th>
                                <th>
                                    Artista
                                </th>
                                <th>
                                    Gênero
                                </th>
                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.discos.map(
                                    disco =>
                                        <tr key={disco.id_disco}>
                                            <td>
                                                {disco.nomedoDisco}
                                            </td>                                        
                                            <td>
                                                {disco.artista}
                                            </td>
                                            <td>
                                                {disco.genero} 
                                            </td>
                                            <td>
                                            <Button variant="warning" onClick={() =>this.editar(disco.id_disco)}>Editar</Button> 
                                            <Button variant="danger" onClick={() =>this.excluir(disco.id_disco)}>Excluir</Button> 
                                            </td>
                                        </tr>
                                    
                                )
                            }

                        </tbody>
                    </Table>
                </Row>
                <Row>
                <Col>    
                    <Button className="float-start" variant="link" onClick={this.voltar}>Voltar</Button> 
                </Col>
                <Col>
                    <Button className="float-end" variant="secondary" onClick={this.novoDisco}>Novo Disco</Button> 
                </Col>
                </Row>
                
            </Container>
        );
    }
}

export default ListaDiscos;