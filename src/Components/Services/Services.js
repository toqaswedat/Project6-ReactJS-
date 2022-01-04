import React from 'react';
import ServiceAll from './ServiceAll';
import './Services.css'

export default function Services() {
    const ServiceArray=[
        {
            id: "0",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfihwl0MAR5XP-_725LEWP9Hr_mkulxkfw509q7kt3OOSitt0P4dMQsBFe9PazleWis60&usqp=CAU",
            title1: "Villa Francisco",
            title2 : "Dead Sea",
            description:"3 master bedrooms - large hall - billiards table - many outdoor sessions, an area equipped with children's toys, the new Al-Joufa area - the Dead Sea Road The size of the pool is 7 * 17. The pool starts from 80 cm and ends with 230 cm. Sterilization on a daily basis and filtering around the clock. Heated pool throughout the stay. 3 master bedrooms - large hall - billiards table - many outdoor sessions An area equipped with",
            price :"180",
        },
        {
            id: "1",
            src:"https://www.noornews.net/wp-content/uploads/2021/07/64556381_2362885673952302_7714480327040696320_n.jpg",
            title1: "Villa Al Aseel",
            title2 : "Al-Joufeh neighborhood villas",
            description:"Swimming pool(6*12)meters with a depth starting from 120 cm to two meters/Children's pool/A garage that accommodates 3 cars/A billiard table (heated) and an external shower and a sitting room overlooking the swimming pool and an American kitchen (as if at home a refrigerator, gas, oven and cooler) 3 bedrooms, one All chalet facilities are air-conditioned",
            price :"130",
        },
        {
            id: "2",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIo3EuF3Pkf47bZGnum1_58H1S4vUt15jmPdbTc-Y306McFT9IyhvpUmTwp95eQ6do_I&usqp=CAU",
            title1: "Villa Amman",
            title2 : "Amman",
            description:"2 farm and chalet for rent in Amman, covered and heated swimming pools at a special price, a spring atmosphere, a pool 10 x 5 sessions, terraces and a view 3 master bedrooms and 2 master rooms (indoor pool with heated) tennis, hexagonal and pentagonal football fields, BBQ waterfalls, Zarb waterfalls, as shown in the pictures. Gear for more Photos via WhatsApp Quiet sessions and a special atmosphere Fully equipped kitchen",
            price :"200",
        }
    ];

    const ServiceAll1 = ServiceArray.map((e)=>{
        return(
            <ServiceAll 
                id={e.id}
                src={e.src}
                title1={e.title1}
                title2={e.title2}
                description={e.description}
                price={e.price}
                />
        );
    });
    return (
        <div>
        <div className="ServicesArr">
        <div className="ElementServicesArrTitle">
        <h2> Service</h2>
        </div>
            <div className='ServiceDiv'>{ServiceAll1} </div>
        </div>
        </div>
    )
}
