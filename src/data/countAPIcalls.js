const countAPIcalls =()=>{
    let totalCalls = localStorage.getItem('total Api calls');

    if (!totalCalls) {
      totalCalls = 0;
    }

    totalCalls = parseInt(totalCalls) + 1;
    localStorage.setItem('total Api calls', totalCalls);
}

export default countAPIcalls;