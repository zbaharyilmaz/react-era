import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const CategoryBar = () => {
  return (
    <FormControl sx={{ width: '100vw', m: 1 }}>
      <RadioGroup
        row
        sx={{ justifyContent: 'center' }}
        name="controlled-radio-buttons-group"
        value=""
        onChange=""
      >
        <FormControlLabel value="" control={<Radio />} label="All" />
        {/* categoriler map edilecek */}
        <FormControlLabel
          key=""
          sx={{ textTransform: 'capitalize' }}
          value=""
          control={<Radio />}
          label=""
        />
        {/* prop ile geçilecek */}
      </RadioGroup>
    </FormControl>
  );
};

export default CategoryBar;