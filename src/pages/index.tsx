import React from 'react';

function formatterSelect() {
  const [formatType, setFormatType] = React.useState('');

  return (
      <label>
        Select Formatter:
        <select name="selectedFormatter">
          <option value="MLA">MLA</option>
          <option value="BibTeX">BibTex</option>
          <option value="yaml">yaml</option>
        </select>
      </label>
  );
}

export default function Home() {
  return (
    <>
      <header>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.min.css" />
      </header>
      <main>
        <div>
          {formatterSelect()}
        </div>
      </main>
    </>
  )
}