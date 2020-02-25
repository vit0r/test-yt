import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Searchbar extends React.Component {
    state = {
        term: ''
    }
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="search-video">
                <Row className="justify-content-md-center">
                    <Col sm="3"><h3 className="search-video--title"><i className="fa fa-caret-right"></i> Buscar por palavra chave</h3></Col>
                    <Col sm="5">
                        <Form.Control className="search-video--field" type="text" onChange={this.handleChange} value={this.state.term} placeholder="Palavras chave" />
                    </Col>
                    <Col sm="1">
                        <Button onClick={this.handleSubmit}><i className="fa fa-search"></i></Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}
export default Searchbar