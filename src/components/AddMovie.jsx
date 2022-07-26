import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Input from './Forms/Inputs';
import Select from './Forms/Select';
import Textarea from './Forms/Textarea';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.buttonForm = this.buttonForm.bind(this);

    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState(INITIAL_STATE);
  }

  handleTitle() {
    const { title } = this.state;
    return (
      <div>
        <label htmlFor="titleId" data-testid="title-input-label">
          Título
          <input
            id="titleId"
            type="text"
            name="title"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
      </div>
    );
  }

  handleSubtitle() {
    const { subtitle } = this.state;
    return (
      <div>
        <label htmlFor="subtitleId" data-testid="subtitle-input-label">
          Subtítulo
          <input
            id="subtitleId"
            type="text"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }

  handleImagePath() {
    const { imagePath } = this.state;
    return (
      <div>
        <label htmlFor="image-input" data-testid="image-input-label">
          Imagem
          <input
            // id="imageId"
            type="text"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }

  handleRating() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="ratingId" data-testid="rating-input-label">
          Avaliação
          <input
            id="ratingId"
            type="number"
            name="rating"
            value={ rating }
            onChange={ this.handleChange }
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }

  handleTextArea() {
    const { storyline } = this.state;
    return (
      <div>
        <Textarea
          inputLabel="Sinopse"
          textValue={ storyline }
          onChangeText={ this.handleChange }
        />
      </div>
    );
  }

  handleSelect() {
    const { genre } = this.state;
    return (
      <div>
        <Select
          inputLabel="Gênero"
          inputsValue={ genre }
          onChangeSelect={ this.handleChange }
        />
      </div>
    );
  }

  buttonForm() {
    const { onClick } = this.props;
    const { state } = this;
    return (
      <div>
        <button
          type="submit"
          onClick={ (e) => {
            e.preventDefault();
            onClick(state);
            this.handleClick();
          } }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        {this.handleTitle()}
        {this.handleSubtitle()}
        {this.handleImagePath()}
        {this.handleRating()}
        {this.handleTextArea()}
        {this.handleSelect()}
        {this.buttonForm()}
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
