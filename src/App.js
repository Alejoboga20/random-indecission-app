import React, { useState } from 'react';
import Header from './components/Header';
import AddOption from './components/AddOption';
import OptionsList from './components/OptionsList';
import Action from './components/Action';
import OptionModal from './components/OptionModal';
import './styles/App.css';

const title = 'Randon Decissions';
const subtitle = 'Put your life in hands of computers';

const App = () => {
  const [option, setOption] = useState('');
  const [options, addOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState('');

  const handleRandomSelection = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    setSelectedOption(option);
  };

  const handleClearSelectedOption = () => setSelectedOption('');

  const handleDeleteOption = (item) => {
    const newArray = options.filter((option) => option !== item);
    addOptions([...newArray]);
  };

  const validateInput = (input) => {
    if (!input) {
      setError('Enter a valid value');
      return;
    } else if (options.indexOf(input) > -1) {
      setError('This Option already exist');
      return;
    }

    addOptions([...options, option]);
    setOption('');
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setError('');
    validateInput(option);
  };

  return (
    <div className='App'>
      <Header title={title} subtitle={subtitle} handleRandomSelection={handleRandomSelection} />
      <Action handleRandomSelection={handleRandomSelection} options={options} />
      <AddOption option={option} setOption={setOption} onSubmitHandler={onSubmitHandler} />
      {error && <p>{error}</p>}
      <OptionsList options={options} handleDeleteOption={handleDeleteOption} />
      <OptionModal
        selectedOption={selectedOption}
        handleClearSelectedOption={handleClearSelectedOption}
      />
    </div>
  );
};

export default App;
