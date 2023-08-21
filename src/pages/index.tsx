import React from 'react';
import theme from '../theme';

function BasicSelect() {
  const [formatType, setFormatType] = React.useState('');

  return (
    <html><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
    <label>
      Select Formatter:
      <select name="selectedFormatter">
        <option value="MLA">MLA</option>
        <option value="BibTeX">BibTex</option>
        <option value="yaml">yaml</option>
      </select>
    </label></html>
  );
}

const IndexPage = () => {
  const age: number = 0;

  return (BasicSelect());
};

export default IndexPage;
