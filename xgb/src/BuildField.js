import React from 'react'

export const BuildField = ({
  title,
  value,
  handleChange,
  name
}) => {
  const handleInputChange = e => {
    handleChange(e.target.name, e.target.value);
  };

		return(
			<>
				<h3>{title}</h3>
          		<input type="text" name={name} value={value} onChange={handleInputChange}
/>
			</>
		);
}