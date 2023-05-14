import './tarif.css'

function Tariff() {
  return (
  <div className='tariffs'>
    <div className='tar' id='tar1'>
    <div className='tar1'>Безлимитный 300</div>
    <div className='tar2'>300 руб./мес.</div>
    <div className='tar3'>До 10 Мбит/с.
    Объем включенного трафика неограничен.</div>  
    </div>
    <div className='tar' id='tar2'>
    <div className='tar1'>Безлимитный 450</div>
    <div className='tar2'>450 руб./мес.</div>
    <div className='tar3'>До 50 Мбит/с.
    Объем включенного трафика неограничен.</div>  
    </div>
    <div className='tar' id='tar3'>
    <div className='tar1'>Безлимитный 550</div>
    <div className='tar2'>550 руб./мес.</div>
    <div className='tar3'>До 100 Мбит/с.
    Объем включенного трафика неограничен.</div>  
    </div>
    <div className='tar' id='tar4'>    
    <div className='tar1'>Безлимитный 1000</div>
    <div className='tar2'>1000 руб./мес.</div>
    <div className='tar3'>До 200 Мбит/с.
    Объем включенного трафика неограничен.</div>  
    </div>
  </div>
  );
}

export default Tariff;
