import * as React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterComponent from '../product/filter';

export default function AccordionUsage(props:any) {
    const {categories,loading,setSelectedCategories,setFilteredData,setSelectedOption} = props
  return (
    <div style={{
        background:'black',
        color:'white',
        border:'1px solid white'
    }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Filter
        </AccordionSummary>
        <AccordionDetails>
        <FilterComponent
          categories={categories}
          loading={loading}
          setSelectedCategories={setSelectedCategories}
          setFilteredData={setFilteredData}
          setSelectedOption={setSelectedOption}
        />
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
