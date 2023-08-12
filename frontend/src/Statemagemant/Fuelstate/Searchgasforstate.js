import React, { createContext, useEffect, useState } from 'react'

const searchfuelgas = createContext();
export const Searchgasforstate = ({children}) => {
    const [petrolsearchsforgas , setpetrolsearchforgas ] = useState('');
    const [navtosearchforgas , setnavtosearchforgas ] = useState('');
    const [gassearchforgas , setgassearchforgas ] = useState('');

    useEffect(() =>{
        fetch('http://localhost:4000/searcgpetrolforgasfuel' ).then((res) => res.json())
        .then((data) =>{
            setpetrolsearchforgas(data)
        })
      }, [])
      // console.log(petrolsearchsforgas)
    
      const [petrolquentityforgas , setpetrolquentityforgas] = useState([])
      //maping data and reduce functionality
      const petrolpriceAsyn = async () =>{
        const petrolmaping = petrolsearchsforgas.map((item) => {
          const subtotal = item.quantity 
          return subtotal;
        })
          const petrolvalue = await petrolmaping.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          });
          return petrolvalue
        }
  //then promas
      const petrolpricecounter=  petrolpriceAsyn().then((result) => {
        setpetrolquentityforgas(result)
        })
        // calculate total price forpetrol
   const [pricepetrolfuelgas , setpricepetrolfuelgas] = useState([]);
   const petrolpriceforgas = async () => {
    const petrolmaping = petrolsearchsforgas.map((item) => {
        const subtotal =  item.price ;

        return subtotal;
      })
        const petrolvalue = await petrolmaping.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
        return petrolvalue
      }
      //then promais
   const petrolpricecounterforfuelgas=  petrolpriceforgas().then((result) => {
    setpricepetrolfuelgas(result);
    })

    //gas fuctionality 
    useEffect(() =>{
        fetch('http://localhost:4000/serachnavatoforgasfuel' ).then((res) => res.json())
        .then((data) =>{
            setnavtosearchforgas(data)
        })
      }, [])
      const [navtofuctionmap , setnavtofuctionmap] = useState('')
      const gaspriceAsyn = async () =>{
        const petrolmaping = navtosearchforgas.map((item) => {
          const subtotal = item.quantity 
          return subtotal;
        })
          const petrolvalue = await petrolmaping.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          });
          return petrolvalue
        }
        const navtopricecounter=  gaspriceAsyn().then((result) => {
            setnavtofuctionmap(result)
         })

         const [navtoReduceprice , setnavtoReduceprice] = useState([]);
   const navtopriceforgas = async () => {
    const petrolmaping = navtosearchforgas.map((item) => {
        const subtotal =  item.price ;

        return subtotal;
      })
        const petrolvalue = await petrolmaping.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
        return petrolvalue
      }
      //then promais
   const navtopricecounterforfuelgas=  navtopriceforgas().then((result) => {
    setnavtoReduceprice(result);
    })
    // console.log(navtofuctionmap)
    useEffect(() =>{
        fetch('http://localhost:4000/searchgasforgasfuel' ).then((res) => res.json())
        .then((data) =>{
            setgassearchforgas(data)
        })
      }, [])
      const [Gasquentitys , setGasquentity] = useState('')
      const GaspriceAsyn = async () =>{
        const Gasmaping = gassearchforgas.map((item) => {
          const subtotal = item.quantity 
          return subtotal;
        })
          const Gasvalue = await Gasmaping.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          });
          return Gasvalue
        }
        const Gaspricecounter=  GaspriceAsyn().then((result) => {
            setGasquentity(result)
         })

         const [GasReduceprice , setGasReduceprice] = useState([]);
          const Gaspriceforgas = async () => {
          const Gasmaping = gassearchforgas.map((item) => {
        const subtotal =  item.price ;

        return subtotal;
      })
        const Gasvalue = await Gasmaping.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
        return Gasvalue
      }
      //then promais
   const Gaspricecounterforfuelgas=  Gaspriceforgas().then((result) => {
    setGasReduceprice(result);
    })

   

  return (
    <searchfuelgas.Provider value={{petrolquentityforgas , pricepetrolfuelgas , navtofuctionmap ,navtoReduceprice ,GasReduceprice , Gasquentitys}}>
        {children}
    </searchfuelgas.Provider>
  )
}

export default searchfuelgas
