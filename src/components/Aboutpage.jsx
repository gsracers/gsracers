import React from "react";
import images from "../assets/logo-1.png";
import "../index.css"


function Aboutpage() {
  return (
    <>
      <div className="py-10 w-full h-full roboto-regular ">
        <div className=" w-full overflow-hidden">
          <div className="w-11/12 mx-auto">
            <div className="w-full">
              <h1 className="md:text-6xl text-4xl text-blue-300 font-bold text-center racing-sans-one-regular">
                ABOUT US
              </h1>
              <hr className="bg-blue-900  md:w-1/6 w-1/2 mx-auto border-none my-2 h-1" />
              <p className="text-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, at voluptatem? Ullam similique sequi beatae vitae
                quas, atque nobis, obcaecati incidunt laboriosam facere maxime
                temporibus hic rem molestias odio possimus, laudantium expedita.
                Id libero eum delectus atque quam nihil consequuntur aliquam
                officia, itaque molestias recusandae eaque quo iure amet
                voluptatum. Natus quia velit, incidunt nulla ipsum ad adipisci
                quod! Consequatur nisi nihil reprehenderit reiciendis maiores
                repudiandae? Officiis autem beatae eius optio quaerat labore
                amet atque eaque saepe doloribus quos, inventore qui aliquam eum
                illo nobis, sed ab. Totam suscipit est dignissimos commodi
                culpa, dicta magni ipsa asperiores delectus nulla veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ad voluptatem illum fuga doloribus ratione fugiat doloremque quaerat? Totam laudantium, culpa architecto, vitae perspiciatis hic animi, nesciunt quo maiores ut molestiae blanditiis quam eveniet soluta perferendis porro sed nisi! Explicabo dolorem commodi porro odio autem numquam sequi, non accusamus at blanditiis dicta asperiores, aliquam enim quos error, laudantium natus totam dignissimos dolor earum sunt assumenda saepe. Delectus facilis, laboriosam magnam cum veritatis inventore nam dolores temporibus eveniet at eos dolorum eaque similique deserunt, ad id dolor voluptas neque. Quae quidem laboriosam et eos quia iusto fugit a reiciendis, aliquid, maxime ab. Beatae, quas sapiente. Aspernatur nesciunt, dolore atque nisi rerum maxime assumenda voluptatibus accusantium quo tenetur soluta provident, tempore ad omnis totam esse laborum culpa corrupti! Veniam voluptatibus necessitatibus rem, cupiditate pariatur modi quos fuga amet quia nisi veritatis omnis, mollitia sint praesentium magnam, nihil asperiores! Illo laboriosam, minima magni accusantium odit quidem ut aliquam neque
              </p>
            </div>
            
            
            <div className=" bg-blue-950/10 rounded-2xl my-10 flex gap-3 px-4 py-10">
                 <div className="flex justify-between w-[30rem] h-72 bg-blue-800/10 p-2 items-center">
                 <div className="grid grid-cols-1">
                       <h1 className="text-2xl py-1 capitalize">
                         heading
                       </h1>
                       <ul>
                         <li>l1</li>
                         <li>l2</li>
                         <li>l3 lore</li>
                       </ul>
        
                         </div>
                     <div className="rounded-full bg-white overflow-hidden flex justify-center items-center h-40 w-40 p-3 ">
                       <img src={images} alt="" className=" " />
                     </div>
                 </div>

                 <div className="flex justify-between w-[30rem] h-72 bg-blue-800/10 p-2 items-center">
                 <div className="grid grid-cols-1">
                       <h1 className="text-2xl py-1 capitalize">
                         heading
                       </h1>
                       <ul>
                         <li>l1</li>
                         <li>l2</li>
                         <li>l3 lore</li>
                       </ul>
        
                         </div>
                     <div className="rounded-full bg-white overflow-hidden flex justify-center items-center h-40 w-40 p-3 ">
                       <img src={images} alt="" className=" " />
                     </div>
                 </div>

                 <div className="flex justify-between w-[30rem] h-72 bg-blue-800/10 p-2 items-center">
                 <div className="grid grid-cols-1">
                       <h1 className="text-2xl py-1 capitalize">
                         heading
                       </h1>
                       <ul>
                         <li>l1</li>
                         <li>l2</li>
                         <li>l3 lore</li>
                       </ul>
        
                         </div>
                     <div className="rounded-full bg-white overflow-hidden flex justify-center items-center h-40 w-40 p-3 ">
                       <img src={images} alt="" className=" " />
                     </div>
                 </div>
                 
                    </div> 
              
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
