const log = console.log;
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
var btn , input_date , text , res;
var current_date = new Date();
const load = () => {
  btn = document.getElementById('btn')
  input_date = document.getElementById('d')
  text = document.getElementById('text')
  res = document.getElementById('res')
  btn.addEventListener('click' , () => {
   log('fired');
   input_date.addEventListener("change", () => {res.style.display = 'none'});
  days = dateDiffInDays(input_date.valueAsDate , current_date)
  
  parseDate(days);
  
  })

}


function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}



const parseDate = (days) => {
  log('get')
  day = days;
  _year = (days/365).toFixed(2).toString().split('.');
  second = days*24*60*60;
  year = _year[0];
  year_days = _year[1]*3.6;
  months = day/24;
  weeks = day/7;
  
  log({
    'days' : day ,
    'seconds' : second , 
    'year' : year , 
    'year_days' : year_days ,
    'weeks' : weeks ,
    'months' : months
  })
  
  show({
    'days' : day.toFixed(0) ,
    'seconds' : second.toFixed(0), 
    'year' : year , 
    'year_days' : year_days.toFixed(0),
    'weeks' : weeks.toFixed(0) ,
    'months' : months.toFixed(0)
  })
}

const show = (result) => {
  resyear = document.getElementById('resyear');
  resdays = document.getElementById('resdays');
  reshours = document.getElementById('reshours')
  resyear.innerHTML = `<b>${result.year}</b> year and <b>${result.year_days}</b> days.`;
  resdays.innerHTML = `<ul>
  <li>total days : <b>${result.days}</b></li>
  <li>total weeks : <b>${result.weeks}</b></li>
  <li>total months : <b>${result.months}</b></li>
  </ul>`;
  reshours.innerHTML = `<ul>
  <li>total seconds : <b>${result.seconds}</b></li>
  <li>total minutes : <b>${(result.seconds/60).toFixed(0)}</b></li>
  <li>total hours : <b>${(result.seconds/(60*60)).toFixed(0)}</b></li>
  </ul>`;
  res.style.display = 'block'
}