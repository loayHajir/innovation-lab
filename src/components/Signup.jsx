import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Style/style.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import jil from '../assets/jil.png'

export default function Signup() {
  const marginBlock = { marginBlock: '15px' }

  return (
    <>
      <Grid>
        <Paper elevation={20} style={{ padding: '30px 60px', width: 600, margin: '50px auto' }}>
          <Grid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#025575', margin: '-60px', height: '40vh' }}>
            {/* <Avatar style={{ background: 'blue' }}>
              <AddCircleIcon />
            </Avatar> */}
            <img src={jil} alt="jil-app" style={{ width: '50%', marginTop: '20px', }} />
            <h2 style={{ color: 'white' }}>GIL Trainings Registration Form </h2>
            <h4 style={{ color: 'white' }}> The survey will take approximately 10 minutes to complete.</h4>
          </Grid>
          <TextField fullWidth type='text' label='First Name English(الاسم الاول بالانجليزي)' placeholder='ادخل إجابتك' style={{ margin: '90px 0 15px 0' }} required />
          <TextField fullWidth type='text' label='Middle Name English(الاسم الاب بالانجليزي)' placeholder='ادخل إجابتك' style={marginBlock} required />
          <TextField fullWidth type='text' label='Last Name English(الكنية بالانجليزي)' placeholder='ادخل إجابتك' style={marginBlock} required />
          <TextField fullWidth type='text' label='First Name Arabic(الاسم الاول بالعربي)' placeholder='ادخل إجابتك' style={marginBlock} required />
          <TextField fullWidth type='text' label='Midlle Name Arabic(الاسم الاب بالعربي)' placeholder='ادخل إجابتك' style={marginBlock} required />
          <TextField fullWidth type='text' label='last Name Arabic(الكنية بالعربي)' placeholder='ادخل إجابتك' style={marginBlock} required />
          <TextField fullWidth type='text' label='Mother Name English(الاسم الام بالانجليزي)' placeholder='ادخل إجابتك' style={marginBlock} required />
          <TextField fullWidth type='text' label='Mother Name Arabic(الاسم الام بالعربي)' placeholder='ادخل إجابتك' style={marginBlock} required />
          <TextField fullWidth type='text' label='Please indicate your year of birth الرجاء تحديد سنة ميلادك' placeholder='يجب ان يكون الرقم بين 1900 و 2020 ' style={marginBlock} required />
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} required>
              <InputLabel id="demo-simple-select-label" >Please indicate your month of birth الرجاء تحديد شهر ميلادك</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select">
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} required>
              <InputLabel id="demo-simple-select-label">Please indicate your day of birth الرجاء تحديد يوم ميلادك</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select">
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={11}>11</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={13}>13</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={15}>15</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={17}>17</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={19}>19</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={21}>21</MenuItem>
                <MenuItem value={22}>22</MenuItem>
                <MenuItem value={23}>23</MenuItem>
                <MenuItem value={24}>24</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={26}>26</MenuItem>
                <MenuItem value={27}>27</MenuItem>
                <MenuItem value={28}>28</MenuItem>
                <MenuItem value={29}>29</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} required>
              <InputLabel id="demo-simple-select-label" >Please Indicate the governorate you live in الرجاء تحديد منطقة اقامتك</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" >
                <MenuItem value={'Akkar'}>Akkar عكار</MenuItem>
                <MenuItem value={'Baalbek-El Hermel'}>Baalbek-El Hermel بعلبك-الهرمل</MenuItem>
                <MenuItem value={'Beirut'}>Beirut بيروت</MenuItem>
                <MenuItem value={'Bekaa'}>Bekaa بقاع</MenuItem>
                <MenuItem value={'El Nabatieh'}>El Nabatieh النبطية</MenuItem>
                <MenuItem value={'Mount Lebanon'}>Mount Lebanon جبل لبنان</MenuItem>
                <MenuItem value={'North'}>North الشمال</MenuItem>
                <MenuItem value={'South'}>South الجنوب</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">What is your gender?  ما هو جنسك؟</FormLabel>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" style={marginBlock} required>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth type='email' label='Please indicate your email address  يرجى ادخال البريد الالكتروني' placeholder='أدخل إجابتك' style={marginBlock} required />
          <TextField fullWidth type='tel' label='Please indicate your phone number  يرجى ادخال رقم الهاتف الجوال' placeholder='يجب ان تكون القيمة رقماً' style={marginBlock} required />

          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} required>
              <InputLabel id="demo-simple-select-label" >Do you have a disability?   هل لديك إعاقة؟</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" >
                <MenuItem value={'yes'}>Yes</MenuItem>
                <MenuItem value={'no'}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} >
              <InputLabel id="demo-simple-select-label" >Please specify information on your disability  يرجى تحديد معلومات عن إعاقتك</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" >
                <MenuItem value={'walking'}>Difficulty walking مشاكل في المشي</MenuItem>
                <MenuItem value={'seeing'}>Difficulty seeing مشاكل في النظر</MenuItem>
                <MenuItem value={'hearing'}>Difficulty hearing مشاكل في السمع</MenuItem>
                <MenuItem value={'speaking'}>Difficulty speaking مشاكل في النطق</MenuItem>
                <MenuItem value={'Intellectual'}>Intellectual مشاكل فكرية</MenuItem>
                <MenuItem value={'Others'}>Others أخرى</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} required>
              <InputLabel id="demo-simple-select-label" >What is your nationality?  ما هي جنسيتك؟</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" >
                <MenuItem value={'PRL'}>PRL Palestine refugee in Lebanon لاجئ فلسطيني في لبنان</MenuItem>
                <MenuItem value={'PRS'}>PRS Palestine refugee from Syria لاجئ فلسطيني من سوريا</MenuItem>
                <MenuItem value={'Lebanese'}>Lebanese لبناني</MenuItem>
                <MenuItem value={'Syrian'}>Syrian سوري</MenuItem>
                <MenuItem value={'Other'}>Other آخر</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} required>
              <InputLabel id="demo-simple-select-label" >Which employment status qualifies for you? ما هي حالة التوظيف المؤهلة لك</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" >
                <MenuItem value={''}>I have not had a job yet ليس لدي عمل حاليا</MenuItem>
                <MenuItem value={''}>Currently unemployed حاليا لا اعمل</MenuItem>
                <MenuItem value={''}>Work in summer only العمل في الصيف فقط</MenuItem>
                <MenuItem value={''}>Currently or previously completed an internship اكملت حاليا او سابقا فترة تدريب</MenuItem>
                <MenuItem value={''}>I am working full-time اعمل دوام كامل</MenuItem>
                <MenuItem value={''}>I am working part-time اعمل دوام جزئي</MenuItem>
                <MenuItem value={''}>Other آخر</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} required>
              <InputLabel id="demo-simple-select-label" >What is your civil status? ما هي حالتك الاجتماعبة ؟</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" >
                <MenuItem value={'Single'}>Single</MenuItem>
                <MenuItem value={'Divorced'}>Divorced</MenuItem>
                <MenuItem value={'Married-without-Kids'}>Married without Kids</MenuItem>
                <MenuItem value={'Married-and-have-Kid'}>Married and have Kid</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Camp or gatherings الرجاء ذكر إسم المخيم أو التجمع الذي تعيش فيه أو إختيار خارج المخيمات</FormLabel>
            <RadioGroup coulmn aria-labelledby="demo-column-radio-buttons-group-label" name="column-radio-buttons-group" style={marginBlock} required>
              <FormControlLabel value="Ein-El-Helwe" control={<Radio />} label="Ein El Helwe Camp عين الحلوة" />
              <FormControlLabel value="Naher-El-Bared" control={<Radio />} label="Naher El Bared Camp نهر البارد" />
              <FormControlLabel value="Beddawi" control={<Radio />} label="Beddawi camp مخيم البداوي" />
              <FormControlLabel value="Burj-Barajneh" control={<Radio />} label="Burj Barajneh Camp برج البراجنة" />
              <FormControlLabel value="Burj-Shemali" control={<Radio />} label="Burj Shemali Camp البرج الشمالي" />
              <FormControlLabel value="Dbayeh" control={<Radio />} label="Dbayeh Camp مخيم ضبية" />
              <FormControlLabel value="El-Buss" control={<Radio />} label="El Buss Camp مخيم البص" />
              <FormControlLabel value="Mar-Elias" control={<Radio />} label="Mar Elias Camp مار الياس" />
              <FormControlLabel value="Mieh-Mieh" control={<Radio />} label="Mieh Mieh Camp مخيم الميه ميه" />
              <FormControlLabel value="Rashidieh" control={<Radio />} label="Rashidieh Camp مخيم الرشيديه" />
              <FormControlLabel value="Wavel" control={<Radio />} label="Wavel Camp مخيم ويفل" />
              <FormControlLabel value="Chatila" control={<Radio />} label="Chatila camp مخيم شاتيلا" />
              <FormControlLabel value="Chatila" control={<Radio />} label="Chatila Camps خارج المخيمات" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth type='text' label='What is your full address? ما هو عنوانك الكامل' placeholder='ادخل إجابتك' style={marginBlock} required />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Are you a STC student? هل أنت حاليا أو كنت سابقا طالب في مركز سبلين للتدريب</FormLabel>
            <RadioGroup coulmn aria-labelledby="demo-column-radio-buttons-group-label" name="column-radio-buttons-group" style={marginBlock} required>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <Box sx={{ minWidth: 120 }} >
            <FormControl fullWidth style={marginBlock} required>
              <InputLabel id="demo-simple-select-label" >Education level المستوى التعليمي</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select">
                <MenuItem value={'Elementary'}>Elementary اساسي</MenuItem>
                <MenuItem value={'Preparatory'}>Preparatory اعدادي</MenuItem>
                <MenuItem value={'Secondary'}>Secondary ثانوي</MenuItem>
                <MenuItem value={'BT'}>Vocational education (BT or Trade) تعليم مهني باكالوريا فنية</MenuItem>
                <MenuItem value={'TS'}>Vocational Education (TS or Semi professional) تعليم مهني امتياز فني</MenuItem>
                <MenuItem value={'Short-term'}>Short-term courses دورة قصيرة الاجل</MenuItem>
                <MenuItem value={'Undergraduate'}>Undergraduate studies (BA/BS/LT) خريج جامعي</MenuItem>
                <MenuItem value={'Graduate'}>Graduate studies دراسات عليا</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField fullWidth type='password' label='Password' placeholder='Password' style={marginBlock} required />
          <TextField fullWidth type='password' label='Confirm Password' placeholder='Confirm Password' style={marginBlock} required />
          <Button type='submit' variant='contained' color='primary' style={marginBlock}>Sgin Up</Button>
        </Paper>
      </Grid >
    </>
  )
}
