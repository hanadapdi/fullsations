import React, { createContext, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
const fuelcontex = createContext();
export const Fuelstate = ({children}) => {
    const [category , setcategory] =useState('');
    const [quentity , setquentity] = useState(Number);
    const [ dates , setdates] = useState();
    const [price , setprice] = useState(Number);
    const [fuelprice , setfuelprice] = useState([]);
    const [getallbuymentfuelprice , setgetallbuymentfuelprice] = useState([]);
    const [getallfuelgas , setgetallfuelgas] = useState([]);
    const [searchpetrol , setsearchpetrol] = useState([]);
    const [searchnavato , setsearchnavato] = useState([]);
    const [searchGas , setsearchGas] = useState([]);
    const [totalgasbuyment , settotalgasbuyment] = useState(0);
    const [buymentcus , setbuymentcus] = useState(0);

    const [salary , setsalary] =useState([])
    const [emplooyesalary , setemplooyesalary] = useState([]);
    const [Loand , setloand] = useState([]);
    // mushaharka shaqlaha
    useEffect(() =>{
      fetch('http://localhost:4000/getallSalryEmplooyes' ).then((res) => res.json())
      .then((data) =>{
        setemplooyesalary(data)
      })
    }, [])
    



    // buymentcus
    // totalgasbuyment
      //parts is searching gas customers
      const [petrolgascustomer , setpetrolgascustomer] = useState([])
      const [navtogascustomer , setnavtogascustomer] = useState([])
      const [gascustomergas , setgascustomergas] = useState([])
  
      useEffect(() =>{
        fetch('http://localhost:4000/searchcustomerpetrol' ).then((res) => res.json())
        .then((data) =>{
          setpetrolgascustomer(data)
        })
      },[])
  
      const [petrolquentitycus , setpetrolquentitycus] = useState([])
      const petrolcus = async () =>{
        const petrolmaping = petrolgascustomer.map((item) => {
          const subtotal = item.GasQuantity;
          return  subtotal;
        })
          const petrolvalue = await petrolmaping.reduce((acc, cur) => acc + cur,)
          return petrolvalue
        }
  
        const petrolcountercusomers=  petrolcus().then((result) => {
          setpetrolquentitycus(result)
        })
        // console.log(petrolquentitycus)
  
      useEffect(() =>{
        fetch('http://localhost:4000/searchcustomernavto' ).then((res) => res.json())
        .then((data) =>{
            setnavtogascustomer(data)
        })
      },[])
      const [navtoquentitycus , setnavtoquentitycus] = useState([])
      const navtocus = async () =>{
        const navtomaping = navtogascustomer.map((item) => {
          const subtotal = item.GasQuantity;
          return subtotal;
        })
          
        const navtovalue = await navtomaping.reduce((acc, cur) => acc + cur)
          return navtovalue
        }
  
        console.log('hanad')
        // const navtocus = async () =>{
        //   const Gastomaping = navtogascustomer.map((item) => {
        //     const subtotal = item.GasQuantity;
        //     return subtotal;
        //   })
        //     const Gastovalue = await Gastomaping.reduce((acc, cur) => acc + cur, 0)
        //     return Gastovalue
        //   }

        const navtocountercus=  navtocus().then((result) => {
          setnavtoquentitycus(result)
        })
  
  
      useEffect(() =>{
        fetch('http://localhost:4000/searchcustomergas' ).then((res) => res.json())
        .then((data) =>{
          setgascustomergas(data)
        })
      },[])
      const [Gastoquentitycus , setGastoquentitycus] = useState([])
      const Gastocus = async () =>{
        const Gastomaping = gascustomergas.map((item) => {
          const subtotal = item.GasQuantity;
          return subtotal;
        })
          const Gastovalue = await Gastomaping.reduce((acc, cur) => acc + cur, 0)
          return Gastovalue
        }
  
        const Gastocountercus=  Gastocus().then((result) => {
          setGastoquentitycus(result)
          console.log(result)
        })
  
  
    //exchange the current state with the
    const [Exchangevalue , setExchangevalue] =useState([]);
    useEffect(() =>{
      fetch('http://localhost:4000/getexchange' ).then((res) => res.json())
      .then((data) =>{
        setExchangevalue(data)
      })
    }, [])


    const Exchange = async () =>{
      const Exmaping = await Exchangevalue.map((item) => {
        const subtotal = item.Cashmony;
        return subtotal;
      })
      const ExReduce = await Exmaping.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
       return  ExReduce
      }

      const [cash , setcash] = useState(Number)
      const Excounter=  Exchange().then((result) => {
      setcash(result)
      })
  //  console.log(cash);
    // petrollprice
    //xogta amahda loan
    useEffect(() =>{
      fetch('http://localhost:4000/loandget' ).then((res) => res.json())
      .then((data) =>{
        setloand(data)
      })
    }, [])
    // loan map
    const LTSLoand = Loand.map(item => item.quantity);
    const LoandLTAsy = async (Loand) =>{
      const data = await Loand
      const resLT = data.reduce((accumulator ,  currentValue)=>{
        return accumulator + currentValue
      });
      return resLT
    }
    const [LoandLT , setLoandLT] =useState(Number);
    const resLonad = LoandLTAsy(LTSLoand).then(res => res).then(data => {
      setLoandLT(data);
    })
    // loan price
    const priceLoand = Loand.map(item => item.price);
    const LoandpriceLTAsy = async (Loandprice) =>{
      const data = await Loandprice
      const resprice = data.reduce((accumulator ,  currentValue)=>{
        return accumulator + currentValue
      });
      return resprice
    }
    const [Loandpr , setLoandpr] =useState(Number);
    const resLonadpr = LoandpriceLTAsy(priceLoand).then(res => res).then(data => {
      setLoandpr(data);
    })
    useEffect(() =>{
      fetch('http://localhost:4000/getallSalrys' ).then((res) => res.json())
      .then((data) =>{
        setsalary(data)
      })
    }, [])
    useEffect(() =>{
      fetch('http://localhost:4000/getfuelprice' ).then((res) => res.json())
      .then((data) =>{
        setfuelprice(data)
      })
    }, [])

    // waa lacagta la siinayay petrol oo lasoosaray
    const [petrolpricechange , setpetrolpricechange] = useState([])
    useEffect(() =>{
      fetch('http://localhost:4000/pricepetrolsearch/api' ).then((res) => res.json())
      .then((data) =>{
        setpetrolpricechange(data)
      })
    }, [])
    // waa lacagta la siinayay petrol oo maping gareyay
    const petprice = petrolpricechange.map(item => item.price);

    
    const petpriceAsy = async (petprice) =>{
      const data = await petprice
      const resprice = data.reduce((accumulator ,  currentValue)=>{
        return accumulator + currentValue
      });
      return resprice
    }
        // waa lacagta la siinayay petrol oo lasoosaray
    const [pprice , setpprice] =useState(Number);
    const res = petpriceAsy(petprice).then(res => res).then(data => {
      setpprice(data);
    })


    // waa lacagta la siinayay navto oo lasoosaray
    const [navtopricechange , setnavtopricechange] = useState([])
    useEffect(() =>{
      fetch('http://localhost:4000/pricenavtosearch/api' ).then((res) => res.json())
      .then((data) =>{
        setnavtopricechange(data)
      })
    }, [])
    // waa lacagta la siinayay navto oo maping gareyay
    const navprice = navtopricechange.map(item => item.price);
    const navAsy = async (navprice) =>{
      const data = await navprice
      const resprice = data.reduce((accumulator ,  currentValue)=>{
        return accumulator + currentValue
      });
      return resprice
    }
   // waa lacagta la siinayay navto oo lasoosaray
    const [nprice , setnprice] =useState(Number);
    const resnav = navAsy(navprice).then(res => res).then(data => {
      setnprice(data);
    })

    // waa lacagta la siinayay gas oo lasoosaray
    const [gaspricecgange , setgaspricecgange] = useState([])
    useEffect(() =>{
      fetch('http://localhost:4000/pricegassearch/api' ).then((res) => res.json())
      .then((data) =>{
        setgaspricecgange(data)
      })
    }, [])
    // waa lacagta la siinayay gas oo maping gareyay
    const gasprice = gaspricecgange.map(item => item.price);
    const gasAsy = async (gasprice) =>{
      const data = await gasprice
      const resprice = data.reduce((accumulator ,  currentValue)=>{
        return accumulator + currentValue
      });
      return resprice
    }
     // waa lacagta la siinayay gas oo lasoosaray
    const [gprice , setgprice] =useState(Number);
    const resgas = gasAsy(gasprice).then(res => res).then(data => {
      setgprice(data);
    })
 



    useEffect(() =>{
      fetch('http://localhost:4000/getbuymentgasprice' ).then((res) => res.json())
      .then((data) =>{
        setgetallbuymentfuelprice(data)
        //this is gas buyments 
      })
    }, [])

 
      // const data = [
      //   {name : 'kabo' , type : 'clothes', price :20 , quentity : 3},
      //   {name : 'surwaal' , type : 'clothes', price :14 , quentity : 5},
      //   {name : 'mobile' , type : 'electric', price :200 , quentity : 2},
      // ]

      // const getallitem = data.map((item , i) =>{
      //   const items = item;
      //   const subtotal = item.price * item.quentity;
      //   return subtotal
      // })


      // const total = getallitem.reduce((accumulator ,  currentValue)=>{
      //   return accumulator + currentValue
      // });

          
    const [customerservice, setcustomerservices] = useState([]);

    useEffect(() => {
     fetch('http://localhost:4000/customergetbuyment').then(res => res.json()).then(data =>{
       setcustomerservices(data)
     })
    },[])

    const customer =  customerservice.map((item) =>{
      const  totalo = item.GasQuantity* item.Gasprice
      return totalo/cash
    })

    const getpricessreducecus = async (customer) =>{
      //   //reduce() method to calculate the sum of all the elements of an array:
        try {
          const totalgasbuyment = await customer.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          });
          return totalgasbuyment
        } catch (error) {
          console.log('err customer buyment: ' + error.message)
        }
      }
  
      const totalgaspricepromisecus = getpricessreducecus(customer).then((result) => {
        if(result === undefined) {
          setbuymentcus(0)
        }
        else{
          setbuymentcus(result)
        }
      })
  
      
   // this fuction maping all item price and quantity then calculates
    const productsprice = getallbuymentfuelprice.map((item) => {
      const subtotal = item.quantity * item.price;
      return subtotal/cash ;
    })
  
    // const getallpriceRudece = productsprice.reduce((acc , curv) =>{
    //   return acc + curv
    // })
    // const getallitemWithAsync =  async()=> {
    //   const total =  productsprice.reduce((acc , curv) =>{
    //     return acc + curv
    //   })
    //   return  await total
    // }
  

// this fucation calculates sum of all item price
    const getpricessreduce = async () =>{
    //   //reduce() method to calculate the sum of all the elements of an array:
      try {
        const totalgasbuyment = await productsprice.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
        return totalgasbuyment
      } catch (error) {
        console.log('err')
      }
    }
   


//  waxa aan so celinay data gas priceka
    const totalgaspricepromise = getpricessreduce().then((result) => {
      settotalgasbuyment(result)
    })


// waxaynu qabanayna inuu na tuso cadadkii udanbeyay
const [lastgas , setlastgas] = useState([]);
    useEffect(() =>{
      fetch('http://localhost:4000/allgetfuel' ).then((res) => res.json())
      .then((data) =>{
        setlastgas(data);
      })
    }, [])

    useEffect(() =>{
      fetch('http://localhost:4000/getfuelgaslast' ).then((res) => res.json())
      .then((data) =>{
        setgetallfuelgas(data)
        //gasta lasoo ibsaday 
      })
    }, [])
    const [datafuelgas , setdatafuelgas] = useState([])
    useEffect(() =>{
      fetch('http://localhost:4000/allgetfuels' ).then((res) => res.json())
      .then((data) =>{
        setdatafuelgas(data)
        //gasta lasoo ibsaday 
      })
    }, [])
    const totalpricegasbeforbuy = lastgas.map(item => Number(item.price)).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    // searchitem api

    useEffect(() =>{
      fetch('http://localhost:4000/searchpetrol' ).then((res) => res.json())
      .then((data) =>{
        setsearchpetrol(data)
      })
    }, [])
    const now = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US").format(now);
   


    const [petrolquentity , setpetrolquentity] = useState(0)
    const petrol = async () =>{
      const petrolmaping = searchpetrol.map((item) => {
        const subtotal = item.quantity;
        return subtotal;
      })
        const petrolvalue = await petrolmaping.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
        return petrolvalue
      }

      const petrolcounter=  petrol().then((result) => {
        setpetrolquentity(result)
      })
//this fucntion is list all item price petrol
    const [petrollprice , setpetrollprice] = useState([])
    const petrolpriceAsyn = async () =>{
      try {
        const petrolmaping = searchpetrol.map((item) => {
          const subtotal = item.quantity * item.price;
          const total = subtotal /cash
          return total;
        })
          const petrolvalue = await petrolmaping.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          });
          return petrolvalue
      } catch (error) {
        console.log('error')
      }
      }

    const petrolpricecounter=  petrolpriceAsyn().then((result) => {
      setpetrollprice(result.toFixed(1))
      })
    // console.log(petrollprice)
    
    
    useEffect(() =>{
      fetch('http://localhost:4000/searchnavto' ).then((res) => res.json())
      .then((data) =>{
        setsearchnavato(data)
      })
    }, [])
    const [Navtoquentity , setNavtoquentity] = useState(0)
    const Navto = async () =>{
      const Navtomaping = searchnavato.map((item) => {
        const subtotal = item.quantity;
        return subtotal;
      })
        const petrolvalue = await Navtomaping.reduce((acc, cur) => acc + cur, 0)
        return petrolvalue
      }

    const Navtocounter=  Navto().then((result) => {
      setNavtoquentity(result)
      })
//this fucntion is list all item price petrol
    const [Navtoprice , setNavtoprice] = useState()
    const NavtopriceAsyn = async () =>{
      const Navtomaping = searchnavato.map((item) => {
        const subtotal = item.quantity * item.price;
        const total = subtotal /cash
        return total;
      })
        const petrolvalue = await Navtomaping.reduce((acc, cur) => acc + cur, 0)
        return petrolvalue
      }

    const Navtopricecounter=  NavtopriceAsyn().then((result) => {
      setNavtoprice(result.toFixed(1))
      })

    useEffect(() =>{
      fetch('http://localhost:4000/searchgas' ).then((res) => res.json())
      .then((data) =>{
        setsearchGas(data)
      })
    }, [])
  

    
    const [Gasquentity , setGasquentity] = useState(0)
    const Gas = async () =>{
      const Gasmaping = searchGas.map((item) => {
        const subtotal = item.quantity;
        return subtotal;
      })
        const petrolvalue = await Gasmaping.reduce((acc, cur) => acc + cur, 0)
        return petrolvalue
      }

    const Gascounter=  Gas().then((result) => {
      setGasquentity(result.toFixed(2))
      })
//this fucntion is list all item price petrol
    const [Gasprice , setGasprice] = useState()
    const GaspriceAsyn = async () =>{
      const Gasmaping = searchGas.map((item) => {
        const subtotal = item.quantity * item.price;
        const total = subtotal /cash
        return total;
      })
        const petrolvalue =  Gasmaping.reduce((acc, cur) => acc + cur, 0);
        return await petrolvalue
      }

    const Gaspricecounter=  GaspriceAsyn().then((result) => {
      setGasprice(result.toFixed(1))
      })

      const [Showalert , setShowalert] = useState(false);

      const Alert =({dataproperty}) =>{
        return (
          <div className='fixed top-16 right-10 w-[40%] py-3 px-4 btn2 rounded duration-200 '>
            <div className='flex justify-between items-center'>
            <h1> {dataproperty}</h1>
            <AiOutlineClose className='text-xl' onClick={()=> setShowalert(false)}/>
            </div>
          </div>
        )
      }
  
      const settime = () => setTimeout(() => {
        setShowalert(false)
      }, 3000);

      if(Showalert === true) {
        settime();
      }

      // liiska shaqalaha mushahrka la dabacayo

      const [Esprint , setEsprint] = useState(Number)
      // console.log(salaryTotal + "Salary")
     const EsData = async () =>{
      const  Data = emplooyesalary.map(item => Number(item.Salarys)).reduce((accumulator, currentValue) => { 
        return accumulator + currentValue;});
        return Data;
     }
     const totalSalaryEmplooye = EsData().then(res => {
      setEsprint(res)
     })
     

 
    
     
  return (
    <fuelcontex.Provider value={{fuelprice , getallbuymentfuelprice ,datafuelgas ,getallfuelgas , totalpricegasbeforbuy ,totalgasbuyment , petrolquentity 
    ,petrollprice , Navtoquentity , Navtoprice , Gasprice , Gasquentity ,cash ,pprice , nprice ,gprice ,salary , Loand ,LoandLT , Loandpr
    ,emplooyesalary ,formattedDate ,Showalert , setShowalert , Alert ,settime ,Esprint ,customerservice , navtoquentitycus
    ,Gastoquentitycus ,buymentcus , petrolquentitycus}}>
        {children} 
    </fuelcontex.Provider>
  )
}

export default fuelcontex