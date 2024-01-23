import React , {useState , useEffect } from 'react';
import CrossBTn from '../crossBtn/CrossBTn';
import './filterSortDiv.css' ;

export default function FilterSortDiv({ handleFilter , hideAll }) {

  const [ showDiv , setShowDiv ] = useState(' -100%');
    
  useEffect(() => {
    return () => {
      setShowDiv('0');
    };
  }, []);

  const handleAccordianDisplay =(e)=>{

      let accordianItem = e.currentTarget.closest('.accordianItem');
      let accordianBtn = accordianItem.querySelector('.accordianBtn');
      let accordianBody = accordianItem.querySelector('.accordianBody');

      if(accordianBody.style.display === 'none' || accordianBody.style.display.length === 0){
        accordianBody.style.display = "flex";
        accordianBtn.style.transform= 'rotate(180deg)';
        accordianBtn.innerHTML = '-';
      }else{
        accordianBody.style.display = "none";
        accordianBtn.style.transform= 'rotate(-180deg)';
        accordianBtn.innerHTML = '+';
      }      
  }

  const [sortFemale, setSortFemale] = useState(false);
  const [sortMale, setSortMale] = useState(false);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10000);
  const [bestSelling, setBestSelling] = useState(false);
  const [priceL2H, setPriceL2H] = useState(false);
  const [priceH2L, setPriceH2L] = useState(false);
  const [dateO2N, setDateO2N] = useState(false);
  const [dateN2O, setDateN2O] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    
    if (id === "minRange") {
      setMinVal(parseInt(value, 10));
    } else if (id === "maxRange") {
      setMaxVal(parseInt(value, 10));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter({ sortFemale , sortMale , minVal, maxVal , bestSelling , priceL2H , priceH2L , dateO2N , dateN2O});
  };

  return (
    <div className="regularBg regularA sideMenu" style={{left : `${showDiv}`, zIndex : '26'}}>  
        <CrossBTn title="Filter"  onClose={hideAll} />     
        <form className='sideMenuBody filterForm'  onSubmit={handleSubmit} >

        <div className='accordianItem'>
          <div className='accordianBtnDiv' onClick={(e)=>handleAccordianDisplay(e)}>
            <p className='myLabels'>FILTER BY CATAGORY</p>
            <div>
              <span className='accordianBtn'>+</span>
            </div>
          </div>
          
          <div className='accordianBody'>
            <span>
              <input type="checkbox" checked={sortFemale} id="sortFemale" onChange={(e)=>setSortFemale(e.target.checked)}/>
              <label htmlFor="sortFemale">Female</label>
            </span>
            <span>
              <input type="checkbox" checked={sortMale} id="sortMale" onChange={(e)=>setSortMale(e.target.checked)}/>
              <label htmlFor="sortMale">Male</label>
            </span>
          </div>
        </div>
      
        <div className='accordianItem'>
          <div className='accordianBtnDiv' onClick={(e)=>handleAccordianDisplay(e)}>
            <p className='myLabels'>FILTER BY PRICE</p>
            <div>
              <span className='accordianBtn'>+</span>
            </div>
          </div>

          <div  className='accordianBody'>
            <span className='filterRangeBar'>
              <input type="range" min="0" max="5000" value={minVal} className="rangeInput" id="minRange" onChange={(e)=>handleChange(e)} />
              <input type="range" min="5000" max="10000" value={maxVal} className="rangeInput" id="maxRange" onChange={(e)=>handleChange(e)} />
            </span>
            
            <p>
            Price :
              <span> {minVal} </span>
              -
              <span> {maxVal} </span>
            </p>

          </div>
        </div>
      
        <div className='accordianItem'>
          <div className='accordianBtnDiv' onClick={(e)=>handleAccordianDisplay(e)}>
            <p className='myLabels'>SORT BY</p>
            <div>
              <span className='accordianBtn'>+</span>
            </div>
          </div>
          
          <div  className='accordianBody'>
            <span>
              <input type="checkbox" checked={bestSelling} name="" id="bestSelling" onChange={(e)=>setBestSelling(e.target.checked)} />
              <label htmlFor="bestSelling">Best selling</label>
            </span>
            
            <span>
              <input type="checkbox" checked={priceL2H} name="" id="priceL2H"  onChange={(e)=>setPriceL2H(e.target.checked)}/>
              <label htmlFor="priceL2H">Price , low to high</label>
            </span>

            <span>
              <input type="checkbox" checked={priceH2L} name="" id="priceH2L" onChange={(e)=>setPriceH2L(e.target.checked)}/>
              <label htmlFor="priceH2L">Price , high to low</label>
            </span>

            <span>
              <input type="checkbox" checked={dateO2N} name="" id="dateO2N"  onChange={(e)=>setDateO2N(e.target.checked)}/>
              <label htmlFor="dateO2N">Date , old to new</label>
            </span>

            <span>
              <input type="checkbox" checked={dateN2O} name="" id="dateN2O"  onChange={(e)=>setDateN2O(e.target.checked)}/>
              <label htmlFor="dateN2O">Date , new to old</label>
            </span>

          </div>
        </div>

        <button className='highLightedBtn' type='submit'>Filter</button>

        </form>
    </div>  

  )
}
