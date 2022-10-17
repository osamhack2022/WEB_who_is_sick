import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import memb from '../../data/resultlist.json';
import styles from './vtab.module.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {

  const [value, setValue] = React.useState(0);

  function mapFuncion(data, indexs) {
    return (
      <TabPanel key={data.sn} value={value} index={indexs} className={styles.pan}>
        <div>
          {data.Classes+" "+data.name}
          <br/>
          {" 날짜: "+data.day+" 진료과: "+data.hospital}
        </div>
      
       <div className={styles.boxbox}>
        {data.inter}
        <br/><br/><br/><br/><br/><br/>
       </div>
      

       <div className={styles.up}/>

       <div className={styles.outer}>
        {data.ok&&<div className={styles.okk}>진료 완료</div>}
        {!data.ok&&<div className={styles.oran}>진료 중</div>}        
       </div>

      </TabPanel>
    );
  }
  function maptab(data, indexs) {
    return (
      <Tab label={data.Classes+" "+data.name} {...a11yProps(indexs)} />
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 , width:"100%"}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {memb.member.map(maptab)}

      </Tabs>

      {memb.member.map(mapFuncion)}
        
  </Box>
  );
}